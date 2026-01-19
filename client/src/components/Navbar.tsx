import { Link, useLocation } from "react-router-dom";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navItems = [
    { name: "Hero", path: "/#hero", id: "hero" },
    { name: "Services", path: "/#services", id: "services" },
    { name: "Roadmap", path: "/#roadmap", id: "roadmap" },
    { name: "About us", path: "/#aboutus", id: "aboutus" },
    { name: "Contact", path: "/#contact", id: "contact" },
    { name: "Features", path: "/features", id: "features" },
  ];

  const activeSection = useScrollSpy([
    "hero",
    "services",
    "roadmap",
    "aboutus",
    "contact",
  ]);

  // const [isScrolled, setIsScrolled] = useState(false); // Removed unused state
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScrollDir = () => {
      // Don't hide navbar if menu is open
      if (isMenuOpen) return;

      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY) < 10) return;

      if (currentY > lastScrollY && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScrollDir, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollDir);
    };
  }, [isMenuOpen]);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div
      className={`fixed top-0 w-full z-50 flex justify-center transition-transform duration-500 will-change-transform ${
        visible ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <nav className="relative transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex items-center px-6 md:px-8 mt-0 md:mt-4 w-full md:w-[90%] max-w-5xl rounded-none md:rounded-full glass shadow-premium border-b border-white/10 md:border md:border-white/20 py-4">
        <Link
          to="/"
          className="text-2xl font-display font-bold tracking-tight hover:opacity-80 transition duration-150 flex items-center gap-2"
        >
          <span className="text-secondary text-3xl">★</span>
          <span className="text-light group-hover:text-secondary transition-colors">
            {import.meta.env.VITE_APP_NAME}
          </span>
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-muted hover:text-secondary transition-colors"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex ml-auto items-center space-x-8">
          {navItems.map((item) => {
            const isHomeSpecific = item.id !== "features";
            if (isHomeSpecific && !isHome) return null;

            const isActive =
              activeSection === item.id ||
              (item.id === "features" &&
                location.pathname.startsWith("/features"));

            return (
              <a
                key={item.id}
                href={item.path}
                className={`relative font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
                  isActive ? "text-secondary" : "text-muted hover:text-light"
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

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-t border-white/10 shadow-2xl p-6 flex flex-col space-y-4 md:hidden animate-slide-in rounded-b-3xl">
            {navItems.map((item) => {
              // Show all items on mobile
              const isActive =
                activeSection === item.id ||
                (item.id === "features" &&
                  location.pathname.startsWith("/features"));

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
        )}
      </nav>
    </div>
  );
}
