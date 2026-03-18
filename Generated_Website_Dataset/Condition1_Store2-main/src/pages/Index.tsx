import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/ecommerce/Header";
import Footer from "@/components/ecommerce/Footer";
import ProductCard from "@/components/ecommerce/ProductCard";
import { products, categories, heroSlides } from "@/data/products";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const todaysDeals = products.filter((p) => p.badge === "sale").slice(0, 8);
  const bestSellers = products.filter((p) => p.badge === "bestseller").slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="relative overflow-hidden" aria-label="Promotional banners" role="region">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-r ${heroSlides[currentSlide].bg} text-primary-foreground py-16 md:py-24`}
            >
              <div className="container mx-auto px-4 text-center">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl mx-auto leading-tight"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="text-lg md:text-xl mb-8 opacity-90 max-w-xl mx-auto"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-display font-semibold text-lg hover:bg-accent/90 transition-colors focus-ring"
                  >
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Slide controls">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all focus-ring ${i === currentSlide ? "w-8 bg-accent" : "w-2.5 bg-primary-foreground/40"}`}
                role="tab"
                aria-selected={i === currentSlide}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={() => setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/30 transition-colors focus-ring" aria-label="Previous slide">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => setCurrentSlide((p) => (p + 1) % heroSlides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/30 transition-colors focus-ring" aria-label="Next slide">
            <ChevronRight className="h-5 w-5" />
          </button>
        </section>

        {/* Trust badges */}
        <section className="border-b border-border py-6" aria-label="Store benefits">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              { icon: Truck, text: "Free Shipping Over $50" },
              { icon: Shield, text: "Secure Payments" },
              { icon: RotateCcw, text: "30-Day Returns" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="py-12" aria-labelledby="categories-heading">
          <div className="container mx-auto px-4">
            <h2 id="categories-heading" className="font-display text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={`/products?category=${cat.name}`}
                  className="group bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg hover:border-accent transition-all focus-ring"
                >
                  <span className="text-4xl block mb-3" aria-hidden="true">{cat.icon}</span>
                  <h3 className="font-display font-semibold text-sm text-card-foreground group-hover:text-accent transition-colors">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cat.count.toLocaleString()} items</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Today's Deals */}
        <section className="py-12 bg-secondary" aria-labelledby="deals-heading">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 id="deals-heading" className="font-display text-2xl md:text-3xl font-bold">Today's Deals</h2>
                <p className="text-muted-foreground text-sm mt-1">Limited time offers — while supplies last</p>
              </div>
              <Link to="/products" className="text-accent font-semibold text-sm hover:underline focus-ring rounded-sm flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {todaysDeals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Bestsellers */}
        <section className="py-12" aria-labelledby="bestsellers-heading">
          <div className="container mx-auto px-4">
            <h2 id="bestsellers-heading" className="font-display text-2xl md:text-3xl font-bold mb-8">Bestsellers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Join NovaMart Rewards</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Earn points on every purchase, get exclusive deals, and enjoy free expedited shipping.</p>
            <Link to="/account" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors focus-ring">
              Sign Up Free <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
