import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState, useRef, useEffect } from "react";

export default function SiteHeader() {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management for mobile menu - cat_5
  useEffect(() => {
    if (mobileMenuOpen) {
      closeButtonRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container flex h-8 items-center justify-between text-xs">
          <span>Free shipping on orders over $50</span>
          <nav aria-label="Secondary navigation">
            <ul className="flex gap-4">
              <li><Link to="/account" className="hover:underline">Help</Link></li>
              <li><Link to="/account" className="hover:underline">Track Order</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main header */}
      <div className="container flex h-16 items-center gap-4">
        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          className="lg:hidden flex items-center justify-center"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label="Open navigation menu"
        >
          <Menu size={24} aria-hidden="true" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 font-display text-2xl font-bold tracking-tight text-primary">
          NovaMart
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 ml-8" aria-label="Main navigation">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">All Products</Link>
          <Link to="/products?category=electronics" className="text-sm font-medium hover:text-primary transition-colors">Electronics</Link>
          <Link to="/products?category=kitchen" className="text-sm font-medium hover:text-primary transition-colors">Kitchen</Link>
          <Link to="/products?category=clothing" className="text-sm font-medium hover:text-primary transition-colors">Clothing</Link>
          <Link to="/products?category=sports" className="text-sm font-medium hover:text-primary transition-colors">Sports</Link>
        </nav>

        {/* Search */}
        <form onSubmit={handleSearch} role="search" className="hidden md:flex flex-1 max-w-md ml-auto">
          <label htmlFor="site-search" className="sr-only">Search products</label>
          <div className="relative w-full">
            <input
              id="site-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="h-10 w-full rounded-lg border border-input bg-background pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground"
              aria-label="Submit search"
            >
              <Search size={18} aria-hidden="true" />
            </button>
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <Link
            to="/account"
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted transition-colors"
            aria-label="My account"
          >
            <User size={20} aria-hidden="true" />
          </Link>
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted transition-colors"
            aria-label={`Shopping cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
          >
            <ShoppingCart size={20} aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground" aria-hidden="true">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile menu overlay - cat_5: focus trap */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="absolute inset-0 bg-foreground/50" onClick={closeMobileMenu} aria-hidden="true" />
          <nav
            id="mobile-nav-menu"
            className="absolute left-0 top-0 h-full w-72 bg-card p-6 animate-slide-in-right shadow-nova-lg"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-xl font-bold text-primary">NovaMart</span>
              <button
                ref={closeButtonRef}
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                className="flex items-center justify-center"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>
            <form onSubmit={(e) => { handleSearch(e); closeMobileMenu(); }} role="search" className="mb-6">
              <label htmlFor="mobile-search" className="sr-only">Search products</label>
              <input
                id="mobile-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="h-10 w-full rounded-lg border border-input bg-background px-4 text-sm"
              />
            </form>
            <ul className="flex flex-col gap-4">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "All Products" },
                { to: "/products?category=electronics", label: "Electronics" },
                { to: "/products?category=kitchen", label: "Kitchen" },
                { to: "/products?category=clothing", label: "Clothing" },
                { to: "/products?category=sports", label: "Sports" },
                { to: "/account", label: "My Account" },
                { to: "/cart", label: "Cart" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={closeMobileMenu}
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
