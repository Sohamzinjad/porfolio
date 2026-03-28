import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { RevealText } from "@/components/reveal-text";
import { SectionLabel } from "@/components/section-label";

type ContactLink = {
  label: string;
  href: string;
};

type ContactSectionProps = {
  email: string;
  location: string;
  links: readonly ContactLink[];
};

export function ContactSection({
  email,
  location,
  links
}: ContactSectionProps) {
  return (
    <section id="contact" className="pb-20 pt-24 sm:pb-24 sm:pt-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-end">
          <div className="space-y-6">
            <FadeIn>
              <SectionLabel>Contact</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.06}>
              <RevealText
                as="h2"
                text="Let’s build a product that feels sharp and dependable."
                className="display-title max-w-[9ch] text-[clamp(4rem,11vw,8.5rem)] text-balance"
              />
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="max-w-2xl text-balance text-xl leading-relaxed text-ink/72 sm:text-2xl">
                Available for full-stack products, real-time apps, dashboards, and
                front-end systems that need clean interaction and reliable delivery.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.18}>
            <div className="rounded-[2.25rem] border border-ink/10 bg-white/82 p-7 shadow-panel backdrop-blur">
              <p className="eyebrow">Get in touch</p>
              <a
                href={`mailto:${email}`}
                className="mt-6 block text-balance font-display text-[2rem] leading-none tracking-[-0.07em] sm:text-[2.5rem]"
              >
                {email}
              </a>
              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-ink/55">
                {location}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-ink/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ink/70 hover:bg-ink hover:text-paper"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
