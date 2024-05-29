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
    <header className="relative md:sticky md:top-10">
      {/* Desktop Navigation Bar */}
      <div className="hidden justify-center md:flex">
        <nav className="flex items-center gap-12 rounded-full bg-[#06040c] px-[60px] py-3 text-lg text-white">
          <a href="/">
            <Image
              src={"/assets/logo.png"}
              width={36}
              height={36}
              alt="Logo AE"
            />
          </a>
          <a href="#home" className="hover:text-main-blue duration-200">
            Home
          </a>
          <a href="#about" className="hover:text-main-blue duration-200">
            About
          </a>
          <a href="#stack" className="hover:text-main-blue duration-200">
            Stacks
          </a>
          <a href="#project" className="hover:text-main-blue duration-200">
            Projects
          </a>
          <a href="#contact" className="hover:text-main-blue duration-200">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="flex items-center justify-between bg-[#06040c] p-6 text-white md:hidden">
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
          className={`fixed right-0 top-[88px] h-full w-[70%] bg-[#150f28] p-10 transition-transform duration-300 ease-in-out ${
            openNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <a href="#home" onClick={handleOpenNav}>
              Home
            </a>
            <a href="#about" onClick={handleOpenNav}>
              About
            </a>
            <a href="#stack" onClick={handleOpenNav}>
              Stacks
            </a>
            <a href="#project" onClick={handleOpenNav}>
              Projects
            </a>
            <a href="#contact" onClick={handleOpenNav}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
