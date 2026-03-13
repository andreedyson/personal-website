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

  const timeline = [
    {
      year: "2014",
      title: "First laptop, first spark",
      description:
        "Got my first laptop at 10. Started copying HTML & CSS templates for fun — had no idea it would become a career.",
      accent: "bg-orange-400",
    },
    {
      year: "2020",
      title: "From hobby to skill",
      description:
        "Shifted from tinkering to intentional learning. Picked up JavaScript, started building real projects and breaking things.",
      accent: "bg-yellow-400",
    },
    {
      year: "2022",
      title: "Going modern",
      description:
        "Adopted React and Next.js. Fell in love with component-driven development, TypeScript, and the modern frontend ecosystem.",
      accent: "bg-blue-400",
    },
    {
      year: "Now",
      title: "Building full-stack",
      description:
        "Exploring backend with Hono and Prisma. Focused on shipping fast, functional apps end-to-end.",
      accent: "bg-emerald-400",
    },
  ];

  const stack = [
    { name: "Next.js", icon: "▲", color: "text-white" },
    { name: "TypeScript", icon: "TS", color: "text-blue-400" },
    { name: "Tailwind", icon: "◆", color: "text-cyan-400" },
    { name: "React", icon: "⚛", color: "text-sky-400" },
    { name: "Hono", icon: "🔥", color: "text-orange-400" },
    { name: "Prisma", icon: "◈", color: "text-emerald-400" },
  ];

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

        {/* Top: Image + Intro */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20 flex flex-col items-start gap-12 md:flex-row md:items-center md:gap-16"
        >
          {/* Image with layered frame */}
          <motion.div
            variants={itemVariants}
            className="group relative flex-shrink-0"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/[0.1] via-indigo-500/[0.05] to-purple-500/[0.08] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/[0.06] to-indigo-500/[0.03] blur-xl" />

            <div className="relative">
              {/* Decorative border frame */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20" />
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0A0A0F]">
                <Image
                  src="/assets/profile_andre.png"
                  width={1200}
                  height={1200}
                  alt="Andre Edyson"
                  className="h-[200px] w-[200px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] md:h-[240px] md:w-[240px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/50 via-transparent to-transparent" />

                {/* Corner accents */}
                <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-white/[0.1]" />
                <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/[0.1]" />
              </div>
            </div>

            {/* Floating status badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-3 -right-3 z-10 rounded-lg border border-white/[0.08] bg-[#0c0c14]/90 px-2.5 py-1.5 shadow-lg backdrop-blur-xl"
            >
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-medium text-emerald-400">
                  Open to work
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Intro */}
          <div className="flex-1">
            <motion.h2
              variants={itemVariants}
              className="mb-5 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
            >
              I&apos;m{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Andre Edyson
                </span>
                <span className="absolute -inset-1 -z-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-lg" />
              </span>
              , a frontend developer who turns ideas into interfaces.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-relaxed text-neutral-500"
            >
              Based in Indonesia · Building for the web since 2020
            </motion.p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-20 h-px w-full origin-left bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent"
        />

        {/* Story + Sidebar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20 grid gap-12 md:grid-cols-5 md:gap-16"
        >
          {/* Story */}
          <div className="space-y-6 md:col-span-3">
            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-[1.85] text-neutral-400"
            >
              My path into web development wasn&apos;t planned, it started with
              a 10-year-old kid getting his{" "}
              <span className="text-neutral-200">first laptop</span> and falling
              down the rabbit hole of the internet. What began as copying{" "}
              <span className="font-medium text-orange-400/90">HTML</span> and{" "}
              <span className="font-medium text-sky-400/90">CSS</span> templates
              became an obsession with making things{" "}
              <em className="not-italic text-neutral-300">look right</em> and{" "}
              <em className="not-italic text-neutral-300">work well</em>.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-[1.85] text-neutral-400"
            >
              Today I work across the modern frontend stacks like{" "}
              <span className="font-medium text-neutral-200">Next.js</span>,{" "}
              <span className="font-medium text-blue-400/80">TypeScript</span>,{" "}
              <span className="font-medium text-sky-300/80">Tailwind</span>,
              building everything from landing pages to complex dashboards. I
              care about the details, smooth interactions, clean component
              architecture, and UI that doesn&apos;t get in the user&apos;s way.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-[1.85] text-neutral-400"
            >
              Right now I&apos;m pushing into full-stack territory with{" "}
              <span className="font-medium text-neutral-200">Hono</span> and{" "}
              <span className="font-medium text-neutral-200">Prisma</span>,
              because I want to own the entire experience from the database
              query to the pixel on screen.
            </motion.p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 md:col-span-2">
            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { number: "3+", label: "Years\nExperience" },
                { number: "20+", label: "Projects\nShipped" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/[0.1]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="relative text-3xl font-bold text-white">
                    {stat.number}
                  </p>
                  <p className="relative mt-2 whitespace-pre-line text-[10px] uppercase leading-tight tracking-wider text-neutral-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Stack grid */}
            <motion.div variants={itemVariants}>
              <p className="mb-3 text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                Stack
              </p>
              <div className="grid grid-cols-3 gap-2">
                {stack.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ delay: 0.6 + i * 0.06, duration: 0.35 }}
                    className="group flex flex-col items-center gap-1.5 rounded-xl border border-white/[0.04] bg-white/[0.02] px-2 py-3 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]"
                  >
                    <span
                      className={`text-sm ${tool.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {tool.icon}
                    </span>
                    <span className="text-[10px] text-neutral-500">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy card */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.02]"
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              <div className="p-4">
                <div className="mb-2.5 flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-blue-400" />
                  <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                    Philosophy
                  </p>
                </div>
                <p className="text-[13px] leading-relaxed text-neutral-400">
                  &ldquo;Ship fast, care about details, and never stop learning.
                  The best code is the one users never have to think
                  about.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600">
              Journey
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="absolute left-0 right-0 top-4 hidden h-px origin-left bg-gradient-to-r from-white/[0.06] via-white/[0.04] to-white/[0.06] md:block"
            />

            {/* Vertical line for mobile */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gradient-to-b from-white/[0.06] via-white/[0.04] to-white/[0.06] md:hidden"
            />

            <div className="grid gap-6 md:grid-cols-4 md:gap-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className="group relative pl-10 md:pl-0 md:pt-10"
                >
                  {/* Dot */}
                  <div className="absolute left-[11px] top-1 flex items-center justify-center md:left-0 md:top-0">
                    <div
                      className={`relative z-10 h-2.5 w-2.5 rounded-full ${item.accent} shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgba(255,255,255,0.15)]`}
                    />
                  </div>

                  <div className="rounded-xl border border-transparent p-0 transition-all duration-300 md:p-4 md:hover:border-white/[0.04] md:hover:bg-white/[0.01]">
                    <p className="mb-1 text-[11px] font-medium tracking-wider text-neutral-600">
                      {item.year}
                    </p>
                    <p className="mb-2 text-sm font-semibold text-neutral-200">
                      {item.title}
                    </p>
                    <p className="text-[13px] leading-relaxed text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
