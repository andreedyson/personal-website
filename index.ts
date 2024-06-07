export const stackData = [
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
    name: "Framer Motion",
    imgUrl: "/assets/stacks/framer.svg",
  },
  {
    name: "GSAP",
    imgUrl: "/assets/stacks/gsap.svg",
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

export const projectsData = [
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
    title: "CineReel",
    description:
      "Next.js and MongoDB-powered movie database web app with shadcn for seamless browsing, adding favorites, writing reviews, accessing movie details and giving ratings.",
    imgUrl: "/assets/projects/cinereel.webp",
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
        name: "MongoDB",
        imgPath: "/assets/stacks/mongodb.svg",
      },
    ],
    repoUrl: "https://github.com/andreedyson/cinereel",
    demoUrl: "https://cinereel.vercel.app/",
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
