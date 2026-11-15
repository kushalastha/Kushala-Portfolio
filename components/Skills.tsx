import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionIcon } from "@/components/SectionIcon";
import { portfolio, skillsContent, type PortfolioSkillGroup } from "@/data/portfolio";

const cardStyles: Record<PortfolioSkillGroup["id"], { surface: string; icon: string }> = {
  testing: { surface: "border-t-accent bg-surface", icon: "bg-accent/15" },
  tools: { surface: "border-t-primary bg-secondary/35", icon: "bg-surface" },
  programming: { surface: "border-t-secondary bg-surface", icon: "bg-secondary/50" },
  automation: { surface: "border-t-accent bg-accent/5", icon: "bg-accent/15" },
};

export function Skills() {
  return (
    <SectionContainer id="skills" tabIndex={-1} aria-labelledby="skills-heading" className="section-stack skills-layout">
      <SectionHeading id="skills-heading" eyebrow="02 / Technical skills" className="section-reveal">{skillsContent.heading}</SectionHeading>
      <ul className="grid gap-4 md:grid-cols-2 lg:gap-5">
        {portfolio.skills.map(({ id, title, items }) => {
          const style = cardStyles[id];
          return (
            <li key={id} className={`section-reveal min-w-0 rounded-card border border-t-4 border-border p-5 shadow-soft transition-transform duration-300 motion-safe:hover:-translate-y-1 sm:p-6 ${style.surface}`}>
              <div className="flex items-center gap-3">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/10 text-primary ${style.icon}`}><SectionIcon name={id} /></span>
                <h3 className="text-xl text-primary sm:text-2xl">{title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => <li key={item} className="rounded-xl border border-border bg-surface/80 px-3 py-1.5 text-sm text-foreground">{item}</li>)}
              </ul>
            </li>
          );
        })}
      </ul>
    </SectionContainer>
  );
}
