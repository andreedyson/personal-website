import { ProjectType } from "./types/config";

export const TECH_STACKS = [
  {
    name: "Javascript",
    imgUrl: "/assets/stacks/javascript.svg",
  },
  {
    name: "Typescript",
    imgUrl: "/assets/stacks/typescript.svg",
  },
  {
    name: "Next.js",
    imgUrl: "/assets/stacks/nextjs.svg",
  },
  {
    name: "React",
    imgUrl: "/assets/stacks/react.svg",
  },
  {
    name: "TailwindCSS",
    imgUrl: "/assets/stacks/tailwindcss.svg",
  },
  {
    name: "MongoDB",
    imgUrl: "/assets/stacks/mongodb.svg",
  },
  {
    name: "Git",
    imgUrl: "/assets/stacks/git.svg",
  },
  {
    name: "GitHub",
    imgUrl: "/assets/stacks/github.svg",
  },
  {
    name: "shadcn",
    imgUrl: "/assets/stacks/shadcn.svg",
  },
  {
    name: "Prisma",
    imgUrl: "/assets/stacks/prisma.svg",
  },
  {
    name: "PostgreSQL",
    imgUrl: "/assets/stacks/postgre.svg",
  },
  {
    name: "Vercel",
    imgUrl: "/assets/stacks/vercel.svg",
  },
  {
    name: "Framer Motion",
    imgUrl: "/assets/stacks/framer.svg",
  },
  {
    name: "Supabase",
    imgUrl: "/assets/stacks/supabase.svg",
  },
  {
    name: "Figma",
    imgUrl: "/assets/stacks/figma.svg",
  },
  {
    name: "Vite",
    imgUrl: "/assets/stacks/vitejs.svg",
  },
];

export const PROJECTS_DATA = [
  {
    title: "PEDI Learn",
    description:
      "PEDI Learn is a Learning Management System designed to help students explore and develop skills aligned with their chosen industries.",
    imgUrl: "/assets/projects/pedi-showcase.svg",
    stacks: [
      {
        name: "Next.js",
        imgPath: "/assets/stacks/nextjs.svg",
      },
      {
        name: "React",
        imgPath: "/assets/stacks/react.svg",
      },
      {
        name: "Tailwind",
        imgPath: "/assets/stacks/tailwindcss.svg",
      },
      {
        name: "shadcn",
        imgPath: "/assets/stacks/shadcn.svg",
      },
      {
        name: "Prisma",
        imgPath: "/assets/stacks/prisma.svg",
      },
    ],
    demoUrl: "https://pedilearn.com",
  },
  {
    title: "Emploria",
    description:
      "Emploria is an Open Source SAP system for employee management. Supports multi-tenant, role-based access, PDF pay slip generation, and much more. Built with Next.js, Prisma, PostgreSQL, Supabase, TailwindCSS.",
    imgUrl: "/assets/projects/emploria.png",
    stacks: [
      {
        name: "Next.js",
        imgPath: "/assets/stacks/nextjs.svg",
      },
      {
        name: "React",
        imgPath: "/assets/stacks/react.svg",
      },
      {
        name: "Tailwind",
        imgPath: "/assets/stacks/tailwindcss.svg",
      },
      {
        name: "shadcn",
        imgPath: "/assets/stacks/shadcn.svg",
      },
      {
        name: "PostgreSQL",
        imgPath: "/assets/stacks/postgre.svg",
      },
      {
        name: "Prisma",
        imgPath: "/assets/stacks/prisma.svg",
      },
      {
        name: "Supabase",
        imgPath: "/assets/stacks/supabase.svg",
      },
    ],
    repoUrl: "https://github.com/andreedyson/emploria",
    demoUrl: "https://emploria-ceyu.vercel.app/",
  },
  {
    title: "TechDome",
    description:
      "Tech Dome is a modern e-commerce interface designed for tech platforms. Utilizing Next.js for server-side rendering, Tailwind CSS for rapid UI development, and Zustand for state management, it offers a seamless and efficient shopping experience.",
    imgUrl: "/assets/projects/tech-dome.webp",
    stacks: [
      {
        name: "Next.js",
        imgPath: "/assets/stacks/nextjs.svg",
      },
      {
        name: "React",
        imgPath: "/assets/stacks/react.svg",
      },
      {
        name: "Tailwind",
        imgPath: "/assets/stacks/tailwindcss.svg",
      },
      {
        name: "PostgreSQL",
        imgPath: "/assets/stacks/postgre.svg",
      },
      {
        name: "Prisma",
        imgPath: "/assets/stacks/prisma.svg",
      },
      {
        name: "Supabase",
        imgPath: "/assets/stacks/supabase.svg",
      },
    ],
    repoUrl: "https://github.com/andreedyson/tech-dome",
    demoUrl: "https://tech-dome-andre.vercel.app/",
  },
  {
    title: "StockifyHub",
    description:
      "StockifyHub is an inventory management web app built with Next.js, PostgreSQL, Prisma, and Tailwind CSS. It simplifies stock tracking and management with role-based access control, real-time updates, and a modern, responsive design.",
    imgUrl: "/assets/projects/stockify_landing.webp",
    stacks: [
      {
        name: "Next.js",
        imgPath: "/assets/stacks/nextjs.svg",
      },
      {
        name: "Tailwind",
        imgPath: "/assets/stacks/tailwindcss.svg",
      },
      {
        name: "TypeScript",
        imgPath: "/assets/stacks/typescript.svg",
      },
      {
        name: "shadcn",
        imgPath: "/assets/stacks/shadcn.svg",
      },
      {
        name: "PostgreSQL",
        imgPath: "/assets/stacks/postgre.svg",
      },
      {
        name: "Prisma",
        imgPath: "/assets/stacks/prisma.svg",
      },
    ],
    repoUrl: "https://github.com/andreedyson/stockify-hub",
    demoUrl: "https://stockify-hub.vercel.app/",
  },
  {
    title: "FinTrack",
    description:
      "A finance tracker web app with Next.js, MongoDB, and TypeScript. Easily manage accounts, track income, expenses, transfers, and categories with secure NextAuth. Take control of your finances effortlessly!",
    imgUrl: "/assets/projects/fintrack.webp",
    stacks: [
      {
        name: "Next.js",
        imgPath: "/assets/stacks/nextjs.svg",
      },
      {
        name: "Typescript",
        imgPath: "/assets/stacks/typescript.svg",
      },
      {
        name: "Tailwind",
        imgPath: "/assets/stacks/tailwindcss.svg",
      },
      {
        name: "shadcn",
        imgPath: "/assets/stacks/shadcn.svg",
      },
      {
        name: "MongoDB",
        imgPath: "/assets/stacks/mongodb.svg",
      },
    ],
    repoUrl: "https://github.com/andreedyson/fintrack",
    demoUrl: "https://fintrack-andre.vercel.app/",
  },
  {
    title: "Agenone",
    description:
      "Digital agency's React-based landing page, styled with Tailwind CSS, animated with GSAP that features hero, skills, projects, and testimonials.",
    imgUrl: "/assets/projects/agenone.webp",
    stacks: [
      {
        name: "React",
        imgPath: "/assets/stacks/react.svg",
      },
      {
        name: "Tailwind",
        imgPath: "/assets/stacks/tailwindcss.svg",
      },
      {
        name: "GSAP",
        imgPath: "/assets/stacks/gsap.svg",
      },
    ],
    repoUrl: "https://github.com/andreedyson/agenone",
    demoUrl: "https://agenone-omega.vercel.app/",
  },
] satisfies ProjectType[];

