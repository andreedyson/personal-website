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
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[400px] rounded-full bg-indigo-500/[0.04] blur-[120px]" />
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
            04
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
            className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Let&apos;s work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              together
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-lg text-[15px] leading-[1.8] text-neutral-500"
          >
            I&apos;m excited to connect with fellow developers, potential
            clients, and anyone curious about my work. Whether it&apos;s a
            project collaboration or just a chat — don&apos;t hesitate to reach
            out.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mb-16">
            <a
              href="mailto:andreedyson31@gmail.com"
              className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-white/30 blur-xl" />
              <span className="relative flex items-center gap-2">
                Get in touch
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
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
            className="mb-12 flex items-center gap-4"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="h-px w-16 origin-right bg-gradient-to-r from-transparent to-white/[0.08] md:w-32"
            />
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700">
              or find me on
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="h-px w-16 origin-left bg-gradient-to-l from-transparent to-white/[0.08] md:w-32"
            />
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants}>
            <Socials />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
