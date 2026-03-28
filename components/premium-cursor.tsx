"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";

export function PremiumCursor() {
  const haloRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const halo = haloRef.current;
    const text = textRef.current;

    if (
      !halo ||
      !text ||
      prefersReducedMotion ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    let visible = false;

    gsap.set(halo, {
      xPercent: -50,
      yPercent: -50,
      autoAlpha: 0,
      width: 96,
      height: 96
    });

    const moveHaloX = gsap.quickTo(halo, "x", {
      duration: 0.45,
      ease: "power3.out"
    });
    const moveHaloY = gsap.quickTo(halo, "y", {
      duration: 0.45,
      ease: "power3.out"
    });

    const setInteractiveState = (target: Element | null) => {
      const isView = target?.closest("[data-cursor='view']");
      const isInteractive = target?.closest("a, button, [data-cursor='highlight']");
      
      if (isView) {
        gsap.to(halo, {
          scale: 1,
          width: 110,
          height: 110,
          backgroundColor: "#111111", // ink dark shade
          borderWidth: 0,
          opacity: 1,
          duration: 0.28,
          overwrite: "auto"
        });
        gsap.to(text, { autoAlpha: 1, duration: 0.25, delay: 0.1 });
      } else if (isInteractive) {
        gsap.to(halo, {
          scale: 1.4,
          width: 96,
          height: 96,
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          borderWidth: 1,
          opacity: 0.72,
          duration: 0.28,
          overwrite: "auto"
        });
        gsap.to(text, { autoAlpha: 0, duration: 0.15, overwrite: "auto" });
      } else {
        gsap.to(halo, {
          scale: 1,
          width: 96,
          height: 96,
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          borderWidth: 1,
          opacity: 1,
          duration: 0.28,
          overwrite: "auto"
        });
        gsap.to(text, { autoAlpha: 0, duration: 0.15, overwrite: "auto" });
      }
    };

    const showCursor = () => {
      if (visible) return;
      visible = true;
      gsap.to(halo, {
        autoAlpha: 1,
        duration: 0.22,
        overwrite: "auto"
      });
    };

    const hideCursor = () => {
      visible = false;
      gsap.to(halo, {
        autoAlpha: 0,
        duration: 0.22,
        overwrite: "auto"
      });
    };

    const handleMove = (event: MouseEvent) => {
      showCursor();
      moveHaloX(event.clientX);
      moveHaloY(event.clientY);

      const target = event.target as Element | null;
      setInteractiveState(target);
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        hideCursor();
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("blur", hideCursor);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("blur", hideCursor);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      ref={haloRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center rounded-full border border-ink/10 bg-white/35 opacity-0 shadow-[0_24px_80px_rgba(17,17,17,0.06)] backdrop-blur-[2px]"
    >
      <span
        ref={textRef}
        className="text-[0.62rem] font-bold tracking-[0.2em] text-white opacity-0 uppercase"
      >
        View
      </span>
    </div>
  );
}
