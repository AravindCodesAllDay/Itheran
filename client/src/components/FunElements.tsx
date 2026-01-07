export const ArrowDoodle = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 80C30 60 40 20 80 10M80 10L60 20M80 10L70 30"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Squiggle = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="120"
    height="30"
    viewBox="0 0 120 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 15C20 5 30 25 45 15C60 5 70 25 85 15C100 5 110 25 115 15"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const StarBurst = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M25 0L28 17H45L31 27L36 43L25 33L14 43L19 27L5 17H22L25 0Z" />
  </svg>
);

export const UnderlineDoodle = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="200"
    height="20"
    viewBox="0 0 200 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M5 10Q50 15 100 5T195 10"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);
