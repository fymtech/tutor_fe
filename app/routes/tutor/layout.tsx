import { Outlet } from "react-router";
import { TutorNavbar } from "~/components/TutorDashboard/Layout/TutorNavbar";
import { TutorSidebar } from "~/components/TutorDashboard/Layout/TutorSidebar";

export default function TutorLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      <TutorSidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <TutorNavbar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
