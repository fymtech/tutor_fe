import { Mail, MoreHorizontal } from "lucide-react";

export default function TutorStudents() {
  const students = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", subject: "Mathematics", sessions: 12, lastSession: "Dec 5, 2024", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" },
    { id: 2, name: "Maria Garcia", email: "maria@example.com", subject: "Physics", sessions: 5, lastSession: "Dec 1, 2024", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
    { id: 3, name: "David Kim", email: "david@example.com", subject: "Maths, Physics", sessions: 8, lastSession: "Nov 28, 2024", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-heading text-primary">My Students</h1>
      
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-muted/50 border-b border-border">
                    <th className="p-4 font-bold text-muted-foreground text-sm">Student</th>
                    <th className="p-4 font-bold text-muted-foreground text-sm">Subject</th>
                    <th className="p-4 font-bold text-muted-foreground text-sm">Total Sessions</th>
                    <th className="p-4 font-bold text-muted-foreground text-sm">Last Session</th>
                    <th className="p-4 font-bold text-muted-foreground text-sm text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id} className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                        <td className="p-4">
                            <div className="flex items-center gap-3">
                                <img src={student.image} alt={student.name} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <div className="font-bold text-foreground">{student.name}</div>
                                    <div className="text-xs text-muted-foreground">{student.email}</div>
                                </div>
                            </div>
                        </td>
                        <td className="p-4 text-sm">{student.subject}</td>
                        <td className="p-4 text-sm">{student.sessions}</td>
                        <td className="p-4 text-sm text-muted-foreground">{student.lastSession}</td>
                        <td className="p-4 text-right">
                             <div className="flex justify-end gap-2">
                                <button className="p-2 hover:bg-muted rounded-full text-muted-foreground hover:text-foreground" title="Message">
                                    <Mail className="w-4 h-4" />
                                </button>
                                <button className="p-2 hover:bg-muted rounded-full text-muted-foreground hover:text-foreground">
                                    <MoreHorizontal className="w-4 h-4" />
                                </button>
                             </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}
