"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center">
      <div className="absolute inset-0 -top-48 h-screen w-full">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={30}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center text-white">
        <h3 className="text-xl font-semibold">Hello everyone, I&apos;m</h3>
        <TextGenerateEffect
          words="Andre Edyson"
          className="text-3xl [text-shadow:_4px_3px_0_rgb(255_255_255_/_100%)] md:text-5xl lg:text-7xl"
        />
        <p className="mt-4 text-center leading-relaxed tracking-wide md:max-w-[400px]">
          I’m a{" "}
          <span className="font-semibold underline">
            Front-End Web Developer
          </span>{" "}
          from Indonesia. Specialized in using Next.js, TypeScript, TailwindCSS,
          MongoDB.
        </p>
      </div>
    </section>
  );
}
