"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { aboutVariants, staggerContainer } from "@/lib/animation-variants";

export default function About() {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { once: true });

  const paragraphs = [
    "Hi, thanks for taking your time visiting my portfolio website! My name is Andre Edyson, I'm 20 years old and I love making websites.",
    "My web development journey started when I was a kid. As a 10 years old, I got my very first laptop and it spark my interest not only in watching YouTube videos, but also exploring the internet. What started with copying HTML and CSS templates for fun slowly turned into a passion for building interactive and useful interfaces.",
    "That curiosity grew into a skillset and now, I build modern web applications using tools like Next.js, Javascript, Typescript and TailwindCSS. I love solving problems through clean UI and thoughtful code. Whether it's a dashboard, landing page, or internal tool. My goal is always the same: make it fast, functional, and visually engaging.",
  ];

  return (
    <section
      id="about"
      className="section relative flex h-full flex-col justify-center max-sm:mt-10"
    >
      {/* Dot Background */}
      <div>
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center bg-dark-bg bg-dot-white/[0.3] dark:bg-black dark:bg-dot-white/[0.2]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-dark-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between max-xl:gap-8 lg:flex-row xl:gap-12">
        {/* About Header */}
        <div ref={ref}>
          <motion.div
            variants={aboutVariants.header}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="z-50 bg-gradient-to-r from-white to-main-blue bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              About Me
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mt-2"
          >
            <div className="absolute left-0 top-0 h-[5px] w-1/4 bg-gradient-to-r from-main-blue via-accent-cyan to-transparent" />
            <div className="absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-accent-purple to-transparent" />
            <div className="absolute left-0 top-0 h-px w-2/4 bg-gradient-to-r from-main-blue via-accent-cyan to-transparent" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-6 max-w-[550px] space-y-4 text-sm text-slate-300 md:space-y-6 md:text-base"
          >
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={aboutVariants.text}
                custom={i}
                className="leading-relaxed"
              >
                {text.includes("very first laptop") ? (
                  <>
                    {text.split("very first laptop")[0]}
                    <span className="font-semibold text-white underline decoration-main-blue">
                      very first laptop
                    </span>
                    {text.split("very first laptop")[1].split("exploring the internet")[0]}
                    <span className="font-semibold text-white underline decoration-accent-cyan">
                      exploring the internet
                    </span>
                    {text.split("exploring the internet")[1].split("HTML")[0]}
                    <span className="font-semibold text-orange-500">HTML</span>
                    {text.split("HTML")[1].split("CSS")[0]}
                    <span className="font-semibold text-sky-400">CSS</span>
                    {text.split("CSS")[1]}
                  </>
                ) : text.includes("Next.js") ? (
                  <>
                    {text.split("Next.js")[0]}
                    <span className="font-semibold text-slate-200">Next.js</span>
                    {text.split("Next.js")[1].split("Javascript")[0]}
                    <span className="font-semibold text-yellow-400">Javascript</span>
                    {text.split("Javascript")[1].split("Typescript")[0]}
                    <span className="font-semibold text-sky-500">Typescript</span>
                    {text.split("Typescript")[1].split("TailwindCSS")[0]}
                    <span className="font-semibold text-sky-300">TailwindCSS</span>
                    {text.split("TailwindCSS")[1].replace("it's", "it&apos;s")}
                  </>
                ) : (
                  text.replace("I'm", "I&apos;m")
                )}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={aboutVariants.image}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Gradient glow effect behind image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-main-blue via-accent-purple to-accent-cyan opacity-30 blur-2xl" />

          <Image
            src={"/assets/profile_andre.png"}
            width={1200}
            height={1200}
            alt="Personal Photo"
            className="relative size-[300px] rounded-full object-cover object-right ring-4 ring-main-blue/50 [box-shadow:_20px_5px_2px_rgb(0_0_0_/_100%)] md:size-[400px] 2xl:-translate-x-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
