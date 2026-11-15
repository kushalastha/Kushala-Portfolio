import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionIcon, type SectionIconName } from "@/components/SectionIcon";
import { portfolio, projectsContent } from "@/data/portfolio";

const cardThemes: { surface: string; icon: SectionIconName }[] = [
  { surface: "border-t-primary bg-secondary/30", icon: "tools" },
  { surface: "border-t-accent bg-surface", icon: "automation" },
  { surface: "border-t-secondary bg-accent/5", icon: "testing" },
];

export function Projects() {
  return (
    <SectionContainer id="projects" tabIndex={-1} aria-labelledby="projects-heading" className="section-stack content-layout">
      <SectionHeading id="projects-heading" eyebrow="04 / Projects" description={projectsContent.introduction} className="section-reveal">{projectsContent.heading}</SectionHeading>
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.projects.map((project, index) => {
          const theme = cardThemes[index % cardThemes.length];
          return (
            <li key={project.id} className={`section-reveal flex min-w-0 flex-col gap-4 rounded-card border border-t-4 border-border p-6 shadow-soft transition-transform duration-300 motion-safe:hover:-translate-y-1 ${theme.surface}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl border border-primary/10 bg-background text-primary"><SectionIcon name={theme.icon} /></span>
                <span className="rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-medium text-primary">{project.status}</span>
              </div>
              <h3 className="text-[1.625rem] leading-tight text-primary">{project.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{project.description}</p>
              <ul aria-label="Project focus" className="mt-auto flex flex-wrap gap-2 pt-1">
                {project.tools.map((tool) => <li key={tool} className="rounded-lg border border-border bg-surface/80 px-2.5 py-1.5 text-xs text-foreground">{tool}</li>)}
              </ul>
              {project.status === "Completed" && project.link && (
                <a href={project.link.href} className="inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-primary underline underline-offset-4 hover:decoration-accent">{project.link.label} <span aria-hidden="true" className="ml-2">↗</span></a>
              )}
            </li>
          );
        })}
      </ul>
    </SectionContainer>
  );
}
