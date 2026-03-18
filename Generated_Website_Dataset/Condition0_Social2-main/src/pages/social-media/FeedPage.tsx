import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, ImagePlus, Smile, MoreHorizontal, Flame } from "lucide-react";
import { PulseLayout } from "@/components/social-media/PulseLayout";
import { motion } from "framer-motion";

const trendingTopics = [
  { tag: "#ClimateWeek", posts: "84K posts" },
  { tag: "#TechLayoffs", posts: "52K posts" },
  { tag: "#WorldCup2026", posts: "128K posts" },
  { tag: "#AIArt", posts: "31K posts" },
  { tag: "#SpaceX", posts: "19K posts" },
];

const feedPosts = [
  {
    id: 1, avatar: "S", name: "Sara Chen", handle: "@sarachen", time: "12m",
    text: "Just finished reading the most incredible paper on quantum error correction. The implications for scalable computing are mind-blowing 🧠",
    likes: 234, comments: 18, hasImage: false,
  },
  {
    id: 2, avatar: "M", name: "Marcus Johnson", handle: "@marcusj", time: "45m",
    text: "Golden hour in Lisbon never disappoints. Three weeks into this remote work experiment and I'm never going back to an office.",
    likes: 891, comments: 67, hasImage: true, imageColor: "from-primary/30 to-pulse-amber-light/20",
  },
  {
    id: 3, avatar: "L", name: "Luna Park", handle: "@lunapark", time: "1h",
    text: "Hot take: we're overcomplicating frontend development. Sometimes a simple HTML page with good CSS is all you need.",
    likes: 1432, comments: 203, hasImage: false,
  },
  {
    id: 4, avatar: "J", name: "James Wright", handle: "@jamesw", time: "2h",
    text: "The new album from Floating Points is absolutely transcendent. Perfect for late-night coding sessions. Anyone else listening on repeat?",
    likes: 156, comments: 24, hasImage: false,
  },
  {
    id: 5, avatar: "R", name: "Rina Patel", handle: "@rinapatel", time: "3h",
    text: "Spent the morning at the farmer's market and came home with way too many heirloom tomatoes. Time to make the best pasta sauce of the year 🍅",
    likes: 445, comments: 31, hasImage: true, imageColor: "from-destructive/20 to-primary/10",
  },
];

function PostCard({ post, index }: { post: typeof feedPosts[0]; index: number }) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      className="pulse-card p-5"
    >
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold text-sm shrink-0">
          {post.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-semibold text-sm text-foreground truncate">{post.name}</span>
              <span className="text-xs text-muted-foreground truncate">{post.handle}</span>
              <span className="text-xs text-muted-foreground">· {post.time}</span>
            </div>
            <button className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-secondary transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-foreground mt-1.5 leading-relaxed">{post.text}</p>
          {post.hasImage && (
            <div className={`mt-3 h-48 rounded-lg bg-gradient-to-br ${post.imageColor} border border-border`} />
          )}
          <div className="flex items-center justify-between mt-3 pt-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-1.5 text-xs transition-colors ${liked ? "text-destructive" : "text-muted-foreground hover:text-destructive"}`}
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
              <span>{liked ? post.likes + 1 : post.likes}</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-pulse-success transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`flex items-center gap-1.5 text-xs transition-colors ${bookmarked ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeedPage() {
  const [composerText, setComposerText] = useState("");

  return (
    <PulseLayout>
      <div className="max-w-6xl mx-auto flex gap-6 p-4 lg:p-6">
        {/* Main Feed */}
        <div className="flex-1 min-w-0 space-y-4">
          <h1 className="text-2xl font-display font-bold text-foreground">Feed</h1>

          {/* Composer */}
          <div className="pulse-card p-5">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0">
                A
              </div>
              <div className="flex-1">
                <textarea
                  value={composerText}
                  onChange={(e) => setComposerText(e.target.value)}
                  placeholder="What's on your mind, Alex?"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none outline-none min-h-[60px]"
                  rows={2}
                />
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                      <ImagePlus className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                      <Smile className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="px-5 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          {feedPosts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* Trending Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 space-y-4">
          <div className="pulse-card p-5">
            <h2 className="font-display font-bold text-foreground flex items-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-primary" />
              Trending
            </h2>
            <div className="space-y-3">
              {trendingTopics.map((topic) => (
                <div key={topic.tag} className="group cursor-pointer">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {topic.tag}
                  </p>
                  <p className="text-xs text-muted-foreground">{topic.posts}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pulse-card p-5">
            <h3 className="font-display font-bold text-foreground mb-3 text-sm">Who to Follow</h3>
            {[
              { name: "Kai Nakamura", handle: "@kainakamura" },
              { name: "Elena Volkov", handle: "@elenavolkov" },
              { name: "Dev Sharma", handle: "@devsharma" },
            ].map((user) => (
              <div key={user.handle} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-semibold shrink-0">
                    {user.name[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.handle}</p>
                  </div>
                </div>
                <button className="text-xs font-semibold text-primary hover:underline shrink-0 ml-2">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </PulseLayout>
  );
}
