import { Link } from "react-router";
import { Clock, BookOpen, Star, Calendar } from "lucide-react";

export default function StudentHome() {
  const nextSession = {
    tutorName: "Dr. Sarah Miller",
    subject: "Mathematics",
    date: "Today, 4:00 PM",
    timeLeft: "2 hours",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  };

  const stats = [
    { label: "Hours Learned", value: "24.5", icon: <Clock className="w-5 h-5 text-blue-500" />, bg: "bg-blue-500/10" },
    { label: "Sessions", value: "12", icon: <BookOpen className="w-5 h-5 text-purple-500" />, bg: "bg-purple-500/10" },
    { label: "Avg. Rating", value: "4.8", icon: <Star className="w-5 h-5 text-yellow-500" />, bg: "bg-yellow-500/10" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold font-heading text-primary">Welcome back, Alex! 👋</h1>
        <p className="text-muted-foreground mt-2">Ready to learn something new today?</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-xl p-6 flex items-center gap-4 shadow-sm">
            <div className={`p-3 rounded-lg ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-card-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Next Session Card */}
        <div className="lg:col-span-2">
           <h2 className="text-xl font-bold font-heading text-primary mb-4">Up Next</h2>
           <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img 
                  src={nextSession.image} 
                  alt={nextSession.tutorName}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20"
                />
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-3 backdrop-blur-sm">
                    Starts in {nextSession.timeLeft}
                  </div>
                  <h3 className="text-2xl font-bold font-heading">{nextSession.subject} Session</h3>
                  <p className="text-primary-foreground/80 mt-1">with {nextSession.tutorName}</p>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-6">
                    <button className="px-6 py-2 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-colors">
                      Join Meeting
                    </button>
                    <button className="px-6 py-2 border border-white/30 hover:bg-white/10 rounded-xl font-medium transition-colors">
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>
           </div>
        </div>

        {/* Recent Activity / Quick Actions */}
        <div>
           <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold font-heading text-primary">Recent Activity</h2>
              <Link to="/student/sessions" className="text-sm font-medium text-secondary hover:underline">View All</Link>
           </div>
           
           <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 flex gap-4 items-center">
                   <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                   </div>
                   <div className="flex-1 min-w-0">
                      <p className="font-medium text-card-foreground truncate">Physics Session Completed</p>
                      <p className="text-xs text-muted-foreground">Yesterday, 2:00 PM</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
