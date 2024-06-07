import React from "react";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-3 py-4 text-white md:py-6">
      <a
        href="https://github.com/andreedyson"
        target="_blank"
        className=" text-gray-font duration-200 hover:text-white hover:underline hover:underline-offset-8"
      >
        Created and Crafted by <span>Andre Edyson</span>
      </a>
      <p>
        Using <span className="font-semibold text-gray-200">Next.js</span>,{" "}
        <span className="font-semibold text-blue-400">TailwindCSS</span>,{" "}
        <span className="font-semibold text-red-400">Framer Motion</span>
      </p>
    </footer>
  );
}

export default Footer;
