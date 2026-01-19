import { useState, useEffect } from "react";
import Lottie from "react-lottie";

import resume from "../assets/resume.json";
import skills from "../assets/skills.json";
import interview from "../assets/interview.json";
import aboutus from "../assets/aboutus.json";

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

  // Close mobile drawer when selection changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [activeId]);

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

  const NavItems = () => (
    <>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group whitespace-nowrap w-full text-left ${
            activeId === item.id
              ? "bg-secondary text-white shadow-lg scale-105"
              : "hover:bg-surface text-muted hover:text-light"
          }`}
        >
          <div>
            <Lottie
              options={{ animationData: item.icon, autoplay: false }}
              isPaused={true}
              height="30px"
              width="30px"
            />
          </div>
          <span className="font-semibold tracking-wide">{item.label}</span>
        </button>
      ))}
    </>
  );

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

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          />
          <aside className="absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-surface dark:bg-[#1e1e2d] shadow-2xl p-6 overflow-y-auto border-r border-white/10 animate-slide-in">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-display font-bold text-secondary tracking-wide">
                Features
              </h2>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-muted hover:text-secondary transition-colors bg-white/5 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="M6 6 18 18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-2">
              <NavItems />
            </nav>
            <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/5">
              <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">
                Need Help?
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Swipe right to close this menu or click the close button.
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 h-[calc(100vh-80px)] sticky top-28 z-40 flex-col border-r border-white/5 pr-4 bg-transparent">
        <nav className="flex flex-col space-y-2">
          <NavItems />
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
