"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  index: string;
  href: string;
  preview: string;
  title: string;
  category: string;
  summary: string;
  year: string;
  services: readonly string[];
  featured?: boolean;
  priority?: boolean;
};

export function ProjectCard({
  index,
  href,
  preview,
  title,
  category,
  summary,
  year,
  services,
  featured = false,
  priority = false
}: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  const Wrapper = isExternal ? "a" : Link;

  return (
    <Wrapper
      href={href}
      aria-label={`Open ${title}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group block w-full outline-none"
      data-cursor="view"
    >
      <article className="flex flex-col gap-5 sm:gap-6 w-full">
        {/* Clean, borderless image container with hover zoom */}
        <div 
          className={`relative w-full overflow-hidden bg-[#E5E5E5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            featured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/3] sm:aspect-[16/11]"
          }`}
        >
          <Image
            src={preview}
            alt={`${title} preview`}
            fill
            priority={priority}
            sizes={
              featured
                ? "(min-width: 1280px) 62vw, (min-width: 768px) 100vw, 100vw"
                : "(min-width: 1280px) 36vw, (min-width: 768px) 50vw, 100vw"
            }
            className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          />
        </div>

        {/* Minimalist text overlay/below */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display font-bold text-ink text-[1.75rem] sm:text-[2rem] leading-[1.1] tracking-[-0.02em] group-hover:opacity-80 transition-opacity">
              {title}
            </h3>
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.3em] text-ink/40 whitespace-nowrap pt-2">
              {index}
            </span>
          </div>

          <p className="text-ink/60 text-[1.05rem] sm:text-[1.1rem] leading-[1.6] max-w-xl">
            {summary}
          </p>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] font-medium text-ink">
              {category}
            </span>
            <span className="text-ink/30">•</span>
            <span className="text-[0.68rem] uppercase tracking-[0.24em] font-medium text-ink/70">
              {year}
            </span>
          </div>
        </div>
      </article>
    </Wrapper>
  );
}
