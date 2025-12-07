import { useState } from "react";
import { Save, User, Bell, BookOpen, CreditCard } from "lucide-react";

export default function StudentSettings() {
  const [activeTab, setActiveTab] = useState<"profile" | "notifications" | "learning" | "payments">("profile");

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
          { id: "learning", label: "Learning", icon: <BookOpen className="w-4 h-4" /> },
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
                  <input type="text" defaultValue="Alex Johnson" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input type="email" defaultValue="alex@example.com" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input type="tel" defaultValue="+1 234 567 890" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Date of Birth</label>
                  <input type="date" defaultValue="2000-05-15" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold font-heading text-foreground mb-6">Guardian Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Guardian Name</label>
                  <input type="text" defaultValue="Jane Johnson" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Relation</label>
                  <input type="text" defaultValue="Mother" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Contact Number</label>
                  <input type="tel" defaultValue="+1 234 567 891" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold font-heading text-foreground mb-6">Profile Photo</h2>
              <div className="flex flex-col items-center">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-24 h-24 rounded-full object-cover mb-4" />
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
              { label: "Session reminders", description: "Receive reminders before scheduled sessions" },
              { label: "Tutor messages", description: "Get notified when a tutor sends you a message" },
              { label: "Session confirmations", description: "Receive confirmation when a session is booked" },
              { label: "Payment receipts", description: "Get email receipts for payments" },
              { label: "Learning tips", description: "Receive weekly learning tips and recommendations" },
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

      {/* Learning Tab */}
      {activeTab === "learning" && (
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm max-w-2xl">
          <h2 className="text-lg font-bold font-heading text-foreground mb-6">Learning Preferences</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1.5">Preferred Subjects</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Mathematics", "Physics", "Chemistry", "Biology", "English", "History"].map((subject) => (
                  <label key={subject} className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <input type="checkbox" defaultChecked={["Mathematics", "Physics"].includes(subject)} className="rounded border-input" />
                    <span className="text-sm">{subject}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Preferred Session Duration</label>
              <select className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50">
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60" selected>60 minutes</option>
                <option value="90">90 minutes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Learning Goals</label>
              <textarea rows={3} defaultValue="Improve my calculus skills and prepare for SAT exams." className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50" />
            </div>
          </div>
        </div>
      )}

      {/* Payments Tab */}
      {activeTab === "payments" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold font-heading text-foreground mb-6">Payment Methods</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                  <div>
                    <p className="font-medium text-foreground">•••• •••• •••• 4242</p>
                    <p className="text-xs text-muted-foreground">Expires 12/25</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Default</span>
              </div>
              <button className="w-full py-2 border border-dashed border-border rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">
                + Add Payment Method
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold font-heading text-foreground mb-6">Billing History</h2>
            <div className="space-y-3">
              {[
                { date: "Dec 5, 2024", amount: "$45", tutor: "Dr. Sarah Miller" },
                { date: "Nov 28, 2024", amount: "$60", tutor: "James Wilson" },
                { date: "Nov 20, 2024", amount: "$45", tutor: "Dr. Sarah Miller" },
              ].map((payment, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{payment.tutor}</p>
                    <p className="text-xs text-muted-foreground">{payment.date}</p>
                  </div>
                  <span className="font-bold text-foreground">{payment.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
