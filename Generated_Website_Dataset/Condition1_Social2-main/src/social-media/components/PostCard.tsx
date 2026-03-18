import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

interface PostCardProps {
  avatar: string;
  name: string;
  handle: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares?: number;
}

export function PostCard({
  avatar,
  name,
  handle,
  time,
  content,
  image,
  likes,
  comments,
  shares = 0,
}: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  return (
    <article className="pulse-card p-4 sm:p-5" aria-label={`Post by ${name}`}>
      <div className="flex gap-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full shrink-0 flex items-center justify-center font-heading font-bold text-sm text-primary-foreground pulse-gradient"
          aria-hidden="true"
        >
          {avatar}
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-foreground">{name}</span>
            <span className="text-sm text-muted-foreground">{handle}</span>
            <span className="text-muted-foreground" aria-hidden="true">·</span>
            <time className="text-sm text-muted-foreground">{time}</time>
          </div>

          {/* Content */}
          <p className="mt-2 text-sm text-foreground leading-relaxed">{content}</p>

          {/* Image */}
          {image && (
            <div className="mt-3 rounded-xl overflow-hidden border border-border">
              <img
                src={image}
                alt={`Image shared by ${name}`}
                className="w-full h-48 sm:h-64 object-cover"
                loading="lazy"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-1 mt-3 -ml-2" role="group" aria-label="Post actions">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                liked
                  ? "text-accent"
                  : "text-muted-foreground hover:text-accent hover:bg-accent/10"
              }`}
              aria-label={liked ? "Unlike" : "Like"}
              aria-pressed={liked}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} aria-hidden="true" />
              <span>{likeCount}</span>
            </button>

            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={`${comments} comments`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>{comments}</span>
            </button>

            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-pulse-success hover:bg-pulse-success/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label="Share"
            >
              <Share2 className="h-4 w-4" aria-hidden="true" />
              {shares > 0 && <span>{shares}</span>}
            </button>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`ml-auto flex items-center px-3 py-1.5 rounded-lg text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                bookmarked
                  ? "text-pulse-warning"
                  : "text-muted-foreground hover:text-pulse-warning hover:bg-pulse-warning/10"
              }`}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
              aria-pressed={bookmarked}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
