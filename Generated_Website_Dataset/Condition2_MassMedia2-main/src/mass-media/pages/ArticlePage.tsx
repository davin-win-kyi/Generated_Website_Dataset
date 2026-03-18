import { useParams, Link } from "react-router-dom";
import { articles } from "@/mass-media/data/articles";
import { StoryCard } from "@/mass-media/components/StoryCard";
import { useEffect } from "react";
import { Facebook, Twitter, Mail, Link2 } from "lucide-react";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | The Meridian`;
    } else {
      document.title = "Article Not Found | The Meridian";
    }
  }, [article]);

  if (!article) {
    return (
      <div className="editorial-container py-20 text-center">
        <h1 className="text-3xl font-serif font-bold">Article Not Found</h1>
        <p className="mt-4 font-sans text-muted-foreground">
          The article you're looking for doesn't exist.
        </p>
        <Link to="/mass-media" className="mt-6 inline-block text-accent font-sans font-bold hover:underline">
          ← Back to homepage
        </Link>
      </div>
    );
  }

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const shareButtons = [
    { icon: Facebook, label: `Share "${article.title}" on Facebook`, platform: "Facebook" },
    { icon: Twitter, label: `Share "${article.title}" on Twitter`, platform: "Twitter" },
    { icon: Mail, label: `Share "${article.title}" via email`, platform: "Email" },
    { icon: Link2, label: `Copy link to "${article.title}"`, platform: "Link" },
  ];

  return (
    <div>
      <div className="editorial-container py-8">
        <div className="max-w-3xl mx-auto">
          {/* Category & breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
              <li><Link to="/mass-media" className="hover:text-accent">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link to="/mass-media/world" className="hover:text-accent">{article.category}</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-foreground truncate max-w-xs">{article.title}</li>
            </ol>
          </nav>

          {/* Headline */}
          <header>
            <span className="category-label">{article.category}</span>
            <h1 className="mt-2 text-3xl md:text-5xl font-serif font-black leading-tight">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="mt-3 text-lg md:text-xl font-sans text-muted-foreground leading-relaxed">
                {article.subtitle}
              </p>
            )}

            {/* Byline */}
            <div className="mt-6 flex items-center gap-4 pb-6 border-b border-border">
              {article.authorAvatar && (
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-sans font-semibold text-sm">{article.author}</p>
                <p className="text-sm font-sans text-muted-foreground">
                  {article.date} · {article.readTime}
                </p>
              </div>
            </div>
          </header>

          {/* Share buttons */}
          <div className="flex items-center gap-3 py-4 border-b border-border" role="group" aria-label="Share this article">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-muted-foreground">Share</span>
            {shareButtons.map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="p-2 rounded-sm hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
              </button>
            ))}
          </div>

          {/* Hero image */}
          <figure className="mt-6">
            <img
              src={article.image}
              alt={article.imageCaption || article.title}
              className="w-full rounded-sm"
            />
            {article.imageCaption && (
              <figcaption className="mt-2 text-xs font-sans text-muted-foreground italic">
                {article.imageCaption}
              </figcaption>
            )}
          </figure>

          {/* Article body */}
          <div className="article-body mt-8">
            {article.body ? (
              article.body.map((paragraph, i) => {
                // Insert pull quote after paragraph 2
                if (i === 2 && article.pullQuote) {
                  return (
                    <div key={i}>
                      <p>{paragraph}</p>
                      <blockquote className="pull-quote" aria-label="Pull quote">
                        "{article.pullQuote}"
                      </blockquote>
                    </div>
                  );
                }
                return <p key={i}>{paragraph}</p>;
              })
            ) : (
              <>
                <p>{article.summary}</p>
                <p>
                  This is a preview of the full article. In a complete implementation, the full article text would appear here with multiple paragraphs of in-depth reporting and analysis.
                </p>
              </>
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border">
              <h2 className="text-sm font-sans font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Topics
              </h2>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Article topics">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    role="listitem"
                    className="px-3 py-1 text-xs font-sans font-semibold bg-secondary text-secondary-foreground rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Comments section */}
          <section aria-labelledby="comments-heading" className="mt-10 pt-6 border-t border-border">
            <h2 id="comments-heading" className="text-2xl font-serif font-bold mb-4">
              Comments
            </h2>
            <div className="bg-secondary rounded-sm p-6">
              <p className="font-sans text-sm text-muted-foreground mb-4">
                Join the conversation. Please keep comments respectful and on-topic.
              </p>
              <form onSubmit={(e) => e.preventDefault()} noValidate>
                <label htmlFor="comment-input" className="sr-only">Write a comment</label>
                <textarea
                  id="comment-input"
                  rows={4}
                  placeholder="Share your thoughts..."
                  aria-required="true"
                  className="w-full px-4 py-3 text-sm font-sans bg-background border border-border rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  type="submit"
                  className="mt-3 px-6 py-2 text-sm font-sans font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  Post Comment
                </button>
              </form>
              <div className="mt-6 space-y-4 text-sm font-sans text-muted-foreground">
                <p>No comments yet. Be the first to share your perspective.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* More from category */}
      {relatedArticles.length > 0 && (
        <section aria-labelledby="related-heading" className="bg-secondary/50 py-10 mt-10">
          <div className="editorial-container">
            <h2 id="related-heading" className="text-2xl font-serif font-bold mb-6">
              More from {article.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <StoryCard key={a.id} article={a} variant="medium" />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
