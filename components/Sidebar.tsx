"use client";

import { sections } from "../app/features/features";
import aboutus from "../assets/aboutus.json";
import interview from "../assets/interview.json";
import resume from "../assets/resume.json";
import skills from "../assets/skills.json";
import MobileSidebar from "./sidebar/MobileSidebar";
import SidebarNavList from "./sidebar/SidebarNavList";

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  themeColor?: string;
}

import { useEffect, useState } from "react";

export default function Sidebar({
  activeId,
  onSelect,
  themeColor = "theme-2",
}: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const iconMap: Record<string, object> = {
    about: aboutus,
    "ai-interview": interview,
    "skill-training": skills,
    "resume-gen": resume,
  };

  const items = Object.entries(sections).map(([id, section]) => ({
    id,
    label: section.title,
    icon: iconMap[id],
  }));

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Mobile Toggle & Header */}
      <div className="lg:hidden w-full mb-6">
        <button
          onClick={() => setIsMobileOpen(true)}
          className={`w-full flex items-center justify-between px-6 py-4 bg-surface-highlight border border-muted/40 rounded-2xl shadow-sm hover:border-${themeColor} transition-colors group`}
        >
          <div
            className={`flex items-center space-x-3 text-${themeColor} font-display font-bold text-lg transition-colors duration-300`}
          >
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
              role="img"
              aria-label="Menu Icon"
            >
              <title>Menu Icon</title>
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span>Menu</span>
          </div>
          <span className="text-muted text-sm group-hover:text-light transition-colors">
            {items.find((i) => i.id === activeId)?.label || "Select Feature"}
          </span>
        </button>
      </div>

      <MobileSidebar
        items={items}
        activeId={activeId}
        onSelect={(id) => {
          onSelect(id);
          setIsMobileOpen(false);
        }}
        isOpen={isMobileOpen}
        setIsOpen={setIsMobileOpen}
        themeColor={themeColor}
      />

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 min-h-[calc(100vh-200px)] sticky top-28 z-40 flex-col pr-4">
        <div className="bg-surface/80 backdrop-blur-sm rounded-[2rem] border border-muted/40 p-4">
          <nav className="flex flex-col space-y-2">
            <SidebarNavList
              items={items}
              activeId={activeId}
              onSelect={onSelect}
            />
          </nav>

          <div className="mt-8 p-4 rounded-2xl bg-surface border border-muted/40">
            <h4
              className={`text-sm font-bold text-${themeColor} uppercase tracking-widest mb-2 transition-colors duration-300`}
            >
              Need Help?
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              Our AI agents are here to guide you through your career journey.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
