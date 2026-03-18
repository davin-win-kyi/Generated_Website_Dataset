import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Award, Users, Play, Code, BarChart3, Palette, Briefcase, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/edu-portal/Layout";
import CourseCard from "@/components/edu-portal/CourseCard";
import { courses } from "@/data/courses";
import heroBg from "@/assets/hero-bg.jpg";

const categories = [
  { icon: Code, label: "Web Development", count: "340+ courses" },
  { icon: BarChart3, label: "Data Science", count: "280+ courses" },
  { icon: Palette, label: "UX Design", count: "190+ courses" },
  { icon: Briefcase, label: "Business", count: "420+ courses" },
  { icon: Camera, label: "Photography", count: "150+ courses" },
];

const steps = [
  { icon: BookOpen, title: "Browse & Choose", desc: "Explore thousands of courses across 50+ categories curated by industry experts." },
  { icon: Play, title: "Learn at Your Pace", desc: "Watch video lessons, complete exercises, and track your progress — anytime, anywhere." },
  { icon: Award, title: "Earn Certificates", desc: "Complete courses to earn recognized certificates and boost your career." },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary-foreground leading-tight">
              Unlock Your Potential.{" "}
              <span className="opacity-90">Learn at Your Own Pace.</span>
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/80 max-w-lg leading-relaxed">
              Join millions of learners mastering new skills with expert-led courses in tech, business, design, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/courses">Browse Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/pricing">Start Free Trial</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {[
            { value: "2M+", label: "Learners worldwide" },
            { value: "15K+", label: "Expert-led courses" },
            { value: "4.7★", label: "Average rating" },
            { value: "98%", label: "Satisfaction rate" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-display font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
          Explore Top Categories
        </h2>
        <p className="text-muted-foreground text-center mt-2 max-w-md mx-auto">
          Dive into subjects that matter most to your career and interests.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to="/courses"
                className="flex flex-col items-center p-6 rounded-xl border border-border bg-card card-hover text-center"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <cat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground">{cat.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cat.count}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured courses */}
      <section className="surface-sunken py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Featured Courses</h2>
              <p className="text-muted-foreground mt-1">Handpicked by our editors for you.</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/courses">View All <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
          How It Works
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto h-16 w-16 rounded-2xl hero-gradient flex items-center justify-center mb-4">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
              <h3 className="font-display font-bold text-lg text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
            Ready to Start Learning?
          </h2>
          <p className="text-primary-foreground/80 mt-3 max-w-md mx-auto">
            Join over 2 million learners who are building the skills of tomorrow.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/pricing">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
