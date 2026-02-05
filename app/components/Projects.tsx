"use client";

import { PROJECTS_DATA } from "@/index";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ProjectCard from "./card/ProjectCard";
import { aboutVariants, projectVariants, entranceVariants } from "@/lib/animation-variants";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="section relative h-full">
      {/* Background Grid */}
      <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center bg-dark-bg bg-grid-small-white/[0.3] dark:bg-black dark:bg-grid-small-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-dark-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>

      <div className="flex flex-col items-center gap-10 text-center">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={aboutVariants.header}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full space-y-4 text-center md:max-w-md"
        >
          <h2 className="bg-gradient-to-r from-white to-main-blue bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="w-full text-sm leading-relaxed text-gray-font md:text-base">
            A showcase of web projects I&apos;ve built using modern tech stacks.
            Each one reflects my passion for clean design, interactive UI, and
            scalable architecture.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-12 xl:gap-20">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants.card(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
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
          variants={entranceVariants.fadeScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-16 space-y-2 lg:mt-24"
        >
          <h3 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            And <span className="text-main-blue">more</span> to come...
          </h3>
          <p className="text-sm">
            or check out my{" "}
            <Link
              href="https://github.com/andreedyson?tab=repositories"
              target="_blank"
              className="text-main-blue underline decoration-accent-cyan transition-colors hover:text-accent-cyan"
            >
              GitHub repositories
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
