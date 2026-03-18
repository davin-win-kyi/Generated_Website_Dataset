import { Link } from "react-router-dom";
import { opinionArticles, columnists } from "@/mass-media/data/articles";
import { useEffect } from "react";

export default function OpinionPage() {
  useEffect(() => {
    document.title = "Opinion | The Meridian";
  }, []);

  const featuredOpinion = opinionArticles[0];
  const recentOpinions = opinionArticles.slice(1);

  return (
    <div>
      <div className="editorial-container py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-serif font-black">Opinion</h1>
          <p className="text-base font-sans text-muted-foreground mt-2">
            Commentary, analysis, and essays from The Meridian's columnists and guest contributors.
          </p>
        </header>

        {/* Featured opinion essay */}
        <section aria-label="Featured opinion essay" className="mb-10">
          <article className="bg-secondary rounded-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={featuredOpinion.image}
                  alt={featuredOpinion.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="category-label">Featured Essay</span>
                <h2 className="mt-3 text-2xl md:text-3xl font-serif font-bold leading-tight">
                  <Link
                    to={`/mass-media/article/${featuredOpinion.id}`}
                    className="hover:text-accent transition-colors"
                  >
                    {featuredOpinion.title}
                  </Link>
                </h2>
                <p className="mt-3 font-sans text-muted-foreground leading-relaxed">
                  {featuredOpinion.summary}
                </p>
                {/* Large byline treatment */}
                <div className="mt-6 flex items-center gap-4">
                  {featuredOpinion.authorAvatar && (
                    <img
                      src={featuredOpinion.authorAvatar}
                      alt={featuredOpinion.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                    />
                  )}
                  <div>
                    <p className="font-serif font-bold text-lg">{featuredOpinion.author}</p>
                    <p className="text-sm font-sans text-muted-foreground">
                      {featuredOpinion.date} · {featuredOpinion.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Columnists */}
        <section aria-labelledby="columnists-heading" className="mb-10">
          <h2 id="columnists-heading" className="text-2xl font-serif font-bold border-b-2 border-accent pb-1 mb-6">
            Our Columnists
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {columnists.map((c) => (
              <li key={c.name} className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-sm">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-20 h-20 rounded-full object-cover mb-3"
                />
                <h3 className="font-serif font-bold text-lg">{c.name}</h3>
                <p className="text-xs font-sans font-semibold uppercase tracking-wider text-accent mt-1">
                  {c.title}
                </p>
                <p className="mt-3 text-sm font-sans text-muted-foreground leading-relaxed">
                  {c.bio}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent opinions grid by columnist */}
        <section aria-labelledby="recent-opinions-heading" className="mb-10">
          <h2 id="recent-opinions-heading" className="text-2xl font-serif font-bold border-b-2 border-accent pb-1 mb-6">
            Recent Opinions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {recentOpinions.map((op) => (
              <article key={op.id} role="listitem" className="flex gap-4 p-4 bg-card border border-border rounded-sm group">
                {op.authorAvatar && (
                  <img
                    src={op.authorAvatar}
                    alt={op.author}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                )}
                <div>
                  <span className="byline text-xs">{op.author} · {op.date}</span>
                  <h3 className="mt-1 font-serif font-bold leading-snug">
                    <Link
                      to={`/mass-media/article/${op.id}`}
                      className="hover:text-accent transition-colors"
                    >
                      {op.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm font-sans text-muted-foreground line-clamp-2">
                    {op.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Letters to the Editor */}
        <section aria-labelledby="letters-heading" className="mb-10">
          <h2 id="letters-heading" className="text-2xl font-serif font-bold border-b-2 border-accent pb-1 mb-6">
            Letters to the Editor
          </h2>
          <div className="space-y-6">
            {[
              {
                author: "Dr. Sarah Mitchell, Oxford",
                text: "Eleanor Vance's analysis of quiet diplomacy perfectly captures the tension between democratic accountability and effective statecraft. However, I would argue that the problem is not transparency itself, but the incentive structures of social media platforms that reward outrage over nuance.",
              },
              {
                author: "James Okafor, Lagos",
                text: "Marcus Chen's piece on AI regulation misses a crucial dimension: the vast majority of AI governance frameworks are designed by and for wealthy nations. Until the Global South has a meaningful seat at the regulatory table, these frameworks will perpetuate existing power asymmetries.",
              },
              {
                author: "Ana Rodriguez, Buenos Aires",
                text: "As someone who has covered Latin American elections for two decades, I found Robert Ashford's column on democratic resilience both timely and necessary. The focus on institutional strength rather than electoral outcomes is exactly the framework we need.",
              },
            ].map((letter) => (
              <article key={letter.author} className="p-5 bg-secondary rounded-sm">
                <blockquote className="text-sm font-sans italic leading-relaxed text-foreground/80">
                  "{letter.text}"
                </blockquote>
                <p className="mt-3 text-xs font-sans font-semibold text-muted-foreground">
                  — {letter.author}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
