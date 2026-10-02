// Icon paths copied from the approved designs (24×24 grid, 2px round strokes).
const PATHS = {
  arrow: ["M5 12h14M13 6l6 6-6 6"],
  check: ["M20 6L9 17l-5-5"],
  menu: ["M3 7h18M3 12h18M3 17h18"],
  close: ["M18 6L6 18M6 6l12 12"],
  factory: ["M2 20V9l6 4V9l6 4V4h8v16z", "M6 17h2M11 17h2M16 17h2"],
  target: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],
  compass: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M16 8l-2 6-6 2 2-6z"],
  doc: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6", "M16 13H8M16 17H8M10 9H8"],
  book: ["M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z", "M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"],
  layers: ["M12 2l10 5-10 5L2 7z", "M2 17l10 5 10-5", "M2 12l10 5 10-5"],
  user: ["M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"],
  trend: ["M3 17l6-6 4 4 8-8", "M14 7h7v7"],
  shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "M9 12l2 2 4-4"],
  grid: ["M3 3h8v10H3zM13 3h8v6h-8zM13 11h8v10h-8zM3 15h8v6H3z"],
  clipboard: ["M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", "M8 2h8v4H8z", "M9 14l2 2 4-4"],
  cap: ["M22 10L12 5 2 10l10 5z", "M6 12v5c3 2 9 2 12 0v-5"],
  monitor: ["M2 3h20v14H2z", "M8 21h8M12 17v4"],
  bars: ["M12 20V10M18 20V4M6 20v-4"],
  chevDown: ["M6 9l6 6 6-6"],
  users: ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M9 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8z", "M23 21v-2a4 4 0 0 0-3-3.9", "M16 3.1a4 4 0 0 1 0 7.8"],
  globe: ["M2 12h20", "M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20z", "M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0z"],
  phone: ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"],
  mail: ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "M22 6l-10 7L2 6"],
  checkSquare: ["M9 11l3 3L22 4", "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"],
  sliders: ["M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"],
  search: ["M3 11a8 8 0 1 0 16 0a8 8 0 1 0-16 0z", "M21 21l-4.3-4.3"],
  eye: ["M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z", "M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0z"],
  video: ["M23 7l-7 5 7 5z", "M1 5h15v14H1z"],
  alert: ["M12 9v4M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"],
  refresh: ["M23 4v6h-6", "M1 20v-6h6", "M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15"],
  mobile: ["M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z", "M12 18h.01"],
  chip: ["M4 4h16v16H4z", "M9 9h6v6H9z", "M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"],
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 22, stroke = 2 }: { name: IconName; size?: number; stroke?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
