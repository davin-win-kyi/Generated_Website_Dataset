import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react";

export interface PostData {
  id: string;
  author: { name: string; handle: string; avatar: string };
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  liked?: boolean;
  bookmarked?: boolean;
}

export function PostCard({ post }: { post: PostData }) {
  const [liked, setLiked] = useState(post.liked ?? false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [bookmarked, setBookmarked] = useState(post.bookmarked ?? false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  return (
    <article className="bg-card border border-border rounded-xl p-4 transition-colors hover:border-primary/20" aria-label={`Post by ${post.author.name}`}>
      <div className="flex gap-3">
        <img
          src={post.author.avatar}
          alt={`${post.author.name}'s avatar`}
          className="h-10 w-10 rounded-full object-cover shrink-0"
        />
        <div className="min-w-0 flex-1">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <h3 className="font-heading font-semibold text-sm truncate">{post.author.name}</h3>
              <span className="text-xs text-muted-foreground truncate">@{post.author.handle}</span>
              <span className="text-xs text-muted-foreground" aria-hidden="true">·</span>
              <time className="text-xs text-muted-foreground shrink-0">{post.timestamp}</time>
            </div>
            <button aria-label={`More options for post by ${post.author.name}`} className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-secondary transition-colors">
              <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Content */}
          <p className="mt-2 text-sm leading-relaxed">{post.content}</p>

          {/* Image */}
          {post.image && (
            <div className="mt-3 rounded-lg overflow-hidden border border-border">
              <img src={post.image} alt={`Image shared by ${post.author.name}`} className="w-full h-48 object-cover" />
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between mt-3 -ml-2">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs transition-colors ${
                liked ? "text-accent" : "text-muted-foreground hover:text-accent"
              }`}
              aria-label={`Like post by @${post.author.handle} — currently ${likeCount} likes`}
              aria-pressed={liked}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} aria-hidden="true" />
              <span>{likeCount}</span>
            </button>

            <button
              className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Comment on post by @${post.author.handle} — ${post.comments} comments`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>{post.comments}</span>
            </button>

            <button
              className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs text-muted-foreground hover:text-pulse-success transition-colors"
              aria-label={`Share post by @${post.author.handle}`}
            >
              <Share2 className="h-4 w-4" aria-hidden="true" />
              <span>{post.shares}</span>
            </button>

            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs transition-colors ${
                bookmarked ? "text-pulse-warm" : "text-muted-foreground hover:text-pulse-warm"
              }`}
              aria-label={`Bookmark post by @${post.author.handle}`}
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
