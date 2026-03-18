import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { PageLayout } from "@/components/layout/PageLayout";
import { courses, categories } from "@/data/courses";
import heroImg from "@/assets/hero-learning.jpg";
import {
  Code,
  BarChart3,
  Palette,
  Briefcase,
  Camera,
  Users,
  BookOpen,
  Award,
  ArrowRight,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Web Development": Code,
  "Data Science": BarChart3,
  "UX Design": Palette,
  Business: Briefcase,
  Photography: Camera,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function HomePage() {
  const featured = courses.slice(0, 3);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary" aria-labelledby="hero-heading">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-20" aria-hidden="true" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl">
            <motion.h1
              id="hero-heading"
              className="font-display text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Unlock Your Potential. Learn at Your Own Pace.
            </motion.h1>
            <motion.p
              className="mt-5 text-lg text-primary-foreground/80 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Thousands of expert-led courses in technology, business, design, and
              personal development — available anytime, anywhere.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button variant="cta" size="lg" asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button variant="cta-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/pricing">Start Free Trial</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-b border-border bg-card py-6" aria-label="Social proof">
        <div className="container flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-secondary" aria-hidden="true" />
            <span className="text-sm font-semibold text-foreground">2M+ Learners</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-secondary" aria-hidden="true" />
            <span className="text-sm font-semibold text-foreground">500+ Courses</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-secondary" aria-hidden="true" />
            <span className="text-sm font-semibold text-foreground">Certificates Included</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background py-16 md:py-20" aria-labelledby="categories-heading">
        <div className="container">
          <motion.h2
            id="categories-heading"
            className="text-center font-display text-3xl text-foreground md:text-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Explore by Category
          </motion.h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {categories.map((cat, i) => {
              const Icon = categoryIcons[cat] || BookOpen;
              return (
                <motion.div
                  key={cat}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link
                    to="/courses"
                    className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 shadow-card transition-all hover:shadow-elevated hover:border-secondary/30 focus-visible:outline-2 focus-visible:outline-primary"
                    aria-label={`Browse ${cat} courses`}
                  >
                    <Icon className="h-8 w-8 text-secondary" aria-hidden="true" />
                    <span className="text-sm font-medium text-foreground">{cat}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-muted py-16 md:py-20" aria-labelledby="featured-heading">
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <motion.h2
              id="featured-heading"
              className="font-display text-3xl text-foreground md:text-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              Featured Courses
            </motion.h2>
            <Link
              to="/courses"
              className="hidden items-center gap-1 text-sm font-medium text-secondary hover:underline md:flex"
            >
              View All <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((course, i) => (
              <motion.div
                key={course.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-background py-16 md:py-20" aria-labelledby="how-heading">
        <div className="container text-center">
          <motion.h2
            id="how-heading"
            className="font-display text-3xl text-foreground md:text-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            How It Works
          </motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Choose a Course", desc: "Browse our library and find the perfect course for your goals." },
              { step: "2", title: "Learn at Your Pace", desc: "Watch video lessons, complete exercises, and track your progress." },
              { step: "3", title: "Earn Your Certificate", desc: "Finish the course and receive a verified certificate of completion." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-lg border border-border bg-card p-8 shadow-card"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 text-center" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading" className="font-display text-3xl text-secondary-foreground md:text-4xl">
            Join 2M+ Learners Worldwide
          </h2>
          <p className="mt-3 text-secondary-foreground/80">
            Start your learning journey today — no credit card required.
          </p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/pricing">Start Learning for Free</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
