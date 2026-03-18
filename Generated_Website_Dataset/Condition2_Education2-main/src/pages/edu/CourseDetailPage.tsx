import { useParams, Link } from "react-router-dom";
import { EduLayout } from "@/components/edu/EduLayout";
import { StarRating } from "@/components/edu/StarRating";
import { courses } from "@/data/courses";
import { Clock, Users, PlayCircle, FileText, Award, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";

const curriculum = [
  { title: "Getting Started", lessons: ["Course Overview", "Setting Up Your Environment", "Introduction to Python", "Your First Script"], duration: "2.5 hrs" },
  { title: "Data Structures", lessons: ["Variables & Types", "Lists & Tuples", "Dictionaries", "Sets & Comprehensions", "Working with Strings"], duration: "4 hrs" },
  { title: "Data Analysis with Pandas", lessons: ["Introduction to Pandas", "DataFrames & Series", "Data Cleaning", "Grouping & Aggregation", "Merging Datasets", "Time Series Basics"], duration: "6 hrs" },
  { title: "Data Visualization", lessons: ["Matplotlib Fundamentals", "Seaborn for Statistical Plots", "Interactive Charts with Plotly", "Building Dashboards", "Best Practices"], duration: "5.5 hrs" },
  { title: "Machine Learning Foundations", lessons: ["Intro to Scikit-learn", "Regression Models", "Classification", "Model Evaluation", "Feature Engineering", "Capstone Project"], duration: "6 hrs" },
];

const reviews = [
  { name: "Alex J.", rating: 5, text: "Incredible course! Dr. Chen explains complex concepts in a way that's easy to understand. The hands-on projects really solidified my learning.", date: "2 weeks ago" },
  { name: "Maria L.", rating: 5, text: "Best data science course I've taken online. The curriculum is well-structured and the Pandas section is exceptional.", date: "1 month ago" },
  { name: "David K.", rating: 4, text: "Great content overall. Some sections could use more practice exercises, but the video quality and teaching style are top-notch.", date: "2 months ago" },
];

export default function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find((c) => c.id === courseId) || courses[0];
  const [openModules, setOpenModules] = useState<Set<number>>(new Set([0]));
  const [enrolled, setEnrolled] = useState(false);
  const enrollRef = useRef<HTMLDivElement>(null);

  const toggleModule = (idx: number) => {
    setOpenModules((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const totalLessons = curriculum.reduce((acc, m) => acc + m.lessons.length, 0);

  return (
    <EduLayout title={`${course.title}`}>
      {/* Hero */}
      <section className="bg-primary py-12 md:py-16" aria-labelledby="course-title">
        <div className="container">
          <div className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <li><Link to="/courses" className="hover:text-primary-foreground transition-colors">Courses</Link></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-primary-foreground/80">{course.category}</span></li>
              </ol>
            </nav>
            <h1 id="course-title" className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
              {course.title}
            </h1>
            <p className="text-primary-foreground/75 mb-4">
              Master {course.category.toLowerCase()} with this comprehensive {course.level.toLowerCase()}-level course. Build real-world projects and gain practical skills.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70">
              <span className={course.level === "Beginner" ? "badge-beginner" : course.level === "Intermediate" ? "badge-intermediate" : "badge-advanced"}>
                {course.level}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden="true" /> {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" aria-hidden="true" /> {course.enrolled.toLocaleString()} enrolled
              </span>
              <StarRating rating={course.rating} count={course.ratingCount} />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content - appears first in DOM for screen readers */}
          <div className="flex-1 order-2 lg:order-1">
            {/* Instructor */}
            <section aria-labelledby="instructor-heading" className="mb-10">
              <h2 id="instructor-heading" className="font-display text-xl font-bold mb-4">Your Instructor</h2>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center shrink-0" aria-hidden="true">
                  <span className="font-display font-bold text-xl text-muted-foreground">
                    {course.instructor.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{course.instructor}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Senior instructor with 10+ years of industry experience. Previously at Google and Stanford. Passionate about making complex topics accessible.
                  </p>
                </div>
              </div>
            </section>

            {/* Course Includes */}
            <section aria-labelledby="includes-heading" className="mb-10">
              <h2 id="includes-heading" className="font-display text-xl font-bold mb-4">This Course Includes</h2>
              <ul className="grid sm:grid-cols-2 gap-3" role="list">
                {[
                  { icon: PlayCircle, text: `${course.duration} of video lectures` },
                  { icon: FileText, text: "Downloadable resources & code files" },
                  { icon: Award, text: "Certificate of completion" },
                  { icon: CheckCircle, text: "Lifetime access & updates" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-foreground">
                    <item.icon className="h-5 w-5 text-success shrink-0" aria-hidden="true" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </section>

            {/* Curriculum */}
            <section aria-labelledby="curriculum-heading" className="mb-10">
              <h2 id="curriculum-heading" className="font-display text-xl font-bold mb-1">Curriculum</h2>
              <p className="text-sm text-muted-foreground mb-4">{curriculum.length} sections · {totalLessons} lessons</p>
              <div className="border border-border rounded-xl overflow-hidden divide-y divide-border" role="list" aria-label="Course modules">
                {curriculum.map((module, idx) => {
                  const isOpen = openModules.has(idx);
                  return (
                    <div key={idx} role="listitem">
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
                        aria-expanded={isOpen}
                        aria-controls={`module-${idx}`}
                      >
                        <div>
                          <h3 className="font-display font-semibold text-sm text-foreground">
                            Section {idx + 1}: {module.title}
                          </h3>
                          <span className="text-xs text-muted-foreground">{module.lessons.length} lessons · {module.duration}</span>
                        </div>
                        {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />}
                      </button>
                      {isOpen && (
                        <ol id={`module-${idx}`} className="px-4 pb-4 space-y-1" role="list">
                          {module.lessons.map((lesson, li) => (
                            <li key={li} className="flex items-center gap-3 text-sm text-muted-foreground py-1.5 pl-2">
                              <PlayCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                              <span>Lesson {li + 1}: {lesson}</span>
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Reviews */}
            <section aria-labelledby="reviews-heading">
              <h2 id="reviews-heading" className="font-display text-xl font-bold mb-4">Student Reviews</h2>
              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-surface-sunken">
                <span className="font-display text-4xl font-bold text-foreground">{course.rating}</span>
                <div>
                  <StarRating rating={course.rating} />
                  <p className="text-sm text-muted-foreground mt-1">{course.ratingCount.toLocaleString()} ratings</p>
                </div>
              </div>
              <div className="space-y-4">
                {reviews.map((review, i) => (
                  <article key={i} className="p-4 rounded-xl border border-border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center" aria-hidden="true">
                          <span className="text-xs font-bold text-muted-foreground">{review.name[0]}</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">{review.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="text-sm text-muted-foreground mt-2">{review.text}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar - after main content in DOM */}
          <aside className="lg:w-80 shrink-0 order-1 lg:order-2" aria-label="Course enrollment">
            <div ref={enrollRef} className="lg:sticky lg:top-24 rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="text-3xl font-display font-bold text-foreground mb-1">
                {typeof course.price === "number" ? `$${course.price}` : "Free"}
              </div>
              {typeof course.price === "number" && (
                <p className="text-sm text-muted-foreground mb-4 line-through">$99</p>
              )}
              <button
                onClick={() => setEnrolled(true)}
                className="w-full btn-hero-primary mb-3"
                disabled={enrolled}
              >
                {enrolled ? "Enrolled ✓" : "Enroll Now"}
              </button>
              {enrolled && (
                <div aria-live="polite" className="text-sm text-success text-center mb-3 font-medium">
                  You've been enrolled successfully!
                </div>
              )}
              <Link to="/study" className="block w-full btn-hero-outline text-center text-sm">
                Preview Course
              </Link>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground" role="list" aria-label="Course highlights">
                <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" aria-hidden="true" /> {course.duration} total</li>
                <li className="flex items-center gap-2"><PlayCircle className="h-4 w-4 text-accent" aria-hidden="true" /> {totalLessons} lessons</li>
                <li className="flex items-center gap-2"><FileText className="h-4 w-4 text-accent" aria-hidden="true" /> Downloadable resources</li>
                <li className="flex items-center gap-2"><Award className="h-4 w-4 text-accent" aria-hidden="true" /> Certificate included</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </EduLayout>
  );
}
