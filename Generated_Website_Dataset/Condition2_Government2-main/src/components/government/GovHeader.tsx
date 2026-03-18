import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="border-b border-border bg-card shadow-sm">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="gov-container flex items-center justify-between py-1.5 text-sm text-primary-foreground">
          <span>Official Website of the City of Lakewood</span>
          <a
            href="tel:+15555550100"
            className="hidden items-center gap-1.5 hover:underline sm:flex"
            aria-label="Call City Hall at 555-555-0100"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>(555) 555-0100</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="gov-container">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3" aria-label="City of Lakewood — Home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary" aria-hidden="true">
              <span className="text-lg font-bold text-primary-foreground">L</span>
            </div>
            <div>
              <span className="block text-lg font-bold leading-tight text-foreground font-serif">City of Lakewood</span>
              <span className="block text-xs text-muted-foreground">Official Government Portal</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isCurrent = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        isCurrent
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                      aria-current={isCurrent ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </Button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-border pb-4 md:hidden">
            <ul className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => {
                const isCurrent = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block rounded-md px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        isCurrent
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                      aria-current={isCurrent ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default GovHeader;
