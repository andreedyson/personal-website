"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
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

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full overflow-hidden bg-[#030305] px-6 py-24 md:px-12 md:py-32 lg:px-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.04] blur-[140px]" />
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
            01
          </span>
          <div className="h-px w-12 bg-neutral-800" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-600">
            About
          </span>
        </motion.div>

        {/* Top: Image + Intro Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 flex flex-col items-start gap-12 md:flex-row md:items-center md:gap-16"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0"
          >
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/[0.08] to-indigo-500/[0.04] blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
              <Image
                src="/assets/profile_andre.png"
                width={1200}
                height={1200}
                alt="Andre Edyson"
                className="h-[200px] w-[200px] object-cover object-center md:h-[220px] md:w-[220px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Intro heading */}
          <div className="flex-1">
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Andre Edyson
              </span>
              , a frontend developer who loves crafting things for the web.
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-neutral-500">
                Based in Indonesia · Available for work
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-16 h-px w-full origin-left bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent"
        />

        {/* Body Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 md:grid-cols-5 md:gap-16"
        >
          {/* Story — wider column */}
          <div className="space-y-5 md:col-span-3">
            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-[1.8] text-neutral-400"
            >
              My web development journey started when I was a kid. As a 10 year
              old, I got my{" "}
              <span className="text-neutral-200 underline decoration-blue-500/40 underline-offset-4">
                very first laptop
              </span>{" "}
              and it sparked my interest not only in watching YouTube videos,
              but also{" "}
              <span className="text-neutral-200 underline decoration-indigo-500/40 underline-offset-4">
                exploring the internet
              </span>
              . What started with copying{" "}
              <span className="font-medium text-orange-400/90">HTML</span> and{" "}
              <span className="font-medium text-sky-400/90">CSS</span> templates
              for fun slowly turned into a passion for building interactive and
              useful interfaces.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-[1.8] text-neutral-400"
            >
              That curiosity grew into a skillset and now, I build modern web
              applications using tools like{" "}
              <span className="font-medium text-neutral-200">Next.js</span>,{" "}
              <span className="font-medium text-yellow-400/80">Javascript</span>
              , <span className="font-medium text-blue-400/80">Typescript</span>{" "}
              and{" "}
              <span className="font-medium text-sky-300/80">TailwindCSS</span>.
              I love solving problems through clean UI and thoughtful code —
              whether it&apos;s a dashboard, landing page, or internal tool. My
              goal is always the same:{" "}
              <span className="text-neutral-200">
                make it fast, functional, and visually engaging.
              </span>
            </motion.p>
          </div>

          {/* Right column — stats + details */}
          <div className="space-y-8 md:col-span-2">
            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "3+", label: "Years of\nExperience" },
                { number: "20+", label: "Projects\nBuilt" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-4"
                >
                  <p className="text-2xl font-bold text-white">{stat.number}</p>
                  <p className="mt-1.5 whitespace-pre-line text-[10px] uppercase leading-tight tracking-wider text-neutral-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Core tools */}
            <motion.div variants={itemVariants}>
              <p className="mb-3 text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "TailwindCSS",
                  "Hono",
                  "Prisma",
                  "React",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[11px] text-neutral-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Currently */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-blue-400" />
                <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                  Currently
                </p>
              </div>
              <p className="text-sm leading-relaxed text-neutral-400">
                Exploring backend development with{" "}
                <span className="text-neutral-300">Hono</span> and building
                full-stack applications.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
