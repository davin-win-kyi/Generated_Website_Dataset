import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  count?: number;
}

export function StarRating({ rating, count }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars${count ? `, ${count.toLocaleString()} ratings` : ""}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= Math.round(rating) ? "fill-secondary text-secondary" : "fill-muted text-muted"}`}
          aria-hidden="true"
        />
      ))}
      <span className="text-sm font-medium text-foreground ml-0.5">{rating}</span>
      {count && <span className="text-sm text-muted-foreground">({count.toLocaleString()})</span>}
    </div>
  );
}
