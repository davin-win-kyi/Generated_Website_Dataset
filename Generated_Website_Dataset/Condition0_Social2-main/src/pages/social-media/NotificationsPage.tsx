import { useState } from "react";
import { Heart, MessageCircle, UserPlus, AtSign } from "lucide-react";
import { PulseLayout } from "@/components/social-media/PulseLayout";
import { motion } from "framer-motion";

type TabType = "all" | "mentions" | "likes" | "follows";

const notifications = [
  { id: 1, type: "like" as const, avatar: "M", name: "Maya Chen", action: "liked your post", time: "2h", snippet: "Hot take: we're overcomplicating frontend..." },
  { id: 2, type: "follow" as const, avatar: "K", name: "Kai Nakamura", action: "started following you", time: "3h", snippet: "" },
  { id: 3, type: "mention" as const, avatar: "S", name: "Sara Chen", action: "mentioned you in a post", time: "4h", snippet: "@alexrivera have you seen the new quantum paper?" },
  { id: 4, type: "like" as const, avatar: "J", name: "James Wright", action: "liked your post", time: "5h", snippet: "The new album from Floating Points..." },
  { id: 5, type: "follow" as const, avatar: "E", name: "Elena Volkov", action: "started following you", time: "6h", snippet: "" },
  { id: 6, type: "mention" as const, avatar: "D", name: "Dev Sharma", action: "replied to your post", time: "8h", snippet: "Totally agree — simplicity always wins." },
  { id: 7, type: "like" as const, avatar: "R", name: "Rina Patel", action: "liked your photo", time: "12h", snippet: "" },
  { id: 8, type: "like" as const, avatar: "L", name: "Luna Park", action: "liked your post", time: "1d", snippet: "Just finished reading the most incredible paper..." },
  { id: 9, type: "follow" as const, avatar: "O", name: "Omar Hassan", action: "started following you", time: "1d", snippet: "" },
  { id: 10, type: "mention" as const, avatar: "Z", name: "Zoe Kim", action: "mentioned you", time: "2d", snippet: "cc @alexrivera — thoughts on this design system?" },
];

const iconMap = {
  like: Heart,
  mention: AtSign,
  follow: UserPlus,
};

const iconColorMap = {
  like: "text-destructive",
  mention: "text-primary",
  follow: "text-pulse-info",
};

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filtered = activeTab === "all"
    ? notifications
    : notifications.filter((n) =>
        activeTab === "likes" ? n.type === "like"
          : activeTab === "mentions" ? n.type === "mention"
            : n.type === "follow"
      );

  const tabs: { label: string; value: TabType }[] = [
    { label: "All", value: "all" },
    { label: "Mentions", value: "mentions" },
    { label: "Likes", value: "likes" },
    { label: "Follows", value: "follows" },
  ];

  return (
    <PulseLayout>
      <div className="max-w-2xl mx-auto p-4 lg:p-6 space-y-4">
        <h1 className="text-2xl font-display font-bold text-foreground">Notifications</h1>

        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-secondary rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex-1 py-2 text-xs font-medium rounded-md transition-colors ${
                activeTab === tab.value
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Notification List */}
        <div className="space-y-1">
          {filtered.map((notif, i) => {
            const Icon = iconMap[notif.type];
            return (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold text-sm">
                    {notif.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-card flex items-center justify-center ${iconColorMap[notif.type]}`}>
                    <Icon className="w-3 h-3" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">{notif.name}</span>{" "}
                    <span className="text-muted-foreground">{notif.action}</span>
                    <span className="text-muted-foreground"> · {notif.time}</span>
                  </p>
                  {notif.snippet && (
                    <p className="text-xs text-muted-foreground mt-1 truncate">{notif.snippet}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PulseLayout>
  );
}
