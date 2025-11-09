import Link from "next/link";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-3 py-4 text-white md:py-6">
      <Link
        href="https://github.com/andreedyson"
        target="_blank"
        className=" text-sm text-gray-font duration-200 hover:text-white hover:underline hover:underline-offset-8 md:text-base"
      >
        © {new Date().getFullYear()}. Created and Crafted by{" "}
        <span className="font-semibold text-indigo-500">Andre Edyson</span>
      </Link>
    </footer>
  );
}

export default Footer;
