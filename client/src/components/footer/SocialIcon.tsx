interface SocialIconProps {
  children: React.ReactNode;
  href: string;
  variant?: "linkedin" | "twitter" | "facebook" | "default";
}

export default function SocialIcon({
  children,
  href,
  variant = "default",
}: SocialIconProps) {
  const hoverColors = {
    linkedin: "hover:bg-linkedin hover:shadow-linkedin/40",
    twitter: "hover:bg-twitter hover:shadow-twitter/40",
    facebook: "hover:bg-facebook hover:shadow-facebook/40",
    default: "hover:bg-secondary hover:shadow-secondary/40",
  };

  const bgClass = hoverColors[variant] || hoverColors.default;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`size-10 rounded-full bg-surface dark:bg-white/5 border border-black/5 dark:border-transparent flex items-center justify-center transition duration-300 hover:scale-110 hover:text-white text-muted shadow-sm ${bgClass}`}
    >
      {children}
    </a>
  );
}
