import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-[#030305] px-6 py-8 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-[11px] text-neutral-600">
          © {new Date().getFullYear()} Andre Edyson. All rights reserved.
        </p>
        <p className="text-[11px] text-neutral-700">
          Built with Next.js & TailwindCSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
