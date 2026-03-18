import { useState } from "react";
import { SocialLayout } from "@/components/social-media/SocialLayout";
import { Heart, MessageCircle, UserPlus, AtSign } from "lucide-react";

type TabType = "all" | "mentions" | "likes" | "follows";

const notifications = [
  { id: "1", type: "like" as const, user: { name: "Maya Rodriguez", avatar: "https://i.pravatar.cc/40?img=5" }, action: "liked your post", snippet: '"Hot take: the best productivity hack..."', time: "2h" },
  { id: "2", type: "mention" as const, user: { name: "Jordan Park", avatar: "https://i.pravatar.cc/40?img=12" }, action: "mentioned you in a post", snippet: '"@alexchen check this out — incredible..."', time: "3h" },
  { id: "3", type: "follow" as const, user: { name: "Lena Kim", avatar: "https://i.pravatar.cc/40?img=20" }, action: "started following you", snippet: "", time: "4h" },
  { id: "4", type: "like" as const, user: { name: "Marcus Webb", avatar: "https://i.pravatar.cc/40?img=33" }, action: "liked your reply", snippet: '"Totally agree with this approach..."', time: "6h" },
  { id: "5", type: "mention" as const, user: { name: "Priya Sharma", avatar: "https://i.pravatar.cc/40?img=25" }, action: "replied to your post", snippet: '"This is such a great point! I\'ve been..."', time: "8h" },
  { id: "6", type: "follow" as const, user: { name: "Ava Mitchell", avatar: "https://i.pravatar.cc/80?img=1" }, action: "started following you", snippet: "", time: "12h" },
  { id: "7", type: "like" as const, user: { name: "Noah Chen", avatar: "https://i.pravatar.cc/80?img=3" }, action: "liked your photo", snippet: "", time: "1d" },
];

const iconMap = {
  like: Heart,
  mention: AtSign,
  follow: UserPlus,
};

const colorMap = {
  like: "text-accent",
  mention: "text-primary",
  follow: "text-pulse-success",
};

const tabs: { id: TabType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mentions", label: "Mentions" },
  { id: "likes", label: "Likes" },
  { id: "follows", label: "Follows" },
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filtered = activeTab === "all"
    ? notifications
    : notifications.filter((n) => {
        if (activeTab === "mentions") return n.type === "mention";
        if (activeTab === "likes") return n.type === "like";
        return n.type === "follow";
      });

  return (
    <SocialLayout>
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <h1 className="font-heading text-2xl font-bold">Notifications</h1>

        {/* Tabs */}
        <div role="tablist" aria-label="Notification categories" className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Notification list */}
        <div id={`tabpanel-${activeTab}`} role="tabpanel" aria-label={`${activeTab} notifications`} className="space-y-1">
          {filtered.map((n) => {
            const Icon = iconMap[n.type];
            return (
              <article key={n.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors" aria-label={`${n.user.name} ${n.action} · ${n.time} ago`}>
                <img src={n.user.avatar} alt={`${n.user.name}'s avatar`} className="h-10 w-10 rounded-full object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 shrink-0 ${colorMap[n.type]}`} aria-hidden="true" />
                    <p className="text-sm">
                      <span className="font-semibold">{n.user.name}</span>{" "}
                      <span className="text-muted-foreground">{n.action}</span>{" "}
                      <span className="text-xs text-muted-foreground">· {n.time}</span>
                    </p>
                  </div>
                  {n.snippet && (
                    <p className="text-xs text-muted-foreground mt-1 truncate">{n.snippet}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SocialLayout>
  );
}
