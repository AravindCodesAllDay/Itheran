import Lottie from "react-lottie";

interface SidebarNavItemProps {
  id: string;
  label: string;
  icon: any;
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
  return (
    <button
      onClick={() => onSelect(id)}
      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group whitespace-nowrap w-full text-left ${
        isActive
          ? "bg-secondary text-white shadow-lg scale-[1.02]"
          : "hover:bg-surface-highlight dark:hover:bg-white/10 text-muted hover:text-light"
      }`}
    >
      <div className="flex-shrink-0">
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
