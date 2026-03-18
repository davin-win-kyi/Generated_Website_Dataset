import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "World", href: "/world" },
  { label: "Politics", href: "/world" },
  { label: "Tech", href: "/world" },
  { label: "Culture", href: "/world" },
  { label: "Opinion", href: "/opinion" },
  { label: "Subscribe", href: "/subscribe" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-secondary" role="banner">
      {/* Breaking News Ticker */}
      <div className="bg-primary overflow-hidden" role="marquee" aria-label="Breaking news">
        <div className="flex items-center h-8">
          <span className="flex-shrink-0 bg-secondary text-secondary-foreground px-3 py-1 text-overline uppercase tracking-widest font-sans">
            Breaking
          </span>
          <div className="overflow-hidden flex-1">
            <div className="ticker-scroll whitespace-nowrap flex gap-16 px-4">
              <span className="text-primary-foreground text-sm font-sans">
                UN Emergency Session Called Over Red Sea Tensions — Security Council convenes amid escalating maritime threats
              </span>
              <span className="text-primary-foreground text-sm font-sans">
                EU Announces New Climate Finance Package Worth €50 Billion
              </span>
              <span className="text-primary-foreground text-sm font-sans">
                UN Emergency Session Called Over Red Sea Tensions — Security Council convenes amid escalating maritime threats
              </span>
              <span className="text-primary-foreground text-sm font-sans">
                EU Announces New Climate Finance Package Worth €50 Billion
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="block" aria-label="The Meridian — Home">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground tracking-tight">
              The Meridian
            </h1>
            <p className="text-caption text-secondary-foreground/60 font-sans uppercase tracking-widest mt-0.5">
              Independent Journalism Since 2019
            </p>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-3 py-2 text-sm font-sans font-medium text-secondary-foreground/80 hover:text-primary-foreground hover:bg-primary/80 rounded-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              className="ml-2 p-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-secondary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden mt-4 pb-2 border-t border-secondary-foreground/20 pt-4" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="block px-3 py-2 text-sm font-sans text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10 rounded-sm transition-colors"
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

      {/* Date Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container py-2 flex items-center justify-between">
          <span className="text-caption text-secondary-foreground/50 font-sans">
            Sunday, March 16, 2026
          </span>
          <span className="text-caption text-secondary-foreground/50 font-sans hidden sm:block">
            New York · London · Singapore
          </span>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
