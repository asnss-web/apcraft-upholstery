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
