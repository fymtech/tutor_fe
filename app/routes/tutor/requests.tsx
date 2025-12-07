import { Check, X, MessageSquare, Calendar } from "lucide-react";

export default function TutorRequests() {
  const requests = [
    { 
        id: 1, 
        student: "Maria Garcia", 
        subject: "Physics", 
        topic: "Kinematics Help",
        date: "Dec 10, 2024",
        time: "3:00 PM - 4:00 PM",
        message: "Hi, I need help preparing for my final exam on kinematics.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
    },
    { 
        id: 2, 
        student: "David Kim", 
        subject: "Mathematics", 
        topic: "Algebra II",
        date: "Dec 12, 2024", 
        time: "10:00 AM - 11:30 AM",
        message: "Struggling with quadratic equations.",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" 
    },
    { 
        id: 3, 
        student: "Sarah Jones", 
        subject: "Chemistry", 
        topic: "Stoichiometry",
        date: "Dec 14, 2024", 
        time: "1:00 PM - 2:00 PM",
        message: "Looking for regular tutoring sessions.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" 
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-heading text-primary">Booking Requests</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((req) => (
            <div key={req.id} className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                        <img src={req.image} alt={req.student} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h3 className="font-bold text-lg">{req.student}</h3>
                            <p className="text-secondary text-sm font-medium">{req.subject}</p>
                        </div>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
                        New
                    </span>
                </div>

                <div className="bg-muted/30 rounded-lg p-3 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{req.date}, {req.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-muted-foreground">
                        <MessageSquare className="w-4 h-4 mt-0.5" />
                        <span className="italic">"{req.message}"</span>
                    </div>
                </div>

                <div className="flex gap-3 mt-auto">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                        <Check className="w-4 h-4" /> Accept
                    </button>
                    <button className="flex-1 bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-400 py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                        <X className="w-4 h-4" /> Decline
                    </button>
                </div>
            </div>
        ))}

        {requests.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
                No new requests at the moment.
            </div>
        )}
      </div>
    </div>
  );
}
