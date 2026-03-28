"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { RevealText } from "@/components/reveal-text";

type HeroSectionProps = {
  name: [string, string];
  role: string;
  intro: string;
  highlights: readonly string[];
};

const maskRevealVariants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function HeroSection({
  name,
  role,
  intro,
  highlights
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 min-h-[100svh] flex flex-col justify-center"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_18%_18%,rgba(190,150,98,0.18),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(17,17,17,0.08),transparent_24%)]" />

      <Container className="relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-16 lg:gap-24 w-full">
          
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.15 }}
            className="w-full"
          >
            <h1 className="font-display text-[clamp(4.5rem,15.5vw,22rem)] font-black uppercase leading-[0.78] tracking-[-0.03em] text-ink flex flex-col w-full">
              <div className="overflow-hidden pb-1 sm:pb-2">
                <motion.span variants={maskRevealVariants} className="block text-left">{name[0]}</motion.span>
              </div>
              <div className="overflow-hidden pt-1 sm:pt-2">
                <motion.span variants={maskRevealVariants} className="block text-right">{name[1]}</motion.span>
              </div>
            </h1>
          </motion.div>

          {/* STRUCTURED GRID - Stripped down & Clean */}
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start w-full"
          >
            {/* Column 1: Intro */}
            <motion.div variants={fadeUpVariants} className="md:col-span-7 lg:col-span-6 flex flex-col gap-6 lg:gap-8">
              <div className="max-w-xl">
                {/* RevealText inherently stagger-animates words masking up */}
                <RevealText
                  as="p"
                  text={intro}
                  delay={0.8}
                  className="text-xl md:text-2xl font-medium leading-[1.6] tracking-tight text-balance text-ink/80"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-4">
                <a
                  href="#work"
                  className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-paper shadow-[0_24px_70px_rgba(17,17,17,0.16)] transition-all hover:scale-105 hover:shadow-[0_24px_80px_rgba(17,17,17,0.22)]"
                >
                  View work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/72 px-6 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-ink backdrop-blur transition-all hover:bg-white"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            {/* Column 2: Role & Highlights */}
            <motion.div variants={fadeUpVariants} className="md:col-span-5 lg:col-span-4 lg:col-start-9 flex flex-col gap-8 mt-2 md:mt-0">
               <div>
                 <h3 className="text-[0.68rem] uppercase tracking-[0.26em] text-ink/40 font-bold mb-3">
                   Designation
                 </h3>
                 <p className="text-[1.05rem] font-semibold text-ink/80">{role}</p>
                 <p className="text-[0.9rem] text-ink/50 mt-1">Available worldwide</p>
               </div>

               <div>
                 <h3 className="text-[0.68rem] uppercase tracking-[0.26em] text-ink/40 font-bold mb-3">
                   Highlights
                 </h3>
                 <div className="flex flex-col gap-3">
                   {highlights.map((item) => (
                     <div key={item} className="flex items-center gap-4 text-[0.95rem] font-semibold tracking-tight text-ink/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-ink/30" />
                        {item}
                     </div>
                   ))}
                 </div>
               </div>
            </motion.div>
            
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
