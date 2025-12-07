import { useState } from "react";
import { Search, MoreHorizontal, Mail, Ban } from "lucide-react";

export default function AdminStudents() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  const students = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", sessions: 45, totalSpent: "$1,250", lastActive: "Today", status: "active", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop", joinedDate: "Mar 15, 2024" },
    { id: 2, name: "Maria Garcia", email: "maria@example.com", sessions: 32, totalSpent: "$890", lastActive: "Yesterday", status: "active", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", joinedDate: "Apr 3, 2024" },
    { id: 3, name: "David Kim", email: "david@example.com", sessions: 28, totalSpent: "$720", lastActive: "2 days ago", status: "active", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop", joinedDate: "Apr 20, 2024" },
    { id: 4, name: "Emma Watson", email: "emma@example.com", sessions: 5, totalSpent: "$150", lastActive: "1 week ago", status: "inactive", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop", joinedDate: "Nov 5, 2024" },
    { id: 5, name: "Ryan Cooper", email: "ryan@example.com", sessions: 18, totalSpent: "$450", lastActive: "3 days ago", status: "active", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", joinedDate: "Jun 10, 2024" },
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase()) || 
                         student.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || student.status === filter;
    return matchesSearch && matchesFilter;
  });

  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === "active").length;
  const totalSessions = students.reduce((sum, s) => sum + s.sessions, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold font-heading text-primary">Student Management</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-sm text-muted-foreground">Total Students</p>
          <p className="text-2xl font-bold text-foreground">{totalStudents}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-sm text-muted-foreground">Active Students</p>
          <p className="text-2xl font-bold text-green-600">{activeStudents}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <p className="text-sm text-muted-foreground">Total Sessions Booked</p>
          <p className="text-2xl font-bold text-foreground">{totalSessions}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
          />
        </div>
        <div className="flex bg-muted/50 p-1 rounded-lg">
          {(["all", "active", "inactive"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === status
                  ? "bg-white dark:bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Student</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Sessions</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Total Spent</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Last Active</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Status</th>
              <th className="p-4 text-right text-sm font-bold text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={student.image} alt={student.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="font-medium text-foreground">{student.name}</div>
                      <div className="text-xs text-muted-foreground">{student.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm">{student.sessions}</td>
                <td className="p-4 text-sm font-medium text-foreground">{student.totalSpent}</td>
                <td className="p-4 text-sm text-muted-foreground">{student.lastActive}</td>
                <td className="p-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase ${
                    student.status === "active" 
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                      : "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors" title="Email">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-600 transition-colors" title="Ban">
                      <Ban className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredStudents.length} of {students.length} students
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
