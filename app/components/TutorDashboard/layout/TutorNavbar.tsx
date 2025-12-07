import { Link } from "react-router";
import { Bell } from "lucide-react";

export function TutorNavbar() {
  return (
    <nav className="h-16 border-b border-border bg-white dark:bg-card flex items-center justify-between px-6">
      <div className="text-lg font-bold text-primary font-heading">
        Tutor Dashboard
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium dark:bg-green-900/30 dark:text-green-400">
          <span className="w-2 h-2 bg-current rounded-full"></span>
          Online
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          <Bell className="w-5 h-5" />
        </button>
        <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-secondary-foreground">
          T
        </div>
      </div>
    </nav>
  );
}
