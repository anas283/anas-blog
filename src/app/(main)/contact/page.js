import PageHeader from "@/components/page-header";
import CopyEmail from "@/components/copy-email";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Download,
} from "lucide-react";

const EMAIL = "muhammadanasbinadam@gmail.com"

const socials = [
  {
    label: "GitHub",
    value: "@anas283",
    href: "https://github.com/anas283",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "in/anas283",
    href: "https://www.linkedin.com/in/anas283/",
    Icon: Linkedin,
  },
]

const details = [
  { label: "Based in", value: "Malaysia", Icon: MapPin },
  { label: "Availability", value: "Open to new work", Icon: Sparkles },
  { label: "Response time", value: "Usually within 24 hours", Icon: Clock },
]

const services = [
  {
    title: "Web applications",
    description:
      "End-to-end product interfaces built with React, Next.js, and a solid foundation.",
  },
  {
    title: "Marketing sites",
    description:
      "Fast, responsive landing pages that look sharp and are easy to maintain.",
  },
  {
    title: "UI implementation",
    description:
      "Turning Figma files into pixel-accurate, accessible, production-ready components.",
  },
]

export default function Contact() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Contact"
        title="Let's build something."
        description="If you're interested in working together, the quickest way to reach me is email. I read every message and try to respond as soon as possible."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/25 blur-3xl"
          />
          <p className="eyebrow">Email</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 block break-words font-display text-lg font-semibold tracking-tight underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:decoration-foreground sm:text-2xl"
          >
            muhammadanasbinadam@<wbr />gmail.com
          </a>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Have a project, a role, or just a question? Tell me a little about
            it and I&apos;ll get back to you.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={`mailto:${EMAIL}`}>
                <Mail className="mr-1.5 h-4 w-4" />
                Send an email
              </a>
            </Button>
            <CopyEmail email={EMAIL} />
            <Button asChild variant="ghost" size="sm">
              <a href="/resume_anas.pdf" target="_blank" rel="noreferrer">
                <Download className="mr-1.5 h-3.5 w-3.5" />
                Résumé
              </a>
            </Button>
          </div>

          <div className="mt-10 border-t border-border/70 pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              What happens next
            </p>
            <ol className="mt-4 space-y-3">
              {[
                "Tell me a little about the project or role.",
                "I'll reply within a day to talk details.",
                "We scope it out and get building.",
              ].map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-foreground">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-6 text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="grid gap-6">
          <section className="rounded-3xl border border-border bg-card p-7">
            <h2 className="font-display text-lg font-semibold tracking-tight">
              Details
            </h2>
            <ul className="mt-5 space-y-4">
              {details.map(({ label, value, Icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-border bg-card p-7">
            <h2 className="font-display text-lg font-semibold tracking-tight">
              Find me online
            </h2>
            <ul className="mt-5 space-y-2">
              {socials.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl px-2 py-2.5 transition-colors hover:bg-muted"
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-foreground">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-foreground">
                          {label}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="mt-16 border-t border-border/70 pt-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          What I can help with
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:bg-card"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export function generateMetadata() {
  const title = 'Contact | Anas';

  return {
    title,
  };
}
