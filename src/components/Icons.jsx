function Stroke({ children, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function Fill({ d, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export const MailIcon = () => (
  <Stroke>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Stroke>
);

export const PinIcon = () => (
  <Stroke size={18}>
    <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Stroke>
);

export const DownloadIcon = () => (
  <Stroke size={18}>
    <path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 20h14" />
  </Stroke>
);

export const ArrowIcon = () => (
  <Stroke size={18}>
    <path d="M5 12h14m0 0-5-5m5 5-5 5" />
  </Stroke>
);

export const BackIcon = () => (
  <Stroke size={18}>
    <path d="M19 12H5m0 0 5-5m-5 5 5 5" />
  </Stroke>
);

export const SunIcon = () => (
  <Stroke size={18}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
  </Stroke>
);

export const MoonIcon = () => (
  <Stroke size={18}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </Stroke>
);

export const MenuIcon = () => (
  <Stroke>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Stroke>
);

export const CloseIcon = () => (
  <Stroke>
    <path d="m6 6 12 12M18 6 6 18" />
  </Stroke>
);

export const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const GitHubIcon = () => (
  <Fill d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
);

export const GitLabIcon = () => (
  <Fill d="m22.65 13.39-1.1-3.38-2.18-6.72a.75.75 0 0 0-1.42 0l-2.18 6.72H8.23L6.05 3.29a.75.75 0 0 0-1.42 0L2.45 10.01l-1.1 3.38a1.5 1.5 0 0 0 .54 1.68L12 22.41l10.11-7.34a1.5 1.5 0 0 0 .54-1.68Z" />
);

export const LinkedInIcon = () => (
  <Fill d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
);

export const CubeIcon = () => (
  <Stroke>
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
    <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
  </Stroke>
);
