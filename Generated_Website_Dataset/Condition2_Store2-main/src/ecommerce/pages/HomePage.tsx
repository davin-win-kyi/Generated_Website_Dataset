import { Link } from "react-router-dom";
import { ChevronRight, Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

const heroSlides = [
  {
    title: "Flash Sale: Up to 50% off Electronics",
    subtitle: "Limited time offer on headphones, TVs, laptops & more",
    cta: "Shop Electronics",
    link: "/products?category=electronics",
  },
];

const todaysDeals = products.filter((p) => p.originalPrice).slice(0, 8);
const trendingProducts = products.slice(0, 4);

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="bg-nova-gradient-dark text-secondary-foreground">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 id="hero-heading" className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {heroSlides[0].title}
            </h1>
            <p className="mt-4 text-lg opacity-80">{heroSlides[0].subtitle}</p>
            <Link
              to={heroSlides[0].link}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-display font-semibold text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {heroSlides[0].cta}
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section aria-label="Our promises" className="border-b border-border bg-card">
        <div className="container grid grid-cols-2 gap-4 py-6 md:grid-cols-4">
          {[
            { icon: Truck, text: "Free Shipping 50+" },
            { icon: RotateCcw, text: "30-Day Returns" },
            { icon: ShieldCheck, text: "Secure Checkout" },
            { icon: Headphones, text: "24/7 Support" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm font-medium">
              <Icon size={20} className="text-primary" aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section aria-labelledby="categories-heading" className="container py-12">
        <h2 id="categories-heading" className="font-display text-2xl font-bold mb-6">Trending Categories</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products?category=${cat.slug}`}
              className="flex flex-col items-center gap-3 rounded-lg bg-card p-6 shadow-nova-sm hover:shadow-nova-md transition-shadow text-center"
            >
              <span className="text-4xl" aria-hidden="true">{cat.icon}</span>
              <span className="font-display font-semibold">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Today's Deals */}
      <section aria-labelledby="deals-heading" className="bg-card border-y border-border">
        <div className="container py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 id="deals-heading" className="font-display text-2xl font-bold">Today's Deals</h2>
            <Link to="/products" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
              View All <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 snap-x snap-mandatory" role="list" aria-label="Today's deals products">
            {todaysDeals.map((product) => (
              <div key={product.id} className="min-w-[220px] max-w-[220px] snap-start flex-shrink-0" role="listitem">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section aria-labelledby="trending-heading" className="container py-12">
        <h2 id="trending-heading" className="font-display text-2xl font-bold mb-6">Trending Now</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section aria-labelledby="cta-heading" className="bg-nova-gradient-warm text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 id="cta-heading" className="font-display text-3xl font-bold md:text-4xl">New Member? Get 15% Off</h2>
          <p className="mt-3 text-lg opacity-90">Sign up today and save on your first order</p>
          <Link
            to="/account"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-display font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors"
          >
            Create Account
            <ChevronRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
