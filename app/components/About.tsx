"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { headerPopupAnimationVariants } from "@/index";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const descriptionAnimationVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.8,
        type: "spring",
        stiffness: 250,
        damping: 10,
      },
    },
  };

  const imageAnimationVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.8,
        type: "spring",
        stiffness: 250,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="about"
      className="section relative flex h-full flex-col justify-center max-sm:mt-10"
    >
      {/* Dot Background */}
      <div>
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full  items-center justify-center bg-dark-bg bg-dot-white/[0.3] dark:bg-black dark:bg-dot-white/[0.2]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-dark-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between max-xl:gap-8 lg:flex-row xl:gap-12">
        {/* About Header */}
        <div ref={ref}>
          <motion.div
            variants={headerPopupAnimationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="z-50 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              About Me
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative mt-2"
          >
            <div className="absolute left-0 top-0 h-[5px] w-1/4 bg-gradient-to-r from-main-blue via-transparent to-transparent" />
            <div className="absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            <div className="absolute left-0 top-0 h-px w-2/4 bg-gradient-to-r from-main-blue via-sky-500 to-transparent" />
          </motion.div>
          <motion.div
            variants={descriptionAnimationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-6 max-w-[550px] space-y-4 text-sm text-gray-font md:space-y-8 md:text-base"
          >
            <p>
              Hi, thanks for taking your time visiting my portfolio website! My
              name is Andre Edyson, I&apos;m 19 years old and I love making
              websites.
            </p>
            <p>
              My web development journey started when I was a kid. As a 10 years
              old, I got my{" "}
              <span className="font-semibold text-white underline">
                very first laptop
              </span>{" "}
              and it spark my interest not only in watching YouTube videos, but
              also{" "}
              <span className="font-semibold text-white underline">
                exploring the internet
              </span>
              . Fast forward to 8th grade, I had a computer subject in my class
              and it was the first time I was introduced to{" "}
              <span className="font-semibold text-orange-500">HTML</span> and{" "}
              <span className="font-semibold text-sky-400">CSS</span>. This
              marked the beginning of my coding journey!
            </p>
            <p>
              I dived into{" "}
              <span className="font-semibold text-orange-500">HTML</span>,{" "}
              <span className="font-semibold text-sky-400">CSS</span>, and{" "}
              <span className="font-semibold text-yellow-500">Javascript</span>{" "}
              during my high school year and gradually progressing into advanced
              technologies like{" "}
              <span className="font-semibold text-sky-500">React</span>,{" "}
              <span className="font-semibold text-gray-200">Next.js,</span>{" "}
              <span className="font-semibold text-blue-400">TailwindCSS</span>.
              I&apos;ve completed several projects along the way that you will
              see later below.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={imageAnimationVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src={"/assets/profile_andre.png"}
            width={400}
            height={400}
            alt="Personal Photo"
            className="size-[300px] rounded-full border-8 border-main-blue object-cover object-right [box-shadow:_20px_5px_2px_rgb(0_0_0_/_100%)] md:size-[400px] 2xl:-translate-x-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
