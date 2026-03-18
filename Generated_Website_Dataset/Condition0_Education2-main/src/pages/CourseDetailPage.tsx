import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, Award, FileText, Play, Download, ChevronDown, ChevronUp, Star, CheckCircle2 } from "lucide-react";
import Layout from "@/components/edu-portal/Layout";
import StarRating from "@/components/edu-portal/StarRating";
import { Button } from "@/components/ui/button";
import coursePython from "@/assets/course-python.jpg";

const curriculum = [
  { title: "Module 1: Python Basics", lessons: 8, duration: "4h 30m", items: ["Variables & Data Types", "Control Flow", "Functions", "Lists & Dictionaries"] },
  { title: "Module 2: Data Structures", lessons: 6, duration: "3h 15m", items: ["NumPy Arrays", "Pandas DataFrames", "Data Cleaning", "Merging Datasets"] },
  { title: "Module 3: Data Visualization", lessons: 7, duration: "5h 00m", items: ["Matplotlib Basics", "Seaborn Charts", "Interactive Plots", "Dashboard Creation"] },
  { title: "Module 4: Statistical Analysis", lessons: 5, duration: "4h 45m", items: ["Descriptive Stats", "Probability", "Hypothesis Testing", "Regression"] },
  { title: "Module 5: Machine Learning Intro", lessons: 6, duration: "6h 30m", items: ["Supervised Learning", "Model Training", "Evaluation Metrics", "Real-World Project"] },
];

const reviews = [
  { name: "Aisha M.", rating: 5, date: "2 weeks ago", text: "Incredible course! The projects were challenging but rewarding. Dr. Chen explains complex topics with clarity." },
  { name: "Tom H.", rating: 4, date: "1 month ago", text: "Great content and well-structured. Would love more advanced ML content but overall very satisfied." },
  { name: "Priya K.", rating: 5, date: "3 weeks ago", text: "Best data science course I've taken. The hands-on approach made all the difference." },
];

export default function CourseDetailPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <Layout>
      {/* Course hero */}
      <section className="hero-gradient">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge-intermediate">Intermediate</span>
              <span className="text-xs text-primary-foreground/70 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> 24 hours
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Python for Data Science
            </h1>
            <p className="text-primary-foreground/80 mt-3 max-w-xl leading-relaxed">
              Master Python programming for data analysis, visualization, and machine learning. Build real-world projects with industry-standard tools.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1.5">
                <img src={coursePython} alt="Dr. Sarah Chen" className="h-7 w-7 rounded-full object-cover" />
                Dr. Sarah Chen
              </span>
              <StarRating rating={4.8} count={12450} />
              <span className="flex items-center gap-1"><Users className="h-4 w-4" /> 89,340 enrolled</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="flex-1 space-y-10">
            {/* What you'll learn */}
            <div>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Python fundamentals & best practices", "Data manipulation with Pandas & NumPy", "Data visualization with Matplotlib & Seaborn", "Statistical analysis techniques", "Machine learning fundamentals", "Real-world capstone project"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Course includes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Play, label: "24h video lectures" },
                { icon: FileText, label: "45 exercises" },
                { icon: Download, label: "Downloadable resources" },
                { icon: Award, label: "Certificate" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2.5 p-3 rounded-lg border border-border bg-card text-sm text-foreground">
                  <f.icon className="h-5 w-5 text-primary shrink-0" />
                  {f.label}
                </div>
              ))}
            </div>

            {/* Instructor */}
            <div>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Your Instructor</h2>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-display font-bold text-primary">SC</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Dr. Sarah Chen</h3>
                  <p className="text-sm text-muted-foreground">Senior Data Scientist · Stanford PhD · 12+ years in industry</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Dr. Chen has taught over 200,000 students globally and worked at Google and Meta on machine learning infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">
                Curriculum
                <span className="text-sm font-normal text-muted-foreground ml-2">5 sections · 32 lessons · 24h total</span>
              </h2>
              <div className="space-y-2">
                {curriculum.map((mod, i) => (
                  <div key={i} className="border border-border rounded-lg overflow-hidden bg-card">
                    <button
                      onClick={() => setOpenModule(openModule === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                    >
                      <div>
                        <h4 className="font-display font-semibold text-sm text-foreground">{mod.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{mod.lessons} lessons · {mod.duration}</p>
                      </div>
                      {openModule === i ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                    </button>
                    {openModule === i && (
                      <div className="px-4 pb-4 space-y-2">
                        {mod.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Play className="h-3.5 w-3.5 text-primary" />
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Student Reviews</h2>
              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl border border-border bg-card">
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-foreground">4.8</p>
                  <StarRating rating={4.8} />
                  <p className="text-xs text-muted-foreground mt-1">12,450 reviews</p>
                </div>
                <div className="flex-1 space-y-1.5">
                  {[5, 4, 3, 2, 1].map((n) => {
                    const pct = n === 5 ? 72 : n === 4 ? 20 : n === 3 ? 5 : n === 2 ? 2 : 1;
                    return (
                      <div key={n} className="flex items-center gap-2 text-xs">
                        <span className="w-3 text-muted-foreground">{n}</span>
                        <Star className="h-3 w-3 text-star fill-star" />
                        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full bg-star" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="w-8 text-right text-muted-foreground">{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-4">
                {reviews.map((r) => (
                  <div key={r.name} className="p-4 rounded-xl border border-border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                          {r.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-foreground">{r.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{r.date}</span>
                    </div>
                    <StarRating rating={r.rating} />
                    <p className="text-sm text-muted-foreground mt-2">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img src={coursePython} alt="Course preview" className="w-full h-full object-cover" />
                </div>
                <div className="text-3xl font-display font-bold text-foreground mb-1">$49.99</div>
                <p className="text-xs text-muted-foreground mb-4 line-through">$99.99</p>
                <Button className="w-full" size="lg" asChild>
                  <Link to="/study">Enroll Now</Link>
                </Button>
                <Button variant="outline" className="w-full mt-2" asChild>
                  <Link to="/pricing">Try Free</Link>
                </Button>
                <div className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Full lifetime access",
                    "Certificate of completion",
                    "30-day money-back guarantee",
                    "Access on mobile and desktop",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
