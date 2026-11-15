import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionIcon } from "@/components/SectionIcon";
import { portfolio } from "@/data/portfolio";

const highlightIcons = ["analytical", "collaboration", "learning"] as const;

export function About() {
  return (
    <div className="border-t border-border bg-surface/40">
      <SectionContainer id="about" tabIndex={-1} aria-labelledby="about-heading" className="section-stack about-layout">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <SectionHeading id="about-heading" eyebrow="01 / About me" className="section-reveal">
            {portfolio.about.heading}
          </SectionHeading>
          <div className="section-reveal max-w-prose space-y-4 text-base leading-relaxed text-muted">
            {portfolio.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <ul aria-label="My approach to quality" className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {portfolio.about.highlights.map((highlight, index) => (
            <li key={highlight} className="section-reveal flex items-center gap-3 rounded-card border border-border bg-secondary/25 p-4 sm:flex-col sm:items-start lg:flex-row lg:items-center">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-surface text-primary"><SectionIcon name={highlightIcons[index]} /></span>
              <span className="text-sm font-medium text-primary">{highlight}</span>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </div>
  );
}
