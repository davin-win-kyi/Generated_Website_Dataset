import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Compass,
  Bell,
  MessageCircle,
  User,
  Settings,
  Zap,
} from "lucide-react";

const navItems = [
  { title: "Feed", url: "/", icon: Home },
  { title: "Explore", url: "/explore", icon: Compass },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Messages", url: "/messages", icon: MessageCircle },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function PulseSidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden md:flex flex-col w-64 lg:w-72 border-r border-border bg-sidebar h-screen sticky top-0 shrink-0"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
        <div className="pulse-gradient rounded-lg p-1.5">
          <Zap className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
        </div>
        <span className="font-heading text-xl font-bold tracking-tight text-foreground">
          Pulse
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Primary">
        {navItems.map((item) => {
          const isActive =
            item.url === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.url);

          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{item.title}</span>
              {item.title === "Notifications" && (
                <span className="ml-auto bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                  3
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User quick card */}
      <div className="px-4 py-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full pulse-gradient flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">Alex Rivera</p>
            <p className="text-xs text-muted-foreground truncate">@alexrivera</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
