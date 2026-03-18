import { NavLink } from "react-router-dom";
import { Home, Compass, Bell, MessageCircle, User, Settings, Zap } from "lucide-react";

const navItems = [
  { to: "/social-media", icon: Home, label: "Feed", end: true },
  { to: "/social-media/explore", icon: Compass, label: "Explore" },
  { to: "/social-media/notifications", icon: Bell, label: "Notifications" },
  { to: "/social-media/messages", icon: MessageCircle, label: "Messages" },
  { to: "/social-media/profile", icon: User, label: "Profile" },
  { to: "/social-media/settings", icon: Settings, label: "Settings" },
];

export function SidebarNav() {
  return (
    <nav className="flex flex-col h-full p-4" aria-label="Primary navigation">
      {/* Logo */}
      <div className="flex items-center gap-2 px-3 py-4 mb-6">
        <div className="pulse-gradient rounded-lg p-2">
          <Zap className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
        </div>
        <span className="font-heading text-xl font-bold tracking-tight">Pulse</span>
      </div>

      {/* Nav items */}
      <ul className="flex flex-col gap-1 flex-1" role="list">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`
              }
              aria-current={undefined}
            >
              {({ isActive }) => (
                <>
                  <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* User section */}
      <div className="border-t border-border pt-4 mt-4">
        <div className="flex items-center gap-3 px-3">
          <div className="h-9 w-9 rounded-full pulse-gradient flex items-center justify-center text-sm font-bold text-primary-foreground" aria-hidden="true">
            A
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate">Alex Chen</p>
            <p className="text-xs text-muted-foreground truncate">@alexchen</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
