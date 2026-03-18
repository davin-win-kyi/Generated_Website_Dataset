import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import Header from "@/components/ecommerce/Header";
import Footer from "@/components/ecommerce/Footer";
import ProductCard from "@/components/ecommerce/ProductCard";
import { products } from "@/data/products";

const brands = [...new Set(products.map((p) => p.brand))].sort();
const categoryList = [...new Set(products.map((p) => p.category))].sort();
const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $300", min: 100, max: 300 },
  { label: "$300 - $500", min: 300, max: 500 },
  { label: "$500+", min: 500, max: Infinity },
];
const ratingFilters = [4, 3, 2, 1];

const sortOptions = [
  { value: "best", label: "Best Match" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Customer Rating" },
];

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("best");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory) result = result.filter((p) => p.category === selectedCategory);
    if (selectedBrands.length) result = result.filter((p) => selectedBrands.includes(p.brand));
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }
    if (selectedRating) result = result.filter((p) => p.rating >= selectedRating);
    if (inStockOnly) result = result.filter((p) => p.inStock);

    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
    }
    return result;
  }, [selectedBrands, selectedCategory, selectedPriceRange, selectedRating, inStockOnly, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]);
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategory("");
    setSelectedPriceRange(null);
    setSelectedRating(null);
    setInStockOnly(false);
  };

  const activeFilterCount = (selectedBrands.length > 0 ? 1 : 0) + (selectedCategory ? 1 : 0) + (selectedPriceRange !== null ? 1 : 0) + (selectedRating ? 1 : 0) + (inStockOnly ? 1 : 0);

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Category */}
      <fieldset>
        <legend className="font-display font-semibold text-sm mb-3">Category</legend>
        <div className="space-y-2">
          {categoryList.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(selectedCategory === cat ? "" : cat)}
                className="accent-accent focus-ring"
              />
              <span className="group-hover:text-accent transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Brand */}
      <fieldset>
        <legend className="font-display font-semibold text-sm mb-3">Brand</legend>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="accent-accent focus-ring rounded"
              />
              <span className="group-hover:text-accent transition-colors">{brand}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Price */}
      <fieldset>
        <legend className="font-display font-semibold text-sm mb-3">Price Range</legend>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <label key={range.label} className="flex items-center gap-2 text-sm cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === i}
                onChange={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)}
                className="accent-accent focus-ring"
              />
              <span className="group-hover:text-accent transition-colors">{range.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Rating */}
      <fieldset>
        <legend className="font-display font-semibold text-sm mb-3">Rating</legend>
        <div className="space-y-2">
          {ratingFilters.map((r) => (
            <label key={r} className="flex items-center gap-2 text-sm cursor-pointer group">
              <input
                type="radio"
                name="rating"
                checked={selectedRating === r}
                onChange={() => setSelectedRating(selectedRating === r ? null : r)}
                className="accent-accent focus-ring"
              />
              <span className="group-hover:text-accent transition-colors">{r}★ & up</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Availability */}
      <fieldset>
        <legend className="font-display font-semibold text-sm mb-3">Availability</legend>
        <label className="flex items-center gap-2 text-sm cursor-pointer group">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={() => setInStockOnly(!inStockOnly)}
            className="accent-accent focus-ring rounded"
          />
          <span className="group-hover:text-accent transition-colors">In Stock Only</span>
        </label>
      </fieldset>

      {activeFilterCount > 0 && (
        <button onClick={clearFilters} className="text-sm text-accent hover:underline focus-ring rounded-sm">
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">
              {selectedCategory || "All Products"}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">{filtered.length} results</p>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="sort-select" className="sr-only">Sort by</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-10 px-3 rounded-lg border border-border bg-card text-card-foreground text-sm focus-ring"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden h-10 px-4 rounded-lg border border-border bg-card text-card-foreground text-sm flex items-center gap-2 focus-ring"
              aria-label="Toggle filters"
              aria-expanded={filtersOpen}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">{activeFilterCount}</span>
              )}
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 shrink-0" aria-label="Product filters">
            <FilterPanel />
          </aside>

          {/* Mobile filters */}
          {filtersOpen && (
            <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-label="Filters">
              <div className="absolute inset-0 bg-foreground/40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-card p-6 overflow-y-auto animate-slide-in shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display font-bold text-lg">Filters</h2>
                  <button onClick={() => setFiltersOpen(false)} className="focus-ring rounded-sm" aria-label="Close filters">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <FilterPanel />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-accent hover:underline focus-ring rounded-sm">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListingPage;
