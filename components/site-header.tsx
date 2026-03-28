"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      data-site-header
      className="fixed inset-x-0 top-0 z-50"
      initial={prefersReducedMotion ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.82,
        delay: 0.04,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Container>
        <div className="mt-3 flex items-center justify-between gap-3 rounded-[1.6rem] border border-ink/10 bg-white/78 px-3.5 py-3 shadow-panel backdrop-blur sm:mt-4 sm:rounded-full sm:px-4">
          <a
            href="#top"
            className="shrink-0 font-display text-[1.55rem] uppercase tracking-[-0.08em] text-ink sm:text-2xl"
          >
            SZ
          </a>
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.24em] text-ink/62 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/10 bg-ink px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-paper sm:gap-3 sm:px-4 sm:text-xs"
          >
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Get in touch</span>
            <span aria-hidden="true">{"->"}</span>
          </a>
        </div>
      </Container>
    </motion.header>
  );
}
