"use client";

import React, { useRef } from "react";
import Socials from "./layout/Socials";
import { motion, useInView } from "framer-motion";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const popupAnimationVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.5,
        type: "spring",
        stiffness: 250,
        damping: 10,
      },
    },
  };
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center px-6 py-24 text-white md:px-16 xl:px-40"
    >
      {/* Dot Background */}
      <div>
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full  items-center justify-center bg-dark-bg bg-dot-main-blue/[0.5] dark:bg-black dark:bg-dot-white/[0.2]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-dark-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>
      <motion.div
        ref={ref}
        variants={popupAnimationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center"
      >
        {/* Contact Header */}
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-wider md:text-5xl lg:text-6xl">
            Let&apos;s Chat!
          </h2>
          <p className="w-full tracking-wide text-slate-300 md:max-w-[550px]">
            Looking forward to connect with fellow developers, potential
            clients, and anyone interested in my work. Whether you have a
            project in mind or just want to say hello, feel free to reach out.
          </p>
          <a href="mailto:andreedyson31@gmail.com">
            <button className="mt-4 rounded-lg bg-transparent px-6 py-3 font-semibold outline-dashed outline-main-blue duration-200 hover:-translate-y-1.5 hover:bg-main-blue hover:shadow-[0px_8px_0px_0px_rgba(69,73,172,0.7)] hover:outline">
              Connect With Me!
            </button>
          </a>
        </div>

        <div className="mt-20 flex items-center gap-8">
          <div className="h-[3px] w-24 rounded-full bg-gray-font md:w-64" />
          <p className="font-bold text-gray-font">OR</p>
          <div className="h-[3px] w-24 rounded-full bg-gray-font md:w-64" />
        </div>

        <div className="mt-20">
          <Socials />
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
