import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products, categories, brands } from "../data/products";
import ProductCard from "../components/ProductCard";

const sortOptions = [
  { label: "Best Match", value: "match" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Customer Rating", value: "rating" },
  { label: "Newest", value: "newest" },
];

const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "$100 – $250", min: 100, max: 250 },
  { label: "$250 – $500", min: 250, max: 500 },
  { label: "$500+", min: 500, max: Infinity },
];

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("match");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleBrand = (b: string) => {
    setSelectedBrands(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory) result = result.filter(p => p.category === selectedCategory);
    if (selectedBrands.length) result = result.filter(p => selectedBrands.includes(p.brand));
    if (selectedPriceRange !== null) {
      const r = priceRanges[selectedPriceRange];
      result = result.filter(p => p.price >= r.min && p.price < r.max);
    }
    if (minRating) result = result.filter(p => p.rating >= minRating);

    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return result;
  }, [selectedCategory, selectedBrands, selectedPriceRange, minRating, sortBy]);

  const activeFilterCount = [selectedCategory, selectedBrands.length, selectedPriceRange !== null, minRating > 0].filter(Boolean).length;

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="font-heading font-semibold text-sm text-foreground mb-3">Category</h3>
        <div className="space-y-1.5">
          <button onClick={() => setSelectedCategory("")} className={`block text-sm w-full text-left px-2 py-1 rounded ${!selectedCategory ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>All Categories</button>
          {categories.map(c => (
            <button key={c} onClick={() => setSelectedCategory(c)} className={`block text-sm w-full text-left px-2 py-1 rounded ${selectedCategory === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{c}</button>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-heading font-semibold text-sm text-foreground mb-3">Brand</h3>
        <div className="space-y-1.5 max-h-48 overflow-y-auto">
          {brands.map(b => (
            <label key={b} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
              <input type="checkbox" checked={selectedBrands.includes(b)} onChange={() => toggleBrand(b)} className="rounded border-border text-primary focus:ring-primary" />
              {b}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-heading font-semibold text-sm text-foreground mb-3">Price Range</h3>
        <div className="space-y-1.5">
          {priceRanges.map((r, i) => (
            <button key={r.label} onClick={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)} className={`block text-sm w-full text-left px-2 py-1 rounded ${selectedPriceRange === i ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{r.label}</button>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-heading font-semibold text-sm text-foreground mb-3">Minimum Rating</h3>
        <div className="space-y-1.5">
          {[4, 3, 2].map(r => (
            <button key={r} onClick={() => setMinRating(minRating === r ? 0 : r)} className={`block text-sm w-full text-left px-2 py-1 rounded ${minRating === r ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {r}★ & up
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">{selectedCategory || "All Products"}</h1>
          <p className="text-sm text-muted-foreground mt-1">{filtered.length} results</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setFiltersOpen(!filtersOpen)} className="lg:hidden flex items-center gap-1.5 text-sm font-medium text-foreground bg-card px-3 py-2 rounded-lg border border-border">
            <SlidersHorizontal className="w-4 h-4" /> Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="text-sm bg-card border border-border rounded-lg px-3 py-2 text-foreground">
            {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar filters - desktop */}
        <aside className="hidden lg:block w-56 shrink-0">
          <FilterPanel />
        </aside>

        {/* Mobile filters overlay */}
        {filtersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-foreground/50" onClick={() => setFiltersOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-background p-6 overflow-y-auto animate-slide-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-bold text-foreground">Filters</h2>
                <button onClick={() => setFiltersOpen(false)}><X className="w-5 h-5 text-muted-foreground" /></button>
              </div>
              <FilterPanel />
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products match your filters.</p>
              <button onClick={() => { setSelectedCategory(""); setSelectedBrands([]); setSelectedPriceRange(null); setMinRating(0); }} className="mt-3 text-primary font-medium hover:underline">Clear all filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
