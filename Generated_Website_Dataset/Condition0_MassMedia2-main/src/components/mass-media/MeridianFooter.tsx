import { Link } from "react-router-dom";

const MeridianFooter = () => {
  return (
    <footer className="bg-meridian-ink mt-16">
      <div className="meridian-container py-12">
        {/* Newsletter signup */}
        <div className="border-b border-primary-foreground/10 pb-10 mb-10">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
              The Morning Briefing
            </h3>
            <p className="font-sans text-sm text-primary-foreground/60 mb-5">
              Get the day's most important stories delivered to your inbox every morning.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-sans text-sm rounded-sm focus:outline-none focus:border-meridian-accent"
              />
              <button className="px-6 py-2.5 bg-meridian-accent text-accent-foreground font-sans font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-meridian-accent-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {[
            { title: "Sections", links: ["World", "Politics", "Tech", "Culture", "Opinion", "Science"] },
            { title: "About", links: ["Our Mission", "Newsroom", "Ethics Policy", "Corrections", "Contact"] },
            { title: "Account", links: ["Subscribe", "Newsletters", "My Account", "Gift Subscriptions"] },
            { title: "More", links: ["Podcasts", "Video", "Events", "Store", "Careers"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-primary-foreground/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/mass-media"
                      className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-xl font-bold text-primary-foreground/60">The Meridian</div>
          <p className="font-sans text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} The Meridian. All rights reserved. Independent journalism since 2012.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MeridianFooter;
