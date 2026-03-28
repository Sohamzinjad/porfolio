"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { RevealText } from "@/components/reveal-text";
import { SectionLabel } from "@/components/section-label";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  number: string;
  title: string;
  copy: string;
};

type ProcessSectionProps = {
  steps: readonly Step[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !progressRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0.18 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 74%",
            end: "bottom 38%",
            scrub: true
          }
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-process-card]").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 42,
            filter: "blur(10px)"
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.95,
            delay: index * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 84%"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-24 sm:py-32">
      <Container>
        <div className="overflow-hidden rounded-[3rem] bg-ink px-5 py-10 text-paper shadow-[0_40px_120px_rgba(17,17,17,0.18)] sm:px-8 sm:py-12 lg:px-14 lg:py-14">
          <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div className="space-y-5">
              <SectionLabel inverted>Process</SectionLabel>
              <RevealText
                as="h2"
                text="Product-minded execution from system design to UI polish."
                className="max-w-[10ch] text-balance text-[clamp(3rem,6vw,5.8rem)] leading-[0.94] tracking-[-0.075em]"
              />
            </div>
            <FadeIn delay={0.08}>
              <p className="max-w-2xl text-lg leading-relaxed text-paper/72 sm:text-xl">
                Each phase keeps the build structured, scalable, and responsive so
                the final product feels deliberate instead of stitched together.
              </p>
            </FadeIn>
          </div>

          <div className="mt-10">
            <div className="h-px bg-white/12">
              <div
                ref={progressRef}
                className="h-px origin-left bg-white"
                style={{ transformOrigin: "left center" }}
              />
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  data-process-card
                  className="rounded-[1.9rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.32em] text-paper/46">
                    {step.number}
                  </p>
                  <h3 className="mt-6 font-display text-[2rem] tracking-[-0.07em] text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-paper/68">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
