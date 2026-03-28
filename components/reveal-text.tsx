"use client";

import type { ComponentPropsWithoutRef, ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealTextProps<T extends ElementType> = {
  as?: T;
  text: string;
  className?: string;
  delay?: number;
  amount?: number;
  once?: boolean;
  wordClassName?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function RevealText<T extends ElementType = "p">({
  as,
  text,
  className = "",
  delay = 0,
  amount = 0.35,
  once = true,
  wordClassName = "",
  ...rest
}: RevealTextProps<T>) {
  const Component = (as ?? "p") as ElementType;
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return (
      <Component className={className} {...rest}>
        {text}
      </Component>
    );
  }

  return (
    <Component className={className} {...rest}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: delay,
              staggerChildren: 0.04
            }
          }
        }}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden align-bottom pb-[0.12em]"
          >
            <motion.span
              className={`inline-block will-change-transform ${wordClassName}`.trim()}
              variants={{
                hidden: {
                  opacity: 0,
                  y: "110%",
                  filter: "blur(8px)"
                },
                visible: {
                  opacity: 1,
                  y: "0%",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.88,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
