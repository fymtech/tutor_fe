import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/landing/home.tsx"),
  route("login", "./routes/landing/login.tsx"),
  route("logout", "./routes/landing/logout.tsx"),
  
  // Admin routes
  route("admin/login", "./routes/admin/login.tsx"),
  route("admin", "./routes/admin/layout.tsx", [
    index("./routes/admin/home.tsx"),
    route("tutors", "./routes/admin/tutors.tsx"),
    route("students", "./routes/admin/students.tsx"),
    route("payments", "./routes/admin/payments.tsx"),
    route("settings", "./routes/admin/settings.tsx"),
  ]),
  
  // Student routes
  route("student", "./routes/student/layout.tsx", [
    index("./routes/student/home.tsx"),
    route("sessions", "./routes/student/sessions.tsx"),
    route("settings", "./routes/student/settings.tsx"),
  ]),
  
  // Tutor routes
  route("tutor", "./routes/tutor/layout.tsx", [
    index("./routes/tutor/home.tsx"),
    route("requests", "./routes/tutor/requests.tsx"),
    route("schedule", "./routes/tutor/schedule.tsx"),
    route("students", "./routes/tutor/students.tsx"),
    route("settings", "./routes/tutor/settings.tsx"),
  ]),
  
  // Public routes
  route("tutors", "./routes/landing/tutors.tsx"),
  route("tutors/:tutorId", "./routes/landing/tutor.$tutorId.tsx"),
] satisfies RouteConfig;
