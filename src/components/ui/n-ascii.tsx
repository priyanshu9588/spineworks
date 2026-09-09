"use client";

import { useEffect, useRef } from "react";

const DEFAULT_CHARACTERS = " .:-=+*#%@";
const CELL_WIDTH = 9;
const CELL_HEIGHT = 15;
const FLOWER_SNAPSHOT_TIME = 10;

interface AsciiArtProps {
  src?: string;
  generated?: "flowers";
  alt?: string;
  className?: string;
  characters?: string;
  invert?: boolean;
}

interface FlowerSpec {
  x: number;
  y: number;
  radius: number;
  petals: number;
  petalWidth: number;
  petalLength: number;
  rotation: number;
  tone: number;
  layers?: number;
}

const FLOWERS: FlowerSpec[] = [
  { x: -0.01, y: 0.02, radius: 0.095, petals: 14, petalWidth: 0.22, petalLength: 0.68, rotation: 0.1, tone: 72, layers: 2 },
  { x: 0.15, y: 0.31, radius: 0.12, petals: 13, petalWidth: 0.2, petalLength: 0.72, rotation: -0.12, tone: 92 },
  { x: 0.35, y: 0.08, radius: 0.09, petals: 9, petalWidth: 0.32, petalLength: 0.62, rotation: 0.25, tone: 112 },
  { x: 0.61, y: 0.3, radius: 0.15, petals: 8, petalWidth: 0.36, petalLength: 0.66, rotation: -0.08, tone: 54 },
  { x: 0.9, y: 0.03, radius: 0.11, petals: 18, petalWidth: 0.22, petalLength: 0.58, rotation: 0.2, tone: 78, layers: 2 },
  { x: 0.96, y: 0.64, radius: 0.095, petals: 7, petalWidth: 0.38, petalLength: 0.7, rotation: 0.38, tone: 64 },
  { x: 0.75, y: 0.82, radius: 0.1, petals: 16, petalWidth: 0.18, petalLength: 0.72, rotation: 0.12, tone: 118 },
  { x: 0.48, y: 0.76, radius: 0.075, petals: 12, petalWidth: 0.27, petalLength: 0.64, rotation: -0.18, tone: 68, layers: 2 },
  { x: 0.18, y: 0.88, radius: 0.13, petals: 8, petalWidth: 0.36, petalLength: 0.66, rotation: 0.16, tone: 48 },
  { x: -0.025, y: 0.7, radius: 0.07, petals: 20, petalWidth: 0.19, petalLength: 0.55, rotation: 0.05, tone: 96, layers: 2 },
];

function variation(seed: number) {
  return Math.sin(seed * 91.713) * 0.5 + 0.5;
}

function drawFlower(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  flower: FlowerSpec,
  flowerIndex: number,
  time: number,
) {
  const x = flower.x * width;
  const y = flower.y * height;
  const radius = flower.radius * width;
  const layers = flower.layers ?? 1;
  const direction = flowerIndex % 2 === 0 ? 1 : -1;
  const growthProgress = Math.min(
    1,
    Math.max(0, (time - flowerIndex * 0.055) / 1.15),
  );
  const growth = 1 - Math.pow(1 - growthProgress, 3);
  const animatedRotation =
    time * (0.08 + (flowerIndex % 4) * 0.015) * direction;

  context.save();
  context.translate(x, y);
  context.scale(growth, growth);

  for (let layer = 0; layer < layers; layer += 1) {
    const layerScale = 1 - layer * 0.27;
    const layerOffset = layer * (Math.PI / flower.petals);

    for (let petal = 0; petal < flower.petals; petal += 1) {
      const angle =
        flower.rotation +
        animatedRotation +
        layerOffset +
        (petal / flower.petals) * Math.PI * 2;
      const irregularity = 0.92 + variation(flowerIndex * 100 + layer * 30 + petal) * 0.16;
      const petalLength = radius * flower.petalLength * layerScale * irregularity;
      const petalWidth = radius * flower.petalWidth * layerScale;
      const tone = Math.round(flower.tone + layer * 18 + variation(petal + flowerIndex) * 12);

      context.save();
      context.rotate(angle);
      context.fillStyle = `rgb(${tone}, ${tone}, ${tone})`;
      context.beginPath();
      context.ellipse(
        petalLength * 0.62,
        0,
        petalLength * 0.7,
        petalWidth,
        0,
        0,
        Math.PI * 2,
      );
      context.fill();
      context.restore();
    }
  }

  context.fillStyle = "#ffffff";
  context.beginPath();
  context.arc(0, 0, radius * 0.18, 0, Math.PI * 2);
  context.fill();

  context.restore();
}

