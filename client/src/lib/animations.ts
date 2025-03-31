import { MotionProps } from "framer-motion";

// Fade in animation
export const fadeIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    duration: 0.5, 
    delay,
    ease: "easeInOut"
  }
});

// Slide up animation
export const slideUp = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6, 
    delay,
    ease: "easeOut"
  }
});

// Slide in from left animation
export const slideInLeft = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.6, 
    delay,
    ease: "easeOut"
  }
});

// Slide in from right animation
export const slideInRight = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.6, 
    delay,
    ease: "easeOut"
  }
});

// Stagger children animation
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Pop animation for buttons
export const popAnimation = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  whileTap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Accordion animation
export const accordionAnimation = {
  closed: { height: 0, opacity: 0 },
  open: { 
    height: "auto", 
    opacity: 1,
    transition: { 
      height: {
        duration: 0.3,
      },
      opacity: {
        duration: 0.2,
        delay: 0.1
      }
    }
  }
};
