import { useState } from "react";
import { User, Lock, Bell, Palette, AlertTriangle } from "lucide-react";
import { PulseLayout } from "@/components/social-media/PulseLayout";

function SettingSection({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="pulse-card p-5">
      <h2 className="flex items-center gap-2 font-display font-bold text-foreground mb-4">
        <Icon className="w-4 h-4 text-primary" />
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function SettingRow({ label, description, children }: { label: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
      </div>
      {children}
    </div>
  );
}

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`w-10 h-6 rounded-full transition-colors relative shrink-0 ${on ? "bg-primary" : "bg-border"}`}
    >
      <div className={`w-4 h-4 rounded-full bg-card absolute top-1 transition-transform ${on ? "translate-x-5" : "translate-x-1"}`} />
    </button>
  );
}

export default function SettingsPage() {
  return (
    <PulseLayout>
      <div className="max-w-2xl mx-auto p-4 lg:p-6 space-y-4">
        <h1 className="text-2xl font-display font-bold text-foreground">Settings</h1>

        <SettingSection icon={User} title="Account">
          <SettingRow label="Username" description="@alexrivera">
            <button className="text-xs text-primary font-medium hover:underline">Edit</button>
          </SettingRow>
          <SettingRow label="Email" description="alex@rivera.dev">
            <button className="text-xs text-primary font-medium hover:underline">Edit</button>
          </SettingRow>
          <SettingRow label="Password" description="Last changed 30 days ago">
            <button className="text-xs text-primary font-medium hover:underline">Change</button>
          </SettingRow>
        </SettingSection>

        <SettingSection icon={Lock} title="Privacy">
          <SettingRow label="Who can see your posts" description="Control post visibility">
            <select className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md border border-border outline-none">
              <option>Everyone</option>
              <option>Followers only</option>
              <option>Nobody</option>
            </select>
          </SettingRow>
          <SettingRow label="Allow DMs from" description="Control who can message you">
            <select className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-md border border-border outline-none">
              <option>Everyone</option>
              <option>People you follow</option>
              <option>Nobody</option>
            </select>
          </SettingRow>
        </SettingSection>

        <SettingSection icon={Bell} title="Notifications">
          <SettingRow label="Email notifications" description="Receive updates via email">
            <Toggle defaultOn />
          </SettingRow>
          <SettingRow label="Push notifications" description="Browser push alerts">
            <Toggle defaultOn />
          </SettingRow>
          <SettingRow label="Mention notifications" description="When someone tags you">
            <Toggle defaultOn />
          </SettingRow>
          <SettingRow label="New follower alerts">
            <Toggle />
          </SettingRow>
        </SettingSection>

        <SettingSection icon={Palette} title="Appearance">
          <SettingRow label="Dark mode" description="Toggle dark/light theme">
            <Toggle />
          </SettingRow>
        </SettingSection>

        <div className="pulse-card p-5 border-destructive/30">
          <h2 className="flex items-center gap-2 font-display font-bold text-destructive mb-4">
            <AlertTriangle className="w-4 h-4" />
            Danger Zone
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Deactivate Account</p>
                <p className="text-xs text-muted-foreground">Temporarily disable your account</p>
              </div>
              <button className="px-3 py-1.5 text-xs font-medium border border-border rounded-md text-foreground hover:bg-secondary transition-colors">
                Deactivate
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Delete Account</p>
                <p className="text-xs text-muted-foreground">Permanently delete your data</p>
              </div>
              <button className="px-3 py-1.5 text-xs font-medium bg-destructive text-destructive-foreground rounded-md hover:opacity-90 transition-opacity">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </PulseLayout>
  );
}
