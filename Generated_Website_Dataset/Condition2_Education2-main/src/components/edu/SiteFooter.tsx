import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Browse Courses", href: "/courses" },
      { label: "Pricing", href: "/pricing" },
      { label: "For Teams", href: "/pricing" },
      { label: "Enterprise", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/" },
      { label: "Help Center", href: "/" },
      { label: "Community", href: "/" },
      { label: "Webinars", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Press", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="LearnPath home">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                <span className="font-display text-sm font-bold text-secondary-foreground" aria-hidden="true">LP</span>
              </span>
              <span className="font-display text-xl font-bold">LearnPath</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Empowering millions of learners worldwide with structured, high-quality education.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-display font-semibold text-sm mb-4">{group.title}</h3>
              <ul className="space-y-2.5" role="list">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} LearnPath. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Privacy</Link>
            <Link to="/" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Terms</Link>
            <Link to="/" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
