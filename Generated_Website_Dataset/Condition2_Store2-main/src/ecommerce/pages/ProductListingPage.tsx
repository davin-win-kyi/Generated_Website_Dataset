import { useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { products, brands, categories } from "../data/products";

type SortOption = "best" | "price-asc" | "price-desc" | "rating";

const sortLabels: Record<SortOption, string> = {
  best: "Best Match",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  rating: "Customer Rating",
};

const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "$100 – $300", min: 100, max: 300 },
  { label: "$300 – $500", min: 300, max: 500 },
  { label: "Over $500", min: 500, max: Infinity },
];

const ratingOptions = [4, 3, 2, 1];

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";

  const [sort, setSort] = useState<SortOption>("best");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (categoryParam) {
      result = result.filter((p) => p.category === categoryParam);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }
    if (selectedRating !== null) {
      result = result.filter((p) => p.rating >= selectedRating);
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [categoryParam, searchQuery, selectedBrands, selectedPriceRange, selectedRating, sort]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const categoryName = categories.find((c) => c.slug === categoryParam)?.name;
  const pageTitle = searchQuery
    ? `Search: "${searchQuery}"`
    : categoryName
    ? categoryName
    : "All Products";

  const FilterPanel = () => (
    <aside aria-label="Product filters" className="space-y-6">
      {/* Brand Filter */}
      <fieldset>
        <legend className="font-display text-sm font-semibold mb-3">Brand</legend>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Price Range */}
      <fieldset>
        <legend className="font-display text-sm font-semibold mb-3">Price Range</legend>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <label key={range.label} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="price-range"
                checked={selectedPriceRange === i}
                onChange={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)}
                className="h-4 w-4 border-input text-primary focus:ring-ring"
              />
              <span>{range.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Rating */}
      <fieldset>
        <legend className="font-display text-sm font-semibold mb-3">Rating</legend>
        <div className="space-y-2">
          {ratingOptions.map((r) => (
            <label key={r} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={selectedRating === r}
                onChange={() => setSelectedRating(selectedRating === r ? null : r)}
                className="h-4 w-4 border-input text-primary focus:ring-ring"
              />
              <span>{r}★ & Up</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        onClick={() => {
          setSelectedBrands([]);
          setSelectedPriceRange(null);
          setSelectedRating(null);
        }}
        className="text-sm text-primary hover:underline font-medium"
      >
        Clear All Filters
      </button>
    </aside>
  );

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold">{pageTitle}</h1>
            <p className="text-sm text-muted-foreground mt-1" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "product" : "products"} found
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              className="lg:hidden rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
              onClick={() => setFiltersOpen(!filtersOpen)}
              aria-expanded={filtersOpen}
              aria-controls="mobile-filters"
            >
              Filters
            </button>
            {/* Sort */}
            <fieldset className="flex items-center gap-2">
              <legend className="sr-only">Sort products</legend>
              <label htmlFor="sort-select" className="text-sm text-muted-foreground whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="h-10 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {Object.entries(sortLabels).map(([val, label]) => (
                  <option key={val} value={val}>{label}</option>
                ))}
              </select>
            </fieldset>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-56 flex-shrink-0">
            <FilterPanel />
          </div>

          {/* Mobile Filters */}
          {filtersOpen && (
            <div id="mobile-filters" className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
              <div className="absolute inset-0 bg-foreground/50" onClick={() => setFiltersOpen(false)} aria-hidden="true" />
              <div className="absolute right-0 top-0 h-full w-80 bg-card p-6 overflow-y-auto animate-slide-in-right shadow-nova-lg">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-display text-lg font-bold">Filters</h2>
                  <button onClick={() => setFiltersOpen(false)} aria-label="Close filters" className="text-muted-foreground hover:text-foreground">
                    ✕
                  </button>
                </div>
                <FilterPanel />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <section aria-label="Product results" className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-16 text-center">
                <h2 className="font-display text-xl font-semibold mb-2">No products found</h2>
                <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
              </div>
            ) : (
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
}