export const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    companyUrl: undefined,
    location: "Remote",
    type: "Self-employed",
    startDate: "Jan 2024",
    endDate: "Present",
    description:
      "Building modern web applications for clients using Next.js, TypeScript, and TailwindCSS. Handling end-to-end development from design implementation to deployment.",
    highlights: [
      "Delivered 5+ client projects ranging from landing pages to full-stack dashboards",
      "Integrated REST APIs and third-party services like payment gateways and auth providers",
      "Improved Core Web Vitals scores by 40% on average through performance optimization",
    ],
    stacks: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
  },
  {
    role: "Frontend Developer Intern",
    company: "PT. Tech Nusantara",
    companyUrl: "https://example.com",
    location: "Jakarta, Indonesia",
    type: "Internship",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    description:
      "Collaborated with a cross-functional team to develop and maintain internal tools and customer-facing web applications.",
    highlights: [
      "Built reusable component library used across 3 internal projects",
      "Reduced page load times by 35% through code splitting and lazy loading",
      "Participated in code reviews and agile sprint planning",
    ],
    stacks: ["React", "JavaScript", "TailwindCSS", "Hono"],
  },
  {
    role: "Web Developer",
    company: "University Project Team",
    companyUrl: undefined,
    location: "Indonesia",
    type: "Academic",
    startDate: "Aug 2022",
    endDate: "May 2023",
    description:
      "Led frontend development for multiple university capstone and course projects, mentoring team members on modern web practices.",
    highlights: [
      "Led a team of 4 developers to build a full-stack inventory management system",
      "Implemented authentication and role-based access control with NextAuth",
      "Presented final project to a panel of industry professionals",
    ],
    stacks: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
];

// Animation variants have been moved to lib/animation-variants.ts
// Import from there for diverse, section-specific animations
// This old variant is kept for backward compatibility but will be phased out
export const headerPopupAnimationVariants = {
  hidden: {
    opacity: 0,
    y: -80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      type: "spring",
      stiffness: 250,
      damping: 10,
    },
  },
};

// Re-export new animation variants for easy access
export * from "./lib/animation-variants";
