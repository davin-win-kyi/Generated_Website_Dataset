import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header role="banner">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+15555550100" className="flex items-center gap-1 hover:underline focus-visible:underline" aria-label="Call City Hall at 555-555-0100">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>(555) 555-0100</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>Mon–Fri 8:00 AM – 5:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card border-b shadow-sm" aria-label="Main navigation">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 focus-visible:outline-ring" aria-label="City of Lakewood home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary" aria-hidden="true">
              <span className="text-primary-foreground font-serif font-bold text-lg">L</span>
            </div>
            <div>
              <div className="font-serif font-bold text-lg leading-tight text-foreground">City of Lakewood</div>
              <div className="text-xs text-muted-foreground leading-tight">Official Government Portal</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-ring ${
                  location.pathname === link.path
                    ? "bg-secondary text-secondary-foreground font-semibold"
                    : "text-foreground hover:bg-muted"
                }`}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted focus-visible:outline-ring"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-card pb-4">
            <div className="container flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors focus-visible:outline-ring ${
                    location.pathname === link.path
                      ? "bg-secondary text-secondary-foreground font-semibold"
                      : "text-foreground hover:bg-muted"
                  }`}
                  aria-current={location.pathname === link.path ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
