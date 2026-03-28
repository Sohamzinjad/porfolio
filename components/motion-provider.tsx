"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { PremiumCursor } from "@/components/premium-cursor";

type MotionProviderProps = {
  children: ReactNode;
};

function SmoothScrollManager() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const destination = document.getElementById(href.slice(1));

      if (!destination) {
        return;
      }

      event.preventDefault();

      const header = document.querySelector<HTMLElement>("[data-site-header]");
      const offset = (header?.offsetHeight ?? 0) + 24;
      const top = Math.max(
        0,
        destination.getBoundingClientRect().top + window.scrollY - offset
      );

      window.history.replaceState(null, "", href);
      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [prefersReducedMotion]);

  return null;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <SmoothScrollManager />
      <PremiumCursor />
    </MotionConfig>
  );
}
