"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./card/ProjectCard";
import { projectsData } from "@/index";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="projects"
      className="px-6 py-24 max-sm:mt-10 md:px-16 xl:px-40"
    >
      <div className="flex flex-col items-center gap-10">
        {/* Projects Header */}
        <motion.div
          ref={ref}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: 0.4,
            duration: 1,
            type: "spring",
            stiffness: 250,
            damping: 10,
          }}
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
          transition={{ delay: 1 }}
          className="flex flex-col gap-12"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
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
      </div>
    </section>
  );
}

export default Projects;
