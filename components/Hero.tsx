import { Button } from "@/components/Button";
import Image from "next/image";
import { SectionContainer } from "@/components/SectionContainer";
import { heroContent, portfolio } from "@/data/portfolio";

export function Hero() {
  const socialLinks = [
    ...portfolio.links,
    ...(portfolio.email ? [{ label: "Email", href: `mailto:${portfolio.email}` }] : []),
    ...(portfolio.linkedinUrl ? [{ label: "LinkedIn", href: portfolio.linkedinUrl }] : []),
  ];

  return (
    <SectionContainer id="home" tabIndex={-1} aria-labelledby="hero-heading" className="hero-section grid items-start gap-8">
      <div className="hero-enter relative z-10 min-w-0">
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {heroContent.label}
        </p>
        <h1 id="hero-heading" className="text-primary">
          <span className="mb-3 block text-2xl tracking-normal">{heroContent.greeting}{" "}</span>
          <span className="block text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.035em]">{portfolio.name}<span className="text-accent">.</span></span>
        </h1>
        <p className="mt-5 text-xl font-medium text-primary sm:text-2xl">
          <span className="decoration-accent/80 underline decoration-[4px] underline-offset-8">{portfolio.role}</span>
        </p>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">{portfolio.bio}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {heroContent.actions.map(({ label, href, variant }) => (
            <Button key={href} href={href} variant={variant}>
              {label}
              <span aria-hidden="true">{variant === "primary" ? "↗" : "→"}</span>
            </Button>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-4">
          <ul aria-label="Social and email links" className="flex flex-wrap gap-5">
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="social-link"
                  href={href}
                  target={href.startsWith("https://") ? "_blank" : undefined}
                  rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  aria-label={href.startsWith("https://") ? `${label} (opens in a new tab)` : undefined}
                >
                  {label} <span aria-hidden="true" className="text-primary">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2 text-sm text-muted">
            <svg aria-hidden="true" width="16" height="18" viewBox="0 0 20 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 9c0 5-7 12-7 12S3 14 3 9a7 7 0 0 1 14 0Z" /><circle cx="10" cy="9" r="2.5" />
            </svg>
            {portfolio.location}
          </p>
        </div>
      </div>

      <figure aria-label={`Portrait of ${portfolio.name}`} className="hero-enter hero-art relative">
        <div className="portrait-composition relative isolate grid place-items-center">
          <div className="portrait-photo shadow-soft">
            <div className="portrait-crop">
              <Image
                src="/images/kushala-portrait.jpg"
                alt="Portrait of Kushala Shrestha"
                fill
                sizes="(min-width: 440px) 480px, calc(120vw - 48px)"
                preload
                className="portrait-image"
              />
            </div>
          </div>
          <ul aria-label="QA interests" className="contents">
            {heroContent.badges.map((badge, index) => (
              <li key={badge} className={`qa-badge qa-badge-${index + 1}`}>
                <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary/60 text-xs text-primary">✓</span>
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </figure>
    </SectionContainer>
  );
}
