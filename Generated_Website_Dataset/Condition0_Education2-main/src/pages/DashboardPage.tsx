import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Flame, Trophy, ArrowRight, BookOpen } from "lucide-react";
import Layout from "@/components/edu-portal/Layout";
import CourseCard from "@/components/edu-portal/CourseCard";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";

const enrolledCourses = [
  { title: "Python for Data Science", progress: 68, lastLesson: "Lists & Dictionaries", instructor: "Dr. Sarah Chen" },
  { title: "UX Design Fundamentals", progress: 32, lastLesson: "User Research Methods", instructor: "Marcus Rivera" },
  { title: "Digital Marketing Strategy", progress: 15, lastLesson: "SEO Basics", instructor: "Alex Thompson" },
];

const achievements = [
  { emoji: "🔥", label: "7-Day Streak" },
  { emoji: "🎯", label: "First Course" },
  { emoji: "📚", label: "10 Lessons" },
  { emoji: "⭐", label: "Top Learner" },
];

const streakDays = ["M", "T", "W", "T", "F", "S", "S"];
const streakActive = [true, true, true, true, true, true, false];

export default function DashboardPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Welcome back, Jordan 👋
          </h1>
          <p className="text-muted-foreground mt-1">Keep up the momentum — you're doing great!</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Learning */}
            <div>
              <h2 className="text-lg font-display font-bold text-foreground mb-4">Continue Learning</h2>
              <div className="space-y-3">
                {enrolledCourses.map((c) => (
                  <div
                    key={c.title}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card card-hover"
                  >
                    <div className="relative h-14 w-14 shrink-0">
                      <svg className="h-14 w-14 -rotate-90" viewBox="0 0 56 56">
                        <circle cx="28" cy="28" r="24" fill="none" stroke="hsl(var(--muted))" strokeWidth="4" />
                        <circle
                          cx="28"
                          cy="28"
                          r="24"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="4"
                          strokeDasharray={`${(c.progress / 100) * 150.8} 150.8`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
                        {c.progress}%
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-sm text-foreground truncate">{c.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.instructor}</p>
                      <p className="text-xs text-muted-foreground">Last: {c.lastLesson}</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/study">
                        <Play className="h-3.5 w-3.5 mr-1" /> Resume
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-display font-bold text-foreground">Recommended for You</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/courses">View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {courses.slice(2, 4).map((c) => (
                  <CourseCard key={c.id} course={c} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning streak */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Flame className="h-5 w-5 text-accent" />
                <h3 className="font-display font-semibold text-foreground">Learning Streak</h3>
              </div>
              <div className="flex justify-between">
                {streakDays.map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold ${
                        streakActive[i]
                          ? "hero-gradient text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {day}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3">
                <span className="font-bold text-accent">6 days</span> — one more to go! 🔥
              </p>
            </div>

            {/* Achievements */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-5 w-5 text-accent" />
                <h3 className="font-display font-semibold text-foreground">Achievements</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((a) => (
                  <div key={a.label} className="flex flex-col items-center p-3 rounded-lg bg-muted/50 text-center">
                    <span className="text-2xl mb-1">{a.emoji}</span>
                    <span className="text-xs font-medium text-foreground">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <h3 className="font-display font-semibold text-foreground mb-3">Your Stats</h3>
              <div className="space-y-3">
                {[
                  { label: "Courses enrolled", value: "3" },
                  { label: "Lessons completed", value: "28" },
                  { label: "Hours learned", value: "14.5" },
                  { label: "Certificates", value: "1" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{s.label}</span>
                    <span className="font-semibold text-foreground">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
