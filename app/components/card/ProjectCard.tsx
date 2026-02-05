"use client";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TiltCard from "../animations/TiltCard";
import { hoverVariants } from "@/lib/animation-variants";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  stacks: any[];
  position: "left" | "right";
  repoUrl?: string;
  demoUrl?: string;
  index: number;
};

function ProjectCard({
  title,
  description,
  imgUrl,
  stacks,
  position,
  repoUrl,
  demoUrl,
  index,
}: Props) {
  return (
    <article className="max-lg:rounded-lg">
      <TiltCard
        className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:gap-4"
        maxTilt={3}
        disableOnMobile={true}
      >
        {/* Projects Image */}
        <motion.div
          className={`group relative aspect-video w-full overflow-hidden rounded-t-lg md:rounded-lg ${position !== "left" && "lg:order-2"}`}
          whileHover="hover"
        >
          <motion.div
            variants={{
              hover: { scale: 1.1 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={imgUrl}
              width={600}
              height={400}
              alt={title}
              className="h-full w-full bg-dark-navbar object-cover lg:h-80"
            />
          </motion.div>

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>

        {/* Projects Details */}
        <motion.div
          className="relative flex h-52 flex-col justify-center overflow-hidden rounded-b-lg bg-gradient-to-br from-dark-navbar via-dark-navbar to-surface px-6 py-4 text-white max-lg:shadow-2xl max-lg:shadow-main-blue/30 lg:max-w-lg lg:rounded-lg 2xl:max-w-xl"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-main-blue via-accent-purple to-accent-cyan p-[2px] opacity-60">
            <div className="h-full w-full rounded-lg bg-dark-navbar" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Project Title */}
            <div className="flex items-center justify-between">
              {demoUrl ? (
                <Link href={demoUrl} target="_blank">
                  <h3 className="bg-gradient-to-r from-white to-main-blue bg-clip-text text-2xl font-bold text-transparent transition-all hover:from-main-blue hover:to-accent-cyan md:text-3xl lg:text-4xl">
                    {title}
                  </h3>
                </Link>
              ) : (
                <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  {title}
                </h3>
              )}
              <div className="flex items-center gap-2 md:gap-4">
                {repoUrl && (
                  <motion.div whileHover={hoverVariants.scaleGlow}>
                    <Link
                      href={repoUrl}
                      target="_blank"
                      className="text-xl text-gray-font transition-colors hover:text-white md:text-2xl"
                    >
                      <FaGithub />
                    </Link>
                  </motion.div>
                )}
                {demoUrl && (
                  <motion.div whileHover={hoverVariants.scaleGlow}>
                    <Link
                      href={demoUrl}
                      target="_blank"
                      className="text-xl text-gray-font transition-colors hover:text-white md:text-2xl"
                    >
                      <FaArrowUpRightFromSquare />
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Project Description */}
            <p className="mt-2 line-clamp-3 text-justify text-sm leading-relaxed text-gray-font md:mt-3 md:text-base">
              {description}
            </p>

            {/* Project Tech Stack */}
            <div className="mt-4 flex flex-wrap items-center gap-2 md:mt-7 md:gap-3">
              {stacks.map((stack, i) => (
                <motion.div
                  key={stack.name}
                  className="group/badge relative"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div className="rounded-full bg-surface/50 p-1.5 backdrop-blur-sm ring-1 ring-main-blue/20 transition-all group-hover/badge:bg-surface group-hover/badge:ring-main-blue/50 group-hover/badge:shadow-[0_0_15px_rgba(65,144,217,0.4)]">
                    <Image
                      src={stack.imgPath}
                      width={24}
                      height={24}
                      alt={stack.name}
                      title={stack.name}
                      className="size-5 md:size-6"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </TiltCard>
    </article>
  );
}

export default ProjectCard;
