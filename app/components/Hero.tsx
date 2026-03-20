"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TECH_STACKS } from "@/index";

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

  // Mengambil 4 tech stack pertama untuk dijadikan planet yang mengorbit
  const orbitTechs = TECH_STACKS.slice(0, 4).map((tech, index) => {
    // Ukuran cincin dari yang terkecil (dalam) ke terbesar (luar)
    const configs = [
      {
        size: "h-[200px] w-[200px] md:h-[260px] md:w-[260px]",
        speed: 20,
        angle: 0,
        dir: 1,
      },
      {
        size: "h-[260px] w-[260px] md:h-[360px] md:w-[360px]",
        speed: 25,
        angle: 75,
        dir: -1,
      },
      {
        size: "h-[320px] w-[320px] md:h-[460px] md:w-[460px]",
        speed: 35,
        angle: 180,
        dir: 1,
      },
      {
        size: "h-[380px] w-[380px] md:h-[560px] md:w-[560px]",
        speed: 40,
        angle: 250,
        dir: -1,
      },
    ];
    return { ...tech, config: configs[index] };
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030305] px-6 pb-32 md:px-12"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-[130px]" />
        <div className="absolute right-1/4 top-1/2 h-[300px] w-[400px] rounded-full bg-purple-600/[0.04] blur-[120px]" />
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
        {/* Available Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-neutral-400 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for freelance projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="relative mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
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
          fast and functional web applications using modern tools.
        </motion.p>

        {/* CTAs */}
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

        {/* === FLOATING COMPOSITION === */}
        <motion.div
          className="relative mt-16 h-[340px] w-full max-w-2xl md:mt-20 md:h-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Orbital Tech Logos */}
          <div className="absolute inset-0 z-0">
            {/* Central gradient orb */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 md:h-52 md:w-52"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 via-indigo-500/20 to-purple-600/30 blur-3xl" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-500/25 via-cyan-400/15 to-indigo-500/25 blur-2xl" />
            </motion.div>

            {/* Orbiting Rings & Tech Logos */}
            {orbitTechs.map((tech) => (
              <div
                key={tech.name}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* The Ring */}
                <motion.div
                  animate={{
                    rotate: [
                      tech.config.angle,
                      tech.config.angle + 360 * tech.config.dir,
                    ],
                  }}
                  transition={{
                    duration: tech.config.speed,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`relative rounded-full border border-dashed border-white/[0.15] ${tech.config.size}`}
                >
                  {/* Container logo agar tidak rusak oleh framer motion, ditaruh di sisi kiri cincin */}
                  <div className="absolute left-0 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    {/* Rotasi kebalikan agar logo selalu berdiri tegak (upright) */}
                    <motion.div
                      animate={{
                        rotate: [
                          -tech.config.angle,
                          -(tech.config.angle + 360 * tech.config.dir),
                        ],
                      }}
                      transition={{
                        duration: tech.config.speed,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="group flex size-12 items-center justify-center overflow-hidden rounded-full border border-white/[0.1] bg-[#0A0A0F] shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-colors hover:border-white/[0.2] hover:bg-white/[0.05] md:size-14">
                        <Image
                          src={tech.imgUrl}
                          alt={tech.name}
                          width={32}
                          height={32}
                          className="relative z-10 size-6 transition-transform duration-300 group-hover:scale-110 md:size-7"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Floating card: Browser mockup — top left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-2 top-4 z-20 md:left-0 md:top-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -3 }}
              animate={{ opacity: 1, x: 0, rotate: -3 }}
              transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
              className="w-52 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c14]/90 shadow-2xl shadow-blue-500/[0.05] backdrop-blur-xl md:w-60"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-white/[0.05] px-3 py-2">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-400/50" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400/50" />
                  <div className="h-2 w-2 rounded-full bg-green-400/50" />
                </div>
                <div className="flex-1 rounded-md bg-white/[0.04] px-2 py-0.5">
                  <span className="text-[9px] text-neutral-600">
                    andreedyson.dev
                  </span>
                </div>
              </div>
              {/* Mini site preview */}
              <div className="p-3">
                <div className="mb-2 h-2 w-16 rounded-full bg-gradient-to-r from-blue-400/40 to-indigo-400/40" />
                <div className="mb-1.5 h-1.5 w-full rounded-full bg-white/[0.06]" />
                <div className="mb-1.5 h-1.5 w-4/5 rounded-full bg-white/[0.04]" />
                <div className="mb-3 h-1.5 w-3/5 rounded-full bg-white/[0.03]" />
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    "from-blue-500/20 to-blue-600/10",
                    "from-purple-500/20 to-purple-600/10",
                    "from-cyan-500/20 to-cyan-600/10",
                  ].map((gradient, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                      className={`h-10 rounded-md bg-gradient-to-br ${gradient} border border-white/[0.04]`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating card: Terminal — bottom right */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -right-2 bottom-6 z-20 md:bottom-4 md:right-0"
          >
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
              className="w-56 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c14]/90 shadow-2xl shadow-purple-500/[0.05] backdrop-blur-xl md:w-64"
            >
              <div className="flex items-center gap-2 border-b border-white/[0.05] px-3 py-2">
                <div className="h-2.5 w-2.5 rounded bg-white/[0.06]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-2.5 w-2.5 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M4 17l6-6-6-6M12 19h8" />
                  </svg>
                </div>
                <span className="text-[9px] text-neutral-600">terminal</span>
              </div>
              <div className="p-3 font-mono text-[10px] leading-relaxed md:text-[11px]">
                <TerminalTyping />
              </div>
            </motion.div>
          </motion.div>

          {/* Floating card: Component — top right */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -top-2 right-6 z-10 md:right-12 md:top-0"
          >
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#0c0c14]/90 px-3 py-2 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md border border-blue-500/10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                  <span className="text-[10px] text-blue-400">⚛</span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-neutral-300">
                    {"<Hero />"}
                  </p>
                  <p className="text-[8px] text-neutral-600">rendered 2ms</p>
                </div>
                <div className="ml-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              </div>
            </motion.div>
          </motion.div>

          {/* Floating card: Git Commit — bottom left */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-2 left-6 z-10 md:bottom-0 md:left-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#0c0c14]/90 px-3 py-2 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-orange-400/70"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                <div>
                  <p className="text-[10px] font-medium text-neutral-300">
                    feat: new portfolio
                  </p>
                  <p className="text-[8px] text-neutral-600">
                    pushed 3m ago · main
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
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

function TerminalTyping() {
  const lines = [
    { prefix: "~", cmd: "npx create-next-app@latest", delay: 0.8 },
    { prefix: "✓", cmd: "Installing dependencies...", delay: 2.0 },
    { prefix: "✓", cmd: "TypeScript, Tailwind, ESLint", delay: 3.0 },
    { prefix: "▸", cmd: "Ready on localhost:3000", delay: 4.0 },
  ];

  return (
    <div className="space-y-1">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: line.delay, duration: 0.4 }}
          className="flex gap-2"
        >
          <span
            className={
              line.prefix === "▸"
                ? "text-emerald-400"
                : line.prefix === "✓"
                  ? "text-blue-400/70"
                  : "text-neutral-600"
            }
          >
            {line.prefix}
          </span>
          <span
            className={
              line.prefix === "▸"
                ? "font-semibold text-emerald-400/90"
                : "text-neutral-500"
            }
          >
            {line.cmd}
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="flex items-center gap-1 pt-1"
      >
        <span className="text-neutral-600">~</span>
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "steps(1)",
          }}
          className="h-3 w-1.5 rounded-[1px] bg-white/50"
        />
      </motion.div>
    </div>
  );
}
