import { Link } from "react-router-dom";
import type { Article } from "@/mass-media/data/articles";

interface StoryCardProps {
  article: Article;
  variant?: "large" | "medium" | "small";
}

export function StoryCard({ article, variant = "medium" }: StoryCardProps) {
  const articleUrl = `/mass-media/article/${article.id}`;

  if (variant === "large") {
    return (
      <article className="story-card group">
        <Link to={articleUrl} className="block">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={article.image}
              alt={article.imageCaption || article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="hero-overlay" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="category-label">{article.category}</span>
              <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary-foreground leading-tight">
                {article.title}
              </h2>
              {article.subtitle && (
                <p className="mt-2 text-sm md:text-base font-sans text-primary-foreground/80 max-w-2xl">
                  {article.subtitle}
                </p>
              )}
              <div className="mt-3 flex items-center gap-3">
                {article.authorAvatar && (
                  <img
                    src={article.authorAvatar}
                    alt={`${article.author}`}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <span className="text-sm font-sans text-primary-foreground/70">
                  {article.author} · {article.date} · {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "small") {
    return (
      <article className="group flex gap-4">
        <Link to={articleUrl} className="shrink-0 w-24 h-24 overflow-hidden rounded-sm">
          <img
            src={article.image}
            alt={article.imageCaption || article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <div className="flex flex-col justify-center min-w-0">
          <span className="category-label text-[10px]">{article.category}</span>
          <h3 className="mt-1 text-sm font-serif font-bold leading-snug">
            <Link to={articleUrl} className="hover:text-accent transition-colors">
              {article.title}
            </Link>
          </h3>
          <span className="byline mt-1 text-xs">{article.author} · {article.date}</span>
        </div>
      </article>
    );
  }

  return (
    <article className="story-card group">
      <Link to={articleUrl} className="block">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={article.image}
            alt={article.imageCaption || article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-4">
        <span className="category-label">{article.category}</span>
        <h3 className="mt-2 text-lg font-serif font-bold leading-snug">
          <Link to={articleUrl} className="hover:text-accent transition-colors">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm font-sans text-muted-foreground line-clamp-2">{article.summary}</p>
        <div className="mt-3 flex items-center gap-2">
          {article.authorAvatar && (
            <img
              src={article.authorAvatar}
              alt={`${article.author}`}
              className="w-6 h-6 rounded-full object-cover"
            />
          )}
          <span className="byline text-xs">{article.author} · {article.date}</span>
        </div>
      </div>
    </article>
  );
}
