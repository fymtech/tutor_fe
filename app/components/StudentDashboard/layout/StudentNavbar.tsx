import { Link } from "react-router";
import { Bell } from "lucide-react";

export function StudentNavbar() {
  return (
    <nav className="h-16 border-b border-border bg-white dark:bg-card flex items-center justify-between px-6">
      <div className="text-lg font-bold text-primary font-heading">
        Student Dashboard
      </div>
      <div className="flex items-center gap-4">
        <button className="text-muted-foreground hover:text-foreground">
          <Bell className="w-5 h-5" />
        </button>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
          S
        </div>
      </div>
    </nav>
  );
}
