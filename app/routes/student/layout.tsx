import { Outlet } from "react-router";
import { StudentNavbar } from "~/components/StudentDashboard/Layout/StudentNavbar";
import { StudentSidebar } from "~/components/StudentDashboard/Layout/StudentSidebar";

export default function StudentLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      <StudentSidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <StudentNavbar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
