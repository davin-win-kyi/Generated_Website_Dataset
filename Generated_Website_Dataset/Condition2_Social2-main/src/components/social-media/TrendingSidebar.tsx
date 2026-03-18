import { TrendingUp } from "lucide-react";

const trends = [
  { tag: "#ClimateWeek", posts: "84K posts", hot: true },
  { tag: "#TechLayoffs", posts: "52K posts", hot: false },
  { tag: "#WorldCup2026", posts: "128K posts", hot: true },
  { tag: "#AIArt", posts: "31K posts", hot: false },
  { tag: "#SpaceX", posts: "22K posts", hot: false },
];

const suggestedUsers = [
  { name: "Maya Rodriguez", handle: "mayarodz", avatar: "https://i.pravatar.cc/40?img=5" },
  { name: "Jordan Park", handle: "jordanp", avatar: "https://i.pravatar.cc/40?img=12" },
  { name: "Lena Kim", handle: "lenakim_", avatar: "https://i.pravatar.cc/40?img=20" },
];

export function TrendingSidebar() {
  return (
    <aside className="hidden xl:block w-80 shrink-0 p-4 space-y-6 sticky top-0 h-screen overflow-y-auto" aria-label="Trending topics and suggestions">
      {/* Trending */}
      <section className="bg-card border border-border rounded-xl p-4">
        <h2 className="font-heading font-bold text-base mb-3 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" aria-hidden="true" />
          Trending Now
        </h2>
        <ul className="space-y-3" role="list">
          {trends.map((t) => (
            <li key={t.tag}>
              <button className="w-full text-left hover:bg-secondary rounded-md p-2 -m-2 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{t.hot ? "🔥 " : ""}{t.tag}</span>
                </div>
                <span className="text-xs text-muted-foreground">{t.posts}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Suggestions */}
      <section className="bg-card border border-border rounded-xl p-4">
        <h2 className="font-heading font-bold text-base mb-3">Who to Follow</h2>
        <ul className="space-y-3" role="list">
          {suggestedUsers.map((u) => (
            <li key={u.handle} className="flex items-center gap-3">
              <img src={u.avatar} alt={`${u.name}'s avatar`} className="h-9 w-9 rounded-full object-cover" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold truncate">{u.name}</p>
                <p className="text-xs text-muted-foreground truncate">@{u.handle}</p>
              </div>
              <button className="text-xs font-semibold px-3 py-1 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
