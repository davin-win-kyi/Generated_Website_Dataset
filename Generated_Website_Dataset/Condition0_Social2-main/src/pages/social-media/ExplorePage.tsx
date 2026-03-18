import { Search, TrendingUp } from "lucide-react";
import { PulseLayout } from "@/components/social-media/PulseLayout";
import { motion } from "framer-motion";
import { useState } from "react";

const trendingTags = ["#ClimateWeek", "#TechLayoffs", "#WorldCup2026", "#AIArt", "#SpaceX", "#QuantumComputing", "#RemoteWork", "#Sustainability"];

const suggestedUsers = [
  { name: "Kai Nakamura", handle: "@kainakamura", bio: "Design systems & typography" },
  { name: "Elena Volkov", handle: "@elenavolkov", bio: "Climate researcher at MIT" },
  { name: "Dev Sharma", handle: "@devsharma", bio: "Full-stack dev, open source" },
  { name: "Zoe Kim", handle: "@zoekim", bio: "Product at Figma" },
  { name: "Omar Hassan", handle: "@omarhassan", bio: "Photographer & storyteller" },
  { name: "Anya Petrova", handle: "@anyapetrova", bio: "Machine learning engineer" },
];

const explorePosts = [
  { id: 1, text: "The future of sustainable architecture is modular and beautiful.", likes: 2341, color: "from-primary/20 to-secondary" },
  { id: 2, text: "Street photography in Tokyo — every corner tells a story.", likes: 5120, color: "from-destructive/15 to-primary/10" },
  { id: 3, text: "New research: sleep quality directly impacts creative output by 40%.", likes: 1890, color: "from-pulse-info/20 to-secondary" },
  { id: 4, text: "My minimalist desk setup for 2026. Less is truly more.", likes: 3450, color: "from-pulse-success/15 to-secondary" },
  { id: 5, text: "The most underrated programming language? Definitely Elixir.", likes: 780, color: "from-primary/25 to-muted" },
  { id: 6, text: "Sunrise over the Dolomites. Worth every early alarm.", likes: 8900, color: "from-primary/30 to-destructive/10" },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PulseLayout>
      <div className="max-w-4xl mx-auto p-4 lg:p-6 space-y-6">
        <h1 className="text-2xl font-display font-bold text-foreground">Explore</h1>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Pulse..."
            className="w-full pl-11 pr-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
        </div>

        {/* Trending Tags */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            Trending Now
          </h2>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Suggested Users */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-3">Suggested for You</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {suggestedUsers.map((user, i) => (
              <motion.div
                key={user.handle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="pulse-card p-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold mx-auto mb-2">
                  {user.name[0]}
                </div>
                <p className="text-sm font-semibold text-foreground truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.handle}</p>
                <p className="text-xs text-muted-foreground mt-1 truncate">{user.bio}</p>
                <button className="mt-3 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
                  Follow
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popular Posts Grid */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-3">Popular Posts</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {explorePosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className={`pulse-card p-4 bg-gradient-to-br ${post.color} aspect-square flex flex-col justify-between cursor-pointer`}
              >
                <p className="text-xs text-foreground leading-relaxed line-clamp-4">{post.text}</p>
                <p className="text-xs text-muted-foreground mt-2">♥ {post.likes.toLocaleString()}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PulseLayout>
  );
}
