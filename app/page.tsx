import { PageShell } from "@/components/page-shell";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { ProcessSection } from "@/sections/process-section";
import { WorkSection } from "@/sections/work-section";
import { projects } from "@/data/projects";

type ProcessStep = {
  number: string;
  title: string;
  copy: string;
};

type ContactLink = {
  label: string;
  href: string;
};

const heroHighlights: readonly string[] = [
  "B.Tech 2023-2027",
  "15th / 106 Odoo x Adani",
  "Selected for SIH 2025"
] as const;

const techStack: readonly string[] = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Socket.IO",
  "Prisma"
] as const;

const processSteps: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Scope",
    copy:
      "Map the product flow, data model, and API surface before writing interface code."
  },
  {
    number: "02",
    title: "Engineer",
    copy:
      "Build authentication, REST endpoints, sockets, and database structure with maintainability in mind."
  },
  {
    number: "03",
    title: "Interface",
    copy:
      "Translate the system into responsive React or Next.js UI with clear states, feedback, and clean interaction flows."
  },
  {
    number: "04",
    title: "Refine",
    copy:
      "Polish edge cases, responsiveness, and deployment details until the product feels reliable end to end."
  }
] as const;

const contactLinks: readonly ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Sohamzinjad"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/soham-zinjad-940863299/"
  }
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <PageShell className="relative">
        <HeroSection
          name={["Soham", "Zinjad"]}
          role="Full-Stack Developer"
          intro="Full-stack developer from Navi Mumbai building real-time web products, reliable backend systems, and modern interfaces that stay fast, clear, and scalable."
          highlights={heroHighlights}
        />
        <WorkSection projects={projects} />
        <AboutSection techStack={techStack} />
        <ProcessSection steps={processSteps} />
        <ContactSection
          email="sohamzinjad@gmail.com"
          location="Navi Mumbai, Maharashtra, India"
          links={contactLinks}
        />
      </PageShell>
    </>
  );
}
