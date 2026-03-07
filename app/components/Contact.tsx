"use client";

import React, { useRef } from "react";
import Socials from "./layout/Socials";
import { motion, useInView } from "framer-motion";

export default function Contact() {
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
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden bg-[#030305] px-6 py-24 md:px-12 md:py-32 lg:px-24"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.04] blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[400px] rounded-full bg-indigo-500/[0.03] blur-[120px]" />

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
          className="mb-20 flex items-center justify-center gap-4 md:justify-start"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-600">
            05
          </span>
          <div className="h-px w-12 bg-neutral-800" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-600">
            Contact
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center"
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[4rem]"
          >
            Let&apos;s work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              together
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-12 max-w-xl text-[15px] leading-[1.8] text-neutral-500 md:text-[16px]"
          >
            I&apos;m excited to connect with fellow developers, potential
            clients, and anyone curious about my work. Whether it&apos;s a
            project collaboration or just a chat — don&apos;t hesitate to reach
            out.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mb-20">
            <a
              href="mailto:andreedyson31@gmail.com"
              className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[14px] font-semibold text-[#030305] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
            >
              {/* Internal Glow for Button */}
              <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative flex items-center gap-2">
                Get in touch
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex w-full max-w-sm items-center justify-center gap-4"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="h-px flex-1 origin-right bg-gradient-to-r from-transparent to-white/[0.06]"
            />
            <span className="flex-shrink-0 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
              or find me on
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="h-px flex-1 origin-left bg-gradient-to-l from-transparent to-white/[0.06]"
            />
          </motion.div>

          {/* Socials Component */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-white/[0.04] bg-white/[0.01] p-4 backdrop-blur-sm"
          >
            <Socials />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
