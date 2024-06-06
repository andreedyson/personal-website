"use client";

import React from "react";
import { Github, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Socials() {
  return (
    <div>
      <motion.div
        className="flex items-center justify-center gap-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <a
          href="https://github.com/andreedyson"
          target="_blank"
          className="text-gray-font duration-300 hover:-translate-y-2 hover:text-main-blue"
        >
          <Github size={24} />
        </a>
        <a
          href="https://instagram.com/andreedyson"
          target="_blank"
          className="text-gray-font duration-300 hover:-translate-y-2 hover:text-main-blue"
        >
          <Instagram size={24} />
        </a>
        <a
          href="mailto:andreedyson31@gmail.com"
          className="text-gray-font duration-300 hover:-translate-y-2 hover:text-main-blue"
        >
          <Mail size={24} />
        </a>
      </motion.div>
    </div>
  );
}

export default Socials;
