import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { HandshakeIllustration } from "@/components/handshake-illustration";
import { RevealText } from "@/components/reveal-text";
import { SectionLabel } from "@/components/section-label";
import { TechStackIcons } from "@/components/tech-stack-icons";

type AboutSectionProps = {
  techStack: readonly string[];
};

const aboutHighlights = [
  "B.Tech, BVCOE Mumbai",
  "15th / 106 at Odoo x Adani",
  "Selected for SIH 2025"
] as const;

export function AboutSection({ techStack }: AboutSectionProps) {
  return (
    <section id="about" className="py-28 sm:py-36">
      <Container>
        <div className="relative overflow-hidden rounded-[3.2rem] border border-ink/10 bg-white/76 px-5 py-14 shadow-panel backdrop-blur sm:px-10 sm:py-20 lg:px-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(17,17,17,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.06)_1px,transparent_1px)] [background-size:6rem_6rem]" />
          <div className="absolute inset-x-[18%] top-[-10%] h-36 rounded-full bg-sand/75 blur-3xl sm:h-44" />
          <div className="absolute bottom-[-14%] left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-ink/[0.04] blur-3xl sm:h-60 sm:w-60" />

          <div className="relative flex flex-col items-center text-center">
            <FadeIn>
              <SectionLabel>About</SectionLabel>
            </FadeIn>

            <FadeIn delay={0.06} className="mt-8 w-full max-w-[32rem]">
              <HandshakeIllustration />
            </FadeIn>

            <FadeIn delay={0.12}>
              <RevealText
                as="h2"
                text="Real-time apps. Reliable backends. Clear interfaces."
                className="mx-auto mt-10 max-w-5xl text-balance text-[clamp(3rem,6vw,6rem)] leading-[1] tracking-[-0.075em] text-ink"
              />
            </FadeIn>

            <FadeIn delay={0.18}>
              <p className="copy-xl mx-auto mt-6 max-w-4xl text-balance">
                I am a full-stack developer from Navi Mumbai, currently pursuing a
                B.Tech in Electronics and Telecommunication at Bharati Vidyapeeth
                College of Engineering, Mumbai. I focus on scalable web products,
                real-time systems, authentication flows, and modern front-end
                experiences that stay practical to ship.
              </p>
            </FadeIn>

            <FadeIn delay={0.24} className="mt-8">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {aboutHighlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-ink/10 bg-white/88 px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-ink/64 shadow-[0_18px_50px_rgba(17,17,17,0.06)]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10 sm:mt-12">
              <TechStackIcons items={techStack} />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
