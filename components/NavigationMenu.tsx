"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";

type NavigationItem = { id: string; label: string };

export function NavigationMenu({ items }: { items: readonly NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "home");
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen) listRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [isOpen]);

  useEffect(() => {
    // A disclosure stays in the normal tab order; it is not a modal or ARIA menu.
    function closeOnOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        if (navRef.current?.contains(document.activeElement)) toggleRef.current?.focus();
        setIsOpen(false);
      }
    }

    const desktop = window.matchMedia("(min-width: 64rem)");
    function handleBreakpointChange() {
      if (!desktop.matches && listRef.current?.contains(document.activeElement)) {
        toggleRef.current?.focus();
      }
      setIsOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    desktop.addEventListener("change", handleBreakpointChange);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      desktop.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    function updateActiveSection() {
      frame = 0;
      const sections = items.map(({ id }) => document.getElementById(id)).filter((section) => section !== null);
      let currentId: string | undefined = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 160) currentId = section.id;
      }
      // The final section may not reach the activation line before scrolling ends.
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        currentId = sections.at(-1)?.id;
      }
      if (currentId) setActiveId(currentId);
    }
    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    }
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [items]);

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          event.preventDefault();
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="navigation-links"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen(!isOpen)}
        className="flex size-12 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-secondary/60 lg:hidden"
      >
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          {isOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <ul ref={listRef} id="navigation-links" data-open={isOpen} className="navigation-links">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={activeId === id ? "location" : undefined}
              className="navigation-link"
              onClick={() => {
                setIsOpen(false);
                // Move focus to the destination before the mobile disclosure hides.
                document.getElementById(id)?.focus({ preventScroll: true });
              }}
            >
              {label}
            </a>
          </li>
        ))}
        <li className="mt-3 lg:ml-3 lg:mt-0 lg:self-center">
          <Button
            href="/resume/Kushala_Shrestha_Resume.pdf"
            download="Kushala_Shrestha_Resume.pdf"
            size="compact"
            className="w-full whitespace-nowrap lg:w-auto"
            onClick={() => {
              if (isOpen) {
                setIsOpen(false);
                toggleRef.current?.focus();
              }
            }}
          >
            Download Resume
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" />
            </svg>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
