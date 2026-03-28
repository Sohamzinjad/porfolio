import type { ReactElement } from "react";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { RevealText } from "@/components/reveal-text";
import { SectionLabel } from "@/components/section-label";

type SkillCategory = {
  title: string;
  items: readonly string[];
};

type SkillsSectionProps = {
  categories: readonly SkillCategory[];
};

type IconComponent = () => ReactElement;

function LanguagesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M7 7h10M7 12h7M7 17h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M5 4.5h14A1.5 1.5 0 0 1 20.5 6v12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18V6A1.5 1.5 0 0 1 5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FrontendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="7" cy="7" r="0.9" fill="currentColor" />
      <circle cx="10.2" cy="7" r="0.9" fill="currentColor" />
      <circle cx="13.4" cy="7" r="0.9" fill="currentColor" />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="14" height="6" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
      <rect x="5" y="14" width="14" height="6" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10v4M16 10v4M8 7h.01M8 17h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function DatabasesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="6.5" rx="5.5" ry="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M6.5 6.5v8c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M6.5 10.5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M14.5 5.5a3.5 3.5 0 0 0 4 4l-7.8 7.8a2 2 0 1 1-2.8-2.8l7.8-7.8a3.5 3.5 0 0 0-1.2-1.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m14.5 5.5 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

const iconMap: Record<string, IconComponent> = {
  Languages: LanguagesIcon,
  Frontend: FrontendIcon,
  Backend: BackendIcon,
  Databases: DatabasesIcon,
  Tools: ToolsIcon
};

const spanMap: Record<string, string> = {
  Languages: "xl:col-span-3",
  Frontend: "xl:col-span-4",
  Backend: "xl:col-span-5",
  Databases: "xl:col-span-7",
  Tools: "xl:col-span-5"
};

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-5">
            <FadeIn>
              <SectionLabel>Skills</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.06}>
              <RevealText
                as="h2"
                text="A practical stack across product UI, APIs, and real-time systems."
                className="max-w-[11ch] text-balance text-[clamp(3rem,5.8vw,5.6rem)] leading-[0.95] tracking-[-0.07em]"
              />
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="copy-lg max-w-xl">
                Grouped by the layers I work in most often, from typed front-end
                architecture to back-end services, database design, and delivery tools.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
            {categories.map((category, index) => {
              const Icon = iconMap[category.title];
              const spanClass = spanMap[category.title] ?? "xl:col-span-4";

              return (
                <FadeIn
                  key={category.title}
                  delay={0.08 + index * 0.05}
                  className={spanClass}
                >
                  <article className="group h-full rounded-[2rem] border border-ink/10 bg-white/76 p-6 shadow-panel backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-ink/16 hover:shadow-[0_36px_90px_rgba(17,17,17,0.1)] sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ink/10 bg-paper/70 text-ink transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                          {Icon ? <Icon /> : null}
                        </span>
                        <div>
                          <p className="eyebrow">0{index + 1}</p>
                          <h3 className="mt-3 font-display text-[2rem] tracking-[-0.07em] text-ink">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[0.68rem] uppercase tracking-[0.24em] text-ink/42">
                        {category.items.length} items
                      </span>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2.5">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-ink/10 bg-ink/[0.03] px-3.5 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-ink/68 transition duration-300 group-hover:border-ink/14 group-hover:bg-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
