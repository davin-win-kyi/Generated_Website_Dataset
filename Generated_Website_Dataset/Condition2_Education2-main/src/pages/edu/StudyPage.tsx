import { useState, useRef, useEffect } from "react";
import { EduLayout } from "@/components/edu/EduLayout";
import { CheckCircle, Circle, PlayCircle, FileText, MessageSquare, Download } from "lucide-react";

const modules = [
  {
    title: "Getting Started",
    lessons: [
      { title: "Course Overview", duration: "5:30", completed: true },
      { title: "Setting Up Your Environment", duration: "12:45", completed: true },
      { title: "Introduction to Python", duration: "18:20", completed: true },
    ],
  },
  {
    title: "Data Structures",
    lessons: [
      { title: "Variables & Types", duration: "15:10", completed: true },
      { title: "Lists & Tuples", duration: "20:30", completed: false },
      { title: "Dictionaries", duration: "18:45", completed: false },
      { title: "Sets & Comprehensions", duration: "14:20", completed: false },
      { title: "Working with Strings", duration: "16:50", completed: false },
    ],
  },
  {
    title: "Data Analysis with Pandas",
    lessons: [
      { title: "Introduction to Pandas", duration: "22:00", completed: false },
      { title: "DataFrames & Series", duration: "25:15", completed: false },
      { title: "Data Cleaning", duration: "19:40", completed: false },
    ],
  },
];

const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
const currentLessonIndex = 4; // 0-based across all
const currentModuleIndex = 1;
const currentLessonInModule = 1;

const tabs = [
  { id: "overview", label: "Overview", icon: FileText },
  { id: "notes", label: "Notes", icon: FileText },
  { id: "qa", label: "Q&A", icon: MessageSquare },
  { id: "resources", label: "Resources", icon: Download },
] as const;

