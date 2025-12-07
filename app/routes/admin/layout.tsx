import { Outlet } from "react-router";
import { AdminNavbar } from "~/components/AdminDashboard/layout/AdminNavbar";
import { AdminSidebar } from "~/components/AdminDashboard/layout/AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <AdminNavbar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
