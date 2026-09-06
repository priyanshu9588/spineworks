"use client";

import { useEffect, useRef } from "react";
import type p5 from "p5";

const defaultSettings = {
  globeEnabled: true,
  globeOpacity: 0.38,
  blurEnabled: true,
  noiseEnabled: true,
  thresholdEnabled: true,
  blur: 14.5,
  noiseAmount: 0.05,
  noiseScale: 1.15,
  threshold: 0.83,
  stroke: 3.2,
  scale: 1.51,
  horizontal: 1.4,
  vertical: -1.94,
  spinX: 0.04,
  spinY: 0.16,
};

const contourRadii = [92, 158, 238, 332, 428, 499];

type Point3 = { x: number; y: number; z: number };

function rotatePoint(point: Point3, rotationX: number, rotationY: number): Point3 {
  const cosX = Math.cos(rotationX);
  const sinX = Math.sin(rotationX);
  const cosY = Math.cos(rotationY);
  const sinY = Math.sin(rotationY);
  const rotatedY = point.y * cosX - point.z * sinX;
  const rotatedZ = point.y * sinX + point.z * cosX;

  return {
    x: point.x * cosY + rotatedZ * sinY,
    y: rotatedY,
    z: -point.x * sinY + rotatedZ * cosY,
  };
}

function drawCurve(
  layer: p5.Graphics,
  points: Point3[],
  centerX: number,
  centerY: number,
  radius: number,
) {
  for (let index = 0; index < points.length; index += 1) {
    const current = points[index];
    const next = points[(index + 1) % points.length];
    const normalizedDepth = Math.max(
      0,
      Math.min(1, (((current.z + next.z) * 0.5) / radius + 1) * 0.5),
    );
    const easedDepth =
      normalizedDepth * normalizedDepth * (3 - 2 * normalizedDepth);
    const alpha = 22 + easedDepth * 233;
    layer.stroke(243, 242, 238, alpha);
    layer.line(
      centerX + current.x,
      centerY - current.y,
      centerX + next.x,
      centerY - next.y,
    );
  }
}

