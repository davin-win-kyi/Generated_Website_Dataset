import { useParams, Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { courses } from "@/data/courses";
import { StarRating } from "@/components/StarRating";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Play,
  Download,
  Award,
  Clock,
  BarChart3,
  BookOpen,
  Star,
  CheckCircle2,
} from "lucide-react";

const curriculum = [
  { title: "Getting Started with Python", lessons: 6 },
  { title: "Data Structures & NumPy", lessons: 8 },
  { title: "Data Analysis with Pandas", lessons: 7 },
  { title: "Data Visualization", lessons: 5 },
  { title: "Intro to Machine Learning", lessons: 6 },
];

const reviews = [
  { name: "Alex K.", rating: 5, text: "Fantastic course! The instructor explains complex concepts in a very approachable way. Highly recommend for anyone getting into data science." },
  { name: "Priya M.", rating: 4, text: "Great content and well-structured curriculum. Would love more hands-on projects in future updates." },
  { name: "James L.", rating: 5, text: "Best data science course I've taken online. The Python exercises are excellent." },
];

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id) || courses[1]; // fallback to Python course

  return (
    <PageLayout>
      {/* Course header */}
      <section className="bg-primary py-10" aria-labelledby="course-title">
        <div className="container">
          <nav className="mb-4 text-sm text-primary-foreground/60" aria-label="Breadcrumb">
            <Link to="/courses" className="hover:text-primary-foreground">Courses</Link>
            <span className="mx-2">›</span>
            <span className="text-primary-foreground/80">{course.category}</span>
          </nav>
          <h1 id="course-title" className="max-w-3xl font-display text-3xl text-primary-foreground md:text-4xl">
            {course.title}
          </h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">{course.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-1">
              <StarRating rating={course.rating} size={14} />
              <span className="ml-1 font-medium text-primary-foreground">{course.rating}</span>
              <span>({course.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <span>{course.enrolled.toLocaleString()} enrolled</span>
            <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground/80">
              {course.level}
            </Badge>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {course.duration}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <img
              src={course.instructorAvatar}
              alt={`${course.instructor}'s profile photo`}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-primary-foreground">{course.instructor}</span>
          </div>
        </div>
      </section>

      <section className="bg-background py-10">
        <div className="container flex flex-col gap-8 lg:flex-row">
          {/* Main content */}
          <div className="flex-1 space-y-10">
            {/* Course includes */}
            <div>
              <h2 className="mb-4 font-display text-2xl text-foreground">This Course Includes</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Play, text: `${course.duration} of video lectures` },
                  { icon: Download, text: "Downloadable resources & code files" },
                  { icon: Award, text: "Certificate of completion" },
                  { icon: BookOpen, text: `${course.lessonsCount} lessons across 5 modules` },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 rounded-md border border-border bg-card p-3">
                    <item.icon className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="mb-4 font-display text-2xl text-foreground">Curriculum</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                5 sections · {course.lessonsCount} lessons · {course.duration} total
              </p>
              <Accordion type="multiple" defaultValue={["section-0"]}>
                {curriculum.map((section, i) => (
                  <AccordionItem key={i} value={`section-${i}`}>
                    <AccordionTrigger className="text-left text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <span>Section {i + 1}: {section.title}</span>
                        <span className="text-xs text-muted-foreground">({section.lessons} lessons)</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-4" role="list">
                        {Array.from({ length: section.lessons }, (_, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Play className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                            Lesson {j + 1}: {section.title} — Part {j + 1}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="mb-4 font-display text-2xl text-foreground">Student Reviews</h2>
              <div className="mb-6 flex items-center gap-4 rounded-lg border border-border bg-card p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground">{course.rating}</div>
                  <StarRating rating={course.rating} />
                  <p className="mt-1 text-xs text-muted-foreground">{course.reviewCount.toLocaleString()} reviews</p>
                </div>
                <div className="flex-1 space-y-1">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const pct = star === 5 ? 68 : star === 4 ? 22 : star === 3 ? 7 : star === 2 ? 2 : 1;
                    return (
                      <div key={star} className="flex items-center gap-2 text-xs">
                        <span className="w-6 text-right">{star}★</span>
                        <div className="h-2 flex-1 rounded-full bg-muted" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                          <div className="h-full rounded-full bg-star" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="w-8 text-muted-foreground">{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-4">
                {reviews.map((review, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="font-medium text-foreground">{review.name}</span>
                      <StarRating rating={review.rating} size={12} />
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:w-80">
            <div className="sticky top-20 space-y-4 rounded-lg border border-border bg-card p-6 shadow-elevated">
              <img
                src={course.thumbnail}
                alt={`Preview of ${course.title}`}
                className="w-full rounded-md object-cover"
              />
              <div className="text-3xl font-bold text-foreground">
                {course.isFree ? "Free" : `$${course.price}`}
              </div>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/study">Enroll Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Add to Wishlist
              </Button>
              <div className="space-y-2 border-t border-border pt-4">
                {[
                  { icon: Clock, text: course.duration },
                  { icon: BarChart3, text: course.level },
                  { icon: BookOpen, text: `${course.lessonsCount} lessons` },
                  { icon: Award, text: "Certificate included" },
                  { icon: CheckCircle2, text: "Full lifetime access" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <item.icon className="h-4 w-4 text-secondary" aria-hidden="true" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
