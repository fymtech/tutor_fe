import { Bell, Search } from "lucide-react";
import { ThemeToggle } from "~/components/ThemeToggle";

export function AdminNavbar() {
  return (
    <nav className="h-16 border-b border-border bg-white dark:bg-card flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 bg-muted/50 border border-transparent focus:border-border rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-ring/50"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="relative text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-secondary-foreground">
            A
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground">Admin</p>
            <p className="text-xs text-muted-foreground">Super Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
