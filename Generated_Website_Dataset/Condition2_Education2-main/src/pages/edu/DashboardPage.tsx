import { Link } from "react-router-dom";
import { EduLayout } from "@/components/edu/EduLayout";
import { courses } from "@/data/courses";
import { StarRating } from "@/components/edu/StarRating";
import { CourseCard } from "@/components/edu/CourseCard";
import { PlayCircle, Trophy, Flame, ArrowRight } from "lucide-react";

const enrolledCourses = [
  { ...courses[0], progress: 72 },
  { ...courses[1], progress: 35 },
  { ...courses[2], progress: 90 },
];

const achievements = [
  { title: "First Course Started", emoji: "🎯", earned: true },
  { title: "7-Day Streak", emoji: "🔥", earned: true },
  { title: "Quiz Master", emoji: "🧠", earned: true },
  { title: "Course Completed", emoji: "🎓", earned: false },
  { title: "Top Reviewer", emoji: "⭐", earned: false },
];

export default function DashboardPage() {
  const recommended = courses.slice(3, 7);

  return (
    <EduLayout title="Dashboard">
      <div className="container py-8 md:py-12">
        {/* Greeting */}
        <section aria-labelledby="greeting-heading" className="mb-10">
          <h1 id="greeting-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome back, <span className="text-secondary">Jordan</span>
          </h1>
          <p className="text-muted-foreground">Keep up the momentum! You've been learning for 12 days straight.</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-2">
            <Flame className="h-5 w-5" aria-hidden="true" />
            <span className="font-display font-bold text-sm" aria-label="12 day learning streak">12 Day Streak 🔥</span>
          </div>
        </section>

        {/* Continue Learning */}
        <section aria-labelledby="continue-heading" className="mb-12">
          <div className="flex items-end justify-between mb-6">
            <h2 id="continue-heading" className="font-display text-xl font-bold text-foreground">Continue Learning</h2>
            <Link to="/courses" className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <article key={course.id} className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="aspect-[2/1] bg-muted relative">
                  <img src={course.thumbnail} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground line-clamp-1 mb-1">{course.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{course.instructor}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden" role="progressbar" aria-valuenow={course.progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${course.progress}% complete`}>
                      <div className="h-full bg-success rounded-full transition-all" style={{ width: `${course.progress}%` }} />
                    </div>
                    <span className="text-xs font-medium text-foreground">{course.progress}%</span>
                  </div>
                  <Link
                    to="/study"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    aria-label={`Resume ${course.title}`}
                  >
                    <PlayCircle className="h-4 w-4" aria-hidden="true" />
                    Resume
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section aria-labelledby="achievements-heading" className="mb-12">
          <h2 id="achievements-heading" className="font-display text-xl font-bold text-foreground mb-6">Achievements</h2>
          <div className="flex flex-wrap gap-4">
            {achievements.map((badge) => (
              <div
                key={badge.title}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 w-28 text-center transition-all ${
                  badge.earned
                    ? "border-secondary/30 bg-secondary/5"
                    : "border-border bg-card opacity-50"
                }`}
                aria-label={`${badge.title}${badge.earned ? " — Earned" : " — Locked"}`}
              >
                <span className="text-2xl" aria-hidden="true">{badge.emoji}</span>
                <span className="text-xs font-medium text-foreground leading-tight">{badge.title}</span>
                {badge.earned && <Trophy className="h-3 w-3 text-secondary" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section aria-labelledby="recommended-heading">
          <div className="flex items-end justify-between mb-6">
            <h2 id="recommended-heading" className="font-display text-xl font-bold text-foreground">Recommended for You</h2>
            <Link to="/courses" className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
              Browse all <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommended.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </EduLayout>
  );
}
