"use client";

import { useEffect, useRef } from "react";
import { useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

const FRAME_COUNT = 150;

export default function ScrollyCanvas({ progress }: { progress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Hold images and their loaded state in refs so the scroll handler always
  // sees the latest set without waiting for a re-render.
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>([]);

  // Transform scroll progress (0 to 1) into a frame index (0 to 149)
  const frameIndex = useTransform(progress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    const loaded: boolean[] = new Array(FRAME_COUNT).fill(false);
    imagesRef.current = images;
    loadedRef.current = loaded;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.033s.webp`;
      img.onload = () => {
        loaded[i] = true;
        // Draw the very first frame as soon as it arrives so the background
        // appears immediately instead of waiting for all 150 to download.
        if (i === 0) {
          drawFrame(img);
        } else if (i === Math.round(frameIndex.get())) {
          // If the user has already scrolled to this frame, draw it now.
          drawFrame(img);
        }
      };
      // A single failed frame must not block the rest of the animation.
      img.onerror = () => {
        loaded[i] = false;
      };
      images[i] = img;
    }
  }, []);

  // Draw the nearest loaded frame to the requested index. Falls back to a
  // neighbouring frame that has finished loading so the canvas is never blank.
  const drawNearestLoadedFrame = (index: number) => {
    const images = imagesRef.current;
    const loaded = loadedRef.current;
    if (!images.length) return;

    if (loaded[index]) {
      drawFrame(images[index]);
      return;
    }
    for (let offset = 1; offset < FRAME_COUNT; offset++) {
      const before = index - offset;
      const after = index + offset;
      if (before >= 0 && loaded[before]) {
        drawFrame(images[before]);
        return;
      }
      if (after < FRAME_COUNT && loaded[after]) {
        drawFrame(images[after]);
        return;
      }
    }
  };

  const drawFrame = (img: HTMLImageElement) => {
    if (!canvasRef.current || !img) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas internal dimensions to match display size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Implement object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawNearestLoadedFrame(Math.round(latest));
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      drawNearestLoadedFrame(Math.round(frameIndex.get()));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
