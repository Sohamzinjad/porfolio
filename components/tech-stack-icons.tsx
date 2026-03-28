"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";

type TechStackIconsProps = {
  items: readonly string[];
};

type IconComponent = () => ReactElement;

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

function PostgreSqlIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="6.2" rx="4.8" ry="2.4" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M7.2 6.2v6.1c0 1.3 2.1 2.4 4.8 2.4s4.8-1.1 4.8-2.4V6.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 10.7c0 1.3 2.1 2.4 4.8 2.4s4.8-1.1 4.8-2.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M12 14.7v4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SocketIoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.7" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m13.8 7.7-3.5 5.1h3.1l-3 3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

const iconMap: Record<string, IconComponent> = {
  React: ReactIcon,
  "Next.js": NextIcon,
  "Node.js": NodeIcon,
  MongoDB: MongoIcon,
  PostgreSQL: PostgreSqlIcon,
  "Socket.IO": SocketIoIcon,
  Prisma: PrismaIcon
};

export function TechStackIcons({ items }: TechStackIconsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {items.map((item, index) => {
        const Icon = iconMap[item];

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
            whileHover={{ y: -6, scale: 1.04 }}
            whileTap={{ scale: 0.99 }}
            className="group"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/85 px-4 py-2.5 text-ink shadow-[0_18px_50px_rgba(17,17,17,0.06)] backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-paper/70 text-ink transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                {Icon ? (
                  <Icon />
                ) : (
                  <span className="text-xs font-semibold uppercase">{item.slice(0, 2)}</span>
                )}
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.22em] text-ink/62 transition-colors duration-300 group-hover:text-ink/82 sm:text-[0.72rem]">
                {item}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
