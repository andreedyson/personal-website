"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { headerPopupAnimationVariants, TECH_STACKS } from "@/index";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

function Stacks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stackStaggerAnimationVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1 + index * 0.2,
      },
    }),
  };

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
          variants={headerPopupAnimationVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full space-y-4 text-center md:max-w-md"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Tech Stacks
          </h2>
          <p className="w-full text-sm text-gray-font md:text-base">
            A collection of tools and technologies I use to build fast, modern,
            and responsive web applications — from frontend frameworks to
            styling systems and backend integrations.
          </p>
        </motion.div>

        {/* Stacks Grid */}
        <motion.div className="grid w-full grid-cols-2 place-items-center gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {TECH_STACKS.map((stack, index) => (
            <motion.div
              key={stack.name}
              variants={stackStaggerAnimationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              viewport={{ once: true }}
              custom={index}
              className="w-full"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex w-full flex-col items-center justify-center rounded-md bg-gray-900/40 py-6 outline outline-[5px] outline-gray-800 duration-300 hover:-translate-y-2">
                    <Image
                      src={stack.imgUrl}
                      width={64}
                      height={64}
                      alt={stack.name}
                      className="size-10 md:size-16"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{stack.name}</p>
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
