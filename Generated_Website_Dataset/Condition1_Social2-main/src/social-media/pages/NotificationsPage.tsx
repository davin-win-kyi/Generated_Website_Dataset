import { useState } from "react";
import { Heart, MessageCircle, UserPlus, AtSign } from "lucide-react";

type NotifCategory = "all" | "mentions" | "likes" | "follows";

interface Notification {
  id: string;
  type: "like" | "comment" | "follow" | "mention";
  avatar: string;
  user: string;
  action: string;
  snippet?: string;
  time: string;
}

const notifications: Notification[] = [
  { id: "1", type: "like", avatar: "M", user: "Maya Chen", action: "liked your post", snippet: "Just finished my keynote slides for #ClimateWeek...", time: "2m" },
  { id: "2", type: "mention", avatar: "J", user: "Jordan Lee", action: "mentioned you", snippet: "@alexrivera check out this thread on efficiency", time: "15m" },
  { id: "3", type: "follow", avatar: "E", user: "Elena Volkov", action: "started following you", time: "30m" },
  { id: "4", type: "like", avatar: "S", user: "Sam Patel", action: "liked your post", snippet: "Hot take: the best code is the code you don't write...", time: "1h" },
  { id: "5", type: "comment", avatar: "L", user: "Luna Torres", action: "commented on your post", snippet: "This is such a great perspective! I've been thinking...", time: "1h" },
  { id: "6", type: "follow", avatar: "D", user: "Dev Sharma", action: "started following you", time: "2h" },
  { id: "7", type: "mention", avatar: "A", user: "Aria Kim", action: "mentioned you", snippet: "@alexrivera would love your thoughts on this design", time: "3h" },
  { id: "8", type: "like", avatar: "T", user: "Taj Williams", action: "liked your post", snippet: "Golden hour at the rooftop garden...", time: "4h" },
  { id: "9", type: "comment", avatar: "P", user: "Priya Nair", action: "replied to your comment", snippet: "Great point about the temperature data!", time: "5h" },
  { id: "10", type: "follow", avatar: "C", user: "Carlos Ruiz", action: "started following you", time: "6h" },
];

const tabs: { key: NotifCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "mentions", label: "Mentions" },
  { key: "likes", label: "Likes" },
  { key: "follows", label: "Follows" },
];

const iconMap = {
  like: Heart,
  comment: MessageCircle,
  follow: UserPlus,
  mention: AtSign,
};

const colorMap = {
  like: "text-accent",
  comment: "text-primary",
  follow: "text-pulse-success",
  mention: "text-pulse-warning",
};

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<NotifCategory>("all");

  const filtered =
    activeTab === "all"
      ? notifications
      : notifications.filter((n) => {
          if (activeTab === "mentions") return n.type === "mention";
          if (activeTab === "likes") return n.type === "like";
          if (activeTab === "follows") return n.type === "follow";
          return true;
        });

  return (
    <div className="max-w-2xl mx-auto">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-4 sm:px-6 py-4">
        <h1 className="font-heading text-xl font-bold text-foreground">Notifications</h1>
      </header>

      {/* Tabs */}
      <div className="border-b border-border" role="tablist" aria-label="Notification categories">
        <div className="flex px-4 sm:px-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                activeTab === tab.key
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div role="tabpanel" aria-label={`${activeTab} notifications`}>
        <ul className="divide-y divide-border" aria-label="Notifications list">
          {filtered.map((notif) => {
            const Icon = iconMap[notif.type];
            return (
              <li key={notif.id}>
                <button className="w-full text-left px-4 sm:px-6 py-4 hover:bg-pulse-hover transition-colors flex gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  <div className="w-10 h-10 rounded-full pulse-gradient flex items-center justify-center text-primary-foreground font-heading font-bold text-sm shrink-0">
                    {notif.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2">
                      <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${colorMap[notif.type]}`} aria-hidden="true" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">
                          <span className="font-semibold">{notif.user}</span>{" "}
                          <span className="text-muted-foreground">{notif.action}</span>
                          <span className="text-muted-foreground"> · {notif.time}</span>
                        </p>
                        {notif.snippet && (
                          <p className="text-xs text-muted-foreground mt-1 truncate">{notif.snippet}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
