import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const navCategories = [
  { label: "Electronics", path: "/products?category=Electronics" },
  { label: "Kitchen", path: "/products?category=Kitchen" },
  { label: "Clothing", path: "/products?category=Clothing" },
  { label: "Sports", path: "/products?category=Sports" },
  { label: "Home", path: "/products?category=Home" },
  { label: "Today's Deals", path: "/products?badge=deal" },
];

export default function Header() {
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary">
      {/* Top bar */}
      <div className="bg-foreground/90">
        <div className="container flex items-center justify-between py-1.5 text-xs text-primary-foreground/70">
          <span>Free shipping on orders over $49</span>
          <div className="hidden sm:flex gap-4">
            <span>Help Center</span>
            <span>Track Order</span>
            <span>Sell on NovaMart</span>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container flex items-center gap-4 py-3">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-primary-foreground">
          <Menu className="w-6 h-6" />
        </button>
        
        <Link to="/" className="font-heading text-2xl font-bold text-primary-foreground tracking-tight shrink-0">
          Nova<span className="text-secondary">Mart</span>
        </Link>

        {/* Search */}
        <div className="hidden sm:flex flex-1 max-w-2xl">
          <div className="flex w-full rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              className="flex-1 px-4 py-2.5 text-sm bg-primary-foreground text-foreground outline-none"
            />
            <button className="px-5 bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-1 sm:gap-3 ml-auto">
          <Link to="/account" className="flex flex-col items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2">
            <User className="w-5 h-5" />
            <span className="text-[10px] hidden sm:block mt-0.5">Account</span>
          </Link>
          <button className="flex flex-col items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2">
            <Heart className="w-5 h-5" />
            <span className="text-[10px] hidden sm:block mt-0.5">Wishlist</span>
          </button>
          <Link to="/cart" className="flex flex-col items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 relative">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
            <span className="text-[10px] hidden sm:block mt-0.5">Cart</span>
          </Link>
        </div>
      </div>

      {/* Category nav */}
      <nav className="hidden lg:block bg-primary/80 border-t border-primary-foreground/10">
        <div className="container flex items-center gap-6 py-2">
          {navCategories.map(cat => (
            <Link
              key={cat.label}
              to={cat.path}
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <div className="container py-3 space-y-2">
            <div className="flex sm:hidden rounded-lg overflow-hidden mb-3">
              <input type="text" placeholder="Search..." className="flex-1 px-4 py-2.5 text-sm bg-primary-foreground text-foreground outline-none" />
              <button className="px-5 bg-secondary text-secondary-foreground"><Search className="w-4 h-4" /></button>
            </div>
            {navCategories.map(cat => (
              <Link key={cat.label} to={cat.path} onClick={() => setMobileMenuOpen(false)} className="block text-sm text-primary-foreground/80 hover:text-primary-foreground py-1.5">
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
