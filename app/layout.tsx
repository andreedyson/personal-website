import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Socials from "./components/layout/Socials";

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
      <body className="relative mx-auto max-w-[1920px] bg-dark-bg">
        <Navbar />
        {children}
        <div className="lg:fixed lg:bottom-0 lg:left-10">
          <Socials />
        </div>
      </body>
    </html>
  );
}
