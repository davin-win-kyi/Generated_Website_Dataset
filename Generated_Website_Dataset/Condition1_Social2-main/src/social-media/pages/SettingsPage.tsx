import { useState } from "react";
import { User, Shield, Bell, Palette, AlertTriangle } from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [dmPermission, setDmPermission] = useState("everyone");

  const Toggle = ({
    enabled,
    onToggle,
    label,
  }: {
    enabled: boolean;
    onToggle: () => void;
    label: string;
  }) => (
    <button
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
        enabled ? "bg-primary" : "bg-secondary"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-card shadow-sm transition-transform ${
          enabled ? "translate-x-5" : "translate-x-0.5"
        } mt-0.5`}
      />
    </button>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-4 sm:px-6 py-4">
        <h1 className="font-heading text-xl font-bold text-foreground">Settings</h1>
      </header>

      <div className="px-4 sm:px-6 py-6 space-y-8">
        {/* Account */}
        <section aria-labelledby="account-heading">
          <h2 id="account-heading" className="font-heading font-semibold text-foreground flex items-center gap-2 mb-4">
            <User className="h-5 w-5 text-primary" aria-hidden="true" />
            Account
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="settings-username" className="block text-sm font-medium text-foreground mb-1">Username</label>
              <input
                id="settings-username"
                type="text"
                defaultValue="alexrivera"
                className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm border-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
            </div>
            <div>
              <label htmlFor="settings-email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input
                id="settings-email"
                type="email"
                defaultValue="alex@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm border-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
            </div>
            <div>
              <label htmlFor="settings-password" className="block text-sm font-medium text-foreground mb-1">Password</label>
              <input
                id="settings-password"
                type="password"
                defaultValue="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm border-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section aria-labelledby="privacy-heading">
          <h2 id="privacy-heading" className="font-heading font-semibold text-foreground flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            Privacy
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Private profile</p>
                <p className="text-xs text-muted-foreground">Only followers can see your posts</p>
              </div>
              <Toggle enabled={privateProfile} onToggle={() => setPrivateProfile(!privateProfile)} label="Toggle private profile" />
            </div>
            <div>
              <label htmlFor="dm-permission" className="block text-sm font-medium text-foreground mb-1">Who can send you DMs</label>
              <select
                id="dm-permission"
                value={dmPermission}
                onChange={(e) => setDmPermission(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm border-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <option value="everyone">Everyone</option>
                <option value="followers">Followers only</option>
                <option value="nobody">Nobody</option>
              </select>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section aria-labelledby="notif-heading">
          <h2 id="notif-heading" className="font-heading font-semibold text-foreground flex items-center gap-2 mb-4">
            <Bell className="h-5 w-5 text-primary" aria-hidden="true" />
            Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Email notifications</p>
                <p className="text-xs text-muted-foreground">Receive updates via email</p>
              </div>
              <Toggle enabled={emailNotifs} onToggle={() => setEmailNotifs(!emailNotifs)} label="Toggle email notifications" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Push notifications</p>
                <p className="text-xs text-muted-foreground">Receive push notifications on your device</p>
              </div>
              <Toggle enabled={pushNotifs} onToggle={() => setPushNotifs(!pushNotifs)} label="Toggle push notifications" />
            </div>
          </div>
        </section>

        {/* Appearance */}
        <section aria-labelledby="appearance-heading">
          <h2 id="appearance-heading" className="font-heading font-semibold text-foreground flex items-center gap-2 mb-4">
            <Palette className="h-5 w-5 text-primary" aria-hidden="true" />
            Appearance
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Dark mode</p>
              <p className="text-xs text-muted-foreground">Switch between light and dark themes</p>
            </div>
            <Toggle
              enabled={darkMode}
              onToggle={() => {
                setDarkMode(!darkMode);
                document.documentElement.classList.toggle("dark");
              }}
              label="Toggle dark mode"
            />
          </div>
        </section>

        {/* Danger zone */}
        <section aria-labelledby="danger-heading">
          <h2 id="danger-heading" className="font-heading font-semibold text-destructive flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            Danger Zone
          </h2>
          <div className="pulse-card border-destructive/30 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Deactivate account</p>
                <p className="text-xs text-muted-foreground">Temporarily disable your account</p>
              </div>
              <button className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-pulse-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                Deactivate
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Delete account</p>
                <p className="text-xs text-muted-foreground">Permanently delete your account and all data</p>
              </div>
              <button className="px-4 py-2 rounded-lg bg-destructive text-destructive-foreground text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                Delete
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
