import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "World", href: "/mass-media/world" },
  { label: "Politics", href: "/mass-media/world" },
  { label: "Tech", href: "/mass-media/world" },
  { label: "Culture", href: "/mass-media/world" },
  { label: "Opinion", href: "/mass-media/opinion" },
  { label: "Subscribe", href: "/mass-media/subscribe" },
];

const MeridianHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-meridian-ink">
      {/* Breaking news ticker */}
      <div className="bg-meridian-ticker overflow-hidden">
        <div className="meridian-container flex items-center h-8">
          <span className="font-sans font-bold text-xs tracking-widest uppercase text-accent-foreground shrink-0 mr-3">
            Breaking
          </span>
          <div className="overflow-hidden flex-1">
            <div className="ticker-scroll whitespace-nowrap text-accent-foreground text-sm font-sans">
              <span className="inline-block mr-16">UN Emergency Session Called Over Red Sea Tensions — Security Council convenes for urgent deliberations</span>
              <span className="inline-block mr-16">Global Markets Rally After Fed Signals Rate Pause — Dow Jones up 2.3% in early trading</span>
              <span className="inline-block mr-16">UN Emergency Session Called Over Red Sea Tensions — Security Council convenes for urgent deliberations</span>
              <span className="inline-block mr-16">Global Markets Rally After Fed Signals Rate Pause — Dow Jones up 2.3% in early trading</span>
            </div>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="meridian-container py-6 text-center">
        <Link to="/mass-media" className="inline-block">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
            The Meridian
          </h1>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mt-1">
            Independent Journalism · Global Perspective
          </p>
        </Link>
        <div className="font-sans text-xs text-primary-foreground/50 mt-2">
          {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-primary-foreground/10">
        <div className="meridian-container flex items-center justify-between h-12">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-primary-foreground">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-sans text-sm font-semibold uppercase tracking-wider transition-colors hover:text-meridian-accent ${
                  location.pathname === link.href ? "text-meridian-accent" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button className="text-primary-foreground/80 hover:text-primary-foreground">
            <Search size={18} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-primary-foreground/10 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-primary-foreground/80 hover:text-meridian-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default MeridianHeader;
