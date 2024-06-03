"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 md:top-10">
      <div className="relative">
        {/* Desktop Navigation Bar */}
        <div className="hidden justify-center md:flex">
          <nav className="flex items-center gap-12 rounded-full bg-dark-navbar px-[40px] py-2 text-base text-white">
            <a href="/">
              <Image
                src={"/assets/logo.png"}
                width={36}
                height={36}
                alt="Logo AE"
              />
            </a>
            <a href="#home" className="duration-200 hover:text-main-blue">
              Home
            </a>
            <a href="#about" className="duration-200 hover:text-main-blue">
              About
            </a>
            <a href="#stacks" className="duration-200 hover:text-main-blue">
              Stacks
            </a>
            <a href="#projects" className="duration-200 hover:text-main-blue">
              Projects
            </a>
            <a href="#contact" className="duration-200 hover:text-main-blue">
              Contact
            </a>
          </nav>
        </div>
        {/* Mobile Navigation Bar */}
        <div className="flex items-center justify-between bg-dark-navbar p-6 text-white md:hidden">
          <div>
            <a href="/">
              <Image
                src={"/assets/logo.png"}
                width={40}
                height={40}
                alt="Logo AE"
              />
            </a>
          </div>
          <div onClick={handleOpenNav}>
            {openNav ? <X size={32} /> : <Menu size={32} />}
          </div>
          <div
            className={`fixed right-0 top-[88px] h-full w-[70%] bg-[#122540] p-10 transition-transform duration-300 ease-in-out ${
              openNav
                ? "translate-x-0 shadow-md shadow-black"
                : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              <a href="#home" onClick={handleOpenNav}>
                Home
              </a>
              <a href="#about" onClick={handleOpenNav}>
                About
              </a>
              <a href="#stacks" onClick={handleOpenNav}>
                Stacks
              </a>
              <a href="#projects" onClick={handleOpenNav}>
                Projects
              </a>
              <a href="#contact" onClick={handleOpenNav}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
