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

export default function Stacks() {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.3 + i * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section
      id="stacks"
      ref={ref}
      className="relative w-full overflow-hidden bg-[#030305] px-6 py-24 md:px-12 md:py-32 lg:px-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/3 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.04] blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[400px] rounded-full bg-indigo-500/[0.03] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20 flex items-center gap-4"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-600">
            03
          </span>
          <div className="h-px w-12 bg-neutral-800" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-600">
            Tech Stacks
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="mb-16 grid gap-6 md:grid-cols-5 md:gap-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-white md:col-span-2 md:text-4xl"
            >
              Tools I work{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                with
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-[1.8] text-neutral-500 md:col-span-3"
            >
              A collection of tools and technologies I use to build fast,
              modern, and responsive web applications, from frontend frameworks
              to styling systems and backend integrations.
            </motion.p>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-12 h-px w-full origin-left bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent"
          />

          {/* Stacks Grid */}
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 md:gap-4 lg:grid-cols-6">
            {TECH_STACKS.map((stack, index) => (
              <motion.div
                key={stack.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="group relative flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.02] transition-colors duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]"
                        whileHover={{ y: -4, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-indigo-500/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <Image
                          src={stack.imgUrl}
                          width={64}
                          height={64}
                          alt={stack.name}
                          className="relative z-10 size-8 md:size-10"
                        />

                        <span className="relative z-10 hidden text-[10px] font-medium text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300 sm:block">
                          {stack.name}
                        </span>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent
                      className="border border-white/[0.08] bg-[#0A0A0F] text-neutral-200 sm:hidden"
                      sideOffset={8}
                    >
                      <p className="text-xs font-medium">{stack.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center justify-center gap-2"
          >
            <div className="h-1 w-1 rounded-full bg-neutral-700" />
            <p className="text-[11px] text-neutral-600">
              Always learning, always experimenting
            </p>
            <div className="h-1 w-1 rounded-full bg-neutral-700" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
