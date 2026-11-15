import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { experienceContent, portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <div className="border-y border-border bg-secondary/20">
      <SectionContainer id="experience" tabIndex={-1} aria-labelledby="experience-heading">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
          <div className="section-reveal">
            <SectionHeading id="experience-heading" eyebrow="03 / Experience">{experienceContent.heading}</SectionHeading>
          </div>
          <ol aria-label="Employment history, most recent role first" className="relative space-y-4 border-l border-primary/25 pl-6 sm:pl-8">
            {portfolio.experience.map(({ id, organization, role, status, highlights }) => (
              <li key={id} className="relative">
                <span aria-hidden="true" className={`absolute -left-[33px] top-7 size-4 rounded-full border-4 border-background sm:-left-[41px] ${status === "Present" ? "bg-accent" : "bg-primary"}`} />
                <article aria-labelledby={`${id}-heading`} className="section-reveal min-w-0 rounded-card border border-border bg-surface p-5 shadow-soft sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{organization}</p>
                    <span className={`rounded-full border border-primary/15 px-2.5 py-1 text-xs font-medium text-primary ${status === "Present" ? "bg-accent/10" : "bg-secondary/30"}`}>{status}</span>
                  </div>
                  <h3 id={`${id}-heading`} className="text-2xl text-primary">{role}</h3>
                  {highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </SectionContainer>
    </div>
  );
}
