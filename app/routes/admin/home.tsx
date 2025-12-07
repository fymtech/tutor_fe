import { Link } from "react-router";
import { Users, GraduationCap, DollarSign, TrendingUp, ArrowUpRight, Calendar, UserCheck } from "lucide-react";

export default function AdminHome() {
  const stats = [
    { label: "Total Tutors", value: "128", icon: <Users className="w-5 h-5 text-blue-500" />, bg: "bg-blue-500/10", trend: "+12 this month", trendUp: true },
    { label: "Total Students", value: "1,542", icon: <GraduationCap className="w-5 h-5 text-purple-500" />, bg: "bg-purple-500/10", trend: "+89 this month", trendUp: true },
    { label: "Total Revenue", value: "$45,280", icon: <DollarSign className="w-5 h-5 text-green-500" />, bg: "bg-green-500/10", trend: "+23% vs last month", trendUp: true },
    { label: "Active Sessions", value: "47", icon: <Calendar className="w-5 h-5 text-orange-500" />, bg: "bg-orange-500/10", trend: "Live now", trendUp: true },
  ];

  const topTutors = [
    { rank: 1, name: "Dr. Sarah Miller", subject: "Mathematics", sessions: 156, rating: 4.9, earnings: "$4,250", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
    { rank: 2, name: "James Wilson", subject: "Physics", sessions: 142, rating: 4.8, earnings: "$3,890", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
    { rank: 3, name: "Emily Chen", subject: "Chemistry", sessions: 128, rating: 4.9, earnings: "$3,450", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
    { rank: 4, name: "Michael Brown", subject: "Biology", sessions: 115, rating: 4.7, earnings: "$3,120", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
    { rank: 5, name: "Lisa Anderson", subject: "English", sessions: 98, rating: 4.8, earnings: "$2,890", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
  ];

  const recentActivities = [
    { type: "new_tutor", message: "New tutor registered: Robert Chen", time: "5 min ago" },
    { type: "payment", message: "Payout processed: $2,500 to Dr. Sarah Miller", time: "15 min ago" },
    { type: "new_student", message: "New student registered: Emma Watson", time: "32 min ago" },
    { type: "session", message: "Session completed: Physics 101 with James Wilson", time: "1 hour ago" },
    { type: "verification", message: "Tutor verified: Michael Brown", time: "2 hours ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-heading text-primary">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Overview of platform performance and activities.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
            Download Report
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-bold hover:bg-secondary/90 transition-colors">
            Add Tutor
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Tutors */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold font-heading text-primary">Top Performing Tutors</h2>
            <Link to="/admin/tutors" className="text-sm font-medium text-secondary hover:underline flex items-center gap-1">
              View All <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="p-4 text-left text-sm font-bold text-muted-foreground">#</th>
                  <th className="p-4 text-left text-sm font-bold text-muted-foreground">Tutor</th>
                  <th className="p-4 text-left text-sm font-bold text-muted-foreground">Subject</th>
                  <th className="p-4 text-left text-sm font-bold text-muted-foreground">Sessions</th>
                  <th className="p-4 text-left text-sm font-bold text-muted-foreground">Rating</th>
                  <th className="p-4 text-right text-sm font-bold text-muted-foreground">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {topTutors.map((tutor) => (
                  <tr key={tutor.rank} className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                    <td className="p-4 font-bold text-muted-foreground">{tutor.rank}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={tutor.image} alt={tutor.name} className="w-10 h-10 rounded-full object-cover" />
                        <span className="font-medium text-foreground">{tutor.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm">{tutor.subject}</td>
                    <td className="p-4 text-sm">{tutor.sessions}</td>
                    <td className="p-4">
                      <span className="text-sm font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-1 rounded-full">
                        ★ {tutor.rating}
                      </span>
                    </td>
                    <td className="p-4 text-right font-bold text-green-600">{tutor.earnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold font-heading text-primary">Recent Activity</h2>
          </div>
          <div className="bg-card border border-border rounded-xl shadow-sm p-4 space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex gap-3 items-start pb-4 last:pb-0 border-b border-border last:border-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  activity.type === "new_tutor" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30" :
                  activity.type === "payment" ? "bg-green-100 text-green-600 dark:bg-green-900/30" :
                  activity.type === "new_student" ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30" :
                  activity.type === "verification" ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {activity.type === "new_tutor" && <Users className="w-4 h-4" />}
                  {activity.type === "payment" && <DollarSign className="w-4 h-4" />}
                  {activity.type === "new_student" && <GraduationCap className="w-4 h-4" />}
                  {activity.type === "session" && <Calendar className="w-4 h-4" />}
                  {activity.type === "verification" && <UserCheck className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
