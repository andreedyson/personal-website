import { Variants } from "framer-motion";

// Subtle entrance animations
export const entranceVariants = {
  fadeScale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
  } as Variants,

  slideRotate: {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
  } as Variants,

  scaleRotate3D: {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 25 },
    },
  } as Variants,

  spiralIn: (index: number) => ({
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: index * 0.04, type: "spring", stiffness: 120, damping: 25 },
    },
  }),

  slideFromLeft: {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
  } as Variants,

  slideFromRight: {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
  } as Variants,

  slideFromBottom: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
  } as Variants,
};

// Hero section animations
export const heroVariants = {
  greeting: {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
  } as Variants,

  name: {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.2, type: "spring", damping: 25, stiffness: 120 },
    },
  } as Variants,

  description: {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  } as Variants,

  cta: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, type: "spring", damping: 25, stiffness: 120 },
    },
  } as Variants,
};

// About section animations
export const aboutVariants = {
  header: {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 25 },
    },
  } as Variants,

  image: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 25 },
    },
  } as Variants,

  text: {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 25,
        stiffness: 120,
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
        staggerChildren: 0.05,
        delayChildren: 0.15,
      },
    },
  } as Variants,

  card: (_index: number) => ({
    hidden: {
      scale: 0.9,
      y: 15,
      opacity: 0,
    },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 25,
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
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  } as Variants,

  card: (index: number) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 120,
        damping: 25,
      },
    },
  }),

  image: {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  } as Variants,
};

// Contact section animations
export const contactVariants = {
  header: (index: number) => ({
    hidden: { y: -15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  }),

  button: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 },
    },
  } as Variants,

  social: (index: number) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + index * 0.1,
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  }),
};

// Hover effects
export const hoverVariants = {
  lift: {
    y: -3,
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },

  glow: {
    boxShadow: "0 0 15px rgba(65, 144, 217, 0.3)",
    transition: { duration: 0.3 },
  },

  liftGlow: {
    y: -3,
    boxShadow: "0 8px 20px rgba(65, 144, 217, 0.25)",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },

  scale: {
    scale: 1.03,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },

  scaleGlow: {
    scale: 1.03,
    boxShadow: "0 0 15px rgba(65, 144, 217, 0.3)",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },

  stackHover: {
    scale: 1.05,
    y: -4,
    boxShadow: "0 6px 15px rgba(65, 144, 217, 0.25)",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

// Stagger container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
} as Variants;

// Tap effects
export const tapVariants = {
  scale: { scale: 0.95 },
  button: {
    scale: 0.95,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};
