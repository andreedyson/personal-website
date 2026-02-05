"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TECH_STACKS } from "@/index";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { aboutVariants, stacksVariants, hoverVariants } from "@/lib/animation-variants";

function Stacks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="stacks"
      className="section relative flex h-full flex-col items-center"
    >
      <div>
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center bg-dark-bg bg-grid-white/[0.03] dark:bg-black dark:bg-grid-white/[0.2]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-dark-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-6 md:gap-10">
        {/* Stacks Header */}
        <motion.div
          ref={ref}
          variants={aboutVariants.header}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full space-y-4 text-center md:max-w-md"
        >
          <h2 className="bg-gradient-to-r from-white to-main-blue bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            Tech Stacks
          </h2>
          <p className="w-full text-sm leading-relaxed text-gray-font md:text-base">
            A collection of tools and technologies I use to build fast, modern,
            and responsive web applications — from frontend frameworks to
            styling systems and backend integrations.
          </p>
        </motion.div>

        {/* Stacks Grid */}
        <motion.div
          className="grid w-full grid-cols-2 place-items-center gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4"
          variants={stacksVariants.container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {TECH_STACKS.map((stack, index) => (
            <motion.div
              key={stack.name}
              variants={stacksVariants.card(index)}
              className="w-full"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="relative flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-dark-navbar to-surface py-6 outline outline-2 outline-main-blue/20"
                      whileHover={hoverVariants.stackHover}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Gradient glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-main-blue/10 via-accent-purple/10 to-accent-cyan/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <Image
                        src={stack.imgUrl}
                        width={64}
                        height={64}
                        alt={stack.name}
                        className="relative z-10 size-10 md:size-16"
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gradient-to-br from-main-blue to-dark-blue text-white">
                    <p className="font-semibold">{stack.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stacks;
