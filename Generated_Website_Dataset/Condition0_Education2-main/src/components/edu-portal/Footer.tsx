import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Browse Courses", to: "/courses" },
      { label: "Pricing", to: "/pricing" },
      { label: "Dashboard", to: "/dashboard" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Study Tools", to: "/study" },
      { label: "Blog", to: "#" },
      { label: "Help Center", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "#" },
      { label: "Careers", to: "#" },
      { label: "Contact", to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-display font-bold text-foreground">LearnPath</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering learners worldwide with structured, expert-led courses.
            </p>
          </div>
          {footerSections.map((s) => (
            <div key={s.title}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-3">{s.title}</h4>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">© 2026 LearnPath. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary">Privacy</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
