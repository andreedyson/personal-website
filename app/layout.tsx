import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

export const metadata: Metadata = {
  title: "Andre Edyson | Front-End Web Developer",
  description: "Personal portfolio website by Andre Edyson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-[1920px] bg-[#241440]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
