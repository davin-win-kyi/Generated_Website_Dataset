import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviews?: number;
  size?: "sm" | "md";
}

const StarRating = ({ rating, reviews, size = "sm" }: StarRatingProps) => {
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars${reviews ? `, ${reviews.toLocaleString()} reviews` : ""}`}>
      <div className="flex" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={`${starSize} ${s <= Math.floor(rating) ? "fill-star text-star" : s - 0.5 <= rating ? "fill-star/50 text-star" : "fill-muted text-muted"}`}
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className={`${textSize} text-muted-foreground ml-1`}>
          ({reviews.toLocaleString()})
        </span>
      )}
    </div>
  );
};

export default StarRating;
