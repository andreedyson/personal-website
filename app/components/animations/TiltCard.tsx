"use client";

import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { useTiltEffect } from "@/app/hooks/useTiltEffect";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  disableOnMobile?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 5,
  perspective = 1000,
  scale = 1.02,
  disableOnMobile = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { rotation } = useTiltEffect(ref, { maxTilt, perspective, scale });

  return (
    <motion.div
      ref={ref}
      className={`${className} ${disableOnMobile ? "md:transform-gpu" : ""}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: rotation.scale,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
}
