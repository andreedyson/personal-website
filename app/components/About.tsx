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
            className="mt-6 max-w-[550px] space-y-4 text-sm text-slate-300 md:space-y-8 md:text-base"
          >
            <p>
              Hi, thanks for taking your time visiting my portfolio website!{" "}
              <br /> My name is Andre Edyson, I&apos;m 20 years old and I love
              making websites.
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
              . What started with copying{" "}
              <span className="font-semibold text-orange-500">HTML</span> and{" "}
              <span className="font-semibold text-sky-400">CSS</span>. templates
              for fun slowly turned into a passion for building interactive and
              useful interfaces.
            </p>
            <p>
              That curiosity grew into a skillset and now, I build modern web
              applications using tools like{" "}
              <span className="font-semibold text-slate-200">Next.js</span>,{" "}
              <span className="font-semibold text-yellow-400">Javascript</span>,{" "}
              <span className="font-semibold text-sky-500">Typescript</span> and{" "}
              <span className="font-semibold text-sky-300">TailwindCSS</span>. I
              love solving problems through clean UI and thoughtful code.
              Whether it&apos;s a dashboard, landing page, or internal tool. My
              goal is always the same: make it fast, functional, and visually
              engaging.
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
            width={1200}
            height={1200}
            alt="Personal Photo"
            className="size-[300px] rounded-full border-8 border-main-blue object-cover object-right [box-shadow:_20px_5px_2px_rgb(0_0_0_/_100%)] md:size-[400px] 2xl:-translate-x-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
