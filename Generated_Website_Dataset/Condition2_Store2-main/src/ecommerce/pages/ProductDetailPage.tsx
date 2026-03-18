import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Heart, ChevronRight } from "lucide-react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import StarRating from "../components/StarRating";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

type TabId = "description" | "specs" | "reviews";

const mockReviews = [
  { id: 1, author: "Alex M.", rating: 5, date: "2026-02-15", text: "Absolutely love this product! Exceeded my expectations in every way." },
  { id: 2, author: "Sarah K.", rating: 4, date: "2026-01-28", text: "Great quality and fast shipping. Would definitely recommend." },
  { id: 3, author: "Jordan P.", rating: 5, date: "2026-01-10", text: "Perfect for what I needed. The build quality is exceptional." },
];

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState<TabId>("description");
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">Back to products</Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const tabs: { id: TabId; label: string }[] = [
    { id: "description", label: "Description" },
    { id: "specs", label: "Specifications" },
    { id: "reviews", label: `Reviews (${product.reviewCount.toLocaleString()})` },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container pt-6">
        <ol className="flex items-center gap-1 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><ChevronRight size={14} aria-hidden="true" /></li>
          <li><Link to="/products" className="hover:text-primary">Products</Link></li>
          <li><ChevronRight size={14} aria-hidden="true" /></li>
          <li><Link to={`/products?category=${product.category}`} className="hover:text-primary capitalize">{product.category}</Link></li>
          <li><ChevronRight size={14} aria-hidden="true" /></li>
          <li aria-current="page" className="text-foreground font-medium truncate max-w-[200px]">{product.name}</li>
        </ol>
      </nav>

      {/* Product Main */}
      <section aria-labelledby="product-name" className="container py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              {product.badge && (
                <span className="absolute left-3 top-3 rounded-sm bg-nova-badge px-3 py-1 text-sm font-semibold text-primary-foreground">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm text-muted-foreground capitalize">{product.brand} · {product.category}</p>
              <h1 id="product-name" className="font-display text-2xl font-bold mt-1 md:text-3xl">{product.name}</h1>
            </div>

            <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />

            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="rounded-sm bg-nova-success px-2 py-0.5 text-sm font-semibold text-primary-foreground">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Color selector */}
            {product.colors && product.colors.length > 0 && (
              <fieldset>
                <legend className="text-sm font-medium mb-2">Color: <span className="font-normal">{product.colors[selectedColor]}</span></legend>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(i)}
                      className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors ${
                        i === selectedColor
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-muted-foreground"
                      }`}
                      aria-pressed={i === selectedColor}
                      aria-label={`Color: ${color}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {/* Stock */}
            <p className="text-sm font-medium text-nova-success">✓ In Stock</p>

            {/* Actions */}
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingCart size={18} aria-hidden="true" />
                Add to Cart
              </button>
              <button
                onClick={() => addToCart(product)}
                className="flex-1 rounded-lg bg-secondary px-6 py-3 font-display font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors"
              >
                Buy Now
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`flex h-12 w-12 items-center justify-center rounded-lg border transition-colors ${
                  wishlisted ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-muted-foreground"
                }`}
                aria-pressed={wishlisted}
                aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
              >
                <Heart size={20} fill={wishlisted ? "currentColor" : "none"} aria-hidden="true" />
              </button>
            </div>

            {/* Tabs */}
            <div className="mt-6 border-t border-border pt-6" role="tablist" aria-label="Product information tabs">
              <div className="flex gap-1 border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                className="py-4"
              >
                {activeTab === "description" && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description || `The ${product.name} delivers exceptional quality and performance. Designed with precision and built to last, this product combines innovative features with elegant design. Perfect for everyday use and built to exceed your expectations.`}
                  </p>
                )}
                {activeTab === "specs" && (
                  <dl className="grid gap-2">
                    {Object.entries(product.specs || { Brand: product.brand, Category: product.category, Rating: `${product.rating}/5` }).map(([key, val]) => (
                      <div key={key} className="flex gap-4 py-2 border-b border-border last:border-0">
                        <dt className="text-sm font-medium w-40">{key}</dt>
                        <dd className="text-sm text-muted-foreground">{val}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {activeTab === "reviews" && (
                  <div className="space-y-4">
                    {mockReviews.map((review) => (
                      <article key={review.id} className="border-b border-border pb-4 last:border-0">
                        <div className="flex items-center gap-3 mb-2">
                          <StarRating rating={review.rating} />
                          <span className="text-sm font-medium">{review.author}</span>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.text}</p>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section aria-labelledby="related-heading" className="container py-12 border-t border-border">
          <h2 id="related-heading" className="font-display text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}
