import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Header = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg" role="banner">
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground text-center py-1.5 text-sm font-medium tracking-wide">
        🔥 Free shipping on orders over $50 — Use code <strong>NOVA50</strong>
      </div>

      <div className="container mx-auto px-4">
        {/* Main header row */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 focus-ring rounded-sm shrink-0" aria-label="NovaMart Home">
            <span className="text-2xl font-display font-bold tracking-tight">
              Nova<span className="text-accent">Mart</span>
            </span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <label htmlFor="header-search" className="sr-only">Search products</label>
            <div className="relative w-full">
              <input
                id="header-search"
                type="search"
                placeholder="Search electronics, clothing, home..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-4 pr-12 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground focus-ring text-sm"
                aria-label="Search products"
              />
              <button
                className="absolute right-1 top-1 h-8 w-10 flex items-center justify-center bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors focus-ring"
                aria-label="Submit search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <nav className="flex items-center gap-1" aria-label="User actions">
            <Link
              to="/account"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary-foreground/10 transition-colors focus-ring text-sm"
              aria-label="My Account"
            >
              <User className="h-5 w-5" />
              <span className="hidden lg:inline">Account</span>
            </Link>
            <button
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary-foreground/10 transition-colors focus-ring text-sm"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
              <span className="hidden lg:inline">Wishlist</span>
            </button>
            <Link
              to="/cart"
              className="relative flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary-foreground/10 transition-colors focus-ring text-sm"
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden lg:inline">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center" aria-hidden="true">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors focus-ring"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </nav>
        </div>

        {/* Category nav */}
        <nav className="hidden md:flex items-center gap-6 pb-2 text-sm text-primary-foreground/80" aria-label="Product categories">
          {["All Categories", "Electronics", "Kitchen", "Clothing", "Sports", "Home & Garden", "Deals"].map((cat) => (
            <Link
              key={cat}
              to={cat === "All Categories" || cat === "Deals" ? "/products" : `/products?category=${cat}`}
              className="hover:text-accent transition-colors focus-ring rounded-sm py-1 whitespace-nowrap"
            >
              {cat === "Deals" ? <span className="text-accent font-semibold">🔥 {cat}</span> : cat}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary-foreground/20 p-4 space-y-3" role="navigation" aria-label="Mobile navigation">
          <div className="relative">
            <label htmlFor="mobile-search" className="sr-only">Search products</label>
            <input
              id="mobile-search"
              type="search"
              placeholder="Search..."
              className="w-full h-10 pl-4 pr-10 rounded-lg bg-primary-foreground text-foreground text-sm focus-ring"
            />
            <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
          {["Electronics", "Kitchen", "Clothing", "Sports", "Home & Garden", "Deals"].map((cat) => (
            <Link
              key={cat}
              to={`/products?category=${cat}`}
              className="block py-2 text-sm hover:text-accent transition-colors focus-ring rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              {cat}
            </Link>
          ))}
          <Link to="/account" className="block py-2 text-sm hover:text-accent focus-ring rounded-sm" onClick={() => setMobileMenuOpen(false)}>
            My Account
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
