import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Zap, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";

const banners = [
  { image: heroBanner1, title: "Flash Sale: Up to 50% off Electronics", subtitle: "Top brands, limited time only", cta: "Shop Electronics", link: "/products?category=Electronics" },
  { image: heroBanner2, title: "Kitchen Essentials Sale", subtitle: "Upgrade your cooking game — deals from $29", cta: "Shop Kitchen", link: "/products?category=Kitchen" },
];

const categoryTiles = [
  { name: "Electronics", icon: "🔌", color: "bg-primary/10" },
  { name: "Kitchen", icon: "🍳", color: "bg-secondary/10" },
  { name: "Clothing", icon: "👕", color: "bg-success/10" },
  { name: "Sports", icon: "⚽", color: "bg-warning/10" },
  { name: "Home", icon: "🏠", color: "bg-destructive/10" },
];

const perks = [
  { icon: Truck, label: "Free Shipping", desc: "On orders $49+" },
  { icon: RotateCcw, label: "Easy Returns", desc: "30-day returns" },
  { icon: ShieldCheck, label: "Secure Payment", desc: "256-bit SSL" },
  { icon: Zap, label: "Fast Delivery", desc: "1-3 business days" },
];

export default function HomePage() {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setBannerIndex(i => (i + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, []);

  const todaysDeals = products.filter(p => p.originalPrice).slice(0, 8);
  const trending = products.filter(p => p.rating >= 4.6).slice(0, 8);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="relative h-[320px] sm:h-[420px]">
          {banners.map((b, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === bannerIndex ? "opacity-100" : "opacity-0"}`}>
              <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container">
                  <div className="max-w-lg animate-fade-up">
                    <h1 className="text-3xl sm:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-3">{b.title}</h1>
                    <p className="text-primary-foreground/70 mb-5">{b.subtitle}</p>
                    <Link to={b.link} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      {b.cta} <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => setBannerIndex(i => (i - 1 + banners.length) % banners.length)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-foreground/30 text-primary-foreground p-2 rounded-full hover:bg-foreground/50 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => setBannerIndex(i => (i + 1) % banners.length)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-foreground/30 text-primary-foreground p-2 rounded-full hover:bg-foreground/50 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <button key={i} onClick={() => setBannerIndex(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === bannerIndex ? "bg-secondary" : "bg-primary-foreground/40"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Perks bar */}
      <section className="border-b border-border bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          {perks.map(p => (
            <div key={p.label} className="flex items-center gap-3">
              <p.icon className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold text-card-foreground">{p.label}</p>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category tiles */}
      <section className="container py-10">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Shop by Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {categoryTiles.map(cat => (
            <Link key={cat.name} to={`/products?category=${cat.name}`} className={`${cat.color} rounded-xl p-5 text-center hover:shadow-card-hover transition-all group`}>
              <span className="text-3xl block mb-2">{cat.icon}</span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Today's Deals */}
      <section className="container pb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
            <Zap className="w-6 h-6 text-secondary" /> Today's Deals
          </h2>
          <Link to="/products" className="text-sm text-primary font-medium hover:underline">View All →</Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {todaysDeals.map(p => (
            <div key={p.id} className="min-w-[200px] sm:min-w-[220px] snap-start">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="bg-muted py-10">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold text-foreground">Trending Now</h2>
            <Link to="/products" className="text-sm text-primary font-medium hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {trending.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
