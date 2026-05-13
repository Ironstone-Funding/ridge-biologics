interface IconProps {
  name: string;
  className?: string;
}

const paths: Record<string, JSX.Element> = {
  microscope: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M12 3v4M9.5 7h5a1 1 0 011 1v1a5 5 0 01-5 5 5 5 0 01-5-5V8a1 1 0 011-1h.5" />
      <path d="M7.5 13.5A6.5 6.5 0 0012 20a6.5 6.5 0 004.5-6.5" />
      <path d="M9 20h6M12 20v1" />
    </svg>
  ),
  vial: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v7l-4 8a1 1 0 00.9 1.5h10.2a1 1 0 00.9-1.5L14 10V3" />
      <path d="M10 15h4" />
    </svg>
  ),
  droplet: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" />
      <path d="M9 17a3 3 0 006 0" />
    </svg>
  ),
  snowflake: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  thermometer: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
    </svg>
  ),
  package: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16V8z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  handshake: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12l4.5-4.5L9 9l3-3 3 3 2.5-2.5L22 12" />
      <path d="M2 12c0 4.97 4.03 9 9 9s9-4.03 9-9" />
      <path d="M9 9l-2 2 2 2M15 9l2 2-2 2" />
    </svg>
  ),
  "book-open": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  ),
  shield: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  star: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  stethoscope: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3a2 2 0 000 4h1a7 7 0 007 7 7 7 0 007-7V5" />
      <path d="M13 14v3a4 4 0 004 4h0a4 4 0 004-4v-1" />
      <circle cx="21" cy="16" r="1" />
      <path d="M7 7v3" />
    </svg>
  ),
  building: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 7l9-4 9 4" />
      <path d="M3 7v14M21 7v14" />
      <rect x="9" y="11" width="6" height="10" />
      <rect x="6" y="11" width="3" height="4" />
      <rect x="15" y="11" width="3" height="4" />
    </svg>
  ),
  users: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  file: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  chart: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  link: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  ),
  "check-circle": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
};

export default function Icon({ name, className = "w-6 h-6" }: IconProps) {
  const icon = paths[name];
  if (!icon) return null;
  return <span className={className}>{icon}</span>;
}
