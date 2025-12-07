import { useState } from "react";
import { Search, Download, DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react";

export default function AdminPayments() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending" | "failed">("all");

  const stats = [
    { label: "Total Revenue", value: "$45,280", icon: <DollarSign className="w-5 h-5 text-green-500" />, bg: "bg-green-500/10", trend: "+23% vs last month" },
    { label: "Pending Payouts", value: "$3,450", icon: <Clock className="w-5 h-5 text-yellow-500" />, bg: "bg-yellow-500/10", trend: "5 pending" },
    { label: "Completed This Month", value: "$12,890", icon: <CheckCircle className="w-5 h-5 text-blue-500" />, bg: "bg-blue-500/10", trend: "42 transactions" },
  ];

  const transactions = [
    { id: "TXN001", date: "Dec 7, 2024", student: "Alex Johnson", tutor: "Dr. Sarah Miller", amount: "$45", status: "completed", type: "session" },
    { id: "TXN002", date: "Dec 7, 2024", student: "Maria Garcia", tutor: "James Wilson", amount: "$60", status: "completed", type: "session" },
    { id: "TXN003", date: "Dec 6, 2024", tutor: "Dr. Sarah Miller", amount: "$850", status: "pending", type: "payout" },
    { id: "TXN004", date: "Dec 6, 2024", student: "David Kim", tutor: "Emily Chen", amount: "$40", status: "completed", type: "session" },
    { id: "TXN005", date: "Dec 5, 2024", tutor: "James Wilson", amount: "$720", status: "completed", type: "payout" },
    { id: "TXN006", date: "Dec 5, 2024", student: "Emma Watson", tutor: "Michael Brown", amount: "$55", status: "failed", type: "session" },
  ];

  const filteredTransactions = transactions.filter(tx => {
    const searchTerm = search.toLowerCase();
    const matchesSearch = tx.id.toLowerCase().includes(searchTerm) ||
                         tx.student?.toLowerCase().includes(searchTerm) ||
                         tx.tutor.toLowerCase().includes(searchTerm);
    const matchesFilter = filter === "all" || tx.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold font-heading text-primary">Payment Analytics</h1>
        <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                {stat.icon}
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {stat.trend}
              </span>
            </div>
            <p className="text-3xl font-bold font-heading text-card-foreground mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by transaction ID, student, or tutor..."
            className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
          />
        </div>
        <div className="flex bg-muted/50 p-1 rounded-lg">
          {(["all", "completed", "pending", "failed"] as const).map((status) => (
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

      {/* Transactions Table */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Transaction ID</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Date</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Type</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Details</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Amount</th>
              <th className="p-4 text-left text-sm font-bold text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx) => (
              <tr key={tx.id} className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                <td className="p-4 text-sm font-mono text-foreground">{tx.id}</td>
                <td className="p-4 text-sm text-muted-foreground">{tx.date}</td>
                <td className="p-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase ${
                    tx.type === "session" 
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" 
                      : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                  }`}>
                    {tx.type}
                  </span>
                </td>
                <td className="p-4 text-sm">
                  {tx.type === "session" ? (
                    <span><span className="text-foreground">{tx.student}</span> → <span className="text-muted-foreground">{tx.tutor}</span></span>
                  ) : (
                    <span>Payout to <span className="text-foreground">{tx.tutor}</span></span>
                  )}
                </td>
                <td className="p-4 text-sm font-bold text-foreground">{tx.amount}</td>
                <td className="p-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase ${
                    tx.status === "completed" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                    tx.status === "pending" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredTransactions.length} of {transactions.length} transactions
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
