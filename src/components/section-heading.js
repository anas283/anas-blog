import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SectionHeading({ eyebrow, title, href, linkLabel = "View all" }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {linkLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  )
}
