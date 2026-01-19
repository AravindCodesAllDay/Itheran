import { useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
  id: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({
  navItems,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {
  const location = useLocation();

  if (!isMenuOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-t border-white/10 shadow-2xl p-6 flex flex-col space-y-4 md:hidden animate-slide-in rounded-b-3xl">
      {navItems.map((item) => {
        const isActive =
          activeSection === item.id ||
          (item.id === "features" && location.pathname.startsWith("/features"));

        return (
          <a
            key={item.id}
            href={item.path}
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg font-bold uppercase tracking-wider p-2 rounded-lg transition-colors ${
              isActive
                ? "text-secondary bg-secondary/10"
                : "text-muted hover:text-light"
            }`}
          >
            {item.name}
          </a>
        );
      })}
    </div>
  );
}
