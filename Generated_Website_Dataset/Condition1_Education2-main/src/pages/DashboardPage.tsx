import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Flame, Trophy, BookOpen, Play, Target } from "lucide-react";

const enrolledCourses = [
  { ...courses[1], progress: 42 },
  { ...courses[0], progress: 78 },
  { ...courses[2], progress: 15 },
];

const achievements = [
  { icon: "🎯", label: "First Course Started" },
  { icon: "📚", label: "5 Lessons Completed" },
  { icon: "🔥", label: "3-Day Streak" },
  { icon: "⭐", label: "First Review Written" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function DashboardPage() {
  const recommended = courses.slice(3, 6);

  return (
    <PageLayout>
      <section className="bg-background py-10" aria-labelledby="dashboard-heading">
        <div className="container">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 id="dashboard-heading" className="font-display text-3xl text-foreground md:text-4xl">
              Welcome back, Jordan
            </h1>
            <p className="mt-1 text-muted-foreground">Keep up the great work! Here's your learning overview.</p>
          </motion.div>

          {/* Stats strip */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BookOpen, label: "Courses Enrolled", value: "3", color: "text-secondary" },
              { icon: Play, label: "Lessons Completed", value: "18", color: "text-info" },
              { icon: Flame, label: "Day Streak", value: "5", color: "text-accent" },
              { icon: Target, label: "Avg. Score", value: "92%", color: "text-success" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-card"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-muted ${stat.color}`}>
                  <stat.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continue Learning */}
          <div className="mb-10">
            <h2 className="mb-5 font-display text-2xl text-foreground">Continue Learning</h2>
            <div className="space-y-4">
              {enrolledCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 shadow-card sm:flex-row sm:items-center"
                >
                  <img
                    src={course.thumbnail}
                    alt={`Thumbnail for ${course.title}`}
                    className="h-20 w-32 shrink-0 rounded-md object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground">{course.title}</h3>
                    <p className="text-xs text-muted-foreground">{course.instructor}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <Progress
                        value={course.progress}
                        className="h-2 flex-1"
                        aria-label={`${course.progress}% complete`}
                      />
                      <span className="text-xs font-medium text-muted-foreground">{course.progress}%</span>
                    </div>
                  </div>
                  <Button variant="cta" size="sm" asChild>
                    <Link to="/study">Resume</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-10">
            <h2 className="mb-5 font-display text-2xl text-foreground">Achievements</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {achievements.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-5 shadow-card"
                >
                  <span className="text-3xl" role="img" aria-label={badge.label}>{badge.icon}</span>
                  <span className="text-center text-xs font-medium text-muted-foreground">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Streak tracker */}
          <div className="mb-10">
            <h2 className="mb-5 font-display text-2xl text-foreground">Learning Streak</h2>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-5 shadow-card">
              <Flame className="h-8 w-8 text-accent" aria-hidden="true" />
              <div>
                <p className="text-lg font-bold text-foreground">5 Days</p>
                <p className="text-xs text-muted-foreground">Keep it up! You're on fire 🔥</p>
              </div>
              <div className="ml-auto flex gap-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div
                    key={`${day}-${i}`}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                      i < 5
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                    aria-label={`${day}: ${i < 5 ? "completed" : "not yet"}`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended */}
          <div>
            <h2 className="mb-5 font-display text-2xl text-foreground">Recommended for You</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommended.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
