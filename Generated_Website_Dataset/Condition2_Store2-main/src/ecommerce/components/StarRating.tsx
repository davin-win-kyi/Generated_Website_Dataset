import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}

export default function StarRating({ rating, reviewCount, size = "sm" }: StarRatingProps) {
  const iconSize = size === "sm" ? 14 : 18;
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars${reviewCount ? `, ${reviewCount.toLocaleString()} reviews` : ""}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={iconSize}
          aria-hidden="true"
          className={
            i < fullStars
              ? "fill-nova-star text-nova-star"
              : i === fullStars && hasHalf
              ? "fill-nova-star/50 text-nova-star"
              : "text-muted-foreground/30"
          }
        />
      ))}
      {reviewCount !== undefined && (
        <span className="ml-1 text-xs text-muted-foreground">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
