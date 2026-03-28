"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
  once?: boolean;
  blur?: number;
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 24,
  amount = 0.22,
  once = true,
  blur = 10
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`${className} will-change-transform`.trim()}
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, y, scale: 0.985, filter: `blur(${blur}px)` }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
