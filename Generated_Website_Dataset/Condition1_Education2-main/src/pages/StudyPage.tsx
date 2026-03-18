import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Circle, Play, ChevronLeft, ChevronRight } from "lucide-react";

const modules = [
  {
    title: "Module 1: Python Fundamentals",
    lessons: [
      { title: "Introduction to Python", completed: true, duration: "12 min" },
      { title: "Variables & Data Types", completed: true, duration: "18 min" },
      { title: "Control Flow", completed: true, duration: "22 min" },
    ],
  },
  {
    title: "Module 2: Data Structures",
    lessons: [
      { title: "Lists & Tuples", completed: true, duration: "15 min" },
      { title: "Dictionaries & Sets", completed: false, duration: "20 min" },
      { title: "Comprehensions", completed: false, duration: "14 min" },
      { title: "Working with Files", completed: false, duration: "18 min" },
    ],
  },
  {
    title: "Module 3: NumPy Basics",
    lessons: [
      { title: "NumPy Arrays", completed: false, duration: "16 min" },
      { title: "Array Operations", completed: false, duration: "20 min" },
      { title: "Broadcasting", completed: false, duration: "22 min" },
      { title: "Statistical Functions", completed: false, duration: "15 min" },
      { title: "Module Review", completed: false, duration: "10 min" },
    ],
  },
];

const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
const completedLessons = modules.reduce((sum, m) => sum + m.lessons.filter((l) => l.completed).length, 0);

export default function StudyPage() {
  const [activeModule, setActiveModule] = useState(1);
  const [activeLesson, setActiveLesson] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentModule = modules[activeModule];
  const currentLesson = currentModule?.lessons[activeLesson];
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <PageLayout>
      {/* Progress bar */}
      <div className="border-b border-border bg-card px-4 py-3">
        <div className="container flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-foreground">
            Lesson {completedLessons + 1} of {totalLessons} — {currentModule?.title}
          </span>
          <div className="flex-1">
            <Progress
              value={progress}
              className="h-2"
              aria-label={`Course progress: ${Math.round(progress)}%`}
            />
          </div>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Video area */}
        <div className="flex flex-1 flex-col">
          {/* Video player placeholder */}
          <div className="relative aspect-video w-full bg-foreground/95">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground">
              <button
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/90 text-secondary-foreground transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-secondary"
                aria-label="Play video lesson"
              >
                <Play className="ml-1 h-7 w-7" />
              </button>
              <p className="text-lg font-medium">{currentLesson?.title || "Select a lesson"}</p>
              <p className="text-sm text-primary-foreground/60">{currentLesson?.duration}</p>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
            <Button variant="ghost" size="sm" disabled={activeLesson === 0 && activeModule === 0}>
              <ChevronLeft className="mr-1 h-4 w-4" aria-hidden="true" /> Previous
            </Button>
            <Button variant="cta" size="sm">
              Next <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Tabs */}
          <div className="bg-background p-4 md:p-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList aria-label="Lesson content tabs">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="qa">Q&A</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4 space-y-3 text-sm text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">Lesson Overview</h3>
                <p>In this lesson, you'll learn about dictionaries and sets in Python — two powerful data structures for organizing and accessing data efficiently.</p>
                <p>By the end of this lesson, you'll understand how to create, modify, and iterate over dictionaries and sets, and when to use each one.</p>
              </TabsContent>
              <TabsContent value="notes" className="mt-4 text-sm text-muted-foreground">
                <p>Your notes will appear here. Use the note-taking feature during the video to capture key insights.</p>
              </TabsContent>
              <TabsContent value="qa" className="mt-4 text-sm text-muted-foreground">
                <p>Have a question? Ask the instructor and community here.</p>
              </TabsContent>
              <TabsContent value="resources" className="mt-4 text-sm text-muted-foreground">
                <ul className="space-y-2" role="list">
                  <li className="flex items-center gap-2">📄 Lesson slides (PDF)</li>
                  <li className="flex items-center gap-2">💻 Exercise files (ZIP)</li>
                  <li className="flex items-center gap-2">📚 Supplementary reading links</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Lesson sidebar */}
        {sidebarOpen && (
          <aside className="hidden w-80 shrink-0 overflow-y-auto border-l border-border bg-card lg:block" aria-label="Lesson navigation">
            <div className="p-4">
              <h2 className="mb-4 font-semibold text-foreground">Course Content</h2>
              {modules.map((mod, mi) => (
                <div key={mi} className="mb-4">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {mod.title}
                  </h3>
                  <ul className="space-y-1" role="list">
                    {mod.lessons.map((lesson, li) => {
                      const isActive = mi === activeModule && li === activeLesson;
                      return (
                        <li key={li}>
                          <button
                            onClick={() => { setActiveModule(mi); setActiveLesson(li); }}
                            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                              isActive
                                ? "bg-secondary/10 text-foreground font-medium"
                                : "text-muted-foreground hover:bg-muted"
                            }`}
                            aria-current={isActive ? "true" : undefined}
                          >
                            {lesson.completed ? (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-label="Completed" />
                            ) : (
                              <Circle className="h-4 w-4 shrink-0" aria-label="Not completed" />
                            )}
                            <span className="flex-1 truncate">{lesson.title}</span>
                            <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>
    </PageLayout>
  );
}
