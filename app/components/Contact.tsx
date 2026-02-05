"use client";

import React, { useRef } from "react";
import Socials from "./layout/Socials";
import { motion, useInView } from "framer-motion";
import MagneticButton from "./animations/MagneticButton";
import { contactVariants, staggerContainer } from "@/lib/animation-variants";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = ["Let's", "Connect!"];

  return (
    <section
      id="contact"
      className="section relative flex flex-col items-center"
    >
      {/* Dot Background with gradient overlay */}
      <div>
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center bg-dark-bg bg-dot-main-blue/[0.5] dark:bg-black dark:bg-dot-white/[0.2]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-dark-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center"
      >
        {/* Contact Header */}
        <div className="flex w-full flex-col items-center gap-6 text-center">
          {/* Animated header with staggered words */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-4xl font-bold uppercase tracking-wide md:text-5xl lg:gap-4 lg:text-6xl">
            {words.map((word, i) => (
              <motion.h2
                key={i}
                variants={contactVariants.header(i)}
                className="bg-gradient-to-r from-white to-main-blue bg-clip-text text-transparent"
              >
                {word}
              </motion.h2>
            ))}
          </div>

          <motion.p
            variants={contactVariants.header(2)}
            className="w-full text-sm leading-relaxed tracking-wide text-slate-300 md:max-w-[550px] md:text-base"
          >
            I&apos;m excited to connect with fellow developers, potential clients,
            and anyone curious about my work. If you&apos;re interested in
            collaborating on a project or simply want to chat, don&apos;t
            hesitate to get in touch!
          </motion.p>

          <motion.div variants={contactVariants.button}>
            <a href="mailto:andreedyson31@gmail.com">
              <MagneticButton
                className="mt-4 rounded-lg bg-gradient-to-br from-main-blue to-dark-blue px-6 py-3 font-semibold text-white shadow-lg shadow-main-blue/30 outline-dashed outline-2 outline-offset-2 outline-main-blue transition-all duration-300 hover:shadow-main-blue/50 hover:outline-offset-4"
                magneticRadius={120}
                magneticStrength={0.3}
              >
                Connect With Me!
              </MagneticButton>
            </a>
          </motion.div>
        </div>

        {/* Animated divider */}
        <motion.div
          variants={contactVariants.header(3)}
          className="mt-20 flex items-center gap-8"
        >
          <motion.div
            className="h-px w-24 rounded-full bg-gradient-to-r from-transparent via-gray-font to-gray-font md:w-64"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
          <p className="font-bold text-gray-font">OR</p>
          <motion.div
            className="h-px w-24 rounded-full bg-gradient-to-l from-transparent via-gray-font to-gray-font md:w-64"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          variants={contactVariants.header(4)}
          className="mt-20"
        >
          <Socials />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
