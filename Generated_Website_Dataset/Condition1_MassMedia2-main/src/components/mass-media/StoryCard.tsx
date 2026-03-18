import { Link } from "react-router-dom";

interface StoryCardProps {
  image: string;
  imageAlt: string;
  category: string;
  headline: string;
  byline: string;
  timestamp: string;
  summary?: string;
  href?: string;
  variant?: "default" | "compact" | "hero";
}

const StoryCard = ({
  image,
  imageAlt,
  category,
  headline,
  byline,
  timestamp,
  summary,
  href = "/article",
  variant = "default",
}: StoryCardProps) => {
  if (variant === "hero") {
    return (
      <article className="group">
        <Link to={href} className="block">
          <div className="relative overflow-hidden aspect-[16/9] mb-4">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="editorial-rule-crimson pt-3">
            <span className="text-overline uppercase text-primary font-sans">{category}</span>
            <h2 className="text-headline md:text-display font-serif mt-2 mb-3 group-hover:text-primary transition-colors">
              {headline}
            </h2>
            {summary && (
              <p className="text-base text-muted-foreground font-sans mb-3 max-w-2xl">{summary}</p>
            )}
            <div className="flex items-center gap-2 text-caption text-muted-foreground font-sans">
              <span>{byline}</span>
              <span aria-hidden="true">·</span>
              <time>{timestamp}</time>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group flex gap-4">
        <Link to={href} className="flex-shrink-0 w-20 h-20 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <Link to={href}>
            <h3 className="text-sm font-serif font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
              {headline}
            </h3>
            <div className="flex items-center gap-2 text-caption text-muted-foreground font-sans mt-1">
              <time>{timestamp}</time>
            </div>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group">
      <Link to={href} className="block">
        <div className="overflow-hidden aspect-[3/2] mb-3">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="editorial-rule pt-2">
          <span className="text-overline uppercase text-primary font-sans">{category}</span>
          <h3 className="text-lg font-serif font-bold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {headline}
          </h3>
          {summary && (
            <p className="text-sm text-muted-foreground font-sans line-clamp-2 mb-2">{summary}</p>
          )}
          <div className="flex items-center gap-2 text-caption text-muted-foreground font-sans">
            <span>{byline}</span>
            <span aria-hidden="true">·</span>
            <time>{timestamp}</time>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default StoryCard;
