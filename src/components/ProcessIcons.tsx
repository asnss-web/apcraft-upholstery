// Minimal line-art icons for the home page process row — hand-drawn to
// match the thin, single-weight illustration style of the client's
// reference sites rather than a generic icon-font glyph.

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ShareIcon() {
  return (
    <svg viewBox="0 0 40 40" width="34" height="34" {...common}>
      <rect x="6" y="11" width="28" height="20" rx="1.5" />
      <path d="M6 14 L20 24 L34 14" />
    </svg>
  );
}

export function SwatchIcon() {
  return (
    <svg viewBox="0 0 40 40" width="34" height="34" {...common}>
      <rect x="7" y="9" width="17" height="17" rx="1.5" transform="rotate(-8 15.5 17.5)" />
      <rect x="16" y="14" width="17" height="17" rx="1.5" />
    </svg>
  );
}

export function QuoteIcon() {
  return (
    <svg viewBox="0 0 40 40" width="34" height="34" {...common}>
      <path d="M11 6h14l6 6v22H11z" />
      <path d="M25 6v6h6" />
      <path d="M15 21l3.5 3.5L26 17" />
    </svg>
  );
}

export function DeliveryIcon() {
  return (
    <svg viewBox="0 0 40 40" width="34" height="34" {...common}>
      <path d="M6 13l14-6 14 6-14 6z" />
      <path d="M6 13v14l14 6 14-6V13" />
      <path d="M20 19v14" />
    </svg>
  );
}

export function ChairIcon() {
  return (
    <svg viewBox="0 0 40 40" width="30" height="30" {...common}>
      <path d="M11 6v18" />
      <path d="M29 6v22" />
      <path d="M11 6h18" />
      <path d="M11 24h18v4a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4z" />
    </svg>
  );
}

export function NeedleIcon() {
  return (
    <svg viewBox="0 0 40 40" width="30" height="30" {...common}>
      <path d="M8 31 27 12a3 3 0 0 1 4 4L12 35z" />
      <circle cx="29" cy="10" r="2" />
      <path d="M6 34l4-3" strokeDasharray="1 4" />
    </svg>
  );
}

export function StorefrontIcon() {
  return (
    <svg viewBox="0 0 40 40" width="30" height="30" {...common}>
      <path d="M6 12l2-6h24l2 6" />
      <path d="M6 12a3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 0 7 0" />
      <path d="M8 15v17h24V15" />
      <path d="M17 32v-9h6v9" />
    </svg>
  );
}
