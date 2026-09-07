"use client";

import { useLayoutEffect, useRef } from "react";

type GrainVariant = "feature";
type Rgb = [number, number, number];

const variants = {
  feature: {
    colors: ["--color-accent-deep", "--color-accent-mid", "--color-accent-bright"],
    focal: [0.74, 0.28],
    radius: 0.78,
    seed: 47,
  },
} as const;

const NOISE_FREQUENCY = 0.0011;
const JITTER_SIZE_PX = 7;
const GRAIN_STRENGTH = 5 / 255;

const vertexShaderSource = `
  attribute vec2 a_position;

  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_pixelRatio;
  uniform vec3 u_colorA;
  uniform vec3 u_colorB;
  uniform vec3 u_colorC;
  uniform vec2 u_focal;
  uniform float u_radius;
  uniform float u_seed;
  uniform float u_noiseFrequency;
  uniform float u_jitterSize;
  uniform float u_grainSize;
  uniform float u_grainStrength;

  float hash(vec2 point) {
    return fract(sin(dot(point, vec2(127.1, 311.7)) + u_seed) * 43758.5453123);
  }

  float valueNoise(vec2 point) {
    vec2 cell = floor(point);
    vec2 local = fract(point);
    local = local * local * (3.0 - 2.0 * local);

    float a = hash(cell);
    float b = hash(cell + vec2(1.0, 0.0));
    float c = hash(cell + vec2(0.0, 1.0));
    float d = hash(cell + vec2(1.0, 1.0));

    return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
  }

  void main() {
    vec2 fragment = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);
    vec2 uv = fragment / u_resolution;
    vec2 screenPoint = fragment / u_pixelRatio;
    vec2 noisePoint = screenPoint * u_noiseFrequency;

    vec2 warp = vec2(
      valueNoise(noisePoint + vec2(u_seed, 0.0)),
      valueNoise(noisePoint + vec2(9.0, 4.0) + u_seed)
    ) - 0.5;
    uv += warp * (u_jitterSize * u_pixelRatio / u_resolution);

    float radial = 1.0 - clamp(distance(uv, u_focal) / u_radius, 0.0, 1.0);
    float field = valueNoise(noisePoint * 1.5 + vec2(20.0 + u_seed)) - 0.5;
    float value = clamp(radial * 0.88 + field * 0.2 + uv.x * 0.1, 0.0, 1.0);
    vec3 color = value < 0.55
      ? mix(u_colorA, u_colorB, value / 0.55)
      : mix(u_colorB, u_colorC, (value - 0.55) / 0.45);

    vec2 grainCell = floor(screenPoint / u_grainSize);
    float grain = (hash(grainCell + vec2(u_seed * 2.0)) - 0.5) * u_grainStrength;
    gl_FragColor = vec4(color + grain, 1.0);
  }
`;

function readColor(property: string): Rgb {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(property)
    .trim()
    .replace("#", "");

  if (value.length !== 6) return [0, 0, 0];

  return [
    Number.parseInt(value.slice(0, 2), 16) / 255,
    Number.parseInt(value.slice(2, 4), 16) / 255,
    Number.parseInt(value.slice(4, 6), 16) / 255,
  ];
}

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export default function GrainCanvas({
  variant,
  className = "",
}: {
  variant: GrainVariant;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const settings = variants[variant];
    let gl: WebGLRenderingContext | null = null;
    let program: WebGLProgram | null = null;
    let positionBuffer: WebGLBuffer | null = null;
    let resizeObserver: ResizeObserver | undefined;
    let visibilityObserver: IntersectionObserver | undefined;
    let resizeFrame: number | undefined;
    let initialized = false;

    const draw = () => {
      if (!gl || !program) return;

      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(2, Math.round(bounds.width * pixelRatio));
      const height = Math.max(2, Math.round(bounds.height * pixelRatio));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      const grainSize = Math.max(1.2, Math.min(2.4, Math.sqrt(
        (window.innerWidth * window.innerHeight) / 420_000,
      )));
      const colors = settings.colors.map(readColor) as [Rgb, Rgb, Rgb];

      gl.viewport(0, 0, width, height);
      gl.useProgram(program);
      gl.uniform2f(gl.getUniformLocation(program, "u_resolution"), width, height);
      gl.uniform1f(gl.getUniformLocation(program, "u_pixelRatio"), pixelRatio);
      gl.uniform3fv(gl.getUniformLocation(program, "u_colorA"), colors[0]);
      gl.uniform3fv(gl.getUniformLocation(program, "u_colorB"), colors[1]);
      gl.uniform3fv(gl.getUniformLocation(program, "u_colorC"), colors[2]);
      gl.uniform2f(gl.getUniformLocation(program, "u_focal"), settings.focal[0], settings.focal[1]);
      gl.uniform1f(gl.getUniformLocation(program, "u_radius"), settings.radius);
      gl.uniform1f(gl.getUniformLocation(program, "u_seed"), settings.seed);
      gl.uniform1f(gl.getUniformLocation(program, "u_noiseFrequency"), NOISE_FREQUENCY);
      gl.uniform1f(gl.getUniformLocation(program, "u_jitterSize"), JITTER_SIZE_PX);
      gl.uniform1f(gl.getUniformLocation(program, "u_grainSize"), grainSize);
      gl.uniform1f(gl.getUniformLocation(program, "u_grainStrength"), GRAIN_STRENGTH);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const initialize = () => {
      if (initialized) return;
      initialized = true;

      gl = canvas.getContext("webgl", {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
      });
      if (!gl) return;

      const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
      if (!vertexShader || !fragmentShader) return;

      program = gl.createProgram();
      if (!program) return;

      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

      positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW,
      );

      const position = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      draw();

      resizeObserver = new ResizeObserver(() => {
        if (resizeFrame !== undefined) cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(draw);
      });
      resizeObserver.observe(canvas);
    };

    if ("IntersectionObserver" in window) {
      visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          initialize();
          visibilityObserver?.disconnect();
        },
        { rootMargin: "800px" },
      );
      visibilityObserver.observe(canvas);
    } else {
      initialize();
    }

    return () => {
      if (resizeFrame !== undefined) cancelAnimationFrame(resizeFrame);
      resizeObserver?.disconnect();
      visibilityObserver?.disconnect();
      if (gl && positionBuffer) gl.deleteBuffer(positionBuffer);
      if (gl && program) gl.deleteProgram(program);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
