"use client";

import React from "react";
import { Github, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { contactVariants, hoverVariants } from "@/lib/animation-variants";

const socials = [
  { href: "https://github.com/andreedyson", Icon: Github, label: "GitHub" },
  {
    href: "https://instagram.com/andreedyson",
    Icon: Instagram,
    label: "Instagram",
  },
  { href: "mailto:andreedyson31@gmail.com", Icon: Mail, label: "Email" },
];

function Socials() {
  return (
    <div className="flex items-center justify-center gap-8">
      {socials.map((social, i) => (
        <motion.a
          key={social.label}
          href={social.href}
          target={social.label !== "Email" ? "_blank" : undefined}
          rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
          variants={contactVariants.social(i)}
          initial="hidden"
          animate="visible"
          whileHover={{
            ...hoverVariants.scale,
            color: "#4190D9",
            boxShadow: "0 0 20px rgba(65, 144, 217, 0.5)",
          }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full bg-gradient-to-br from-dark-navbar to-surface p-3 text-gray-font outline outline-2 outline-main-blue/20 transition-colors"
        >
          <social.Icon size={24} />
        </motion.a>
      ))}
    </div>
  );
}

export default Socials;
