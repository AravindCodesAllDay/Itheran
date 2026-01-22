import { useState, useEffect } from "react";
import resume from "../assets/resume.json";
import skills from "../assets/skills.json";
import interview from "../assets/interview.json";
import aboutus from "../assets/aboutus.json";
import MobileSidebar from "./sidebar/MobileSidebar";
import SidebarNavList from "./sidebar/SidebarNavList";

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  themeColor?: string;
}

export default function Sidebar({
  activeId,
  onSelect,
  themeColor = "secondary",
}: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const items = [
    {
      id: "about",
      icon: aboutus,
      label: `About ${import.meta.env.VITE_APP_NAME}`,
    },
    { id: "ai-interview", icon: interview, label: "AI Interview" },
    { id: "skill-training", icon: skills, label: "Skill Training" },
    { id: "resume-gen", icon: resume, label: "Resume Generation" },
  ];

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

  const colorThemeClasses: Record<
    string,
    { border: string; text: string; headerText: string }
  > = {
    "theme-1": {
      border: "hover:border-theme-1",
      text: "text-theme-1",
      headerText: "text-theme-1",
    },
    "theme-2": {
      border: "hover:border-theme-2",
      text: "text-theme-2",
      headerText: "text-theme-2",
    },
    "theme-3": {
      border: "hover:border-theme-3",
      text: "text-theme-3",
      headerText: "text-theme-3",
    },
    "theme-4": {
      border: "hover:border-theme-4",
      text: "text-theme-4",
      headerText: "text-theme-4",
    },
  };

  const currentTheme =
    colorThemeClasses[themeColor] || colorThemeClasses["theme-2"];

  return (
    <>
      {/* Mobile Toggle & Header */}
      <div className="lg:hidden w-full mb-6">
        <button
          onClick={() => setIsMobileOpen(true)}
          className={`w-full flex items-center justify-between px-6 py-4 bg-surface dark:bg-black/40 border border-white/10 rounded-2xl shadow-sm ${currentTheme.border} transition-colors group`}
        >
          <div
            className={`flex items-center space-x-3 ${currentTheme.text} font-display font-bold text-lg transition-colors duration-300`}
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
            >
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
        <div className="bg-surface/80 dark:bg-black/20 backdrop-blur-sm rounded-[2rem] border border-black/5 dark:border-white/5 p-4">
          <nav className="flex flex-col space-y-2">
            <SidebarNavList
              items={items}
              activeId={activeId}
              themeColor={themeColor}
              onSelect={onSelect}
            />
          </nav>

          <div className="mt-8 p-4 rounded-2xl bg-surface dark:bg-black/40 border border-black/5 dark:border-white/5">
            <h4
              className={`text-sm font-bold ${currentTheme.headerText} uppercase tracking-widest mb-2 transition-colors duration-300`}
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
