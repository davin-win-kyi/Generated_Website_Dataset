import { Link } from "react-router-dom";
import { articles, mostRead } from "@/mass-media/data/articles";
import { StoryCard } from "@/mass-media/components/StoryCard";
import { useEffect } from "react";

const sectionCategories = ["World", "Politics", "Technology", "Culture"];

export default function MassMediaHome() {
  useEffect(() => {
    document.title = "The Meridian | Independent Digital News";
  }, []);

  const heroArticle = articles[0];
  const secondaryArticles = articles.slice(1, 4);
  const worldArticles = articles.filter((a) => a.category === "World").slice(0, 3);
  const techArticles = articles.filter((a) => a.category === "Technology").slice(0, 3);
  const politicsArticles = articles.filter((a) => a.category === "Politics").slice(0, 3);
  const cultureArticles = articles.filter((a) => a.category === "Culture").slice(0, 3);

  const sectionMap: Record<string, typeof articles> = {
    World: worldArticles,
    Politics: politicsArticles,
    Technology: techArticles,
    Culture: cultureArticles,
  };

  return (
    <div>
      {/* Hero */}
      <section aria-label="Top story">
        <div className="editorial-container py-6">
          <StoryCard article={heroArticle} variant="large" />
        </div>
      </section>

      {/* Secondary stories grid */}
      <section aria-label="Featured stories">
        <div className="editorial-container pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryArticles.map((article) => (
              <StoryCard key={article.id} article={article} variant="medium" />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Main content + Sidebar */}
      <div className="editorial-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section strips */}
          <div className="lg:col-span-2 space-y-10">
            {sectionCategories.map((cat) => {
              const catArticles = sectionMap[cat] || [];
              if (catArticles.length === 0) return null;
              return (
                <section key={cat} aria-labelledby={`section-${cat.toLowerCase()}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h2
                      id={`section-${cat.toLowerCase()}`}
                      className="text-xl font-serif font-bold border-b-2 border-accent pb-1 inline-block"
                    >
                      {cat}
                    </h2>
                    <Link
                      to="/mass-media/world"
                      className="text-xs font-sans font-bold uppercase tracking-wider text-accent hover:underline"
                    >
                      See all →
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {catArticles.map((article) => (
                      <StoryCard key={article.id} article={article} variant="small" />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Sidebar - Most Read */}
          <aside aria-label="Most read articles" className="lg:col-span-1">
            <div className="sticky top-32">
              <h2 className="text-xl font-serif font-bold border-b-2 border-accent pb-1 mb-4">
                Most Read
              </h2>
              <ol className="space-y-4">
                {mostRead.map((item) => (
                  <li key={item.id} className="flex gap-3 group">
                    <span className="text-3xl font-serif font-black text-accent/30 leading-none">
                      {item.rank}
                    </span>
                    <Link
                      to={`/mass-media/article/${item.id}`}
                      className="text-sm font-serif font-semibold leading-snug hover:text-accent transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ol>

              {/* Newsletter signup in sidebar */}
              <div className="mt-8 p-5 bg-secondary rounded-sm">
                <h3 className="font-serif font-bold text-lg">The Daily Brief</h3>
                <p className="text-sm font-sans text-muted-foreground mt-2">
                  Start your morning with the stories that matter. Delivered free, every weekday.
                </p>
                <form className="mt-3" onSubmit={(e) => e.preventDefault()} noValidate>
                  <label htmlFor="sidebar-newsletter" className="sr-only">Email address</label>
                  <input
                    id="sidebar-newsletter"
                    type="email"
                    placeholder="your@email.com"
                    aria-required="true"
                    className="w-full px-3 py-2 text-sm font-sans bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full px-4 py-2 text-sm font-sans font-bold uppercase tracking-wider bg-accent text-accent-foreground rounded-sm hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
