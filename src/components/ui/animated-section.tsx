"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const flipInVariants: Variants = {
  hidden: { opacity: 0, rotateX: -90, transformPerspective: 1000 },
  visible: { opacity: 1, rotateX: 0 },
};

const blurInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

const bounceInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    }
  },
};

const rotateInVariants: Variants = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

const slideUpFadeVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const zoomInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

type AnimationType = 
  | "fade-up" 
  | "scale-in" 
  | "slide-left" 
  | "slide-right" 
  | "flip-in" 
  | "blur-in" 
  | "bounce-in" 
  | "rotate-in" 
  | "slide-up-fade" 
  | "zoom-in";

const animationVariants: Record<AnimationType, Variants> = {
  "fade-up": fadeUpVariants,
  "scale-in": scaleInVariants,
  "slide-left": slideInLeftVariants,
  "slide-right": slideInRightVariants,
  "flip-in": flipInVariants,
  "blur-in": blurInVariants,
  "bounce-in": bounceInVariants,
  "rotate-in": rotateInVariants,
  "slide-up-fade": slideUpFadeVariants,
  "zoom-in": zoomInVariants,
};

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  once = true,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={animationVariants[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={fadeUpVariants}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
