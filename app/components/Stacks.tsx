"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stackData } from "@/index";
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

  return (
    <section
      id="stacks"
      className="flex flex-col items-center px-6 py-24 max-sm:mt-10 md:px-16 lg:h-screen xl:px-40"
    >
      <div className="flex w-full flex-col items-center gap-6 md:gap-10">
        {/* Stack Header */}
        <motion.div
          ref={ref}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: 0.8,
            duration: 1,
            type: "spring",
            stiffness: 250,
            damping: 10,
          }}
          className="w-full space-y-4 text-center md:max-w-[413px]"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Tech Stacks
          </h2>
          <p className="w-full text-sm text-gray-font md:text-base">
            Here are some of the tech stack I&apos;ve used during my web
            development journey.
          </p>
        </motion.div>

        {/* Stacks Grid */}
        <div className="grid w-full grid-cols-2 place-items-center gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {stackData.map((stack, index) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.2 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex h-[90px] w-[140px] items-center justify-center rounded-md bg-gray-900/40 outline outline-[5px] outline-gray-800 duration-300 hover:-translate-y-3 md:h-[100px] md:w-[200px] xl:h-[120px] xl:w-[260px]">
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
        </div>
      </div>
    </section>
  );
}

export default Stacks;
