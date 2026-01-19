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

  useEffect(() => {
    // const handleScroll = () => {
    //   const currentY = window.scrollY;
    //   setIsScrolled(currentY > 50);
    // };

    let lastScrollY = window.scrollY;
    const handleScrollDir = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY) < 10) return;

      if (currentY > lastScrollY && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = currentY;
    };

    // window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollDir, { passive: true });
    return () => {
      // window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollDir);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 flex justify-center transition-transform duration-500 will-change-transform ${
        visible ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <nav className="transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex items-center px-6 md:px-8 mt-0 md:mt-4 w-full md:w-[90%] max-w-5xl rounded-none md:rounded-full glass shadow-premium border-b border-white/10 md:border md:border-white/20 py-4">
        <Link
          to="/"
          className="text-2xl font-display font-bold tracking-tight hover:opacity-80 transition duration-150 flex items-center gap-2"
        >
          <span className="text-secondary text-3xl">★</span>
          <span className="text-light group-hover:text-secondary transition-colors">
            {import.meta.env.VITE_APP_NAME}
          </span>
        </Link>

        <div className="ml-auto flex items-center space-x-8">
          {/* Mobile: Only show Features link if not on features page, or Home if on features page */}
          <div className="md:hidden">
            {isHome ? (
              <Link
                to="/features"
                className="text-sm font-bold uppercase tracking-wider text-muted hover:text-light transition-colors"
              >
                Features
              </Link>
            ) : (
              <Link
                to="/"
                className="text-sm font-bold uppercase tracking-wider text-muted hover:text-light transition-colors"
              >
                Home
              </Link>
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              // Only show home-specific links on the home route
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
        </div>
      </nav>
    </div>
  );
}
