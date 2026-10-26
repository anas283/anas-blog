import Link from "next/link";
import { ArrowUpRight, Compass, Download, Gauge, Github, Linkedin, MapPin, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import HeroCodeCard from "@/components/hero-code-card";
import { works } from "@/data/works";

const EMAIL = "muhammadanasbinadam@gmail.com"

const stack = [
  "React",
  "Next.js",
  "Angular",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Figma",
]

const skills = ["React", "Next.js", "Angular", "Tailwind CSS", "TypeScript"]

const principles = [
  {
    title: "Clarity first",
    description:
      "I start with the problem, not the pixels. Clear structure and content make everything else easier.",
    Icon: Compass,
  },
  {
    title: "Fast by default",
    description:
      "Performance is part of the experience. I keep bundles lean and interactions feeling instant.",
    Icon: Gauge,
  },
  {
    title: "Details compound",
    description:
      "Spacing, motion, empty states — the small things are what make a product feel considered.",
    Icon: Sparkles,
  },
  {
    title: "Ship and refine",
    description:
      "Working software beats perfect plans. I ship early, learn from real use, then tighten the edges.",
    Icon: Rocket,
  },
]

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative">
        <div
          aria-hidden="true"
          className="dot-grid pointer-events-none absolute inset-x-0 -top-12 -z-10 h-[420px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        />

        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for select projects
            </div>

            <h1 className="mt-6 font-display text-[2.65rem] font-semibold leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-[4.1rem]">
              Building <span className="marker-highlight">thoughtful</span> web
              experiences people love to use.
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-base">
              I&apos;m Anas, a software engineer with 5 years of experience
              shipping fast, polished products. Mostly React, Next.js, Angular
              and Tailwind CSS — with a lot of care for the details.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild>
                <Link href="/projects">
                  Explore my work
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="/resume_anas.pdf" target="_blank" rel="noreferrer">
                  <Download className="mr-1.5 h-4 w-4" />
                  Résumé
                </a>
              </Button>

              <div className="ml-1 flex items-center gap-1">
                <a
                  href="https://github.com/anas283"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Github className="h-[18px] w-[18px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anas283/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Linkedin className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              Malaysia
              <span className="mx-1 h-1 w-1 rounded-full bg-border" />
              Working worldwide
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[430px]">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 -z-10 h-24 w-24 rotate-12 rounded-3xl bg-primary/70"
            />

            <HeroCodeCard />

            <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-lift backdrop-blur sm:flex">
              <span className="font-display text-2xl font-semibold tracking-tight">5+</span>
              <span className="text-[11px] leading-4 text-muted-foreground">
                years building
                <br />
                for the web
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden border-y border-border/70 py-5 sm:mt-20">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-10 pr-10">
            {[...stack, ...stack].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 sm:mt-24">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work"
          href="/projects"
          linkLabel="All projects"
        />

        <div className="mt-8 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {works.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-10 border-t border-border/70 pt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow">Approach</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            How I build
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Good software is more than working code. These are the things I
            care about on every project.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map(({ title, description, Icon }, index) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:bg-card sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-card/60 p-7 sm:flex-row sm:items-center sm:p-9">
        <div>
          <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Want to see more, or just say hi?
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            My inbox is always open — I&apos;ll get back to you quickly.
          </p>
        </div>
        <a
          href={`mailto:${EMAIL}`}
          className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium transition-colors hover:border-foreground/25 hover:bg-muted"
        >
          {EMAIL}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </section>
    </div>
  )
}
