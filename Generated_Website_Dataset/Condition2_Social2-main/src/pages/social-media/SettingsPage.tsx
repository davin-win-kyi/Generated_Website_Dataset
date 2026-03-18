import { useState } from "react";
import { SocialLayout } from "@/components/social-media/SocialLayout";
import { User, Shield, Bell, Palette, AlertTriangle } from "lucide-react";

export default function SettingsPage() {
  const [dmPermission, setDmPermission] = useState("everyone");
  const [postVisibility, setPostVisibility] = useState("public");
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [mentionNotifs, setMentionNotifs] = useState(true);

  return (
    <SocialLayout>
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <h1 className="font-heading text-2xl font-bold">Settings</h1>

        {/* Account */}
        <section className="bg-card border border-border rounded-xl p-5 space-y-4" aria-labelledby="settings-account">
          <h2 id="settings-account" className="font-heading font-bold flex items-center gap-2">
            <User className="h-4 w-4 text-primary" aria-hidden="true" />
            Account
          </h2>
          <div className="space-y-3">
            <SettingsField label="Username" value="alexchen" id="settings-username" />
            <SettingsField label="Email" value="alex@example.com" id="settings-email" />
            <div>
              <label htmlFor="settings-password" className="block text-xs text-muted-foreground mb-1">Password</label>
              <button className="text-sm text-primary hover:underline">Change password</button>
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section className="bg-card border border-border rounded-xl p-5 space-y-4" aria-labelledby="settings-privacy">
          <h2 id="settings-privacy" className="font-heading font-bold flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" aria-hidden="true" />
            Privacy
          </h2>
          <div className="space-y-3">
            <div>
              <label htmlFor="post-visibility" className="block text-sm font-medium mb-1">Who can see your posts</label>
              <select
                id="post-visibility"
                value={postVisibility}
                onChange={(e) => setPostVisibility(e.target.value)}
                className="w-full bg-secondary rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="public">Everyone</option>
                <option value="followers">Followers only</option>
                <option value="private">Only me</option>
              </select>
            </div>
            <div>
              <label htmlFor="dm-permissions" className="block text-sm font-medium mb-1">DM permissions</label>
              <select
                id="dm-permissions"
                value={dmPermission}
                onChange={(e) => setDmPermission(e.target.value)}
                className="w-full bg-secondary rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="everyone">Everyone</option>
                <option value="followers">Followers only</option>
                <option value="none">No one</option>
              </select>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-card border border-border rounded-xl p-5 space-y-4" aria-labelledby="settings-notifs">
          <h2 id="settings-notifs" className="font-heading font-bold flex items-center gap-2">
            <Bell className="h-4 w-4 text-primary" aria-hidden="true" />
            Notifications
          </h2>
          <div className="space-y-3">
            <ToggleRow label="Email notifications" checked={emailNotifs} onChange={setEmailNotifs} id="email-notifs" />
            <ToggleRow label="Push notifications" checked={pushNotifs} onChange={setPushNotifs} id="push-notifs" />
            <ToggleRow label="Mention alerts" checked={mentionNotifs} onChange={setMentionNotifs} id="mention-notifs" />
          </div>
        </section>

        {/* Appearance */}
        <section className="bg-card border border-border rounded-xl p-5 space-y-4" aria-labelledby="settings-appearance">
          <h2 id="settings-appearance" className="font-heading font-bold flex items-center gap-2">
            <Palette className="h-4 w-4 text-primary" aria-hidden="true" />
            Appearance
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-sm">Dark mode</span>
            <button
              onClick={() => document.documentElement.classList.toggle("dark")}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-border hover:bg-secondary transition-colors"
            >
              Toggle
            </button>
          </div>
        </section>

        {/* Danger zone */}
        <section className="bg-card border border-destructive/30 rounded-xl p-5 space-y-4" aria-labelledby="settings-danger">
          <h2 id="settings-danger" className="font-heading font-bold flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            Danger Zone
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-4 py-2 text-sm font-medium border border-destructive/30 text-destructive rounded-lg hover:bg-destructive/10 transition-colors">
              Deactivate Account
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity">
              Delete Account
            </button>
          </div>
        </section>
      </div>
    </SocialLayout>
  );
}

function SettingsField({ label, value, id }: { label: string; value: string; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs text-muted-foreground mb-1">{label}</label>
      <input
        id={id}
        type="text"
        defaultValue={value}
        className="w-full bg-secondary rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
  );
}

function ToggleRow({ label, checked, onChange, id }: { label: string; checked: boolean; onChange: (v: boolean) => void; id: string }) {
  return (
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="text-sm">{label}</label>
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-10 h-6 rounded-full transition-colors ${checked ? "bg-primary" : "bg-secondary"}`}
      >
        <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-card shadow transition-transform ${checked ? "translate-x-4" : ""}`} />
      </button>
    </div>
  );
}
