"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { HandshakeIllustration } from "@/components/handshake-illustration";
import { RevealText } from "@/components/reveal-text";

type StatementSectionProps = {
  techStack: readonly string[];
};

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="1.9" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="8.1" ry="3.3" stroke="currentColor" strokeWidth="1.7" />
      <ellipse
        cx="12"
        cy="12"
        rx="8.1"
        ry="3.3"
        stroke="currentColor"
        strokeWidth="1.7"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="8.1"
        ry="3.3"
        stroke="currentColor"
        strokeWidth="1.7"
        transform="rotate(-60 12 12)"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8 16V8l8 8V8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 19 7.6v8.8l-7 4.1-7-4.1V7.6l7-4.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 15.5V8.7l5.6 6.8V8.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 3.8c2.2 3.3 3.4 6 3.4 8.3 0 3.5-1.7 6.3-3.4 8.1-1.8-1.8-3.4-4.6-3.4-8.1 0-2.3 1.2-5 3.4-8.3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M12 6.3v11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function PrismaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M10.5 4.2 18.5 18l-7.4 1.8L5.5 11.8l5-7.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m10.5 4.2 1 15.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function GsapIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M18.5 8.7c-1-1.8-3.3-3.1-6-3.1-4 0-6.8 2.7-6.8 6.4 0 3.8 2.9 6.4 6.7 6.4 2.8 0 5.1-1.4 6.1-3.5h-6.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14.3 12h4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function FramerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M7 4h10l-6 6h6l-10 10v-8h6L7 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconMap = {
  React: ReactIcon,
  "Next.js": NextIcon,
  "Node.js": NodeIcon,
  MongoDB: MongoIcon,
  Prisma: PrismaIcon,
  GSAP: GsapIcon,
  "Framer Motion": FramerIcon
} as const;

export function StatementSection({ techStack }: StatementSectionProps) {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="rounded-[3rem] border border-ink/10 bg-white px-6 py-12 shadow-panel sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <FadeIn>
            <HandshakeIllustration />
          </FadeIn>
          <FadeIn delay={0.06}>
            <RevealText
              as="h2"
              text="I collaborate with businesses of all sizes worldwide, using the latest technologies."
              className="mx-auto mt-8 max-w-5xl text-balance text-center text-[clamp(2.6rem,5.8vw,5.8rem)] leading-[1.02] tracking-[-0.07em] text-ink"
            />
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mx-auto mt-6 max-w-4xl text-balance text-center text-lg leading-relaxed text-ink/70 sm:text-xl">
              I build modern, scalable web applications using React, Next.js, Node.js,
              MongoDB, PostgreSQL, Prisma, GSAP, and Framer Motion.
            </p>
          </FadeIn>
          <FadeIn delay={0.18} className="mt-10">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {techStack.map((item, index) => {
                const Icon = iconMap[item as keyof typeof iconMap];

                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                      backgroundColor: "rgba(17,17,17,0.05)"
                    }}
                    className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white px-4 py-3 text-ink shadow-[0_16px_40px_rgba(17,17,17,0.05)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink">
                      {Icon ? (
                        <Icon />
                      ) : (
                        <span className="text-xs font-semibold uppercase">
                          {item.slice(0, 2)}
                        </span>
                      )}
                    </span>
                    <span className="text-sm uppercase tracking-[0.18em] text-ink/68">
                      {item}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
