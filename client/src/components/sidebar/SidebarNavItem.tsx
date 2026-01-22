import Lottie from "react-lottie";

interface SidebarNavItemProps {
  id: string;
  label: string;
  icon: any;
  isActive: boolean;
  themeColor?: string;
  onSelect: (id: string) => void;
}

export default function SidebarNavItem({
  id,
  label,
  icon,
  isActive,
  themeColor = "theme-2",
  onSelect,
}: SidebarNavItemProps) {
  const themeClasses: Record<string, string> = {
    "theme-1": "bg-theme-1",
    "theme-2": "bg-theme-2",
    "theme-3": "bg-theme-3",
    "theme-4": "bg-theme-4",
  };

  const activeBg = themeClasses[themeColor] || "bg-secondary";

  return (
    <button
      onClick={() => onSelect(id)}
      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group whitespace-nowrap w-full text-left ${
        isActive
          ? `${activeBg} text-white shadow-lg scale-[1.02]`
          : "hover:bg-surface-highlight dark:hover:bg-white/10 text-muted hover:text-light"
      }`}
    >
      <div className="shrink-0">
        <Lottie
          options={{ animationData: icon, autoplay: false, loop: false }}
          isPaused={true}
          height={30}
          width={30}
        />
      </div>
      <span className="font-semibold tracking-wide text-sm">{label}</span>
    </button>
  );
}
