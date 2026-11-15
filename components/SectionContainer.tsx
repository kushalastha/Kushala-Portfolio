import type { ComponentPropsWithoutRef } from "react";

type SectionContainerProps = ComponentPropsWithoutRef<"section"> & {
  "aria-labelledby": string;
};

export function SectionContainer({ children, className = "", ...props }: SectionContainerProps) {
  return (
    <section className={`page-container section-container ${className}`} {...props}>
      {children}
    </section>
  );
}
