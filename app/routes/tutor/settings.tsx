import { useState } from "react";
import { Save, User, Bell, Clock, CreditCard } from "lucide-react";

export default function TutorSettings() {
  const [activeTab, setActiveTab] = useState<"profile" | "notifications" | "availability" | "payments">("profile");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-heading text-primary">Settings</h1>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border pb-4">
        {[
          { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
          { id: "notifications", label: "Notifications", icon: <Bell className="w-4 h-4" /> },
          { id: "availability", label: "Availability", icon: <Clock className="w-4 h-4" /> },
          { id: "payments", label: "Payments", icon: <CreditCard className="w-4 h-4" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold font-heading text-foreground mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input type="text" defaultValue="Dr. John Doe" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input type="email" defaultValue="john@example.com" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input type="tel" defaultValue="+1 234 567 890" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Subject Specialty</label>
                  <input type="text" defaultValue="Mathematics" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1.5">Bio</label>
                <textarea rows={4} defaultValue="Experienced mathematics tutor with over 10 years of teaching experience..." className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold font-heading text-foreground mb-6">Session Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Hourly Rate ($)</label>
                  <input type="number" defaultValue="45" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Session Duration (minutes)</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50">
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60" selected>60 minutes</option>
                    <option value="90">90 minutes</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold font-heading text-foreground mb-6">Profile Photo</h2>
              <div className="flex flex-col items-center">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-24 h-24 rounded-full object-cover mb-4" />
                <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                  Change Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm max-w-2xl">
          <h2 className="text-lg font-bold font-heading text-foreground mb-6">Notification Preferences</h2>
          <div className="space-y-4">
            {[
              { label: "New session requests", description: "Get notified when a student requests a session" },
              { label: "Session reminders", description: "Receive reminders before scheduled sessions" },
              { label: "Payment notifications", description: "Get notified about earnings and payouts" },
              { label: "Student messages", description: "Receive notifications for new messages" },
              { label: "Weekly summary", description: "Get a weekly summary of your activity" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Availability Tab */}
      {activeTab === "availability" && (
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm max-w-3xl">
          <h2 className="text-lg font-bold font-heading text-foreground mb-6">Weekly Availability</h2>
          <p className="text-sm text-muted-foreground mb-6">Set your available hours for each day of the week.</p>
          <div className="space-y-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div key={day} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                <div className="w-24">
                  <span className="font-medium text-foreground">{day}</span>
                </div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked={day !== "Sunday"} className="rounded border-input" />
                  <span className="text-sm">Available</span>
                </label>
                <div className="flex-1 flex items-center gap-2">
                  <input type="time" defaultValue="09:00" className="px-3 py-1 rounded-lg border border-input bg-background text-sm" />
                  <span className="text-muted-foreground">to</span>
                  <input type="time" defaultValue="17:00" className="px-3 py-1 rounded-lg border border-input bg-background text-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Payments Tab */}
      {activeTab === "payments" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold font-heading text-foreground mb-6">Payout Method</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Bank Name</label>
                <input type="text" defaultValue="Chase Bank" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Account Number</label>
                <input type="text" defaultValue="****1234" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Routing Number</label>
                <input type="text" defaultValue="****5678" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold font-heading text-foreground mb-6">Payout Schedule</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Payout Frequency</label>
                <select className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50">
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium text-foreground">Next Payout</p>
                <p className="text-2xl font-bold text-green-600 mt-1">$1,250.00</p>
                <p className="text-xs text-muted-foreground mt-1">Scheduled for Dec 15, 2024</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
