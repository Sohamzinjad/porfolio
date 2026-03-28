"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

type WorkSectionProps = {
  projects: readonly Project[];
};

export function WorkSection({ projects }: WorkSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-work-intro]",
        {
          opacity: 0,
          y: 36,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%"
          }
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 64,
            scale: 0.975,
            filter: "blur(14px)"
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.05,
            delay: index * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-24 sm:py-32 bg-[#F5F5F5]">
      <Container>
        <div className="relative mb-16 space-y-6">
          <div data-work-intro className="space-y-6">
            <h2 className="font-display font-black text-[clamp(4.5rem,12vw,14rem)] leading-[0.85] tracking-[-0.03em] text-ink uppercase">
              WORK
            </h2>
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl lg:text-[1.7rem] font-bold text-ink">
                I Don&apos;t Just Create—I Inspire.
              </h3>
              <p className="max-w-2xl text-[1.05rem] leading-[1.65] text-ink/70">
                In a world full of noise, your brand deserves to stand out. I go beyond creating beautiful designs - I build experiences that connect emotionally, inspire action, and leave a lasting mark.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              data-project-card
              className="w-full"
            >
              <ProjectCard
                {...project}
                featured={false}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
