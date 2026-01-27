import SidebarNavItem from "./SidebarNavItem";

interface SidebarNavListProps {
  items: { id: string; label: string; icon: object }[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function SidebarNavList({
  items,
  activeId,
  onSelect,
}: SidebarNavListProps) {
  return (
    <div className="flex flex-col space-y-2">
      {items.map((item) => (
        <SidebarNavItem
          key={item.id}
          id={item.id}
          label={item.label}
          icon={item.icon}
          isActive={activeId === item.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
