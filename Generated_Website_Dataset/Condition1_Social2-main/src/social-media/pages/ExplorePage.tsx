import { useState } from "react";
import { Search, TrendingUp } from "lucide-react";
import { PostCard } from "../components/PostCard";

const trendingTags = [
  "#ClimateWeek", "#TechLayoffs", "#WorldCup2026", "#AISummer",
  "#SpaceX", "#OpenSource", "#DigitalArt", "#Startups",
];

const suggestedUsers = [
  { name: "Aria Kim", handle: "@ariakim", initial: "A", bio: "UX Designer · San Francisco" },
  { name: "Marcus Webb", handle: "@marcuswebb", initial: "M", bio: "Photographer · NYC" },
  { name: "Priya Nair", handle: "@priyanair", initial: "P", bio: "Data Scientist · London" },
  { name: "Carlos Ruiz", handle: "@carlosruiz", initial: "C", bio: "Indie Game Dev · Madrid" },
  { name: "Elena Volkov", handle: "@elenavolkov", initial: "E", bio: "Climate Researcher · Berlin" },
  { name: "Taj Williams", handle: "@tajwilliams", initial: "T", bio: "Music Producer · LA" },
];

const explorePosts = [
  {
    avatar: "A",
    name: "Aria Kim",
    handle: "@ariakim",
    time: "30m",
    content: "New design system just dropped. 200+ components, fully accessible, and open source. This one's for the community 💜",
    likes: 4521,
    comments: 234,
    shares: 891,
  },
  {
    avatar: "M",
    name: "Marcus Webb",
    handle: "@marcuswebb",
    time: "1h",
    content: "Caught this at sunset in Brooklyn. No filter needed when the sky does all the work.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
    likes: 8923,
    comments: 412,
    shares: 1567,
  },
  {
    avatar: "P",
    name: "Priya Nair",
    handle: "@priyanair",
    time: "2h",
    content: "Thread: I analyzed 10M data points on global temperature anomalies. Here's what I found — and why it matters for #ClimateWeek.",
    likes: 12045,
    comments: 891,
    shares: 3456,
  },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-4 sm:px-6 py-4">
        <h1 className="font-heading text-xl font-bold text-foreground mb-3">Explore</h1>
        <div className="relative">
          <label htmlFor="explore-search" className="sr-only">Search Pulse</label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <input
            id="explore-search"
            type="search"
            placeholder="Search Pulse"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground border-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          />
        </div>
      </header>

      <div className="px-4 sm:px-6 py-4 space-y-6">
        {/* Trending tags */}
        <section aria-labelledby="trending-heading">
          <h2 id="trending-heading" className="font-heading font-semibold text-foreground flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-primary" aria-hidden="true" />
            Trending now
          </h2>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Trending hashtags">
            {trendingTags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                role="listitem"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Suggested users */}
        <section aria-labelledby="suggested-heading">
          <h2 id="suggested-heading" className="font-heading font-semibold text-foreground mb-3">Suggested for you</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {suggestedUsers.map((user) => (
              <div key={user.handle} className="pulse-card p-4 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full pulse-gradient flex items-center justify-center text-primary-foreground font-heading font-bold text-lg mb-2">
                  {user.initial}
                </div>
                <p className="text-sm font-semibold text-foreground truncate w-full">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate w-full">{user.handle}</p>
                <p className="text-xs text-muted-foreground mt-1 truncate w-full">{user.bio}</p>
                <button className="mt-3 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Popular posts */}
        <section aria-labelledby="popular-heading">
          <h2 id="popular-heading" className="font-heading font-semibold text-foreground mb-3">Popular posts</h2>
          <div className="space-y-3" role="feed" aria-label="Popular posts">
            {explorePosts.map((post, i) => (
              <PostCard key={i} {...post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
