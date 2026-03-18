import { ContentComposer } from "../components/ContentComposer";
import { PostCard } from "../components/PostCard";
import { TrendingSidebar } from "../components/TrendingSidebar";

const feedPosts = [
  {
    avatar: "M",
    name: "Maya Chen",
    handle: "@mayachen",
    time: "12m",
    content:
      "Just finished my keynote slides for #ClimateWeek. The data on ocean temperatures this year is staggering — we need to talk about this more.",
    likes: 234,
    comments: 42,
    shares: 18,
  },
  {
    avatar: "J",
    name: "Jordan Lee",
    handle: "@jordanlee",
    time: "45m",
    content:
      "Hot take: the best code is the code you don't write. Spent all morning deleting 2000 lines and the app runs 3x faster. #TechLayoffs got me thinking about efficiency.",
    likes: 891,
    comments: 156,
    shares: 73,
  },
  {
    avatar: "S",
    name: "Sam Patel",
    handle: "@sampatel",
    time: "1h",
    content:
      "Match day vibes! Who else is counting down to #WorldCup2026? The new stadium renders look absolutely incredible.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=400&fit=crop",
    likes: 1247,
    comments: 89,
    shares: 45,
  },
  {
    avatar: "L",
    name: "Luna Torres",
    handle: "@lunatorres",
    time: "2h",
    content:
      "Golden hour at the rooftop garden 🌿 Sometimes the best productivity hack is stepping away from the screen.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    likes: 567,
    comments: 34,
    shares: 12,
  },
  {
    avatar: "D",
    name: "Dev Sharma",
    handle: "@devsharma",
    time: "3h",
    content:
      "Unpopular opinion: meetings before 10am should be illegal. My brain doesn't compile before two cups of coffee.",
    likes: 2034,
    comments: 312,
    shares: 156,
  },
];

export default function FeedPage() {
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-4 sm:px-6 py-4">
          <h1 className="font-heading text-xl font-bold text-foreground">Home</h1>
        </header>

        <div className="px-4 sm:px-6 py-4 space-y-4">
          <ContentComposer />
          <div className="space-y-3" role="feed" aria-label="Post feed">
            {feedPosts.map((post, i) => (
              <PostCard key={i} {...post} />
            ))}
          </div>
        </div>
      </div>
      <TrendingSidebar />
    </div>
  );
}
