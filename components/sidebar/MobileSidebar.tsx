import { sections } from "../../app/features/features";
import SidebarNavList from "./SidebarNavList";

interface MobileSidebarProps {
  items: { id: string; label: string; icon: object }[];
  activeId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  themeColor?: string;
}

export default function MobileSidebar({
  items,
  activeId,
  onSelect,
  isOpen,
  setIsOpen,
  themeColor = "theme-2",
}: MobileSidebarProps) {
  if (!isOpen) return null;

  const currentSection =
    sections[activeId as keyof typeof sections] || sections.about;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <aside className="absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-surface shadow-2xl p-6 overflow-y-auto border-r border-border animate-slide-in">
        <div className="flex justify-between items-center mb-8">
          <h2
            className={`text-xl font-display font-bold text-${themeColor} tracking-wide transition-colors duration-300`}
          >
            Features
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className={`p-2 text-muted hover:text-${themeColor} transition-colors bg-surface-highlight rounded-full`}
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
              role="img"
              aria-label="Close Icon"
            >
              <title>Close Icon</title>
              <path d="M18 6 6 18" />
              <path d="M6 6 18 18" />
            </svg>
          </button>
        </div>

        <SidebarNavList items={items} activeId={activeId} onSelect={onSelect} />

        <div className="mt-8 p-4 rounded-2xl bg-surface-highlight border border-border">
          <h4
            className={`text-sm font-bold text-${themeColor} uppercase tracking-widest mb-2 transition-colors duration-300`}
          >
            Need Help?
          </h4>
          <p className="text-xs text-muted leading-relaxed">
            Swipe right to close this menu or click the close button.
          </p>
        </div>
      </aside>
    </div>
  );
}
