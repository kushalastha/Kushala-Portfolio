import { NavigationMenu } from "@/components/NavigationMenu";
import { navigation, portfolio } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="page-container flex min-h-20 items-center justify-between gap-5">
        <a href="#home" aria-label={`${portfolio.name} — Home`} className="flex shrink-0 items-center gap-3 rounded-sm text-primary">
          <span className="font-display text-4xl leading-none">KS<span className="text-accent">.</span></span>
          <span className="hidden border-l border-border pl-3 text-sm font-medium sm:block lg:hidden xl:block">{portfolio.name}</span>
        </a>
        <NavigationMenu items={navigation} />
      </div>
    </header>
  );
}
