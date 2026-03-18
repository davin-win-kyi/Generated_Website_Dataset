import { Link } from "react-router-dom";
import { useState } from "react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="editorial-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/mass-media" className="block" aria-label="The Meridian homepage">
              <h2 className="text-2xl font-serif font-bold">The Meridian</h2>
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-primary-foreground/60 mt-1">
                Independent Journalism
              </p>
            </Link>
            <p className="mt-4 text-sm font-sans text-primary-foreground/70 leading-relaxed">
              Covering global affairs, politics, technology, and culture with depth, nuance, and independence.
            </p>
          </div>

          {/* Sections */}
          <nav aria-label="Footer sections" className="md:col-span-1">
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-4">Sections</h3>
            <ul className="space-y-2">
              {["World", "Politics", "Technology", "Culture", "Opinion"].map((s) => (
                <li key={s}>
                  <Link
                    to={s === "Opinion" ? "/mass-media/opinion" : "/mass-media/world"}
                    className="text-sm font-sans text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* About */}
          <nav aria-label="Footer about" className="md:col-span-1">
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Ethics Policy", "Contact", "Advertise"].map((item) => (
                <li key={item}>
                  <span className="text-sm font-sans text-primary-foreground/70 cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm font-sans text-primary-foreground/70 mb-4">
              Get the day's top stories delivered to your inbox every morning.
            </p>
            <form onSubmit={handleNewsletterSubmit} noValidate>
              <div className="flex flex-col gap-2">
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  aria-required="true"
                  className="px-3 py-2 text-sm font-sans bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-sans font-bold uppercase tracking-wider bg-accent text-accent-foreground rounded-sm hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {subscribed && (
              <p aria-live="polite" className="mt-2 text-sm font-sans text-accent">
                ✓ Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans text-primary-foreground/50">
            © 2026 The Meridian. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Settings", "Accessibility"].map((item) => (
              <span key={item} className="text-xs font-sans text-primary-foreground/50 cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
