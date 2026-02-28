"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const stats = [
    { label: "Framework", value: "Next.js" },
    { label: "Language", value: "TypeScript" },
    { label: "Backend", value: "Hono" },
    { label: "ORM", value: "Prisma" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030305] px-6 pb-32 md:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Primary glow */}
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[150px]" />
        {/* Secondary glow */}
        <div className="absolute bottom-1/4 left-1/3 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[130px]" />
        {/* Accent glow */}
        <div className="absolute right-1/4 top-1/2 h-[300px] w-[400px] rounded-full bg-purple-600/[0.04] blur-[120px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030305] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030305] to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-neutral-400 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for freelance projects
          </span>
        </motion.div>

        {/* Name with enhanced glow */}
        <motion.h1
          variants={itemVariants}
          className="relative mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-400/20 to-purple-500/20 blur-3xl" />
          <span className="relative bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
            Andre Edyson
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mb-6 text-lg text-neutral-500 md:text-xl"
        >
          FrontEnd Web Developer |{" "}
          <span className="text-neutral-300">building user-first systems</span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-lg text-sm leading-relaxed text-neutral-500 md:text-base"
        >
          I bridge technical complexity with seamless user experience, crafting
          fast and functional web applications with modern tools.
        </motion.p>

        {/* CTAs with glow on primary */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="relative inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-white/30 blur-xl" />
            <span className="relative">View My Work</span>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-7 py-3 text-sm font-medium text-neutral-400 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.15] hover:text-white"
          >
            Get in touch
            <svg
              className="h-3.5 w-3.5"
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
          </Link>
        </motion.div>

        {/* Abstract visual instead of code editor */}
        <motion.div
          className="mt-16 w-full max-w-xl md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow behind the card */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/[0.07] via-indigo-500/[0.05] to-purple-500/[0.07] blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0A0A0F]/80 backdrop-blur-xl">
              {/* Gradient accent line at top */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

              <div className="p-6 md:p-8">
                {/* Top row */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent" />
                      <span className="relative text-lg font-bold text-blue-400">
                        A
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-200">
                        Andre Edyson
                      </p>
                      <p className="text-xs text-neutral-600">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-medium text-emerald-400">
                      Available
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-6 h-px w-full bg-white/[0.04]" />

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.9 + i * 0.1,
                        duration: 0.4,
                      }}
                      className="group relative overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 transition-colors duration-300 hover:border-white/[0.08]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <p className="relative mb-1 text-[10px] uppercase tracking-wider text-neutral-600">
                        {stat.label}
                      </p>
                      <p className="relative text-sm font-medium text-neutral-300">
                        {stat.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Activity bar */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[10px] text-neutral-600">Activity</span>
                  <div className="flex flex-1 items-end gap-[3px]">
                    {Array.from({ length: 24 }).map((_, i) => {
                      const height = Math.max(
                        4,
                        Math.sin(i * 0.5 + 2) * 16 + Math.random() * 8,
                      );
                      return (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height }}
                          transition={{
                            delay: 1.2 + i * 0.03,
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-blue-500/20 to-blue-400/40"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-700">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-neutral-700 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
