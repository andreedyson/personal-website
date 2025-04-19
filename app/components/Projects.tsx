"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./card/ProjectCard";
import { headerPopupAnimationVariants, PROJECTS_DATA } from "@/index";
import Link from "next/link";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.6,
      },
    }),
  };

  const scaleUpAnimationVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.7,
      },
    },
  };

  return (
    <section id="projects" className="section relative h-full">
      <div className="">
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center bg-dark-bg bg-grid-small-white/[0.3] dark:bg-black dark:bg-grid-small-white/[0.2]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-dark-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 text-center">
        {/* Projects Header */}
        <motion.div
          ref={ref}
          variants={headerPopupAnimationVariants}
          initial="initial"
          animate={isInView ? "visible" : "hidden"}
          className="w-full space-y-4 text-center md:max-w-[413px]"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="w-full text-sm text-gray-font md:text-base">
            Some of the frontend projects I have worked on.
          </p>
        </motion.div>

        {/* Projects Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-col gap-12 xl:gap-20"
        >
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
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
        </motion.div>

        {/* More To Come Section */}
        <motion.div
          variants={scaleUpAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 space-y-2 lg:mt-20"
        >
          <h3 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            And <span className="text-main-blue">more</span> to come...
          </h3>
          <p className="text-sm">
            or check out my{" "}
            <Link
              href={"https://github.com/andreedyson?tab=repositories"}
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

export default Projects;
