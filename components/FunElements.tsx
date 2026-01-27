export const ArrowDoodle = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Arrow Doodle"
  >
    <title>Arrow Doodle</title>
    <path
      d="M10 80C30 60 40 20 80 10M80 10L60 20M80 10L70 30"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Smooth gradient underline - replaces Squiggle
export const SmoothUnderline = ({ className = "" }: { className?: string }) => (
  <span
    className={`absolute pointer-events-none ${className}`}
    style={{
      bottom: "-0.5rem",
      left: 0,
      width: "100%",
      height: "0.375rem",
      background: "currentColor",
      borderRadius: "9999px",
      opacity: 0.6,
    }}
  />
);

export const StarBurst = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Star Burst"
  >
    <title>Star Burst</title>
    <path d="M25 0L28 17H45L31 27L36 43L25 33L14 43L19 27L5 17H22L25 0Z" />
  </svg>
);

// New Odoo-style circle doodle
export const CircleDoodle = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Circle Doodle"
  >
    <title>Circle Doodle</title>
    <circle
      cx="60"
      cy="60"
      r="50"
      stroke="currentColor"
      strokeWidth="3"
      strokeDasharray="8 8"
      opacity="0.3"
    />
  </svg>
);

// Reusable blur shape component
export const BlurShape = ({
  className = "",
  color = "secondary",
  size = "md",
}: {
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) => {
  const sizeClasses = {
    sm: "size-48",
    md: "size-72",
    lg: "size-96",
    xl: "size-[500px]",
  };

  const colorMap: Record<string, string> = {
    secondary: "bg-secondary/30",
    accent: "bg-accent/30",
    primary: "bg-primary/30",
    "theme-1": "bg-theme-1/30",
    "theme-2": "bg-theme-2/30",
    "theme-3": "bg-theme-3/30",
    "theme-4": "bg-theme-4/30",
  };

  // Fallback for direct color names if not in map (though discouraged) or extended theme usage
  const bgClass = colorMap[color] || `bg-${color}/30`;

  return (
    <span
      className={`absolute rounded-full blur-[100px] pointer-events-none opacity-20 dark:opacity-10 ${sizeClasses[size]} ${bgClass} ${className}`}
    />
  );
};

// Wavy shape for one-side rounded designs
export const WavyShape = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0 Q50 50 100 0 T200 0 L200 200 L0 200 Z" opacity="0.1" />
  </svg>
);

// Keep for backward compatibility but mark as deprecated
export const UnderlineDoodle = SmoothUnderline;
export const Squiggle = SmoothUnderline;
