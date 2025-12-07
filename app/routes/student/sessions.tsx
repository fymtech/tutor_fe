import { useState } from "react";
import { Calendar, Clock, Video, User, Star } from "lucide-react";

export default function StudentSessions() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "cancelled">("upcoming");

  const sessions = {
    upcoming: [
        {
          id: 1,
          tutor: "Dr. Sarah Miller",
          subject: "Mathematics",
          topic: "Calculus II: Integration Techniques",
          date: "Today, 4:00 PM",
          duration: "1 hour",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
          status: "confirmed"
        },
        {
          id: 2,
          tutor: "James Wilson",
          subject: "Physics",
          topic: "Quantum Mechanics Intro",
          date: "Tomorrow, 2:00 PM",
          duration: "1.5 hours",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
          status: "confirmed"
        }
    ],
    past: [
        {
          id: 3,
          tutor: "Emily Chen",
          subject: "Chemistry",
          topic: "Organic Chemistry: Bonding",
          date: "Dec 3, 2024",
          duration: "1 hour",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
          status: "completed"
        }
    ],
    cancelled: []
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold font-heading text-primary">My Sessions</h1>
        <div className="flex bg-muted/50 p-1 rounded-xl w-fit">
            {(["upcoming", "past", "cancelled"] as const).map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab 
                        ? "bg-white dark:bg-card text-primary shadow-sm" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
            ))}
        </div>
      </div>

      <div className="space-y-4">
        {sessions[activeTab].length > 0 ? (
            sessions[activeTab].map((session) => (
                <div key={session.id} className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center group hover:border-primary/50 transition-colors">
                    <img 
                      src={session.image} 
                      alt={session.tutor} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-border"
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary uppercase tracking-wide">
                                {session.subject}
                            </span>
                            {session.status === "confirmed" && (
                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                    Confirmed
                                </span>
                            )}
                        </div>
                        <h3 className="text-lg font-bold font-heading text-foreground">{session.topic}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {session.tutor}</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {session.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {session.duration}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        {activeTab === "upcoming" ? (
                            <>
                                <button className="flex-1 md:flex-none px-4 py-2 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 flex items-center justify-center gap-2">
                                    <Video className="w-4 h-4" /> Join
                                </button>
                                <button className="flex-1 md:flex-none px-4 py-2 border border-border font-medium rounded-lg hover:bg-muted transition-colors">
                                    Reschedule
                                </button>
                            </>
                        ) : activeTab === "past" ? (
                            <button className="flex-1 md:flex-none px-4 py-2 border border-border font-medium rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2">
                                <Star className="w-4 h-4" /> Leave Review
                            </button>
                        ) : null}
                    </div>
                </div>
            ))
        ) : (
            <div className="text-center py-12 bg-muted/20 rounded-xl border border-dashed border-border">
                <p className="text-muted-foreground">No {activeTab} sessions found.</p>
            </div>
        )}
      </div>
    </div>
  );
}
