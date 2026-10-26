import PageHeader from "@/components/page-header";
import { Headphones, Laptop, Code2, Chrome, NotebookPen, PenTool } from "lucide-react";

const groups = [
  {
    title: "Desk",
    description: "The hardware I spend most of my day with.",
    items: [
      {
        name: 'MacBook Air (13", 2020)',
        note: "Probably one of the best investments I have ever made.",
        Icon: Laptop,
      },
      {
        name: "AirPods Pro 2",
        note: "The best wireless earphones I have ever used.",
        Icon: Headphones,
      },
    ],
  },
  {
    title: "Tools",
    description: "Where the actual work gets done.",
    items: [
      {
        name: "VS Code",
        note: "Favorite code editor.",
        Icon: Code2,
      },
      {
        name: "Chrome",
        note: "Browser of choice.",
        Icon: Chrome,
      },
      {
        name: "Notion",
        note: "For notes and my personal planner.",
        Icon: NotebookPen,
      },
      {
        name: "Figma",
        note: "For wireframing and prototyping.",
        Icon: PenTool,
      },
    ],
  },
];

export default function Uses() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Toolkit"
        title="Uses"
        description="My ever-evolving toolkit, comprising both hardware and software. I try to keep this list updated as much as possible."
      />

      <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <section
            key={group.title}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <h2 className="font-display text-xl font-semibold tracking-tight">
              {group.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {group.description}
            </p>

            <ul className="mt-6 space-y-2">
              {group.items.map(({ name, note, Icon }) => (
                <li
                  key={name}
                  className="flex items-start gap-3 rounded-2xl border border-transparent px-2 py-3 transition-colors hover:border-border hover:bg-background/60"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{name}</p>
                    <p className="mt-0.5 text-sm leading-6 text-muted-foreground">
                      {note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Curious about something not listed here?{" "}
        <a
          href="mailto:muhammadanasbinadam@gmail.com"
          className="font-medium text-foreground underline decoration-primary decoration-2 underline-offset-4"
        >
          Ask me anything
        </a>
        .
      </p>
    </div>
  )
}

export function generateMetadata() {
  const title = 'Uses | Anas';

  return {
    title,
  };
}
