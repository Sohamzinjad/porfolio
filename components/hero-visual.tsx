"use client";

import type { MouseEvent } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";

const springConfig = {
  stiffness: 145,
  damping: 20,
  mass: 0.7
} as const;

export function HeroVisual() {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: shellRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), springConfig);
  const shellY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [24, -22]
  );
  const ringX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-14, 14]), springConfig);
  const ringY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-12, 12]), springConfig);
  const cardAX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-18, 18]), springConfig);
  const cardAY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-12, 12]), springConfig);
  const cardBX = useSpring(useTransform(pointerX, [-0.5, 0.5], [14, -14]), springConfig);
  const cardBY = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), springConfig);
  const railX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), springConfig);
  const railY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-8, 8]), springConfig);
  const glowX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-46, 46]), springConfig);
  const glowY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-36, 36]), springConfig);

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      ref={shellRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      style={shouldReduceMotion ? undefined : { rotateX, rotateY, y: shellY }}
      className="relative mx-auto w-full max-w-[36rem] rounded-[2.8rem] border border-ink/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,240,233,0.94))] p-4 shadow-[0_42px_130px_rgba(17,17,17,0.12)] [transform-style:preserve-3d] sm:p-5"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] border border-white/60" />
      <motion.div
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { x: glowX, y: glowY }}
        className="pointer-events-none absolute left-1/2 top-[46%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bc9b70]/25 blur-3xl"
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-ink/10 bg-[linear-gradient(180deg,#f8f5ef_0%,#f2ece2_100%)]">
        <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(17,17,17,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.05)_1px,transparent_1px)] [background-size:4.75rem_4.75rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.82),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(17,17,17,0.06),transparent_22%)]" />

        <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.32em] text-ink/42">
          <span>Realtime Systems</span>
          <span>2026</span>
        </div>

        <motion.div
          style={shouldReduceMotion ? undefined : { x: ringX, y: ringY }}
          className="absolute left-1/2 top-[46%] h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 rounded-full border border-ink/12" />
          <div className="absolute inset-[14%] rounded-full border border-ink/12" />
          <div className="absolute inset-[28%] rounded-full border border-ink/14" />
          <div className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
          <div className="absolute left-1/2 top-[5%] h-[90%] w-px -translate-x-1/2 bg-ink/10" />
          <div className="absolute left-[5%] top-1/2 h-px w-[90%] -translate-y-1/2 bg-ink/10" />
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? undefined : { x: cardAX, y: cardAY }}
          className="absolute left-[7%] top-[14%] w-[41%] rounded-[1.65rem] border border-ink/10 bg-white/88 p-4 shadow-[0_22px_70px_rgba(17,17,17,0.08)] backdrop-blur"
        >
          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-ink/42">
            Stack
          </p>
          <p className="mt-4 font-display text-[1.7rem] leading-none tracking-[-0.08em] text-ink">
            React
          </p>
          <div className="mt-4 flex items-center gap-2 text-[0.64rem] uppercase tracking-[0.22em] text-ink/52">
            <span className="rounded-full border border-ink/10 px-2 py-1">Node</span>
            <span className="rounded-full border border-ink/10 px-2 py-1">APIs</span>
          </div>
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? undefined : { x: cardBX, y: cardBY }}
          className="absolute right-[7%] top-[22%] w-[34%] rounded-[1.65rem] border border-ink/10 bg-ink px-4 py-4 text-paper shadow-[0_28px_80px_rgba(17,17,17,0.18)]"
        >
          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-paper/52">
            Latency
          </p>
          <p className="mt-4 font-display text-[2.2rem] leading-none tracking-[-0.08em]">
            28ms
          </p>
          <p className="mt-4 text-[0.64rem] uppercase tracking-[0.22em] text-paper/58">
            Realtime events
          </p>
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? undefined : { x: railX, y: railY }}
          className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 rounded-[1.8rem] border border-ink/10 bg-white/90 p-3 sm:p-5 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-ink/42">
                Focus
              </p>
              <p className="mt-3 max-w-[20rem] font-display text-[clamp(1.3rem,4vw,2.2rem)] leading-[0.94] tracking-[-0.06em] text-ink">
                Motion-led UI systems for scalable products.
              </p>
            </div>
            <div className="hidden rounded-full border border-ink/10 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-ink/52 sm:block">
              Full stack
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Realtime", "Dashboards", "Animations"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/10 bg-ink/[0.03] px-2 py-1 sm:px-3 sm:py-1.5 text-[0.58rem] sm:text-[0.64rem] uppercase tracking-[0.22em] text-ink/58"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
