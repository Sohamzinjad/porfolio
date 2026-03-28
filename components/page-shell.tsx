"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.main
      className={`${className} overflow-x-clip`.trim()}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.05,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.main>
  );
}
