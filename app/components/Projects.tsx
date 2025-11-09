"use client";

import { headerPopupAnimationVariants, PROJECTS_DATA } from "@/index";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ProjectCard from "./card/ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const springTransition = {
    type: "spring",
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        ...springTransition,
        delay: index * 0.12,
      },
    }),
  };

  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ...springTransition,
        delay: 0.25,
      },
    },
  };

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
          variants={headerPopupAnimationVariants}
          initial="initial"
          animate={isInView ? "visible" : "hidden"}
          className="w-full space-y-4 text-center md:max-w-md"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="w-full text-sm text-gray-font md:text-base">
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
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                stacks={project.stacks}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
                position={index % 2 === 0 ? "left" : "right"}
              />
            </motion.div>
          ))}
        </div>

        {/* More to come */}
        <motion.div
          variants={scaleUpVariant}
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
              className="text-main-blue underline"
            >
              GitHub repositories
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
