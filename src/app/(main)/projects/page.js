import PageHeader from "@/components/page-header";
import ProjectGrid from "@/components/project-grid";
import { works } from "@/data/works";

export default function Projects() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        description="A selection of products and experiments I've designed and built. Each one taught me something new about shipping for the web."
      >
        <p className="shrink-0 text-sm text-muted-foreground">
          {works.length} projects
        </p>
      </PageHeader>

      <div className="mt-10">
        <ProjectGrid projects={works} />
      </div>
    </div>
  )
}

export function generateMetadata() {
  const title = 'Projects | Anas';

  return {
    title,
  };
}
