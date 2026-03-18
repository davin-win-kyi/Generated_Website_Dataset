import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const footerLinks = [
  {
    heading: "Platform",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Pricing", href: "/pricing" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground" role="contentinfo">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2 font-display text-lg" aria-label="LearnPath home">
              <GraduationCap className="h-6 w-6 text-secondary" aria-hidden="true" />
              <span>LearnPath</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Empowering learners worldwide with structured, high-quality education.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
                {group.heading}
              </h3>
              <ul className="space-y-2" role="list">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} LearnPath. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
