import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { educationContent, portfolio } from "@/data/portfolio";

export function Education() {
  return (
    <SectionContainer id="education" tabIndex={-1} aria-labelledby="education-heading" className="section-stack content-layout min-w-0 px-0">
      <SectionHeading id="education-heading" eyebrow="05 / Education" className="section-reveal">{educationContent.heading}</SectionHeading>
      <ol aria-label="Academic background" className="space-y-5 border-l border-primary/25 pl-5">
        {portfolio.education.map(({ id, qualification, institution, years }, index) => (
          <li key={id} className="section-reveal relative">
            <span aria-hidden="true" className={`absolute -left-[27px] top-1.5 size-3 rounded-full border-2 border-background ${index === 0 ? "bg-accent" : "bg-primary"}`} />
            {years && <p className="mb-2 text-xs font-semibold tracking-wide text-primary">{years}</p>}
            <h3 className="text-xl text-primary">{qualification}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{institution}</p>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}
