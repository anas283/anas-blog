import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, priority = false }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col gap-4"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute right-4 top-4 inline-flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-white/90 text-foreground opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-foreground/70">
            {project.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {project.subtitle}
          </p>
        </div>
        <span className="mt-0.5 shrink-0 rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
          {project.tag}
        </span>
      </div>
    </a>
  )
}
