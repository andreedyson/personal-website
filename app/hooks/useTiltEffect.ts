"use client";

import { useState, useEffect, RefObject } from "react";

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export function useTiltEffect(
  ref: RefObject<HTMLElement | null>,
  options: TiltOptions = {},
) {
  const { maxTilt = 10, perspective = 1000, scale = 1.02 } = options;

  const [rotation, setRotation] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * maxTilt;
      const rotateY = ((centerX - x) / centerX) * maxTilt;

      setRotation({ x: rotateX, y: rotateY, scale });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0, scale: 1 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, maxTilt, perspective, scale]);

  return { rotation, perspective };
}
