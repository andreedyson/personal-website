"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ChevronsDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[89vh] w-full flex-col items-center justify-center py-48 md:mt-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          animate={{
            y: ["0%", "-20%", "0%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-10 flex size-12 items-center justify-center rounded-md bg-white/40 md:left-8 md:top-60 lg:left-12 lg:size-20 xl:left-60"
        >
          <Image
            src={"/assets/stacks/nextjs.svg"}
            width={56}
            height={56}
            alt="Next.js"
            className="size-8 lg:size-12"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{
            y: ["0%", "-20%", "0%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute bottom-40 left-28 flex size-12 items-center justify-center rounded-md bg-white/40 md:bottom-72 md:left-32 lg:bottom-60 lg:left-[200px] lg:size-20 xl:left-[400px]"
        >
          <Image
            src={"/assets/stacks/typescript.svg"}
            width={56}
            height={56}
            alt="TypeScript"
            className="size-8 lg:size-12"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
      >
        <motion.div
          animate={{
            y: ["0%", "-20%", "0%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-28 flex size-12 items-center justify-center rounded-md bg-white/40 md:right-8 md:top-60 lg:right-12 lg:size-20 xl:right-60"
        >
          <Image
            src={"/assets/stacks/mongodb.svg"}
            width={56}
            height={56}
            alt="MongoDB"
            className="size-8 lg:size-12"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.1 }}
      >
        <motion.div
          animate={{
            y: ["0%", "-20%", "0%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-10 flex size-12 items-center justify-center rounded-md bg-white/40 md:bottom-72 md:right-32 lg:bottom-60 lg:right-[200px] lg:size-20 xl:right-[400px]"
        >
          <Image
            src={"/assets/stacks/tailwindcss.svg"}
            width={56}
            height={56}
            alt="Tailwind"
            className="size-8 lg:size-12"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 h-screen w-full lg:-top-40 lg:h-[110vh]">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={80}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center text-white">
        <motion.h3
          className="text-base font-semibold md:text-lg lg:text-xl"
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.5 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 10,
          }}
        >
          Hello everyone, I&apos;m
        </motion.h3>
        <TextGenerateEffect
          words="Andre Edyson"
          delay={0.5}
          className="text-4xl [text-shadow:_3px_3px_0_rgb(68_73_172_/_100%)] md:text-5xl lg:text-7xl"
        />
        <motion.p
          className="max-w-72 text-center text-xs leading-relaxed tracking-wide md:max-w-[400px] md:text-sm lg:text-base"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, delay: 1, ease: "backInOut" }}
        >
          I’m a{" "}
          <span className="font-semibold underline">
            Front-End Web Developer
          </span>{" "}
          from Indonesia. Specialized in using Next.js, TypeScript, TailwindCSS,
          MongoDB.
        </motion.p>

        <motion.a
          href="#projects"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.5, ease: "backInOut" }}
        >
          <button className="group relative mb-2 mr-2 mt-4 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-main-blue to-dark-blue p-0.5 text-sm font-medium  text-white duration-200 hover:text-white focus:ring-4 focus:ring-main-blue group-hover:from-main-blue group-hover:to-dark-blue dark:text-black dark:focus:ring-blue-800">
            <span className="relative flex items-center gap-2 rounded-md bg-gray-900 px-5 py-2.5 text-base transition-all duration-200 ease-in group-hover:bg-opacity-0 dark:bg-white">
              Check out my work
              <ChevronsDown size={24} />
            </span>
          </button>
        </motion.a>
      </div>
    </section>
  );
}
