"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="flex flex-col justify-center px-6 py-24 max-sm:mt-10 md:px-16 lg:h-screen xl:px-40"
    >
      <div className="flex flex-col items-center justify-between max-xl:gap-8 lg:flex-row xl:gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              About Me
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative mt-2"
          >
            <div className="absolute left-0 top-0 h-[5px] w-1/4 bg-gradient-to-r from-main-blue via-transparent to-transparent" />
            <div className="absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 max-w-[550px] space-y-4 text-gray-font md:space-y-8"
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
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: "backInOut" }}
        >
          <Image
            src={"/assets/profile.jpg"}
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
