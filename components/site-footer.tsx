import { Container } from "@/components/container";

type FooterLink = {
  label: string;
  href: string;
};

type SiteFooterProps = {
  links: readonly FooterLink[];
};

export function SiteFooter({ links }: SiteFooterProps) {
  return (
    <footer className="pb-10 pt-2 sm:pb-12">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-ink/10 pt-6 text-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex text-sm tracking-[0.02em] text-ink/68 hover:text-ink"
            >
              <span>{link.label}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-[-0.18rem] h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
