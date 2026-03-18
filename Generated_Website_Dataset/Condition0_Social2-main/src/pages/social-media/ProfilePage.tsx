import { useState } from "react";
import { MapPin, Calendar, Link as LinkIcon, Edit } from "lucide-react";
import { PulseLayout } from "@/components/social-media/PulseLayout";
import coverPhoto from "@/assets/cover-photo.jpg";
import { motion } from "framer-motion";

type ProfileTab = "posts" | "replies" | "media" | "likes";

const profilePosts = [
  { id: 1, text: "Just shipped a massive refactor of our design system. Clean tokens, semantic variables, zero hardcoded colors. It feels incredible. 🎨", likes: 342, comments: 28, time: "2h" },
  { id: 2, text: "Unpopular opinion: the best code is the code you delete. Spent today removing 2,000 lines and the app is faster than ever.", likes: 891, comments: 103, time: "1d" },
  { id: 3, text: "Weekend project: built a CLI tool for generating color palettes from photographs. Open sourcing it next week.", likes: 567, comments: 45, time: "3d" },
  { id: 4, text: "Reading list update: halfway through 'Designing Data-Intensive Applications' and it's reshaping how I think about architecture.", likes: 234, comments: 19, time: "5d" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("posts");

  const tabs: { label: string; value: ProfileTab }[] = [
    { label: "Posts", value: "posts" },
    { label: "Replies", value: "replies" },
    { label: "Media", value: "media" },
    { label: "Likes", value: "likes" },
  ];

  return (
    <PulseLayout>
      <div className="max-w-2xl mx-auto">
        {/* Cover Photo */}
        <div className="h-48 md:h-56 overflow-hidden">
          <img src={coverPhoto} alt="Cover" className="w-full h-full object-cover" />
        </div>

        {/* Profile Info */}
        <div className="px-4 lg:px-6 pb-4">
          <div className="flex items-end justify-between -mt-12 mb-4">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-display font-bold border-4 border-background">
              A
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
              <Edit className="w-3.5 h-3.5" />
              Edit Profile
            </button>
          </div>

          <h1 className="text-xl font-display font-bold text-foreground">Alex Rivera</h1>
          <p className="text-sm text-muted-foreground">@alexrivera</p>
          <p className="text-sm text-foreground mt-2 leading-relaxed">
            Design engineer building at the intersection of aesthetics and performance. 
            Obsessed with typography, color theory, and clean architecture.
          </p>

          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground flex-wrap">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> San Francisco</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Joined March 2024</span>
            <span className="flex items-center gap-1"><LinkIcon className="w-3.5 h-3.5" /> alexrivera.dev</span>
          </div>

          <div className="flex gap-4 mt-3 text-sm">
            <span><strong className="text-foreground">1,247</strong> <span className="text-muted-foreground">Following</span></span>
            <span><strong className="text-foreground">8,932</strong> <span className="text-muted-foreground">Followers</span></span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.value ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.value && (
                <motion.div layoutId="profile-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 lg:px-6 space-y-4">
          {activeTab === "posts" &&
            profilePosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="pulse-card p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">A</div>
                  <span className="text-sm font-semibold text-foreground">Alex Rivera</span>
                  <span className="text-xs text-muted-foreground">· {post.time}</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">{post.text}</p>
                <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                  <span>♥ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </motion.div>
            ))}
          {activeTab === "replies" && (
            <p className="text-sm text-muted-foreground text-center py-8">No replies yet.</p>
          )}
          {activeTab === "media" && (
            <p className="text-sm text-muted-foreground text-center py-8">No media posts yet.</p>
          )}
          {activeTab === "likes" && (
            <p className="text-sm text-muted-foreground text-center py-8">No liked posts to show.</p>
          )}
        </div>
      </div>
    </PulseLayout>
  );
}
