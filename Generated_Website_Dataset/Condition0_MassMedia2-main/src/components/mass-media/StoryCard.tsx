import { Link } from "react-router-dom";

interface StoryCardProps {
  image: string;
  category: string;
  headline: string;
  summary?: string;
  author: string;
  time: string;
  href?: string;
  size?: "large" | "medium" | "small";
}

const StoryCard = ({
  image,
  category,
  headline,
  summary,
  author,
  time,
  href = "/mass-media/article",
  size = "medium",
}: StoryCardProps) => {
  if (size === "large") {
    return (
      <Link to={href} className="group block">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={headline}
            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-meridian-ink/90 via-meridian-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-widest text-meridian-accent mb-3">
              {category}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-primary-foreground mb-3 group-hover:text-meridian-accent transition-colors">
              {headline}
            </h2>
            {summary && (
              <p className="font-sans text-base text-primary-foreground/70 max-w-2xl mb-4 hidden md:block">
                {summary}
              </p>
            )}
            <div className="font-sans text-xs text-primary-foreground/50 uppercase tracking-wider">
              {author} · {time}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (size === "small") {
    return (
      <Link to={href} className="group flex gap-4 py-4 border-b border-meridian-rule last:border-0">
        <img src={image} alt={headline} className="w-24 h-20 object-cover shrink-0" />
        <div className="flex-1 min-w-0">
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-meridian-accent">
            {category}
          </span>
          <h4 className="font-serif text-sm font-bold leading-snug mt-0.5 group-hover:text-meridian-accent transition-colors line-clamp-2">
            {headline}
          </h4>
          <div className="font-sans text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
            {time}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={href} className="group block">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={headline}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-meridian-accent">
          {category}
        </span>
        <h3 className="font-serif text-lg font-bold leading-snug mt-1 group-hover:text-meridian-accent transition-colors">
          {headline}
        </h3>
        {summary && (
          <p className="font-sans text-sm text-muted-foreground mt-2 line-clamp-2">{summary}</p>
        )}
        <div className="font-sans text-[10px] text-muted-foreground uppercase tracking-wider mt-2">
          {author} · {time}
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
