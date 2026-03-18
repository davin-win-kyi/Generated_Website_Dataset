import { useState, useMemo } from "react";
import { EduLayout } from "@/components/edu/EduLayout";
import { CourseCard } from "@/components/edu/CourseCard";
import { courses } from "@/data/courses";
import { Search } from "lucide-react";

const allCategories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"] as const;
const sortOptions = ["Most Popular", "Highest Rated", "Newest"] as const;

export default function CoursesPage() {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState<string>("All Levels");
  const [priceFilter, setPriceFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("Most Popular");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = courses;
    if (category !== "All") result = result.filter((c) => c.category === category);
    if (level !== "All Levels") result = result.filter((c) => c.level === level);
    if (priceFilter === "Free") result = result.filter((c) => c.price === "Free");
    if (priceFilter === "Paid") result = result.filter((c) => typeof c.price === "number");
    if (search) result = result.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase()));
    if (sort === "Highest Rated") result = [...result].sort((a, b) => b.rating - a.rating);
    if (sort === "Most Popular") result = [...result].sort((a, b) => b.enrolled - a.enrolled);
    return result;
  }, [category, level, priceFilter, sort, search]);

  return (
    <EduLayout title="Browse Courses">
      <div className="container py-8 md:py-12">
        <h1 className="section-heading mb-8">Browse Courses</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0" aria-label="Course filters">
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search courses..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-input bg-card pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Search courses"
                />
              </div>

              {/* Category */}
              <fieldset>
                <legend className="font-display font-semibold text-sm mb-3">Category</legend>
                <div className="space-y-1.5" role="radiogroup">
                  {allCategories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={category === cat}
                        onChange={() => setCategory(cat)}
                        className="h-4 w-4 accent-primary"
                      />
                      <span className={`text-sm ${category === cat ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"} transition-colors`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Level */}
              <fieldset>
                <legend className="font-display font-semibold text-sm mb-3">Level</legend>
                <div className="space-y-1.5" role="radiogroup">
                  {levels.map((lv) => (
                    <label key={lv} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="level"
                        value={lv}
                        checked={level === lv}
                        onChange={() => setLevel(lv)}
                        className="h-4 w-4 accent-primary"
                      />
                      <span className={`text-sm ${level === lv ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"} transition-colors`}>
                        {lv}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Price */}
              <fieldset>
                <legend className="font-display font-semibold text-sm mb-3">Price</legend>
                <div className="space-y-1.5" role="radiogroup">
                  {["All", "Free", "Paid"].map((p) => (
                    <label key={p} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        value={p}
                        checked={priceFilter === p}
                        onChange={() => setPriceFilter(p)}
                        className="h-4 w-4 accent-primary"
                      />
                      <span className={`text-sm ${priceFilter === p ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"} transition-colors`}>
                        {p}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground" aria-live="polite">
                {filtered.length} {filtered.length === 1 ? "course" : "courses"} found
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort-select" className="text-sm text-muted-foreground">Sort:</label>
                <select
                  id="sort-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-lg border border-input bg-card px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16" role="status">
                <p className="text-lg font-medium text-foreground mb-2">No courses found</p>
                <p className="text-sm text-muted-foreground">Try adjusting your filters or search terms.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </EduLayout>
  );
}
