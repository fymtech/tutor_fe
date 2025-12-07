import { Link } from "react-router";
import { DollarSign, Clock, Users, Calendar, ArrowUpRight } from "lucide-react";

export default function TutorHome() {
  const stats = [
    { label: "Total Earnings", value: "$1,250", icon: <DollarSign className="w-5 h-5 text-green-500" />, bg: "bg-green-500/10", trend: "+12% this month" },
    { label: "Hours Taught", value: "45", icon: <Clock className="w-5 h-5 text-blue-500" />, bg: "bg-blue-500/10", trend: "+5 this week" },
    { label: "Active Students", value: "8", icon: <Users className="w-5 h-5 text-purple-500" />, bg: "bg-purple-500/10", trend: "+2 new" },
  ];

  const nextClass = {
    student: "Alex Johnson",
    subject: "Mathematics",
    topic: "Calculus II",
    time: "Today, 4:00 PM",
    timeLeft: "2 hours",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
  };

  const requests = [
    { id: 1, student: "Maria Garcia", subject: "Physics", date: "Dec 10, 3:00 PM", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
    { id: 2, student: "David Kim", subject: "Maths", date: "Dec 12, 10:00 AM", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" },
  ];

  return (
    <div className="space-y-8">
       {/* Welcome */}
       <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold font-heading text-primary">Tutor Dashboard</h1>
            <p className="text-muted-foreground mt-2">Here's what's happening today.</p>
          </div>
          <Link to="/tutor/schedule" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors">
            View Schedule
          </Link>
       </div>

       {/* Stats */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                    {stat.icon}
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full">
                    {stat.trend}
                </span>
            </div>
            <p className="text-3xl font-bold font-heading text-card-foreground mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Next Class */}
        <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold font-heading text-primary">Next Class</h2>
            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="relative z-10 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <img src={nextClass.image} alt={nextClass.student} className="w-16 h-16 rounded-full border-4 border-white/20" />
                        <div>
                            <p className="text-primary-foreground/80 font-medium mb-1">Upcoming Session</p>
                            <h3 className="text-2xl font-bold">{nextClass.topic}</h3>
                            <p className="text-lg opacity-90">with {nextClass.student}</p>
                        </div>
                    </div>
                    <div className="text-right">
                         <div className="text-3xl font-bold mb-1">{nextClass.time.split(",")[1]}</div>
                         <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm inline-block">
                            in {nextClass.timeLeft}
                         </div>
                    </div>
                </div>
                <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex gap-4">
                    <button className="flex-1 bg-white text-primary font-bold py-3 rounded-xl hover:bg-white/90 transition-colors">
                        Start Class
                    </button>
                    <button className="flex-1 bg-white/10 text-white font-medium py-3 rounded-xl hover:bg-white/20 transition-colors">
                        View Details
                    </button>
                </div>
            </div>

            {/* Recent Requests */}
            <div>
                 <div className="flex items-center justify-between mb-4 mt-8">
                    <h2 className="text-xl font-bold font-heading text-primary">New Requests</h2>
                    <Link to="/tutor/requests" className="text-sm font-medium text-secondary hover:underline">View All</Link>
                </div>
                <div className="space-y-4">
                    {requests.map((req) => (
                        <div key={req.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src={req.image} alt={req.student} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <p className="font-bold text-card-foreground">{req.student}</p>
                                    <p className="text-sm text-muted-foreground">{req.subject} • {req.date}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">Accepet</button>
                                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">Decline</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Quick Review / Sidebar Content */}
        <div>
             <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-secondary mb-4">Pro Tips</h3>
                <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-muted-foreground">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 font-bold">1</div>
                        Share your schedule link to get more bookings.
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                         <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 font-bold">2</div>
                        Update your availability every Sunday.
                    </li>
                    <li className="flex gap-3 text-sm text-muted-foreground">
                         <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 font-bold">3</div>
                        Keep your profile photo professional.
                    </li>
                </ul>
             </div>
        </div>
      </div>
    </div>
  );
}