export default function StudyPage() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
    const set = new Set<string>();
    modules.forEach((m) => m.lessons.forEach((l) => { if (l.completed) set.add(l.title); }));
    return set;
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const nextLessonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [loadingLesson, setLoadingLesson] = useState(false);

  const completedCount = completedLessons.size;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const completeCurrentLesson = () => {
    const lessonTitle = modules[currentModuleIndex].lessons[currentLessonInModule].title;
    setCompletedLessons((prev) => new Set(prev).add(lessonTitle));
    setLoadingLesson(true);
    setTimeout(() => {
      setLoadingLesson(false);
      nextLessonRef.current?.focus();
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.target !== videoRef.current) return;
    if (e.key === " " || e.key === "k") { e.preventDefault(); setIsPlaying(!isPlaying); }
    if (e.key === "ArrowRight") { e.preventDefault(); /* seek forward */ }
    if (e.key === "ArrowLeft") { e.preventDefault(); /* seek backward */ }
  };

  return (
    <EduLayout title="Study — Python for Data Science" hideFooter>
      {/* Progress Bar */}
      <div className="bg-card border-b border-border" role="status" aria-label={`Lesson ${currentLessonIndex + 1} of ${totalLessons} — Module ${currentModuleIndex + 1}: ${modules[currentModuleIndex].title}`}>
        <div className="container py-2 flex items-center gap-4">
          <span className="text-xs font-medium text-muted-foreground">
            Lesson {currentLessonIndex + 1} of {totalLessons} — Module {currentModuleIndex + 1}: {modules[currentModuleIndex].title}
          </span>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100} aria-label={`${progressPercent}% complete`}>
            <div className="h-full bg-success rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
          </div>
          <span className="text-xs font-medium text-foreground">{progressPercent}%</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 min-h-0">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col" aria-busy={loadingLesson}>
          {/* Video Player */}
          <div
            ref={videoRef}
            tabIndex={0}
            role="application"
            aria-label="Video player. Press Space to play/pause, arrow keys to seek."
            className="relative bg-foreground aspect-video w-full flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            onClick={() => setIsPlaying(!isPlaying)}
            onKeyDown={handleKeyDown}
          >
            <div className="text-center text-primary-foreground">
              <PlayCircle className="h-16 w-16 mx-auto mb-2 opacity-80" aria-hidden="true" />
              <p className="text-sm opacity-70">{isPlaying ? "Playing" : "Paused"} — Lists & Tuples</p>
            </div>
            {/* Controls bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/90 to-transparent p-4 flex items-center gap-4">
              <button
                aria-label={isPlaying ? "Pause" : "Play"}
                onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <PlayCircle className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 h-1 bg-primary-foreground/20 rounded-full">
                <div className="h-full w-1/3 bg-secondary rounded-full" />
              </div>
              <span className="text-xs text-primary-foreground/70">6:42 / 20:30</span>
              <button aria-label="Volume" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h2l4-4v14l-4-4z" /></svg>
              </button>
              <button aria-label="Fullscreen" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5h-4m4 0v-4m0 4l-5-5" /></svg>
              </button>
            </div>
          </div>

          {/* Mark Complete / Actions */}
          <div className="container py-4 flex items-center gap-4 border-b border-border">
            <button
              onClick={completeCurrentLesson}
              className="btn-hero-primary text-sm px-4 py-2"
            >
              Mark as Complete
            </button>
            <button
              ref={nextLessonRef}
              className="btn-hero-outline text-sm px-4 py-2"
              aria-label="Go to next lesson: Dictionaries"
            >
              Next Lesson →
            </button>
          </div>

          {/* Tabs */}
          <div className="container py-6">
            <div role="tablist" className="flex gap-1 border-b border-border mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
                    activeTab === tab.id
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`} tabIndex={0}>
              {activeTab === "overview" && (
                <div>
                  <h2 className="font-display text-xl font-bold mb-3">Lists & Tuples</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    In this lesson, you'll learn about Python's most fundamental ordered data structures. We'll cover list creation, indexing, slicing, common methods, and then compare mutable lists with immutable tuples. By the end, you'll understand when to use each and how they behave in real-world applications.
                  </p>
                </div>
              )}
              {activeTab === "notes" && (
                <div>
                  <textarea
                    className="w-full h-40 rounded-lg border border-input bg-card p-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                    placeholder="Take notes on this lesson..."
                    aria-label="Lesson notes"
                  />
                </div>
              )}
              {activeTab === "qa" && (
                <p className="text-sm text-muted-foreground">No questions yet. Be the first to ask!</p>
              )}
              {activeTab === "resources" && (
                <ul className="space-y-2" role="list">
                  <li className="flex items-center gap-3 text-sm text-foreground">
                    <Download className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span>lists_tuples_cheatsheet.pdf</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground">
                    <Download className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span>practice_exercises.py</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Lesson Sidebar - after main content in DOM */}
        <aside className="lg:w-80 border-l border-border bg-card overflow-y-auto lg:max-h-[calc(100vh-8rem)]" aria-label="Course lessons">
          <div className="p-4 border-b border-border">
            <h2 className="font-display font-semibold text-sm text-foreground">Course Content</h2>
            <p className="text-xs text-muted-foreground mt-1">{completedCount}/{totalLessons} lessons completed</p>
          </div>
          <nav aria-label="Lesson navigation">
            {modules.map((mod, mi) => (
              <div key={mi}>
                <div className="px-4 py-3 bg-surface-sunken border-b border-border">
                  <h3 className="font-display text-xs font-semibold text-foreground">Module {mi + 1}: {mod.title}</h3>
                </div>
                <ol role="list">
                  {mod.lessons.map((lesson, li) => {
                    const isComplete = completedLessons.has(lesson.title);
                    const isCurrent = mi === currentModuleIndex && li === currentLessonInModule;
                    return (
                      <li key={li}>
                        <button
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors border-b border-border/50 ${
                            isCurrent ? "bg-secondary/10 text-foreground font-medium" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                          }`}
                          aria-label={`${lesson.title}${isComplete ? " — Completed" : ""}${isCurrent ? " — Current lesson" : ""}`}
                          aria-current={isCurrent ? "step" : undefined}
                        >
                          {isComplete ? (
                            <CheckCircle className="h-4 w-4 text-success shrink-0" aria-hidden="true" />
                          ) : (
                            <Circle className="h-4 w-4 shrink-0" aria-hidden="true" />
                          )}
                          <span className="flex-1 truncate">{lesson.title}</span>
                          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </nav>
        </aside>
      </div>
    </EduLayout>
  );
}
