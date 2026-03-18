import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/data/courses";

const levelColors: Record<string, string> = {
  Beginner: "bg-success/10 text-success border-success/20",
  Intermediate: "bg-info/10 text-info border-info/20",
  Advanced: "bg-accent/20 text-accent-foreground border-accent/30",
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:shadow-elevated focus-visible:outline-2 focus-visible:outline-primary"
      aria-label={`${course.title} by ${course.instructor}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.thumbnail}
          alt={`Thumbnail for ${course.title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {course.isFree && (
          <span className="absolute left-3 top-3 rounded-full bg-success px-3 py-1 text-xs font-semibold text-success-foreground">
            Free
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={levelColors[course.level]}>
            {course.level}
          </Badge>
          <span className="text-xs text-muted-foreground">{course.duration}</span>
        </div>

        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
          {course.title}
        </h3>

        <p className="text-xs text-muted-foreground">{course.instructor}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-1" aria-label={`Rating: ${course.rating} out of 5 stars`}>
            <Star className="h-3.5 w-3.5 fill-star text-star" aria-hidden="true" />
            <span className="text-xs font-medium">{course.rating}</span>
            <span className="text-xs text-muted-foreground">({course.reviewCount.toLocaleString()})</span>
          </div>
          <span className="text-sm font-bold text-foreground">
            {course.isFree ? "Free" : `$${course.price}`}
          </span>
        </div>
      </div>
    </Link>
  );
}