function drawFlowerField(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
) {
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  FLOWERS.forEach((flower, index) =>
    drawFlower(context, width, height, flower, index, time),
  );
}

export function AsciiArt({
  src,
  generated,
  alt = "",
  className = "relative size-full",
  characters = DEFAULT_CHARACTERS,
  invert = false,
}: AsciiArtProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const image = src ? new Image() : null;
    if (image && src) {
      image.crossOrigin = "anonymous";
      image.src = src;
    }

    let disposed = false;
    let resizeFrame = 0;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { willReadFrequently: true });
    const sourceCanvas = document.createElement("canvas");
    const sourceContext = sourceCanvas.getContext("2d");

    const render = () => {
      if (
        disposed ||
        !context ||
        (!generated &&
          (!image || !image.naturalWidth || !image.naturalHeight))
      ) return;

      const width = container.clientWidth;
      const height = container.clientHeight;
      const columns = Math.max(1, Math.ceil(width / CELL_WIDTH));
      const rows = Math.max(1, Math.ceil(height / CELL_HEIGHT));

      if (canvas.width !== columns) canvas.width = columns;
      if (canvas.height !== rows) canvas.height = rows;
      context.clearRect(0, 0, columns, rows);

      if (generated === "flowers") {
        if (!sourceContext) return;

        const sourceWidth = Math.max(1, Math.round(width));
        const sourceHeight = Math.max(1, Math.round(height));
        if (sourceCanvas.width !== sourceWidth) sourceCanvas.width = sourceWidth;
        if (sourceCanvas.height !== sourceHeight) sourceCanvas.height = sourceHeight;
        drawFlowerField(
          sourceContext,
          sourceCanvas.width,
          sourceCanvas.height,
          FLOWER_SNAPSHOT_TIME,
        );
        context.drawImage(sourceCanvas, 0, 0, columns, rows);
      } else if (image) {
        const scale = Math.max(
          columns / image.naturalWidth,
          rows / image.naturalHeight,
        );
        const drawWidth = image.naturalWidth * scale;
        const drawHeight = image.naturalHeight * scale;
        context.drawImage(
          image,
          (columns - drawWidth) / 2,
          (rows - drawHeight) / 2,
          drawWidth,
          drawHeight,
        );
      }

      const pixels = context.getImageData(0, 0, columns, rows).data;
      const lines: string[] = [];

      for (let row = 0; row < rows; row += 1) {
        let line = "";

        for (let column = 0; column < columns; column += 1) {
          const offset = (row * columns + column) * 4;
          const alpha = pixels[offset + 3] / 255;
          const luminance =
            (pixels[offset] * 0.2126 +
              pixels[offset + 1] * 0.7152 +
              pixels[offset + 2] * 0.0722) /
            255;
          const density = (invert ? luminance : 1 - luminance) * alpha;
          const characterIndex = Math.round(density * (characters.length - 1));

          line += density < 0.06 ? " " : characters[characterIndex];
        }

        lines.push(line);
      }

      if (outputRef.current) outputRef.current.textContent = lines.join("\n");
    };

    const scheduleRender = () => {
      if (disposed || resizeFrame) return;
      resizeFrame = requestAnimationFrame(() => {
        resizeFrame = 0;
        render();
      });
    };

    image?.addEventListener("load", scheduleRender);
    const resizeObserver = new ResizeObserver(scheduleRender);
    resizeObserver.observe(container);

    if (generated || image?.complete) scheduleRender();

    return () => {
      disposed = true;
      cancelAnimationFrame(resizeFrame);
      image?.removeEventListener("load", scheduleRender);
      resizeObserver.disconnect();
    };
  }, [characters, generated, invert, src]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden={alt ? undefined : true}
      aria-label={alt || undefined}
      role={alt ? "img" : undefined}
    >
      <pre
        ref={outputRef}
        className="absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 whitespace-pre font-mono text-[15px] leading-[15px] font-light tracking-normal text-copy/35 select-none"
      />
    </div>
  );
}
