import { type ReactNode } from "react";

interface CategoryCardProps {
  name: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export function CategoryCard({ name, icon, onClick }: CategoryCardProps) {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-card border border-border rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all hover:scale-105"
    >
      <span className="text-3xl">{icon}</span>
      <span className="font-medium text-sm text-center">{name}</span>
    </div>
  );
}
