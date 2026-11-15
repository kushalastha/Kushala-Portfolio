import { Button } from "@/components/Button";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { contactContent, portfolio } from "@/data/portfolio";

export function Contact() {
  const links = [
    ...portfolio.links,
    ...(portfolio.linkedinUrl ? [{ label: "LinkedIn", href: portfolio.linkedinUrl }] : []),
  ];

  return (
    <SectionContainer id="contact" tabIndex={-1} aria-labelledby="contact-heading">
      <div className="contact-panel relative isolate overflow-hidden rounded-card p-6 shadow-soft sm:p-8 lg:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 top-8 -z-10 h-48 w-56 rotate-12 rounded-[60%_40%_55%_45%] border border-background/20 bg-secondary/10" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 right-12 -z-10 size-48 rounded-full border border-background/15" />
        <svg aria-hidden="true" focusable="false" viewBox="0 0 220 250" className="pointer-events-none absolute right-10 top-10 hidden w-52 text-background/60 xl:block" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <g transform="rotate(6 110 125)">
            <rect x="23" y="15" width="174" height="220" rx="24" fill="currentColor" fillOpacity="0.04" />
            <path d="M48 47h72m-72 9h42" strokeOpacity="0.55" />
            {[86, 133, 180].map((y) => (
              <g key={y}>
                <rect x="46" y={y} width="24" height="24" rx="7" strokeOpacity="0.65" />
                <path d={`m52 ${y + 12} 4 4 8-9`} className="text-secondary" />
                <path d={`M86 ${y + 8}h63m-63 9h40`} strokeOpacity="0.55" />
              </g>
            ))}
          </g>
        </svg>
        <div className="section-stack content-layout relative xl:pr-64">
          <SectionHeading id="contact-heading" eyebrow="Let's connect" description={contactContent.description} tone="light">{contactContent.heading}</SectionHeading>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {portfolio.email && <Button href={`mailto:${portfolio.email}`} variant="light" className="focus-visible:outline-background">Email me <span aria-hidden="true">↗</span></Button>}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {links.map(({ href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} className="inline-flex min-h-12 items-center gap-2 rounded-sm text-sm font-medium text-background underline underline-offset-4 transition-colors hover:text-secondary focus-visible:outline-background">{label} <span aria-hidden="true">↗</span></a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-background/25 pt-4 text-sm text-background/90">
            {portfolio.email && <p className="min-w-0 break-all">{portfolio.email}</p>}
            {portfolio.location && <p>{portfolio.location}</p>}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
