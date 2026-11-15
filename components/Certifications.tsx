import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionIcon } from "@/components/SectionIcon";
import { certificationsContent, portfolio } from "@/data/portfolio";

export function Certifications() {
  return (
    <SectionContainer id="certifications" tabIndex={-1} aria-labelledby="certifications-heading" className="section-stack content-layout min-w-0 px-0">
      <SectionHeading id="certifications-heading" eyebrow="06 / Certifications" className="section-reveal">{certificationsContent.heading}</SectionHeading>
      <ul className="space-y-3">
        {portfolio.certifications.map(({ id, title, issuer }) => (
          <li key={id} className="section-reveal flex items-start gap-4 rounded-card border border-border bg-surface p-5 shadow-soft">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-secondary/35 text-primary"><SectionIcon name="award" /></span>
            <div className="min-w-0">
              <h3 className="text-xl text-primary">{title}</h3>
              <p className="mt-1 text-sm text-muted">{issuer}</p>
            </div>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
