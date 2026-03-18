import { Link } from "react-router-dom";
import { EduLayout } from "@/components/edu/EduLayout";
import { CourseCard } from "@/components/edu/CourseCard";
import { courses } from "@/data/courses";
import { BookOpen, Award, Users, ArrowRight, Code, BarChart3, Palette, Briefcase, Camera } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Web Development", icon: Code, count: 240 },
  { name: "Data Science", icon: BarChart3, count: 185 },
  { name: "UX Design", icon: Palette, count: 120 },
  { name: "Business", icon: Briefcase, count: 310 },
  { name: "Photography", icon: Camera, count: 95 },
];

const steps = [
  { num: "01", title: "Choose Your Path", desc: "Browse our curated catalog of courses across technology, design, business, and more." },
  { num: "02", title: "Learn at Your Pace", desc: "Watch video lessons, complete exercises, and engage with instructors on your schedule." },
  { num: "03", title: "Earn Your Certificate", desc: "Complete your course and receive a professional certificate to showcase your skills." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function HomePage() {
  const featured = courses.slice(0, 4);

  return (
    <EduLayout title="Learn at Your Own Pace">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(38_92%_55%/0.12),transparent_60%)]" aria-hidden="true" />
        <div className="container relative">
          <div className="max-w-2xl">
            <motion.h1
              id="hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Unlock Your Potential.{" "}
              <span className="text-secondary">Learn at Your Own Pace.</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-primary-foreground/75 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Join millions of learners mastering new skills with expert-led courses in technology, business, design, and more.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/courses" className="btn-hero-primary">
                Browse Courses
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/pricing" className="btn-hero border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Start Free Trial
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-surface-sunken py-6 border-b border-border" aria-label="Platform statistics">
        <div className="container flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {[
            { icon: Users, label: "2M+ Learners Worldwide" },
            { icon: BookOpen, label: "1,200+ Expert Courses" },
            { icon: Award, label: "50,000+ Certificates Issued" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5">
              <stat.icon className="h-5 w-5 text-secondary" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20" aria-labelledby="categories-heading">
        <div className="container">
          <h2 id="categories-heading" className="section-heading text-center mb-10">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={cat.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Link
                  to={`/courses?category=${encodeURIComponent(cat.name)}`}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 hover:shadow-md hover:border-secondary/40 transition-all text-center group"
                  aria-label={`${cat.name}: ${cat.count} courses`}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                    <cat.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-display font-semibold text-sm text-foreground">{cat.name}</span>
                  <span className="text-xs text-muted-foreground">{cat.count} courses</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-20 bg-surface-sunken" aria-labelledby="featured-heading">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <h2 id="featured-heading" className="section-heading">Featured Courses</h2>
            <Link to="/courses" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((course, i) => (
              <motion.div key={course.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20" aria-labelledby="how-heading">
        <div className="container">
          <h2 id="how-heading" className="section-heading text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div key={step.num} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold mb-4">
                  {step.num}
                </span>
                <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary" aria-labelledby="cta-heading">
        <div className="container text-center">
          <h2 id="cta-heading" className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Join over 2 million learners and take the first step toward your new career.
          </p>
          <Link to="/pricing" className="btn-hero-primary text-base">
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </EduLayout>
  );
}