export default function GlobeBackground() {
  const hostRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef(defaultSettings);

  useEffect(() => {
    let instance: p5 | undefined;
    let cancelled = false;

    import("p5").then(({ default: P5 }) => {
      if (cancelled || !hostRef.current) return;

      instance = new P5((sketch) => {
        let globeLayer: p5.Graphics;
        let contourLayer: p5.Graphics;
        let compositeLayer: p5.Graphics;
        let noiseTile: p5.Graphics;
        let contourPadding = 0;
        let rotationX = 0;
        let rotationY = 0;
        let previousTime = 0;
        let sphereScrollProgress = 0;
        let contourScrollProgress = 0;
        let lastContourUpdate = 0;

        const drawContours = (time = 0) => {
          const strokeScale = Math.min(sketch.width, sketch.height) / 1120;
          const scaleX = sketch.width / 1140;
          const scaleY = sketch.height / 1140;
          const centerX = contourPadding + sketch.width * 0.5;
          const centerY = contourPadding + sketch.height * 0.5;

          contourLayer.clear();
          contourLayer.noFill();
          contourLayer.stroke(243, 242, 238, 190);
          contourLayer.strokeWeight(Math.max(1.5, strokeScale * 2));

          for (let ringIndex = 0; ringIndex < contourRadii.length; ringIndex += 1) {
            contourLayer.beginShape();
            for (let pointIndex = 0; pointIndex <= 144; pointIndex += 1) {
              const angle = (pointIndex / 144) * Math.PI * 2;
              const radius = contourRadii[ringIndex];
              const offsetScale = 8 + ringIndex * 3;
              const offsetX = (sketch.noise(ringIndex * 12, pointIndex * 0.045, time * 0.00008) - 0.5) * offsetScale;
              const offsetY = (sketch.noise(ringIndex * 18 + 40, pointIndex * 0.12, time * 0.00014) - 0.5) * offsetScale;
              contourLayer.vertex(
                centerX + Math.cos(angle) * radius * scaleX + offsetX,
                centerY + Math.sin(angle) * radius * scaleY + offsetY,
              );
            }
            contourLayer.endShape(sketch.CLOSE);
          }
        };

        const createLayer = () => {
          globeLayer?.remove();
          contourLayer?.remove();
          compositeLayer?.remove();
          noiseTile?.remove();
          globeLayer = sketch.createGraphics(sketch.width, sketch.height);
          contourPadding = Math.ceil(Math.max(sketch.width, sketch.height) * 0.12);
          contourLayer = sketch.createGraphics(
            sketch.width + contourPadding * 2,
            sketch.height + contourPadding * 2,
          );
          compositeLayer = sketch.createGraphics(sketch.width, sketch.height);
          noiseTile = sketch.createGraphics(160, 160);
          globeLayer.pixelDensity(Math.min(window.devicePixelRatio || 1, 2));
          contourLayer.pixelDensity(1);
          compositeLayer.pixelDensity(Math.min(window.devicePixelRatio || 1, 2));
          noiseTile.pixelDensity(1);
          globeLayer.noFill();
          globeLayer.stroke(243, 242, 238);
          globeLayer.strokeCap(sketch.SQUARE);
          globeLayer.strokeJoin(sketch.ROUND);
          drawContours();
        };

        const refreshNoise = () => {
          noiseTile.loadPixels();
          for (let index = 0; index < noiseTile.pixels.length; index += 4) {
            const value = sketch.random(255);
            noiseTile.pixels[index] = value;
            noiseTile.pixels[index + 1] = value;
            noiseTile.pixels[index + 2] = value;
            noiseTile.pixels[index + 3] = 255;
          }
          noiseTile.updatePixels();
        };

        sketch.setup = () => {
          const canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
          canvas.parent(hostRef.current!);
          sketch.pixelDensity(Math.min(window.devicePixelRatio || 1, 2));
          createLayer();
          previousTime = sketch.millis();
        };

        sketch.draw = () => {
          const now = sketch.millis();
          const delta = Math.min((now - previousTime) / 1000, 0.05);
          previousTime = now;
          const current = settingsRef.current;
          rotationX += delta * current.spinX;
          rotationY += delta * current.spinY;

          const radius = Math.min(sketch.width, sketch.height) * 0.48 * current.scale;
          const centerX =
            sketch.width * 0.5 + current.horizontal * sketch.height * 0.18;
          const targetScrollProgress = Math.min(window.scrollY / sketch.height, 1);
          const scrollSmoothing = 1 - Math.exp(-delta * 5);
          sphereScrollProgress += (targetScrollProgress - sphereScrollProgress) * scrollSmoothing;
          const easedScrollProgress = sphereScrollProgress * sphereScrollProgress * (3 - 2 * sphereScrollProgress);
          const contourEntryProgress = Math.min(
            Math.max((window.scrollY - sketch.height * 0.7) / (sketch.height * 0.3), 0),
            1,
          );
          const contourExitProgress = Math.min(
            Math.max((window.scrollY - sketch.height * 1.7) / (sketch.height * 0.3), 0),
            1,
          );
          const targetContourProgress = contourEntryProgress * (1 - contourExitProgress);
          if (window.scrollY >= sketch.height * 2) {
            contourScrollProgress = 0;
          } else {
            contourScrollProgress += (targetContourProgress - contourScrollProgress) * scrollSmoothing;
          }
          const easedContourProgress = contourScrollProgress * contourScrollProgress * (3 - 2 * contourScrollProgress);
          if (easedContourProgress > 0.001 && now - lastContourUpdate > 83) {
            drawContours(now);
            lastContourUpdate = now;
          }
          const centerY = sketch.height * (0.5 - current.vertical / 6);
          const segments = 160;

          globeLayer.clear();
          globeLayer.strokeWeight(current.stroke);

          for (let latitudeIndex = 1; latitudeIndex <= 11; latitudeIndex += 1) {
            const latitude = sketch.lerp(
              -Math.PI / 2,
              Math.PI / 2,
              latitudeIndex / 12,
            );
            const ringRadius = Math.cos(latitude) * radius;
            const y = Math.sin(latitude) * radius;
            const points = Array.from({ length: segments }, (_, index) => {
              const angle = (index / segments) * Math.PI * 2;
              return rotatePoint(
                {
                  x: Math.cos(angle) * ringRadius,
                  y,
                  z: Math.sin(angle) * ringRadius,
                },
                rotationX,
                rotationY,
              );
            });
            drawCurve(globeLayer, points, centerX, centerY, radius);
          }

          for (let longitudeIndex = 0; longitudeIndex < 12; longitudeIndex += 1) {
            const longitude = (longitudeIndex / 12) * Math.PI;
            const points = Array.from({ length: segments }, (_, index) => {
              const angle = (index / segments) * Math.PI * 2;
              const horizontal = Math.sin(angle) * radius;
              return rotatePoint(
                {
                  x: horizontal * Math.cos(longitude),
                  y: Math.cos(angle) * radius,
                  z: horizontal * Math.sin(longitude),
                },
                rotationX,
                rotationY,
              );
            });
            drawCurve(globeLayer, points, centerX, centerY, radius);
          }

          compositeLayer.clear();
          const compositeContext = compositeLayer.drawingContext as CanvasRenderingContext2D;

          if (current.globeEnabled) {
            compositeContext.save();
            compositeContext.globalAlpha = current.globeOpacity * (1 - easedScrollProgress);
            compositeContext.filter = current.blurEnabled
              ? `blur(${current.blur}px)`
              : "none";
            compositeLayer.image(globeLayer, 0, 0);
            compositeContext.restore();
          }

          if (easedContourProgress > 0.001) {
            compositeContext.save();
            compositeContext.globalAlpha = easedContourProgress;
            compositeContext.filter = current.blurEnabled
              ? `blur(${current.blur}px)`
              : "none";
            compositeLayer.image(contourLayer, -contourPadding, -contourPadding);
            compositeContext.restore();
          }

          if (current.noiseEnabled && current.noiseAmount > 0) {
            refreshNoise();
            const tileSize = noiseTile.width * current.noiseScale;
            compositeContext.save();
            compositeContext.globalAlpha = current.noiseAmount;
            compositeContext.globalCompositeOperation = "screen";
            for (let y = 0; y < sketch.height; y += tileSize) {
              for (let x = 0; x < sketch.width; x += tileSize) {
                compositeLayer.image(noiseTile, x, y, tileSize, tileSize);
              }
            }
            compositeContext.restore();
          }

          sketch.clear();
          const outputContext = sketch.drawingContext as CanvasRenderingContext2D;
          outputContext.save();
          if (current.thresholdEnabled) {
            const brightness = 0.5 / Math.max(current.threshold, 0.01);
            outputContext.filter = `brightness(${brightness}) contrast(10000%)`;
          }
          sketch.image(compositeLayer, 0, 0);
          outputContext.restore();
        };

        sketch.windowResized = () => {
          sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
          createLayer();
        };
      });
    });

    return () => {
      cancelled = true;
      instance?.remove();
    };
  }, []);

  return <div ref={hostRef} className="globe-background" aria-hidden="true" />;
}
