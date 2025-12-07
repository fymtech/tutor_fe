import { useState } from "react";
import { Save } from "lucide-react";

export default function AdminSettings() {
  const [platformName, setPlatformName] = useState("TutorHub");
  const [supportEmail, setSupportEmail] = useState("support@tutorhub.com");
  const [commissionRate, setCommissionRate] = useState("15");
  const [minSessionPrice, setMinSessionPrice] = useState("20");
  const [maxSessionDuration, setMaxSessionDuration] = useState("120");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-heading text-primary">Platform Settings</h1>
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-bold hover:bg-secondary/90 transition-colors flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* General Settings */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold font-heading text-foreground mb-6">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Platform Name</label>
              <input
                type="text"
                value={platformName}
                onChange={(e) => setPlatformName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Support Email</label>
              <input
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </div>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold font-heading text-foreground mb-6">Payment Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Platform Commission (%)</label>
              <input
                type="number"
                value={commissionRate}
                onChange={(e) => setCommissionRate(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
              <p className="text-xs text-muted-foreground mt-1">Percentage taken from each session payment</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Minimum Session Price ($)</label>
              <input
                type="number"
                value={minSessionPrice}
                onChange={(e) => setMinSessionPrice(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </div>
          </div>
        </div>

        {/* Session Settings */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold font-heading text-foreground mb-6">Session Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Maximum Session Duration (minutes)</label>
              <input
                type="number"
                value={maxSessionDuration}
                onChange={(e) => setMaxSessionDuration(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </div>
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-input w-4 h-4" defaultChecked />
                <span className="text-sm font-medium">Allow session recording</span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-input w-4 h-4" defaultChecked />
                <span className="text-sm font-medium">Enable session chat</span>
              </label>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-bold font-heading text-foreground mb-6">Notification Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-input w-4 h-4" defaultChecked />
                <span className="text-sm font-medium">Email notifications for new registrations</span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-input w-4 h-4" defaultChecked />
                <span className="text-sm font-medium">Email notifications for payment issues</span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded border-input w-4 h-4" />
                <span className="text-sm font-medium">Weekly analytics report</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
