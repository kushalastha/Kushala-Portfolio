import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  children: ReactNode;
  eyebrow?: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  tone?: "default" | "light";
};

export function SectionHeading({
  id, children, eyebrow, description, as: Heading = "h2", className = "", tone = "default",
}: SectionHeadingProps) {
  return (
    <header className={`max-w-2xl ${className}`}>
      {eyebrow && <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${tone === "light" ? "text-background" : "text-primary"}`}>{eyebrow}</p>}
      <Heading id={id} className={`text-3xl sm:text-4xl lg:text-5xl ${tone === "light" ? "text-background" : "text-primary"}`}>{children}</Heading>
      {description && <p className={`mt-4 max-w-xl text-base sm:text-lg ${tone === "light" ? "text-background/90" : "text-muted"}`}>{description}</p>}
    </header>
  );
}
