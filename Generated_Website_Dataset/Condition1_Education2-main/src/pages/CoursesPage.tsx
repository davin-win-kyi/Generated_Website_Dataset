import { useState, useMemo } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { CourseCard } from "@/components/CourseCard";
import { courses, categories } from "@/data/courses";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const levels = ["Beginner", "Intermediate", "Advanced"] as const;

export default function CoursesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<"all" | "free" | "paid">("all");
  const [sortBy, setSortBy] = useState("popular");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = (arr: string[], val: string) =>
    arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];

  const filtered = useMemo(() => {
    let result = [...courses];
    if (selectedCategories.length) result = result.filter((c) => selectedCategories.includes(c.category));
    if (selectedLevels.length) result = result.filter((c) => selectedLevels.includes(c.level));
    if (priceFilter === "free") result = result.filter((c) => c.isFree);
    if (priceFilter === "paid") result = result.filter((c) => !c.isFree);
    if (sortBy === "popular") result.sort((a, b) => b.enrolled - a.enrolled);
    if (sortBy === "rated") result.sort((a, b) => b.rating - a.rating);
    if (sortBy === "newest") result.reverse();
    return result;
  }, [selectedCategories, selectedLevels, priceFilter, sortBy]);

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${cat}`}
                checked={selectedCategories.includes(cat)}
                onCheckedChange={() => setSelectedCategories(toggle(selectedCategories, cat))}
              />
              <Label htmlFor={`cat-${cat}`} className="text-sm text-muted-foreground cursor-pointer">
                {cat}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Level</h3>
        <div className="space-y-2">
          {levels.map((lvl) => (
            <div key={lvl} className="flex items-center gap-2">
              <Checkbox
                id={`lvl-${lvl}`}
                checked={selectedLevels.includes(lvl)}
                onCheckedChange={() => setSelectedLevels(toggle(selectedLevels, lvl))}
              />
              <Label htmlFor={`lvl-${lvl}`} className="text-sm text-muted-foreground cursor-pointer">
                {lvl}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Price</h3>
        <div className="space-y-2">
          {(["all", "free", "paid"] as const).map((p) => (
            <div key={p} className="flex items-center gap-2">
              <Checkbox
                id={`price-${p}`}
                checked={priceFilter === p}
                onCheckedChange={() => setPriceFilter(p)}
              />
              <Label htmlFor={`price-${p}`} className="text-sm text-muted-foreground cursor-pointer capitalize">
                {p === "all" ? "All Prices" : p}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout>
      <section className="bg-background py-10" aria-labelledby="courses-heading">
        <div className="container">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 id="courses-heading" className="font-display text-3xl text-foreground md:text-4xl">
                All Courses
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {filtered.length} courses found
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle filters"
              >
                <SlidersHorizontal className="mr-1 h-4 w-4" aria-hidden="true" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]" aria-label="Sort courses">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rated">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop sidebar */}
            <aside className="hidden w-56 shrink-0 md:block" aria-label="Course filters">
              <FilterPanel />
            </aside>

            {/* Mobile sidebar */}
            {sidebarOpen && (
              <div className="fixed inset-0 z-40 md:hidden">
                <div className="absolute inset-0 bg-foreground/20" onClick={() => setSidebarOpen(false)} />
                <aside className="absolute left-0 top-0 h-full w-72 overflow-y-auto bg-card p-6 shadow-elevated" aria-label="Course filters">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-semibold text-foreground">Filters</h2>
                    <button onClick={() => setSidebarOpen(false)} aria-label="Close filters">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <FilterPanel />
                </aside>
              </div>
            )}

            {/* Course grid */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <p className="py-12 text-center text-muted-foreground">
                  No courses match your filters. Try adjusting your selections.
                </p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
