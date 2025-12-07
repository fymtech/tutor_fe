import { Link, NavLink } from "react-router";
import { cn } from "~/lib/utils";
import {
  LayoutDashboard,
  Search,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react";

export function StudentSidebar() {
  const links = [
    {
      href: "/student",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      href: "/student/find-tutors",
      label: "Find Tutors",
      icon: <Search className="w-5 h-5" />,
    },
    {
      href: "/student/sessions",
      label: "My Sessions",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      href: "/student/settings",
      label: "Settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="w-64 border-r border-border bg-card h-screen flex flex-col p-4 fixed left-0 top-0">
      <Link
        to="/"
        className="text-2xl font-bold text-primary font-heading mb-8 px-2"
      >
        TutorHub
      </Link>
      <div className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            end
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            <span>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="mt-auto pt-4 border-t border-border">
        <Link
          to="/logout"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Link>
      </div>
    </aside>
  );
}
