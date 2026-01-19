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

  return (
    <aside className="w-full lg:w-64 lg:h-[calc(100vh-80px)] sticky lg:top-28 z-40 border-b lg:border-b-0 lg:border-r border-white/5 pr-0 lg:pr-4 bg-surface/95 backdrop-blur-sm lg:bg-transparent mb-8 lg:mb-0">
      <nav className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group whitespace-nowrap ${
              activeId === item.id
                ? "bg-secondary text-primary shadow-lg scale-105"
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
      </nav>

      <div className="mt-8 p-4 rounded-2xl bg-surface border border-white/5 hidden lg:block">
        <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">
          Need Help?
        </h4>
        <p className="text-xs text-muted leading-relaxed">
          Our AI agents are here to guide you through your career journey.
        </p>
      </div>
    </aside>
  );
}
