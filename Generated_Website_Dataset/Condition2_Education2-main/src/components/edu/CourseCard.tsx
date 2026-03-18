import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
import { StarRating } from "./StarRating";

export interface CourseData {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  rating: number;
  ratingCount: number;
  enrolled: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number | "Free";
  category: string;
}

export function CourseCard({ course }: { course: CourseData }) {
  const levelClass =
    course.level === "Beginner"
      ? "badge-beginner"
      : course.level === "Intermediate"
      ? "badge-intermediate"
      : "badge-advanced";

  return (
    <article className="card-course flex flex-col">
      <Link
        to={`/courses/${course.id}`}
        aria-label={`${course.title} by ${course.instructor}, ${course.level}, ${course.rating} stars, ${typeof course.price === "number" ? `$${course.price}` : "Free"}`}
        className="block"
      >
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img
            src={course.thumbnail}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className={`absolute top-3 left-3 ${levelClass}`}>{course.level}</span>
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/courses/${course.id}`} className="font-display font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 mb-1">
          {course.title}
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
        <StarRating rating={course.rating} count={course.ratingCount} />
        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            {course.enrolled.toLocaleString()}
          </span>
        </div>
        <div className="mt-auto pt-3 border-t border-border mt-3">
          <span className="font-display font-bold text-lg text-foreground">
            {typeof course.price === "number" ? `$${course.price}` : "Free"}
          </span>
        </div>
      </div>
    </article>
  );
}
