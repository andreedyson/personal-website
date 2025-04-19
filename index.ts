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
];

export const headerPopupAnimationVariants = {
  hidden: {
    opacity: 0,
    y: -80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1.2,
      type: "spring",
      stiffness: 250,
      damping: 10,
    },
  },
};
