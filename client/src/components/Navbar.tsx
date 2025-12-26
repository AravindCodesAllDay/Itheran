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
    { name: "Contact", path: "/#contact", id: "contact" },
    { name: "About us", path: "/#aboutus", id: "aboutus" },
    { name: "Features", path: "/features", id: "features" },
  ];

  const activeSection = useScrollSpy([
    "hero",
    "services",
    "roadmap",
    "aboutus",
    "contact",
  ]);

  const [bgOpacity, setBgOpacity] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScrollBg = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.1;
      const opacity = Math.min(scrollY / triggerPoint, 1);
      setBgOpacity(opacity);
    };

    let lastScrollY = window.scrollY;
    const handleScrollDir = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY) < 10) return;

      if (currentY > lastScrollY && currentY > 100) {
        setScrollDir("down");
        setVisible(false);
      } else {
        setScrollDir("up");
        setVisible(true);
      }
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScrollBg);
    window.addEventListener("scroll", handleScrollDir, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollBg);
      window.removeEventListener("scroll", handleScrollDir);
    };
  }, []);

  return (
    <nav
      className={`p-4 fixed top-0 w-full z-50 transition-all duration-500 transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        backgroundColor: bgOpacity > 0 ? `var(--glass)` : "transparent",
        backdropFilter: bgOpacity > 0 ? "blur(12px)" : "none",
        borderBottom:
          bgOpacity > 0 ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition duration-150 flex items-center"
          style={{ color: "var(--light)" }}
        >
          <span style={{ color: "var(--secondary)" }}>★</span> AI
          <span style={{ color: "var(--secondary)" }}>THERAN</span>
        </Link>

        <div className="ml-auto hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            // Only show home-specific links on the home route
            const isHomeSpecific = item.id !== "features";
            if (isHomeSpecific && !isHome) return null;

            const isActive =
              activeSection === item.id ||
              (item.id === "features" &&
                location.pathname.startsWith("/features"));
            const isScrollDown = scrollDir === "down";

            // "Passing the baton" effect
            const originClass = isScrollDown
              ? isActive
                ? "origin-left"
                : "origin-right"
              : isActive
              ? "origin-right"
              : "origin-left";

            const shownClass = isActive ? "scale-x-100" : "scale-x-0";

            return (
              <a
                key={item.id}
                href={item.path}
                className={`relative inline-block font-medium text-sm uppercase tracking-wider transition-colors duration-300 group ${
                  isActive ? "text-secondary" : "text-muted hover:text-light"
                }`}
              >
                {item.name}
                <span
                  className={`pointer-events-none absolute left-0 -bottom-1 h-[2px] bg-secondary w-full transform transition-transform duration-300 ${originClass} ${shownClass} group-hover:scale-x-100`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
