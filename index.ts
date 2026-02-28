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
    role: "Frontend Web Developer",
    company: "Universitas Bandar Lampung",
    companyUrl: undefined,
    location: "Kota Bandar Lampung, Lampung, Indonesia",
    type: "Internship",
    startDate: "Aug 2025",
    endDate: "Present",
    description:
      "Developing scalable academic and learning platforms serving university staff and 1,000+ students using modern frontend architecture.",
    highlights: [
      "Built an Academic Bureau dashboard for university staff, delivering real-time data visualization of user metrics and institutional overview using Quasar Framework",
      "Developed a multilingual student registration platform (English, Bahasa Indonesia, Mandarin) using Next.js, TypeScript, TailwindCSS, and next-intl",
      "Engineered PEDI Learn, an LMS platform used by ~1,000 students, streamlining industrial interest-based learning and reducing instructor workload",
      "Collaborated with backend engineers to integrate REST APIs across multiple academic systems",
    ],
    stacks: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Quasar Framework",
      "next-intl",
    ],
  },

  {
    role: "Frontend Web Developer",
    company: "Freelance",
    companyUrl: undefined,
    location: "Remote",
    type: "Self-employed",
    startDate: "Jan 2024",
    endDate: "Present",
    description:
      "Building personal full-stack web projects focusing on real-world use cases using Next.js, TypeScript, and modern tooling.",
    highlights: [
      "Built a finance tracking app to monitor expenses and savings goals using Next.js, TypeScript, and MongoDB",
      "Created a stock management system with RESTful APIs, Prisma ORM, and PostgreSQL for dynamic inventory tracking",
      "Developed an e-commerce tech products platform with product listings, shopping cart, and checkout using Zustand for state management",
    ],
    stacks: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "PostgreSQL",
      "Zustand",
    ],
  },
  {
    role: "UI Slicing",
    company: "Fiverr",
    companyUrl: "https://fiverr.com",
    location: "Remote",
    type: "Freelance",
    startDate: "Jul 2024",
    endDate: "Aug 2024",
    description:
      "Provided UI slicing services on Fiverr, converting design mockups into pixel-perfect, responsive web pages for clients.",
    highlights: [
      "Translated Figma/PSD designs into clean, responsive HTML/CSS and React components",
      "Delivered pixel-perfect implementations with cross-browser compatibility",
      "Maintained clear client communication to ensure designs matched expectations",
    ],
    stacks: ["React", "HTML", "CSS", "TailwindCSS"],
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
