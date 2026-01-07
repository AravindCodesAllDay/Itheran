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
    <aside className="w-64 h-[calc(100vh-80px)] sticky top-20 hidden lg:block border-r border-white/5 pr-4">
      <nav className="flex flex-col space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
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

      <div className="mt-8 p-4 rounded-2xl bg-surface border border-white/5">
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
