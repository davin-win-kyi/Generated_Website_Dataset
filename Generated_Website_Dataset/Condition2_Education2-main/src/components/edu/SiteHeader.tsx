import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "Dashboard", href: "/dashboard" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header role="banner" className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="LearnPath home">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="font-display text-sm font-bold text-primary-foreground" aria-hidden="true">LP</span>
          </span>
          <span className="font-display text-xl font-bold text-foreground">LearnPath</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              aria-current={location.pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            aria-label="Search courses"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </Link>
          <Link to="/pricing" className="btn-hero-primary text-sm px-4 py-2">
            Start Free Trial
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:bg-muted/50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="md:hidden border-t border-border bg-card p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              aria-current={location.pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border mt-3 space-y-2">
            <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block text-center text-sm font-medium text-muted-foreground py-2">
              Sign In
            </Link>
            <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block text-center btn-hero-primary text-sm px-4 py-2">
              Start Free Trial
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
