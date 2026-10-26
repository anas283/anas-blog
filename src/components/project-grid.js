'use client'

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { cn } from "@/lib/utils";

export default function ProjectGrid({ projects }) {
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.tag)))],
    [projects]
  );
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((project) => project.tag === activeTag);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by technology">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            role="tab"
            aria-selected={activeTag === tag}
            onClick={() => setActiveTag(tag)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-[13px] font-medium transition-all duration-200",
              activeTag === tag
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/25 hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <ProjectCard project={project} priority={index === 0} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
