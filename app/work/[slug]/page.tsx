import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project | Soham Zinjad"
    };
  }

  return {
    title: `${project.title} | Soham Zinjad`,
    description: project.summary
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-ink/55"
        >
          <span aria-hidden="true">{"<-"}</span>
          Back to work
        </Link>

        <section className="mt-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div className="space-y-5">
              <p className="eyebrow">
                {project.index} / {project.category}
              </p>
              <h1 className="display-title font-black text-[clamp(4rem,14vw,9.5rem)]">
                {project.title}
              </h1>
              <p className="max-w-3xl text-balance text-xl leading-relaxed text-ink/74 sm:text-2xl">
                {project.summary}
              </p>
            </div>

            <div className="rounded-[1.8rem] bg-white/76 p-6 shadow-[0_24px_70px_rgba(17,17,17,0.08)] ring-1 ring-black/[0.05] backdrop-blur-sm">
              <p className="eyebrow">Project Info</p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
                    Status
                  </p>
                  <p className="mt-2 font-display text-4xl tracking-[-0.06em]">
                    {project.status}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-ink/45">Year</p>
                  <p className="mt-2 text-lg text-ink/74">{project.year}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white px-4 py-3 text-sm uppercase tracking-[0.22em] text-ink"
                    >
                      {link.label}
                      <span aria-hidden="true">{"->"}</span>
                    </a>
                  ))}
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm uppercase tracking-[0.24em] text-paper"
                  >
                    Get in touch
                    <span aria-hidden="true">{"->"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] bg-white/72 p-3 shadow-[0_26px_80px_rgba(17,17,17,0.08)] ring-1 ring-black/[0.05] backdrop-blur-sm sm:p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] bg-[#e7dfd2]">
              <Image
                src={project.preview}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="space-y-10">
              <section className="rounded-[1.8rem] bg-white/76 p-7 shadow-[0_24px_70px_rgba(17,17,17,0.08)] ring-1 ring-black/[0.05] backdrop-blur-sm sm:p-8">
                <p className="eyebrow">Overview</p>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/72 sm:text-xl">
                  {project.overview}
                </p>
              </section>

              <section className="space-y-5">
                <p className="eyebrow">Highlights</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={highlight}
                      className="rounded-[1.6rem] bg-white/76 p-6 shadow-[0_20px_60px_rgba(17,17,17,0.07)] ring-1 ring-black/[0.05] backdrop-blur-sm"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
                        0{index + 1}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-ink/70">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <div className="rounded-[1.8rem] bg-white/76 p-6 shadow-[0_24px_70px_rgba(17,17,17,0.08)] ring-1 ring-black/[0.05] backdrop-blur-sm">
                <p className="eyebrow">Services</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-ink/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-ink/66"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] bg-white/76 p-6 shadow-[0_24px_70px_rgba(17,17,17,0.08)] ring-1 ring-black/[0.05] backdrop-blur-sm">
                <p className="eyebrow">Stack</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-[0.22em] text-paper"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </Container>
    </main>
  );
}
