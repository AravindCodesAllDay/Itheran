import { Link } from "react-router-dom";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navItems = [
    { name: "Hero", path: "/#hero", id: "hero" },
    { name: "Services", path: "/#services", id: "services" },
    { name: "Roadmap", path: "/#roadmap", id: "roadmap" },
    { name: "Contact", path: "/#contact", id: "contact" },
    { name: "About us", path: "/#aboutus", id: "aboutus" },
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

  useEffect(() => {
    const handleScrollBg = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.95;
      const opacity = Math.min(scrollY / triggerPoint, 1);
      setBgOpacity(opacity);
    };

    window.addEventListener("scroll", handleScrollBg);
    return () => window.removeEventListener("scroll", handleScrollBg);
  }, []);

  // Scroll direction detection
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScrollDir = () => {
      const currentY = window.scrollY;
      // Small threshold to prevent jitter
      if (Math.abs(currentY - lastScrollY) < 5) return;

      if (currentY > lastScrollY) setScrollDir("down");
      else if (currentY < lastScrollY) setScrollDir("up");
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScrollDir, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollDir);
  }, []);

  return (
    <nav
      className="p-4 fixed top-0 w-full z-50 backdrop-blur-xs transition-colors duration-150"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center">
        <Link
          to="/"
          className="text-2xl text-PRIMARY font-bold transition duration-150"
        >
          <span>★</span> <span className="text-SECONDARY">AI</span>THERAN
        </Link>

        <div className="ml-auto hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            // --- UPDATED LOGIC START ---
            const isActive = activeSection === item.id;
            const isScrollDown = scrollDir === "down";

            // This logic creates the "passing the baton" effect
            const originClass = isScrollDown
              ? isActive
                ? "origin-left"
                : "origin-right"
              : isActive
              ? "origin-right"
              : "origin-left";
            // --- UPDATED LOGIC END ---

            const shownClass = isActive ? "scale-x-100" : "scale-x-0";

            return (
              <a
                key={item.id}
                href={item.path}
                className="relative inline-block font-medium text-base text-PRIMARY group"
              >
                {item.name}
                <span
                  className={`pointer-events-none absolute left-0 -bottom-1 h-[3px] bg-SECONDARY w-full transform transition-transform duration-300 ${originClass} ${shownClass} group-hover:scale-x-100`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
