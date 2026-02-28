"use client";

import { PROJECTS_DATA } from "@/index";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ProjectCard from "./card/ProjectCard";

export default function Projects() {
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
      id="projects"
      ref={ref}
      className="relative w-full overflow-hidden bg-[#030305] px-6 py-24 md:px-12 md:py-32 lg:px-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-1/3 top-1/4 h-[500px] w-[600px] rounded-full bg-blue-600/[0.04] blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[500px] rounded-full bg-indigo-500/[0.03] blur-[130px]" />
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
            Projects
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
              Selected{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                work
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[15px] leading-[1.8] text-neutral-500 md:col-span-3"
            >
              A showcase of web projects I&apos;ve built using modern tech
              stacks. Each one reflects my passion for clean design, interactive
              UI, and scalable architecture.
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

        {/* Project Cards */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                stacks={project.stacks}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
                position={index % 2 === 0 ? "left" : "right"}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* More to come */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-24 flex flex-col items-center gap-3 text-center"
        >
          <div className="mb-2 h-px w-16 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            And{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              more
            </span>{" "}
            to come...
          </h3>
          <p className="text-sm text-neutral-500">
            or check out my{" "}
            <Link
              href="https://github.com/andreedyson?tab=repositories"
              target="_blank"
              className="text-blue-400 underline decoration-blue-500/30 underline-offset-4 transition-colors hover:text-blue-300"
            >
              GitHub repositories
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
