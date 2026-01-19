import { useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
  id: string;
}

interface DesktopNavProps {
  navItems: NavItem[];
  activeSection: string;
  isHome: boolean;
}

export default function DesktopNav({
  navItems,
  activeSection,
  isHome,
}: DesktopNavProps) {
  const location = useLocation();

  return (
    <div className="hidden md:flex ml-auto items-center space-x-8">
      {navItems.map((item) => {
        const isHomeSpecific = item.id !== "features";
        if (isHomeSpecific && !isHome) return null;

        const isActive =
          activeSection === item.id ||
          (item.id === "features" && location.pathname.startsWith("/features"));

        return (
          <a
            key={item.id}
            href={item.path}
            className={`relative font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
              isActive
                ? "text-secondary font-extrabold"
                : "text-muted hover:text-light"
            }`}
          >
            {item.name}
            {isActive && (
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-secondary rounded-full animate-pulse" />
            )}
          </a>
        );
      })}
    </div>
  );
}
