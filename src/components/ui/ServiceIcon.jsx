/*
 * ServiceIcon — premium monochrome line icons in a single brand color.
 * Render with currentColor so the parent controls the stroke color.
 */
const paths = {
  support: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="2.5" y="13" width="4" height="7" rx="1.2" />
      <rect x="17.5" y="13" width="4" height="7" rx="1.2" />
      <path d="M12 12v4" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="19" r="2.2" />
      <circle cx="19" cy="19" r="2.2" />
      <path d="M12 7.2v4.3M12 11.5 6.4 17M12 11.5l5.6 5.5" />
    </>
  ),
  security: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z" />
      <path d="M9.2 11.8 11.2 13.8 15 9.8" />
    </>
  ),
  procurement: (
    <>
      <path d="M3 7h2l2.2 9.5a1.5 1.5 0 0 0 1.5 1.2h7.8a1.5 1.5 0 0 0 1.5-1.2L20 7H6" />
      <path d="M8.5 7V5.5a3.5 3.5 0 0 1 7 0V7" />
    </>
  ),
  retail: (
    <>
      <path d="M4 8h16l-1 11.5a1.2 1.2 0 0 1-1.2 1.1H6.2A1.2 1.2 0 0 1 5 19.5L4 8Z" />
      <path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" />
      <path d="M4 12h16" />
    </>
  ),
  software: (
    <>
      <rect x="3.5" y="4.5" width="17" height="13" rx="1.8" />
      <path d="M3.5 9h17M7 13l-1.6 2.2M17 13l1.6 2.2" />
      <path d="M9.5 17.5 12 21l2.5-3.5" />
    </>
  ),
  iot: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6V5M12 14.4V19M9.6 12H5M14.4 12H19" />
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </>
  ),
  consultancy: (
    <>
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H11v16H5.5A2.5 2.5 0 0 1 3 17.5V6.5Z" />
      <path d="M21 6.5A2.5 2.5 0 0 0 18.5 4H13v16h5.5A2.5 2.5 0 0 0 21 17.5V6.5Z" />
      <path d="M7 8.5h2M7 12h2M7 15.5h2" />
    </>
  ),
};

export default function ServiceIcon({ glyph, className = "w-7 h-7", strokeWidth = 1.6 }) {
  const content = paths[glyph] || paths.support;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
