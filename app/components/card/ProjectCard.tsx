"use client";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function ProjectCard({
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
    <article className="group/card grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
      {/* Image */}
      <motion.div
        className={`relative aspect-video w-full overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] ${
          position !== "left" ? "lg:order-2" : ""
        }`}
        whileHover="hover"
      >
        {/* Glow behind image */}
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-500/[0.06] to-indigo-500/[0.04] opacity-0 blur-xl transition-opacity duration-500 group-hover/card:opacity-100" />

        <motion.div
          className="relative h-full w-full"
          variants={{ hover: { scale: 1.03 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={imgUrl}
            width={800}
            height={500}
            alt={title}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030305]/80 to-transparent" />

        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </motion.div>

      {/* Details */}
      <div
        className={`flex flex-col ${
          position !== "left" ? "lg:items-end lg:text-right" : ""
        }`}
      >
        {/* Index number */}
        <span className="mb-3 text-[11px] tabular-nums tracking-[0.2em] text-neutral-700">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title + Links */}
        <div
          className={`mb-4 flex items-center gap-4 ${
            position !== "left"
              ? "flex-row-reverse justify-end lg:justify-start"
              : ""
          }`}
        >
          {demoUrl ? (
            <Link href={demoUrl} target="_blank" className="group/title">
              <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover/title:text-blue-400 md:text-3xl lg:text-4xl">
                {title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              {title}
            </h3>
          )}

          <div className="flex items-center gap-3">
            {repoUrl && (
              <Link
                href={repoUrl}
                target="_blank"
                className="text-neutral-600 transition-colors hover:text-white"
              >
                <FaGithub className="h-4.5 w-4.5" />
              </Link>
            )}
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                className="text-neutral-600 transition-colors hover:text-white"
              >
                <FaArrowUpRightFromSquare className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className={`mb-6 max-w-lg text-[15px] leading-[1.8] text-neutral-500 ${
            position !== "left" ? "lg:ml-auto" : ""
          }`}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div
          className={`flex flex-wrap items-center gap-2 ${
            position !== "left" ? "lg:justify-end" : ""
          }`}
        >
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + i * 0.05,
                duration: 0.3,
                ease: "easeOut",
              }}
              className="group/stack relative"
            >
              <div className="flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1.5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05]">
                <Image
                  src={stack.imgPath}
                  width={20}
                  height={20}
                  alt={stack.name}
                  className="size-3.5 md:size-4"
                />
                <span className="text-[10px] font-medium text-neutral-500 transition-colors group-hover/stack:text-neutral-300 md:text-[11px]">
                  {stack.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}
