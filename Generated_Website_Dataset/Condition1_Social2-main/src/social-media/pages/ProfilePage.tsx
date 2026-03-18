import { useState } from "react";
import { MapPin, Calendar, Link as LinkIcon, Edit } from "lucide-react";
import { PostCard } from "../components/PostCard";

const profilePosts = [
  {
    avatar: "A",
    name: "Alex Rivera",
    handle: "@alexrivera",
    time: "2h",
    content: "Just shipped a new feature that I've been working on for weeks. The feeling of seeing it live never gets old. 🚀",
    likes: 342,
    comments: 28,
    shares: 15,
  },
  {
    avatar: "A",
    name: "Alex Rivera",
    handle: "@alexrivera",
    time: "1d",
    content: "Reading through research papers on distributed systems and my mind is blown. The elegance of consensus algorithms is seriously underappreciated.",
    likes: 567,
    comments: 45,
    shares: 23,
  },
  {
    avatar: "A",
    name: "Alex Rivera",
    handle: "@alexrivera",
    time: "3d",
    content: "Weekend hike up Mount Tamalpais. The fog rolling over the hills looked like an ocean. Nature's way of reminding you to slow down.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
    likes: 1205,
    comments: 89,
    shares: 34,
  },
];

type ProfileTab = "posts" | "replies" | "media" | "likes";

const tabs: { key: ProfileTab; label: string }[] = [
  { key: "posts", label: "Posts" },
  { key: "replies", label: "Replies" },
  { key: "media", label: "Media" },
  { key: "likes", label: "Likes" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("posts");

  return (
    <div className="max-w-2xl mx-auto">
      {/* Cover */}
      <div className="h-40 sm:h-52 pulse-gradient relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30" />
      </div>

      {/* Profile info */}
      <div className="px-4 sm:px-6 -mt-12 relative">
        <div className="flex items-end justify-between">
          <div className="w-24 h-24 rounded-full border-4 border-background pulse-gradient flex items-center justify-center text-primary-foreground font-heading font-bold text-3xl">
            A
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-pulse-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
            <Edit className="h-4 w-4" aria-hidden="true" />
            Edit Profile
          </button>
        </div>

        <div className="mt-3">
          <h1 className="font-heading text-xl font-bold text-foreground">Alex Rivera</h1>
          <p className="text-sm text-muted-foreground">@alexrivera</p>
          <p className="text-sm text-foreground mt-2 leading-relaxed">
            Software engineer & design enthusiast. Building things that matter. 
            Lover of mountains, distributed systems, and great coffee. ☕
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              San Francisco, CA
            </span>
            <span className="flex items-center gap-1">
              <LinkIcon className="h-4 w-4" aria-hidden="true" />
              <span className="text-primary">alexrivera.dev</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Joined March 2023
            </span>
          </div>

          <div className="flex items-center gap-5 mt-3">
            <button className="text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <span className="font-bold text-foreground">1,247</span>{" "}
              <span className="text-muted-foreground">Following</span>
            </button>
            <button className="text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <span className="font-bold text-foreground">8,934</span>{" "}
              <span className="text-muted-foreground">Followers</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border mt-4" role="tablist" aria-label="Profile content">
        <div className="flex px-4 sm:px-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-4 py-3 text-sm font-medium text-center border-b-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
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

      {/* Content */}
      <div className="px-4 sm:px-6 py-4 space-y-3" role="tabpanel" aria-label={`${activeTab} tab content`}>
        {activeTab === "posts" &&
          profilePosts.map((post, i) => <PostCard key={i} {...post} />)}
        {activeTab !== "posts" && (
          <div className="py-12 text-center text-muted-foreground text-sm">
            No {activeTab} yet
          </div>
        )}
      </div>
    </div>
  );
}
