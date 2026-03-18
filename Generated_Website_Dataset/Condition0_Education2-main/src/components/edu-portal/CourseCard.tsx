import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
import StarRating from "./StarRating";

export interface CourseData {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  enrolled: number;
  price: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  image: string;
}

export default function CourseCard({ course }: { course: CourseData }) {
  const levelClass =
    course.level === "Beginner"
      ? "badge-beginner"
      : course.level === "Intermediate"
      ? "badge-intermediate"
      : "badge-advanced";

  return (
    <Link
      to="/course/python-data-science"
      className="group block rounded-xl border border-border bg-card overflow-hidden card-hover shadow-card"
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className={levelClass}>{course.level}</span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-xs">{course.duration}</span>
          </div>
        </div>
        <h3 className="font-display font-semibold text-sm leading-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-muted-foreground">{course.instructor}</p>
        <StarRating rating={course.rating} count={course.reviewCount} />
        <div className="flex items-center justify-between pt-1">
          <span className="font-display font-bold text-foreground">{course.price}</span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            <span className="text-xs">{course.enrolled.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
