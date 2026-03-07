"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

import { EXPERIENCES } from "@/index";

export default function Experience() {
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
      id="experience"
      ref={ref}
      className="relative w-full overflow-hidden bg-[#030305] px-6 py-24 md:px-12 md:py-32 lg:px-24"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-1/3 top-1/3 h-[500px] w-[600px] rounded-full bg-indigo-600/[0.04] blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[300px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[120px]" />

        {/* Grid Pattern */}
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
            02
          </span>
          <div className="h-px w-12 bg-neutral-800" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-600">
            Experience
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
              className="text-3xl font-bold tracking-tight text-white md:col-span-2 md:text-5xl"
            >
              Where I&apos;ve{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                worked
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-[1.8] text-neutral-500 md:col-span-3 lg:text-[16px]"
            >
              A timeline of my professional journey so far, from early academic
              projects to freelance work building real products for real users.
            </motion.p>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-16 h-px w-full origin-left bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="absolute left-[9px] top-2 hidden h-full w-px origin-top bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent md:block"
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {EXPERIENCES.map((exp, index) => {
              const isPresent = exp.endDate.toLowerCase() === "present";

              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="group relative grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr] md:gap-12"
                >
                  {/* Left: Date + Timeline dot */}
                  <div className="relative flex items-start gap-4 md:flex-col md:gap-2">
                    {/* Dot */}
                    <div className="relative mt-[22px] hidden md:block">
                      <div
                        className={`absolute -left-[1px] h-[11px] w-[11px] rounded-full border-[2.5px] border-[#030305] transition-all duration-300 ${
                          isPresent
                            ? "bg-emerald-400"
                            : "bg-neutral-700 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                        }`}
                      />
                      {isPresent && (
                        <div className="absolute -left-[1px] h-[11px] w-[11px] animate-ping rounded-full bg-emerald-400/60" />
                      )}
                    </div>

                    <div className="md:mt-5">
                      <p className="text-[13px] font-semibold tracking-wide text-neutral-400">
                        {exp.startDate} — {exp.endDate}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] text-neutral-500">
                          {exp.location}
                        </span>
                        <span className="h-0.5 w-0.5 rounded-full bg-neutral-700" />
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors ${
                            isPresent
                              ? "border border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-400"
                              : "border border-white/[0.06] bg-white/[0.03] text-neutral-500 group-hover:border-white/[0.1] group-hover:text-neutral-300"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content card */}
                  <div className="relative rounded-2xl border border-white/[0.04] bg-[#0A0A0F] p-6 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.02] md:p-8">
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      {/* Role + Company */}
                      <h3 className="mb-1.5 text-xl font-bold tracking-tight text-white md:text-2xl">
                        {exp.role}
                      </h3>
                      {exp.companyUrl ? (
                        <Link
                          href={exp.companyUrl}
                          target="_blank"
                          className="inline-flex items-center text-[15px] font-medium text-blue-400 transition-colors hover:text-blue-300"
                        >
                          {exp.company}
                          <svg
                            className="ml-1 h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </Link>
                      ) : (
                        <p className="text-[15px] font-medium text-neutral-400">
                          {exp.company}
                        </p>
                      )}

                      {/* Description */}
                      <p className="mt-5 text-[15px] leading-[1.8] text-neutral-400">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="mt-5 space-y-2.5">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-[14px] leading-relaxed text-neutral-500"
                          >
                            <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500/40" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      {/* Stacks */}
                      <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.04] pt-6">
                        {exp.stacks.map((stack) => (
                          <span
                            key={stack}
                            className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-neutral-500 transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.05] hover:text-neutral-300"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
