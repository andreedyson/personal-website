import { Variants } from "framer-motion";

// Diverse entrance animations (no more repetitive fadeUp)
export const entranceVariants = {
  fadeScale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  } as Variants,

  slideRotate: {
    hidden: { x: -50, opacity: 0, rotate: -5 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  } as Variants,

  scaleRotate3D: {
    hidden: { scale: 0.8, opacity: 0, rotateX: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  } as Variants,

  spiralIn: (index: number) => ({
    hidden: {
      scale: 0,
      rotate: 180 * (index % 2 === 0 ? 1 : -1),
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { delay: index * 0.05, type: "spring", stiffness: 100 },
    },
  }),

  slideFromLeft: {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  } as Variants,

  slideFromRight: {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  } as Variants,

  slideFromBottom: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  } as Variants,
};

// Hero section animations
export const heroVariants = {
  greeting: {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  } as Variants,

  name: {
    hidden: { scale: 0.9, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { delay: 0.2, type: "spring", damping: 15, stiffness: 100 },
    },
  } as Variants,

  description: {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  } as Variants,

  cta: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, type: "spring", damping: 15, stiffness: 100 },
    },
  } as Variants,
};

// About section animations
export const aboutVariants = {
  header: {
    hidden: { rotate: -10, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  } as Variants,

  image: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, stiffness: 100 },
    },
  } as Variants,

  text: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    }),
  },
};

// Stacks section animations
export const stacksVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  } as Variants,

  card: (index: number) => ({
    hidden: {
      scale: 0,
      rotate: 180 * (index % 2 === 0 ? 1 : -1),
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }),
};

// Project section animations
export const projectVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as Variants,

  card: (index: number) => ({
    hidden: { scale: 0.9, opacity: 0, rotateX: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: index * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  }),

  image: {
    hover: {
      scale: 1.1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  } as Variants,
};

// Contact section animations
export const contactVariants = {
  header: (index: number) => ({
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }),

  button: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  } as Variants,

  social: (index: number) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5 + index * 0.1,
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }),
};

// Hover effects
export const hoverVariants = {
  lift: {
    y: -5,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },

  glow: {
    boxShadow: "0 0 20px rgba(65, 144, 217, 0.6)",
    transition: { duration: 0.3 },
  },

  liftGlow: {
    y: -5,
    boxShadow: "0 10px 30px rgba(65, 144, 217, 0.4)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },

  scale: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },

  scaleGlow: {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(65, 144, 217, 0.6)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },

  stackHover: {
    scale: 1.1,
    y: -8,
    boxShadow: "0 8px 20px rgba(65, 144, 217, 0.4)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// Stagger container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as Variants;

// Tap effects
export const tapVariants = {
  scale: { scale: 0.95 },
  button: {
    scale: 0.95,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};
