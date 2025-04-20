"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[80vh] w-full flex-col items-center justify-center md:mt-10 md:h-[89vh]"
    >
      <div className="absolute inset-0 h-screen w-full lg:-top-40 lg:h-[110vh]">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={40}
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
          delay={0.3}
          className="text-5xl [text-shadow:_3px_3px_0_rgb(68_73_172_/_100%)] md:text-6xl lg:text-7xl"
        />
        <motion.p
          className="max-w-72 text-center text-xs leading-relaxed tracking-wide md:max-w-[400px] md:text-sm lg:text-base"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        >
          I’m a{" "}
          <span className="font-semibold underline">
            Front-End Web Developer
          </span>{" "}
          from Indonesia. Specialized in using Next.js, TypeScript, TailwindCSS,
          Figma.
        </motion.p>

        <motion.a
          href="#projects"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <button className="group relative mb-2 mr-2 mt-4 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br  from-main-blue to-dark-blue p-0.5 text-sm font-medium  text-white duration-200 hover:text-white focus:ring-4 focus:ring-main-blue group-hover:from-main-blue group-hover:to-dark-blue dark:text-black dark:focus:ring-blue-800">
            <span className="relative flex items-center gap-2 rounded-md bg-gray-900 px-5 py-2.5 text-base transition-all duration-200 ease-in group-hover:bg-opacity-0 dark:bg-white">
              🔗 View My Projects
            </span>
          </button>
        </motion.a>
      </div>
    </section>
  );
}
