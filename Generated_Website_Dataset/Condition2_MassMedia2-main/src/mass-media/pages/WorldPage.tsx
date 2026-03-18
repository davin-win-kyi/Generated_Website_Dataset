import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { articles } from "@/mass-media/data/articles";
import { StoryCard } from "@/mass-media/components/StoryCard";

const regions = ["All", "Asia", "Europe", "Americas", "Middle East", "Africa"];

export default function WorldPage() {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [activeRegion, setActiveRegion] = useState("All");

  useEffect(() => {
    document.title = "World News | The Meridian";
  }, []);

  // Filter articles: if filter=technology etc., show that category, otherwise show World
  let filteredArticles = articles;
  if (filterParam) {
    filteredArticles = articles.filter(
      (a) => a.category.toLowerCase() === filterParam.toLowerCase()
    );
  } else {
    filteredArticles = articles.filter((a) => a.category === "World");
  }

  if (activeRegion !== "All") {
    filteredArticles = filteredArticles.filter((a) => a.region === activeRegion);
  }

  const pageTitle = filterParam
    ? filterParam.charAt(0).toUpperCase() + filterParam.slice(1)
    : "World";

  const leadArticle = filteredArticles[0];
  const gridArticles = filteredArticles.slice(1);

  return (
    <div>
      <div className="editorial-container py-8">
        {/* Section header */}
        <header className="mb-6">
          <h1 className="text-4xl font-serif font-black">{pageTitle}</h1>
          <p className="text-base font-sans text-muted-foreground mt-2">
            Comprehensive coverage of {pageTitle.toLowerCase()} news, analysis, and in-depth reporting from The Meridian's global correspondents.
          </p>
        </header>

        {/* Topic filter bar */}
        {!filterParam && (
          <div role="group" aria-label="Filter by region" className="flex flex-wrap gap-2 mb-8">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                aria-pressed={activeRegion === region}
                className={`px-4 py-1.5 text-sm font-sans font-semibold rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
                  activeRegion === region
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        )}

        {filteredArticles.length === 0 ? (
          <p className="text-center text-muted-foreground font-sans py-12">
            No articles found for this selection.
          </p>
        ) : (
          <>
            {/* Lead story */}
            {leadArticle && (
              <section aria-label="Lead story" className="mb-8">
                <StoryCard article={leadArticle} variant="large" />
              </section>
            )}

            {/* Story grid */}
            <section aria-label={`${pageTitle} stories`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridArticles.map((article) => (
                  <StoryCard key={article.id} article={article} variant="medium" />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
