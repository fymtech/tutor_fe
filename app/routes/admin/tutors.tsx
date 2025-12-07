import { useState } from "react";
import { Search, MoreHorizontal, CheckCircle, XCircle, Mail } from "lucide-react";

export default function AdminTutors() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "verified" | "pending" | "suspended">("all");

  const tutors = [
    { id: 1, name: "Dr. Sarah Miller", email: "sarah@example.com", subject: "Mathematics", sessions: 156, rating: 4.9, earnings: "$4,250", status: "verified", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop", joinedDate: "Jan 15, 2024" },
    { id: 2, name: "James Wilson", email: "james@example.com", subject: "Physics", sessions: 142, rating: 4.8, earnings: "$3,890", status: "verified", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop", joinedDate: "Feb 3, 2024" },
    { id: 3, name: "Emily Chen", email: "emily@example.com", subject: "Chemistry", sessions: 128, rating: 4.9, earnings: "$3,450", status: "verified", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop", joinedDate: "Feb 20, 2024" },
    { id: 4, name: "Michael Brown", email: "michael@example.com", subject: "Biology", sessions: 0, rating: 0, earnings: "$0", status: "pending", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop", joinedDate: "Dec 5, 2024" },
    { id: 5, name: "Lisa Anderson", email: "lisa@example.com", subject: "English", sessions: 98, rating: 4.8, earnings: "$2,890", status: "suspended", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop", joinedDate: "Mar 10, 2024" },
  ];

  const filteredTutors = tutors.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(search.toLowerCase()) || 
                         tutor.email.toLowerCase().includes(search.toLowerCase()) ||
                         tutor.subject.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || tutor.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold font-heading text-primary">Tutor Management</h1>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-bold hover:bg-secondary/90 transition-colors">
          Add New Tutor
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, or subject..."
            className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
          />
        </div>
        <div className="flex bg-muted/50 p-1 rounded-lg">
          {(["all", "verified", "pending", "suspended"] as const).map((status) => (
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
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Tutor</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Subject</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Sessions</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Rating</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Earnings</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Status</th>
              <th className="p-4 text-right text-sm font-bold text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTutors.map((tutor) => (
              <tr key={tutor.id} className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={tutor.image} alt={tutor.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="font-medium text-foreground">{tutor.name}</div>
                      <div className="text-xs text-muted-foreground">{tutor.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm">{tutor.subject}</td>
                <td className="p-4 text-sm">{tutor.sessions}</td>
                <td className="p-4">
                  {tutor.rating > 0 ? (
                    <span className="text-sm font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-1 rounded-full">
                      ★ {tutor.rating}
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground">N/A</span>
                  )}
                </td>
                <td className="p-4 text-sm font-medium text-green-600">{tutor.earnings}</td>
                <td className="p-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase ${
                    tutor.status === "verified" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                    tutor.status === "pending" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}>
                    {tutor.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors" title="Email">
                      <Mail className="w-4 h-4" />
                    </button>
                    {tutor.status === "pending" && (
                      <button className="p-2 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg text-green-600 transition-colors" title="Verify">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    {tutor.status === "verified" && (
                      <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-600 transition-colors" title="Suspend">
                        <XCircle className="w-4 h-4" />
                      </button>
                    )}
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
          Showing {filteredTutors.length} of {tutors.length} tutors
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
