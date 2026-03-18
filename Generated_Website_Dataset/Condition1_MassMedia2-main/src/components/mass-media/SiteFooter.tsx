import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground" role="contentinfo">
      {/* Newsletter */}
      <div className="border-b border-secondary-foreground/20">
        <div className="container py-10">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-subheadline font-serif mb-2">The Morning Briefing</h3>
            <p className="text-sm text-secondary-foreground/70 font-sans mb-4">
              Start your day with the stories that matter. Delivered every weekday at 7am.
            </p>
            <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-sm text-sm text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary font-sans"
                required
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-sans font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-overline uppercase text-secondary-foreground/50 mb-3 font-sans">Sections</h4>
            <ul className="space-y-2">
              {["World", "Politics", "Tech", "Culture", "Science", "Business"].map((item) => (
                <li key={item}>
                  <Link to="/world" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-sans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-overline uppercase text-secondary-foreground/50 mb-3 font-sans">Opinion</h4>
            <ul className="space-y-2">
              {["Editorials", "Columnists", "Letters", "Op-Eds"].map((item) => (
                <li key={item}>
                  <Link to="/opinion" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-sans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-overline uppercase text-secondary-foreground/50 mb-3 font-sans">About</h4>
            <ul className="space-y-2">
              {["Our Mission", "Newsroom", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-sans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-overline uppercase text-secondary-foreground/50 mb-3 font-sans">Subscribe</h4>
            <ul className="space-y-2">
              {["Digital Access", "All-Access", "Gift", "Student"].map((item) => (
                <li key={item}>
                  <Link to="/subscribe" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors font-sans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-caption text-secondary-foreground/40 font-sans">
            © 2026 The Meridian. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Accessibility"].map((item) => (
              <Link key={item} to="/" className="text-caption text-secondary-foreground/40 hover:text-secondary-foreground/70 transition-colors font-sans">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
