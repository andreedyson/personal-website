"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagneticButton from "./animations/MagneticButton";
import { heroVariants } from "@/lib/animation-variants";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax effect for floating elements
  const y1 = useTransform(scrollY, [0, 300], [0, 25]);
  const y2 = useTransform(scrollY, [0, 300], [0, -15]);
  const y3 = useTransform(scrollY, [0, 300], [0, 20]);

  return (
    <section
      id="home"
      className="relative flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden md:mt-10 md:h-[89vh]"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-blue/20 to-dark-bg"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Sparkles Background (subtle accent) */}
      <div className="absolute inset-0 h-screen w-full opacity-40 lg:-top-40 lg:h-[110vh]">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={30}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-20 w-20 rounded-full bg-main-blue/10 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute right-[15%] top-[30%] h-32 w-32 rounded-full bg-accent-purple/10 blur-3xl"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[20%] h-24 w-24 rounded-full bg-accent-cyan/10 blur-3xl"
        style={{ y: y3 }}
      />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center text-white">
        <motion.h3
          className="text-base font-semibold md:text-lg lg:text-xl"
          variants={heroVariants.greeting}
          initial="hidden"
          animate="visible"
        >
          Hello everyone, I&apos;m
        </motion.h3>

        <motion.div
          variants={heroVariants.name}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-main-blue via-accent-cyan to-accent-purple bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(65,144,217,0.5)]"
        >
          <TextGenerateEffect
            words="Andre Edyson"
            delay={0.2}
            className="text-5xl font-bold md:text-6xl lg:text-7xl"
          />
        </motion.div>

        <motion.p
          className="max-w-72 text-center text-xs leading-relaxed tracking-wide md:max-w-[400px] md:text-sm lg:text-base"
          variants={heroVariants.description}
          initial="hidden"
          animate="visible"
        >
          I&apos;m a{" "}
          <span className="font-semibold text-main-blue underline decoration-accent-cyan">
            Front-End Web Developer
          </span>{" "}
          from Indonesia. Specialized in using Next.js, TypeScript, TailwindCSS,
          Figma.
        </motion.p>

        <motion.div
          variants={heroVariants.cta}
          initial="hidden"
          animate="visible"
          className="mt-6"
        >
          <a href="#projects">
            <MagneticButton
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-main-blue to-dark-blue p-0.5 text-white shadow-lg shadow-main-blue/30 duration-200 hover:shadow-main-blue/50 focus:ring-4 focus:ring-main-blue"
              magneticRadius={120}
              magneticStrength={0.25}
            >
              <span className="relative flex items-center gap-2 rounded-md bg-dark-bg px-6 py-3 text-sm font-semibold transition-all duration-300 ease-in group-hover:bg-opacity-0 md:text-base">
                View My Projects
              </span>
            </MagneticButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
