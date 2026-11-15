const iconPaths = {
  award: "M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-4 11-2 9 6-3 6 3-2-9",
  analytical: "M10.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Zm5.3 12.8L21 21M7 11l2 2 4-5",
  collaboration: "M9 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 20v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v3",
  learning: "M12 5v16M3 3c4 0 7 1 9 3 2-2 5-3 9-3v15c-4 0-7 1-9 3-2-2-5-3-9-3V3Z",
  testing: "M9 4H4v16h16V9M9 11l4 4L21 4",
  tools: "M14 3a6 6 0 0 0-7 8L3 15a3 3 0 0 0 6 6l4-4a6 6 0 0 0 8-7l-4 4-4-4 4-4-3-3Z",
  programming: "m8 5-6 7 6 7m8-14 6 7-6 7M14 3l-4 18",
  automation: "M20 8a9 9 0 0 0-15-3L2 8m0-5v5h5m-3 8a9 9 0 0 0 15 3l3-3m0 5v-5h-5",
};

export type SectionIconName = keyof typeof iconPaths;

export function SectionIcon({ name }: { name: SectionIconName }) {
  return (
    <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={iconPaths[name]} />
    </svg>
  );
}
