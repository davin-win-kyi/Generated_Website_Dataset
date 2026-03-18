import { useState } from "react";
import { SocialLayout } from "@/components/social-media/SocialLayout";
import { PostCard } from "@/components/social-media/PostCard";
import { mockPosts } from "@/data/mockPosts";
import { Search } from "lucide-react";

const trendingTags = ["#ClimateWeek", "#TechLayoffs", "#WorldCup2026", "#AIArt", "#SpaceX", "#Startups", "#DesignTwitter", "#OpenSource"];

const suggestedUsers = [
  { name: "Ava Mitchell", handle: "avamitch", avatar: "https://i.pravatar.cc/80?img=1", bio: "Product designer · SF" },
  { name: "Noah Chen", handle: "noahchen", avatar: "https://i.pravatar.cc/80?img=3", bio: "Full-stack dev" },
  { name: "Emma Davis", handle: "emmad", avatar: "https://i.pravatar.cc/80?img=9", bio: "Photographer" },
  { name: "Liam Carter", handle: "liamcarter", avatar: "https://i.pravatar.cc/80?img=14", bio: "Startup founder" },
  { name: "Sophia Wu", handle: "sophiawu", avatar: "https://i.pravatar.cc/80?img=23", bio: "UX researcher" },
  { name: "Ethan Brooks", handle: "ethanb", avatar: "https://i.pravatar.cc/80?img=30", bio: "Music producer" },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SocialLayout>
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        <h1 className="font-heading text-2xl font-bold">Explore</h1>

        {/* Search */}
        <div className="relative">
          <label htmlFor="explore-search" className="sr-only">Search Pulse</label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <input
            id="explore-search"
            type="search"
            placeholder="Search Pulse..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
          />
        </div>

        {/* Trending tags */}
        <section aria-labelledby="trending-heading">
          <h2 id="trending-heading" className="font-heading font-bold text-base mb-3">Trending Topics</h2>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag) => (
              <button key={tag} className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Suggested users */}
        <section aria-labelledby="suggested-heading">
          <h2 id="suggested-heading" className="font-heading font-bold text-base mb-3">Suggested for You</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {suggestedUsers.map((u) => (
              <article key={u.handle} className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center" aria-label={`Suggested user ${u.name}`}>
                <img src={u.avatar} alt={`${u.name}'s avatar`} className="h-14 w-14 rounded-full object-cover mb-2" />
                <p className="font-semibold text-sm truncate w-full">{u.name}</p>
                <p className="text-xs text-muted-foreground mb-2">@{u.handle}</p>
                <p className="text-xs text-muted-foreground mb-3">{u.bio}</p>
                <button className="text-xs font-semibold px-4 py-1.5 rounded-full pulse-gradient text-primary-foreground hover:opacity-90 transition-opacity">
                  Follow
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Popular posts */}
        <section aria-labelledby="popular-heading">
          <h2 id="popular-heading" className="font-heading font-bold text-base mb-3">Popular Posts</h2>
          <div className="space-y-4" role="feed" aria-label="Popular posts">
            {mockPosts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </SocialLayout>
  );
}
