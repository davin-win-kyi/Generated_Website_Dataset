import { Flame, TrendingUp } from "lucide-react";

const trends = [
  { tag: "#ClimateWeek", posts: "84K posts", hot: true },
  { tag: "#TechLayoffs", posts: "52K posts", hot: false },
  { tag: "#WorldCup2026", posts: "128K posts", hot: true },
  { tag: "#AISummer", posts: "36K posts", hot: false },
  { tag: "#SpaceX", posts: "22K posts", hot: false },
];

export function TrendingSidebar() {
  return (
    <aside
      className="hidden lg:block w-80 shrink-0 border-l border-border h-screen sticky top-0 overflow-y-auto"
      aria-label="Trending topics"
    >
      <div className="p-5">
        <h2 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
          Trending
        </h2>

        <div className="mt-4 space-y-1">
          {trends.map((trend) => (
            <button
              key={trend.tag}
              className="w-full text-left px-3 py-3 rounded-lg hover:bg-pulse-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <div className="flex items-center gap-2">
                {trend.hot && (
                  <Flame className="h-4 w-4 text-accent shrink-0" aria-label="Hot topic" />
                )}
                <span className="font-semibold text-sm text-foreground">{trend.tag}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 pl-6">{trend.posts}</p>
            </button>
          ))}
        </div>

        {/* Suggested users */}
        <div className="mt-8">
          <h3 className="font-heading font-semibold text-sm text-foreground mb-3">Who to follow</h3>
          <div className="space-y-3">
            {[
              { name: "Maya Chen", handle: "@mayachen", initial: "M" },
              { name: "Jordan Lee", handle: "@jordanlee", initial: "J" },
              { name: "Sam Patel", handle: "@sampatel", initial: "S" },
            ].map((user) => (
              <div key={user.handle} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full pulse-gradient flex items-center justify-center text-primary-foreground font-heading font-bold text-xs shrink-0">
                  {user.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.handle}</p>
                </div>
                <button className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
