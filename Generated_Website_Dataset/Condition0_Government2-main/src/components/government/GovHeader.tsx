import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Search } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const GovHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header>
      {/* Top utility bar */}
      <div className="bg-primary">
        <div className="gov-container flex items-center justify-between py-2 text-sm text-primary-foreground">
          <div className="flex items-center gap-4">
            <a href="tel:+15551234567" className="flex items-center gap-1 hover:underline">
              <Phone className="h-3 w-3" />
              (555) 123-4567
            </a>
            <span className="hidden sm:inline">Mon–Fri 8:00 AM – 5:00 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card border-b border-border shadow-sm">
        <div className="gov-container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="font-heading text-lg font-bold text-primary-foreground">CL</span>
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-foreground leading-tight">
                City of Lakewood
              </h1>
              <p className="text-xs text-muted-foreground">Official Government Portal</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border animate-slide-down">
            <div className="gov-container py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default GovHeader;
