import { NavLink } from "react-router-dom";
import { Home, Compass, Bell, MessageCircle, User } from "lucide-react";

const navItems = [
  { to: "/social-media", icon: Home, label: "Feed", end: true },
  { to: "/social-media/explore", icon: Compass, label: "Explore" },
  { to: "/social-media/notifications", icon: Bell, label: "Notifications" },
  { to: "/social-media/messages", icon: MessageCircle, label: "Messages" },
  { to: "/social-media/profile", icon: User, label: "Profile" },
];

export function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-card/95 backdrop-blur-sm z-50" aria-label="Mobile navigation">
      <ul className="flex items-center justify-around py-2" role="list">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 p-2 rounded-lg text-xs transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
              aria-label={item.label}
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
