import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, ChevronRight, Minus, Plus, Check, Truck } from "lucide-react";
import Header from "@/components/ecommerce/Header";
import Footer from "@/components/ecommerce/Footer";
import ProductCard from "@/components/ecommerce/ProductCard";
import StarRating from "@/components/ecommerce/StarRating";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const tabs = ["Description", "Specifications", "Reviews"] as const;

const mockReviews = [
  { name: "Alex M.", rating: 5, date: "Feb 12, 2026", text: "Absolutely love it! Best purchase I've made this year. The quality exceeded my expectations." },
  { name: "Sarah K.", rating: 4, date: "Jan 28, 2026", text: "Great product, fast shipping. Only minor gripe is the packaging could be better." },
  { name: "James T.", rating: 5, date: "Jan 15, 2026", text: "Worth every penny. Would definitely recommend to anyone looking for quality." },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Description");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold mb-2">Product not found</h1>
            <Link to="/products" className="text-accent hover:underline focus-ring rounded-sm">Browse all products</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor, selectedSize);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-accent focus-ring rounded-sm">Home</Link></li>
            <li><ChevronRight className="h-3 w-3" aria-hidden="true" /></li>
            <li><Link to={`/products?category=${product.category}`} className="hover:text-accent focus-ring rounded-sm">{product.category}</Link></li>
            <li><ChevronRight className="h-3 w-3" aria-hidden="true" /></li>
            <li className="text-foreground font-medium truncate max-w-[200px]" aria-current="page">{product.name}</li>
          </ol>
        </nav>

        {/* Product section */}
        <section className="container mx-auto px-4 pb-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-secondary rounded-xl flex items-center justify-center text-8xl relative overflow-hidden" aria-label={`${product.name} main image`}>
                {product.category === "Electronics" ? "💻" : product.category === "Kitchen" ? "🍳" : product.category === "Clothing" ? "👕" : product.category === "Sports" ? "⚽" : "🏡"}
                {product.badge && (
                  <span className={`absolute top-4 left-4 text-sm font-bold px-3 py-1.5 rounded-lg ${product.badge === "sale" ? "bg-badge-sale text-badge-sale-foreground" : product.badge === "new" ? "bg-badge-new text-badge-new-foreground" : "bg-accent text-accent-foreground"}`}>
                    {product.badge === "sale" ? `-${discount}%` : product.badge === "new" ? "NEW" : "BESTSELLER"}
                  </span>
                )}
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <button key={i} className={`aspect-square bg-secondary rounded-lg flex items-center justify-center text-2xl focus-ring ${i === 1 ? "ring-2 ring-accent" : "hover:ring-2 hover:ring-border"}`} aria-label={`Product image ${i}`}>
                    {product.category === "Electronics" ? "💻" : product.category === "Kitchen" ? "🍳" : "👕"}
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
                <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">{product.name}</h1>
              </div>

              <StarRating rating={product.rating} reviews={product.reviews} size="md" />

              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                    <span className="text-sm font-semibold text-badge-sale bg-badge-sale/10 px-2 py-0.5 rounded">Save {discount}%</span>
                  </>
                )}
              </div>

              {product.colors && product.colors.length > 0 && (
                <fieldset>
                  <legend className="font-display font-semibold text-sm mb-2">Color: {selectedColor}</legend>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors focus-ring ${selectedColor === color ? "border-accent bg-accent/10 text-accent" : "border-border text-foreground hover:border-accent/50"}`}
                        aria-pressed={selectedColor === color}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              {/* Quantity */}
              <div>
                <label className="font-display font-semibold text-sm block mb-2" id="quantity-label">Quantity</label>
                <div className="flex items-center gap-3" role="group" aria-labelledby="quantity-label">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors focus-ring"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center font-semibold text-lg" aria-live="polite">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors focus-ring"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 h-12 rounded-lg bg-accent text-accent-foreground font-display font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={addedToCart ? "Added to cart" : `Add ${product.name} to cart`}
                >
                  {addedToCart ? <><Check className="h-5 w-5" /> Added!</> : <><ShoppingCart className="h-5 w-5" /> Add to Cart</>}
                </button>
                <Link
                  to="/cart"
                  onClick={() => { if (product.inStock) addItem(product, quantity, selectedColor, selectedSize); }}
                  className="flex-1 h-12 rounded-lg bg-primary text-primary-foreground font-display font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors focus-ring"
                >
                  Buy Now
                </Link>
                <button className="h-12 w-12 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors focus-ring" aria-label="Add to wishlist">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              {/* Shipping info */}
              <div className="bg-secondary rounded-lg p-4 flex items-start gap-3">
                <Truck className="h-5 w-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Free shipping on orders over $50</p>
                  <p className="text-muted-foreground">Estimated delivery: 3-5 business days</p>
                </div>
              </div>

              {/* Tabs */}
              <div>
                <div className="flex border-b border-border" role="tablist" aria-label="Product information">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      role="tab"
                      aria-selected={activeTab === tab}
                      className={`px-4 py-3 text-sm font-medium transition-colors focus-ring ${activeTab === tab ? "border-b-2 border-accent text-accent" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="py-4" role="tabpanel" aria-label={activeTab}>
                  {activeTab === "Description" && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description || `The ${product.name} delivers outstanding performance and quality. Built by ${product.brand} with premium materials and cutting-edge technology, it's designed to exceed expectations in every way.`}
                    </p>
                  )}
                  {activeTab === "Specifications" && (
                    <dl className="space-y-2">
                      {Object.entries(product.specs || { Brand: product.brand, Category: product.category, "In Stock": product.inStock ? "Yes" : "No" }).map(([key, val]) => (
                        <div key={key} className="flex text-sm">
                          <dt className="w-40 text-muted-foreground font-medium">{key}</dt>
                          <dd className="text-foreground">{val}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {activeTab === "Reviews" && (
                    <div className="space-y-4">
                      {mockReviews.map((review, i) => (
                        <article key={i} className="border-b border-border pb-4 last:border-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-sm">{review.name}</span>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                          <StarRating rating={review.rating} />
                          <p className="text-sm text-muted-foreground mt-2">{review.text}</p>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          {relatedProducts.length > 0 && (
            <section className="mt-16" aria-labelledby="related-heading">
              <h2 id="related-heading" className="font-display text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
