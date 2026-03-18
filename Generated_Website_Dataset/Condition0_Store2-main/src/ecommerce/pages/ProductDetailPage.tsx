import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Star, ShoppingCart, Zap, Heart, ChevronRight, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { StarRating } from "../components/ProductCard";

const tabs = ["Description", "Specifications", "Reviews"] as const;

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Description");

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container py-3">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/products?category=${product.category}`} className="hover:text-primary">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      {/* Main section */}
      <div className="container pb-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="space-y-3">
            <div className="bg-card rounded-xl overflow-hidden aspect-square relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-badge-sale text-badge-sale-foreground text-xs font-bold px-3 py-1.5 rounded-md uppercase">{product.badge}</span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-5">
            <div>
              <p className="text-sm text-primary font-medium mb-1">{product.brand}</p>
              <h1 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">{product.name}</h1>
            </div>

            <div className="flex items-center gap-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
              <span className="text-sm text-primary font-medium">{product.rating} / 5</span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-heading font-bold text-foreground">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="text-sm font-bold text-badge-sale bg-badge-sale/10 px-2 py-0.5 rounded">Save {discount}%</span>
                </>
              )}
            </div>

            {/* Color selector */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Color: <span className="text-muted-foreground">{selectedColor}</span></p>
                <div className="flex gap-2">
                  {product.colors.map(c => (
                    <button key={c} onClick={() => setSelectedColor(c)} className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${selectedColor === c ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-foreground"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Size: <span className="text-muted-foreground">{selectedSize}</span></p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(s => (
                    <button key={s} onClick={() => setSelectedSize(s)} className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${selectedSize === s ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-foreground"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center border border-border rounded-lg">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2 text-muted-foreground hover:text-foreground">−</button>
                <span className="px-4 py-2 text-sm font-medium text-foreground border-x border-border">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2 text-muted-foreground hover:text-foreground">+</button>
              </div>
              <button onClick={handleAddToCart} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <Zap className="w-5 h-5" /> Buy Now
            </button>

            <button className="w-full flex items-center justify-center gap-2 border border-border text-muted-foreground py-2.5 rounded-lg text-sm hover:text-foreground hover:border-foreground transition-colors">
              <Heart className="w-4 h-4" /> Add to Wishlist
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
              {[
                { icon: Truck, label: "Free Shipping" },
                { icon: RotateCcw, label: "30-Day Returns" },
                { icon: ShieldCheck, label: "2-Year Warranty" },
              ].map(b => (
                <div key={b.label} className="flex flex-col items-center gap-1 text-center">
                  <b.icon className="w-5 h-5 text-primary" />
                  <span className="text-[11px] text-muted-foreground">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex border-b border-border">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="py-6">
            {activeTab === "Description" && (
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                {product.description || `The ${product.name} delivers exceptional quality and performance. Built with premium materials and cutting-edge technology, this product is designed for those who demand the best. Whether you're a professional or enthusiast, you'll appreciate the attention to detail and superior craftsmanship.`}
              </p>
            )}
            {activeTab === "Specifications" && (
              <div className="max-w-lg">
                {product.specs ? (
                  Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2.5 border-b border-border last:border-0">
                      <span className="text-sm font-medium text-foreground">{k}</span>
                      <span className="text-sm text-muted-foreground">{v}</span>
                    </div>
                  ))
                ) : (
                  <div className="space-y-2.5">
                    {["Brand", "Category", "Rating", "In Stock"].map(k => (
                      <div key={k} className="flex justify-between py-2.5 border-b border-border last:border-0">
                        <span className="text-sm font-medium text-foreground">{k}</span>
                        <span className="text-sm text-muted-foreground">
                          {k === "Brand" ? product.brand : k === "Category" ? product.category : k === "Rating" ? `${product.rating}/5` : "Yes"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            {activeTab === "Reviews" && (
              <div className="space-y-6 max-w-2xl">
                {[
                  { name: "Alex M.", rating: 5, text: "Absolutely love this product! Exceeded my expectations in every way. Build quality is outstanding.", date: "Feb 28, 2026" },
                  { name: "Sarah K.", rating: 4, text: "Great value for the price. Delivery was fast and packaging was excellent. Minor issue with setup but customer support was helpful.", date: "Feb 15, 2026" },
                  { name: "James R.", rating: 5, text: "This is my second purchase and I'm just as impressed. Highly recommend to anyone considering it.", date: "Jan 30, 2026" },
                ].map((review, i) => (
                  <div key={i} className="border-b border-border pb-5 last:border-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[1,2,3,4,5].map(s => <Star key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? "fill-rating text-rating" : "text-border"}`} />)}
                      </div>
                      <span className="text-sm font-medium text-foreground">{review.name}</span>
                      <span className="text-xs text-muted-foreground">· {review.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-heading font-bold text-foreground mb-5">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
