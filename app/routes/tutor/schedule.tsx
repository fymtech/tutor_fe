export default function TutorSchedule() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlots = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
         <h1 className="text-3xl font-bold font-heading text-primary">Schedule</h1>
         <div className="flex gap-2">
            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted">Previous Week</button>
            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted">Next Week</button>
         </div>
       </div>

       <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-8 border-b border-border bg-muted/30">
             <div className="p-4 border-r border-border"></div>
             {days.map(day => (
                 <div key={day} className="p-4 text-center font-bold text-muted-foreground border-r border-border last:border-r-0">
                     {day}
                 </div>
             ))}
          </div>
          <div className="divide-y divide-border">
              {timeSlots.map(time => (
                  <div key={time} className="grid grid-cols-8 min-h-[80px]">
                      <div className="p-4 border-r border-border text-xs font-bold text-muted-foreground flex items-start justify-center">
                          {time}
                      </div>
                      {days.map((day, index) => (
                           <div key={`${day}-${time}`} className="border-r border-border last:border-r-0 relative group hover:bg-muted/10 transition-colors p-1">
                               {/* Mock Appointments */}
                               {day === "Tue" && time === "10 AM" && (
                                   <div className="w-full h-full bg-blue-100 border-l-4 border-blue-500 rounded p-1 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                       <span className="font-bold">David Kim</span>
                                       <br/>
                                       Algebra II
                                   </div>
                               )}
                               
                               {day === "Thu" && time === "4 PM" && (
                                    <div className="w-full h-full bg-green-100 border-l-4 border-green-500 rounded p-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300">
                                       <span className="font-bold">Alex J.</span>
                                       <br/>
                                       Calculus
                                   </div>
                               )}
                           </div>
                      ))}
                  </div>
              ))}
          </div>
       </div>
    </div>
  );
}
