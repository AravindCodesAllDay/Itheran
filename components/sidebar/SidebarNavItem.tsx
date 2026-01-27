import { useMemo } from "react";
import Lottie from "react-lottie";
import { sections } from "../../app/features/features";

interface SidebarNavItemProps {
  id: string;
  label: string;
  icon: object;
  isActive: boolean;
  onSelect: (id: string) => void;
}

export default function SidebarNavItem({
  id,
  label,
  icon,
  isActive,
  onSelect,
}: SidebarNavItemProps) {
  const current = sections[id as keyof typeof sections] || sections.about;
  const themeKey = current.colorTheme || "theme-2";

  const themeMap: Record<string, string> = {
    "theme-1": "bg-theme-1/10 text-theme-1 shadow-sm border-l-4 border-theme-1",
    "theme-2": "bg-theme-2/10 text-theme-2 shadow-sm border-l-4 border-theme-2",
    "theme-3": "bg-theme-3/10 text-theme-3 shadow-sm border-l-4 border-theme-3",
    "theme-4": "bg-theme-4/10 text-theme-4 shadow-sm border-l-4 border-theme-4",
  };

  const activeClasses = themeMap[themeKey];

  return (
    <button
      onClick={() => onSelect(id)}
      className={`flex items-center space-x-3 px-4 py-3 rounded-r-xl transition-all duration-300 group w-full text-left border-l-4 border-transparent ${
        isActive
          ? `${activeClasses} scale-[1.02]`
          : "hover:bg-surface-highlight text-muted hover:text-light"
      }`}
    >
      <div className="shrink-0">
        <Lottie
          options={useMemo(
            () => ({ animationData: icon, autoplay: true, loop: true }),
            [icon],
          )}
          isPaused={!isActive}
          height={30}
          width={30}
        />
      </div>
      <span className="font-semibold tracking-wide text-sm flex-1 min-w-0 wrap-break-words">
        {label}
      </span>
    </button>
  );
}
