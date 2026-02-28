"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#stacks", label: "Stacks" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Mobile menu excludes Home (logo already links there)
  const mobileNavLinks = navLinks.filter((link) => link.href !== "#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "stacks",
        "projects",
        "contact",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 300) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openNav ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openNav]);

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full justify-center px-4 pt-4 md:pt-6">
        {/* DESKTOP */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`hidden items-center gap-1 rounded-full border px-2 py-1.5 backdrop-blur-xl transition-all duration-500 md:flex ${
            scrolled
              ? "border-white/[0.08] bg-[#0A0A0F]/80 shadow-lg shadow-black/30"
              : "border-white/[0.04] bg-[#0A0A0F]/40"
          }`}
        >
          <Link href="#home" className="group px-3 py-1.5">
            <Image
              src="/assets/logo.png"
              width={24}
              height={24}
              alt="Logo"
              className="opacity-70 transition-all duration-300 group-hover:opacity-100"
            />
          </Link>

          <div className="mx-1 h-4 w-px bg-white/[0.06]" />

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-300 ${
                activeSection === link.href
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-white/[0.06]"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}

          <div className="mx-1 h-4 w-px bg-white/[0.06]" />

          <Link
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-white/[0.06] px-5 py-1.5 text-[13px] font-medium text-neutral-300 transition-all duration-300 hover:bg-white hover:text-black"
          >
            Let&apos;s Talk
          </Link>
        </motion.nav>

        {/* MOBILE TOP BAR */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-500 md:hidden ${
            scrolled
              ? "border-white/[0.08] bg-[#0A0A0F]/80 shadow-lg shadow-black/30"
              : "border-white/[0.04] bg-[#0A0A0F]/40"
          }`}
        >
          <Link href="#home" onClick={() => setOpenNav(false)}>
            <Image
              src="/assets/logo.png"
              width={24}
              height={24}
              alt="Logo"
              className="opacity-70"
            />
          </Link>

          <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-600">
            {navLinks.find((l) => l.href === activeSection)?.label ?? "Home"}
          </span>

          <button
            onClick={() => setOpenNav((prev) => !prev)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.04] text-neutral-400 transition-colors hover:text-white"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {openNav ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={16} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#030305]/[0.98] backdrop-blur-2xl" />

            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[100px]" />

            <div className="relative flex h-full flex-col items-center justify-center px-6 pb-24 pt-20">
              <div className="flex flex-col items-center gap-2">
                {mobileNavLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{
                      delay: 0.08 * i + 0.1,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="group"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpenNav(false)}
                      className={`flex items-center gap-4 rounded-2xl px-8 py-4 transition-all duration-300 ${
                        activeSection === link.href
                          ? "bg-white/[0.04]"
                          : "hover:bg-white/[0.02]"
                      }`}
                    >
                      <span className="w-8 text-right text-[11px] tabular-nums text-neutral-700">
                        0{i + 1}
                      </span>
                      <span
                        className={`text-2xl font-semibold tracking-tight transition-colors ${
                          activeSection === link.href
                            ? "text-white"
                            : "text-neutral-600 group-hover:text-neutral-300"
                        }`}
                      >
                        {link.label}
                      </span>
                      {activeSection === link.href && (
                        <motion.div
                          layoutId="activeMobileNav"
                          className="h-1 w-1 rounded-full bg-blue-400"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-12"
              >
                <Link
                  href="#contact"
                  onClick={() => setOpenNav(false)}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] active:scale-95"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-2 pb-[env(safe-area-inset-bottom)]"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[11px] text-neutral-600">
                    Available for work
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
