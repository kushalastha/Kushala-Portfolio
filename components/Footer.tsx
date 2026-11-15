import { Suspense } from "react";
import { io } from "next/cache";
import { portfolio } from "@/data/portfolio";

async function CopyrightYear() {
  await io();
  return new Intl.DateTimeFormat("en", { year: "numeric", timeZone: "Asia/Kathmandu" }).format(new Date());
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-container flex flex-col gap-5 py-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <a href="#home" aria-label={`${portfolio.name} — Home`} className="rounded-sm font-display text-3xl text-primary">KS<span className="text-accent">.</span></a>
          <div>
            <p className="text-sm font-medium text-primary">{portfolio.name}</p>
            <p className="text-xs text-muted">{portfolio.role}</p>
          </div>
        </div>
        <p className="text-xs text-muted">
          © <span className="inline-block min-w-[4ch] tabular-nums"><Suspense fallback={<span aria-label="Current year">…</span>}><CopyrightYear /></Suspense></span> {portfolio.name}.
        </p>
        <a href="#home" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-medium text-primary underline underline-offset-4 hover:decoration-accent">Back to Top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
