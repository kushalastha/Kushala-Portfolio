import type { ComponentPropsWithoutRef } from "react";

type SharedProps = {
  variant?: "primary" | "secondary" | "light";
  size?: "default" | "compact";
  className?: string;
};

type ButtonProps = SharedProps & (
  | (ComponentPropsWithoutRef<"button"> & { href?: never })
  | (ComponentPropsWithoutRef<"a"> & { href: string })
);

const variants = {
  light: "border-background bg-background text-primary hover:bg-secondary hover:border-secondary",
  primary: "border-primary bg-primary text-background hover:bg-foreground hover:border-foreground",
  secondary: "border-primary bg-transparent text-primary hover:bg-secondary",
};

const sizes = {
  default: "min-h-12 px-6 py-3 leading-6",
  compact: "min-h-11 px-4 py-2 leading-5 lg:min-h-10.5",
};

// Navigation renders an anchor; actions render a native button. No client JS is required.
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "default", className = "", ...rest } = props;
  const classes = `inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${sizes[size]} ${variants[variant]} ${className}`;

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as ComponentPropsWithoutRef<"a"> & { href: string };
    return <a className={classes} href={href} {...anchorProps} />;
  }

  const { type = "button", ...buttonProps } = rest as ComponentPropsWithoutRef<"button">;
  return <button className={classes} type={type} {...buttonProps} />;
}
