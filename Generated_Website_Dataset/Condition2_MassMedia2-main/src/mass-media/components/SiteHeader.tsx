import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "World", href: "/mass-media/world" },
  { label: "Politics", href: "/mass-media/world?filter=politics" },
  { label: "Technology", href: "/mass-media/world?filter=technology" },
  { label: "Culture", href: "/mass-media/world?filter=culture" },
  { label: "Opinion", href: "/mass-media/opinion" },
  { label: "Subscribe", href: "/mass-media/subscribe" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="editorial-container">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 border-b border-border">
          <Link to="/mass-media" className="group" aria-label="The Meridian homepage">
            <h1 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-foreground group-hover:text-accent transition-colors">
              The Meridian
            </h1>
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mt-0.5">
              Independent Journalism
            </p>
          </Link>
          <div className="flex items-center gap-3">
            <button
              aria-label="Search articles"
              className="p-2 rounded-sm hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <Search className="h-5 w-5 text-foreground" />
            </button>
            <button
              className="md:hidden p-2 rounded-sm hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`nav-link-editorial ${
                location.pathname === link.href ? "text-accent border-b-2 border-accent pb-0.5" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav aria-label="Mobile navigation" className="md:hidden py-4 border-t border-border">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="block py-2 px-3 rounded-sm nav-link-editorial hover:bg-secondary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
