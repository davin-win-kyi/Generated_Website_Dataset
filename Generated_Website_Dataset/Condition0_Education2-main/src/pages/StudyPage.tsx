import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Circle, Play, FileText, MessageSquare, Download, ChevronLeft } from "lucide-react";
import Layout from "@/components/edu-portal/Layout";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "Module 1: Python Basics",
    lessons: [
      { title: "Variables & Data Types", duration: "12:30", completed: true },
      { title: "Control Flow", duration: "18:45", completed: true },
      { title: "Functions", duration: "22:10", completed: true },
      { title: "Lists & Dictionaries", duration: "15:20", completed: false },
    ],
  },
  {
    title: "Module 2: Data Structures",
    lessons: [
      { title: "NumPy Arrays", duration: "20:00", completed: false },
      { title: "Pandas DataFrames", duration: "25:15", completed: false },
      { title: "Data Cleaning", duration: "18:30", completed: false },
      { title: "Merging Datasets", duration: "16:45", completed: false },
    ],
  },
  {
    title: "Module 3: Data Visualization",
    lessons: [
      { title: "Matplotlib Basics", duration: "22:00", completed: false },
      { title: "Seaborn Charts", duration: "19:30", completed: false },
      { title: "Interactive Plots", duration: "24:15", completed: false },
      { title: "Dashboard Creation", duration: "28:00", completed: false },
    ],
  },
];

const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
const completedLessons = modules.reduce(
  (sum, m) => sum + m.lessons.filter((l) => l.completed).length,
  0
);
const currentLessonIndex = completedLessons + 1;

const tabs = ["Overview", "Notes", "Q&A", "Resources"];

export default function StudyPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedLesson, setSelectedLesson] = useState("Lists & Dictionaries");

  return (
    <Layout>
      {/* Progress bar */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/course/python-data-science"><ChevronLeft className="h-4 w-4 mr-1" /> Back</Link>
            </Button>
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Lesson {currentLessonIndex} of {totalLessons} — Module 2: Data Structures
            </span>
          </div>
          <span className="text-sm font-medium text-primary">
            {Math.round((completedLessons / totalLessons) * 100)}% complete
          </span>
        </div>
        <div className="h-1 bg-muted">
          <div
            className="h-full hero-gradient transition-all duration-500"
            style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Video area */}
        <div className="flex-1">
          {/* Video placeholder */}
          <div className="aspect-video bg-foreground/95 flex items-center justify-center relative">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-primary/30 transition-colors">
                <Play className="h-7 w-7 text-primary-foreground ml-1" />
              </div>
              <p className="text-primary-foreground/70 text-sm">{selectedLesson}</p>
              <p className="text-primary-foreground/40 text-xs mt-1">Click to play</p>
            </div>
          </div>

          {/* Tabs below video */}
          <div className="border-b border-border">
            <div className="container mx-auto px-4 flex gap-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="container mx-auto px-4 py-6">
            {activeTab === "Overview" && (
              <div className="max-w-2xl space-y-4">
                <h2 className="text-xl font-display font-bold text-foreground">Lists & Dictionaries</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In this lesson, you'll learn about Python's most versatile data structures — lists and dictionaries. You'll understand how to create, modify, and iterate through them, and discover common patterns used in data science workflows.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Play className="h-4 w-4 text-primary" /> Video: 15:20
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <FileText className="h-4 w-4 text-primary" /> 2 exercises
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Download className="h-4 w-4 text-primary" /> 1 resource
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Notes" && (
              <div className="max-w-2xl">
                <textarea
                  placeholder="Take notes while watching..."
                  className="w-full h-48 p-4 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            )}
            {activeTab === "Q&A" && (
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">Discussion (24 questions)</h3>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card text-sm text-muted-foreground">
                  Ask a question or browse existing discussions about this lesson.
                </div>
              </div>
            )}
            {activeTab === "Resources" && (
              <div className="max-w-2xl space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                  <Download className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Lesson Cheat Sheet.pdf</p>
                    <p className="text-xs text-muted-foreground">PDF · 245 KB</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                  <Download className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">practice_data.csv</p>
                    <p className="text-xs text-muted-foreground">CSV · 12 KB</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lesson sidebar */}
        <aside className="lg:w-80 border-l border-border bg-card overflow-y-auto lg:h-[calc(100vh-5rem)]">
          <div className="p-4 border-b border-border">
            <h3 className="font-display font-semibold text-sm text-foreground">Course Content</h3>
            <p className="text-xs text-muted-foreground mt-1">{completedLessons}/{totalLessons} lessons completed</p>
          </div>
          <div className="divide-y divide-border">
            {modules.map((mod) => (
              <div key={mod.title}>
                <div className="px-4 py-3 bg-muted/50">
                  <h4 className="text-xs font-display font-semibold text-foreground">{mod.title}</h4>
                </div>
                {mod.lessons.map((lesson) => (
                  <button
                    key={lesson.title}
                    onClick={() => setSelectedLesson(lesson.title)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors ${
                      selectedLesson === lesson.title ? "bg-primary/5" : ""
                    }`}
                  >
                    {lesson.completed ? (
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm truncate ${selectedLesson === lesson.title ? "text-primary font-medium" : "text-foreground"}`}>
                        {lesson.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Layout>
  );
}
