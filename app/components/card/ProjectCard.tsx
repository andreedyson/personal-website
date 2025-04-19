import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  stacks: any[];
  position: "left" | "right";
  repoUrl: string;
  demoUrl: string;
};

function ProjectCard({
  title,
  description,
  imgUrl,
  stacks,
  position,
  repoUrl,
  demoUrl,
}: Props) {
  return (
    <article className="max-lg:rounded-lg max-lg:shadow-2xl max-lg:shadow-blue-500/40">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
        {/* Projects Image */}
        <div
          className={`relative aspect-video w-full lg:w-[550px] ${position !== "left" && "lg:order-2"}`}
        >
          <Image
            src={imgUrl}
            width={400}
            height={200}
            alt={title}
            className="h-full w-full rounded-t-lg bg-gray-900 bg-center object-cover md:rounded-lg lg:h-80 lg:shadow-lg lg:shadow-white/20"
          />
        </div>

        {/* Projects Details */}
        <div className="flex h-52 flex-col justify-center border-dark-blue bg-dark-navbar px-6 py-4 text-white max-lg:rounded-b-lg lg:max-w-lg lg:rounded-lg lg:border-2 lg:shadow-[5px_5px_0px_0px_rgba(69,73,172)] 2xl:max-w-xl">
          {/* Project Title */}
          <div className="flex items-center justify-between">
            <Link href={demoUrl} target="_blank">
              <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                {title}
              </h3>
            </Link>
            <div className="flex items-center gap-2 md:gap-4">
              <Link
                href={repoUrl}
                target="_blank"
                className="text-xl text-gray-500 duration-300 hover:-translate-y-1 hover:text-white md:text-2xl"
              >
                <FaGithub />
              </Link>
              <a
                href={demoUrl}
                target="_blank"
                className="text-xl text-gray-500 duration-300 hover:-translate-y-1 hover:text-white md:text-2xl"
              >
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>

          {/* Project Description */}
          <p className="mt-2 line-clamp-3 text-justify text-sm text-gray-font md:mt-3 md:text-base">
            {description}
          </p>

          {/* Project Tech Stack */}
          <div className="mt-4 flex items-center gap-2 md:mt-7 md:gap-4">
            {stacks.map((stack) => (
              <div key={stack.name}>
                <Image
                  src={stack.imgPath}
                  width={24}
                  height={24}
                  alt={stack.name}
                  title={stack.name}
                  className="size-5 cursor-pointer rounded-full md:size-6"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
