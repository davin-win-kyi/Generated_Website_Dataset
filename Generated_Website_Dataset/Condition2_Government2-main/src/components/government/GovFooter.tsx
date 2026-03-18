import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const GovFooter = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground" role="contentinfo">
      <div className="gov-container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="mb-3 text-lg font-bold font-serif">City of Lakewood</h2>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Serving approximately 160,000 residents with transparency, accountability, and excellence.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Twitter", "Instagram"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="rounded-md p-2 text-sm text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
                  aria-label={`Visit City of Lakewood on ${name}`}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Quick Links</h2>
            <ul className="space-y-2">
              {[
                { label: "Services", path: "/services" },
                { label: "Pay a Bill", path: "/services/pay-bill" },
                { label: "Permits & Licenses", path: "/services/permits" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact</h2>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>480 S Allison Pkwy<br />Lakewood, CO 80226</span>
              </li>
              <li>
                <a href="tel:+15555550100" className="flex items-center gap-2 hover:text-primary-foreground hover:underline">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>(555) 555-0100</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@lakewoodgov.example" className="flex items-center gap-2 hover:text-primary-foreground hover:underline">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>info@lakewoodgov.example</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">City Hall Hours</h2>
            <ul className="space-y-1 text-sm text-primary-foreground/80">
              <li>Monday–Friday: 8:00 AM – 5:00 PM</li>
              <li>Saturday: 9:00 AM – 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} City of Lakewood. All rights reserved. | <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Accessibility</a></p>
        </div>
      </div>
    </footer>
  );
};

export default GovFooter;
