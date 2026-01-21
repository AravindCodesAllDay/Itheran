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
}

export default function Sidebar({ activeId, onSelect }: SidebarProps) {
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

  return (
    <>
      {/* Mobile Toggle & Header */}
      <div className="lg:hidden w-full mb-6">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="w-full flex items-center justify-between px-6 py-4 bg-surface dark:bg-white/5 border border-white/10 rounded-2xl shadow-sm hover:border-secondary transition-colors group"
        >
          <div className="flex items-center space-x-3 text-secondary font-display font-bold text-lg">
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
      />

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 h-[calc(100vh-80px)] sticky top-28 z-40 flex-col border-r border-black/5 dark:border-white/5 pr-4 bg-surface/50 dark:bg-white/5 backdrop-blur-sm rounded-r-[2rem]">
        <nav className="flex flex-col space-y-2">
          <SidebarNavList
            items={items}
            activeId={activeId}
            onSelect={onSelect}
          />
        </nav>

        <div className="mt-8 p-4 rounded-2xl bg-surface dark:bg-white/5 border border-white/5">
          <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">
            Need Help?
          </h4>
          <p className="text-xs text-muted leading-relaxed">
            Our AI agents are here to guide you through your career journey.
          </p>
        </div>
      </aside>
    </>
  );
}
