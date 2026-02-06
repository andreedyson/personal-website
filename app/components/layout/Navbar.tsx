"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleOpenNav = () => {
    setOpenNav((prev) => !prev);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#stacks", label: "Stacks" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 md:top-10">
      <div className="relative">
        {/* Desktop Navigation Bar */}
        <div className="hidden justify-center md:flex">
          <motion.nav
            className="flex items-center gap-12 rounded-full bg-dark-navbar/80 px-[40px] py-2 text-base text-white shadow-lg shadow-main-blue/20 backdrop-blur-md ring-1 ring-main-blue/20"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            <a href="/">
              <Image
                src={"/assets/logo.png"}
                width={36}
                height={36}
                alt="Logo AE"
                className="transition-transform hover:scale-110"
              />
            </a>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative font-medium transition-colors hover:text-main-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        </div>

        {/* Mobile Navigation Bar */}
        <motion.div
          className="flex items-center justify-between bg-dark-navbar/90 px-6 py-3 text-white backdrop-blur-md md:hidden"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div>
            <a href="/">
              <Image
                src={"/assets/logo.png"}
                width={40}
                height={40}
                alt="Logo AE"
                className="transition-transform hover:scale-110"
              />
            </a>
          </div>
          <motion.div
            onClick={handleOpenNav}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            {openNav ? <X size={32} /> : <Menu size={32} />}
          </motion.div>

          {/* Mobile Menu Drawer */}
          <AnimatePresence>
            {openNav && (
              <>
                {/* Overlay */}
                <motion.div
                  className="fixed inset-0 top-[64px] bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleOpenNav}
                />

                {/* Drawer */}
                <motion.div
                  className="fixed right-0 top-[64px] h-full w-[70%] bg-gradient-to-br from-dark-navbar to-surface p-10 shadow-2xl shadow-main-blue/20"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
                  <div className="flex flex-col items-center gap-6">
                    {navLinks.map((link, i) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={handleOpenNav}
                        className="text-lg font-medium transition-colors hover:text-main-blue"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}
