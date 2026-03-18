import { useState } from "react";
import { SocialLayout } from "@/components/social-media/SocialLayout";
import { PostCard } from "@/components/social-media/PostCard";
import { mockPosts } from "@/data/mockPosts";
import { MapPin, Calendar, Link as LinkIcon, Edit3 } from "lucide-react";

type ProfileTab = "posts" | "replies" | "media" | "likes";

const tabs: { id: ProfileTab; label: string }[] = [
  { id: "posts", label: "Posts" },
  { id: "replies", label: "Replies" },
  { id: "media", label: "Media" },
  { id: "likes", label: "Likes" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("posts");

  return (
    <SocialLayout>
      <div className="max-w-2xl mx-auto">
        {/* Cover photo */}
        <div className="h-48 pulse-gradient relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
        </div>

        {/* Profile info */}
        <div className="px-4 -mt-12 relative">
          <div className="flex items-end justify-between">
            <div className="h-24 w-24 rounded-full border-4 border-card pulse-gradient flex items-center justify-center text-3xl font-bold text-primary-foreground font-heading" role="img" aria-label="Alex Chen's avatar">
              A
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-medium hover:bg-secondary transition-colors mt-14">
              <Edit3 className="h-4 w-4" aria-hidden="true" />
              Edit Profile
            </button>
          </div>

          <div className="mt-3">
            <h1 className="font-heading text-xl font-bold">Alex Chen</h1>
            <p className="text-sm text-muted-foreground">@alexchen</p>
            <p className="text-sm mt-2">Full-stack developer & design enthusiast. Building the future one commit at a time. ⚡</p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" aria-hidden="true" /> San Francisco, CA</span>
              <span className="flex items-center gap-1"><LinkIcon className="h-3 w-3" aria-hidden="true" /> alexchen.dev</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" aria-hidden="true" /> Joined March 2023</span>
            </div>

            <div className="flex gap-4 mt-3 text-sm">
              <span><strong className="font-semibold">1,247</strong> <span className="text-muted-foreground">Following</span></span>
              <span><strong className="font-semibold">3,891</strong> <span className="text-muted-foreground">Followers</span></span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div role="tablist" aria-label="Profile content" className="flex border-b border-border mt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-4 space-y-4" role="tabpanel" aria-label={`${activeTab} content`}>
          {activeTab === "posts" && mockPosts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={{ ...post, author: { name: "Alex Chen", handle: "alexchen", avatar: "" } }} />
          ))}
          {activeTab === "replies" && (
            <p className="text-center text-muted-foreground text-sm py-8">No replies yet.</p>
          )}
          {activeTab === "media" && (
            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
              {[
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop",
              ].map((src, i) => (
                <img key={i} src={src} alt={`Media post ${i + 1}`} className="w-full aspect-square object-cover" />
              ))}
            </div>
          )}
          {activeTab === "likes" && mockPosts.slice(2, 5).map((post) => (
            <PostCard key={post.id} post={{ ...post, liked: true }} />
          ))}
        </div>
      </div>
    </SocialLayout>
  );
}
