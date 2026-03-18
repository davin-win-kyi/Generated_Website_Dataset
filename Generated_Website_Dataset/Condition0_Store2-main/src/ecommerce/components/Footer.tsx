import { Link } from "react-router-dom";

const footerLinks = {
  "Shop": ["Electronics", "Kitchen & Home", "Clothing", "Sports & Outdoors", "Today's Deals"],
  "Help": ["Customer Service", "Returns & Exchanges", "Shipping Info", "FAQs", "Contact Us"],
  "About": ["About NovaMart", "Careers", "Press", "Sustainability", "Affiliate Program"],
  "Legal": ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/70">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-primary-foreground mb-3 text-sm">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <Link to="/" className="text-sm hover:text-primary-foreground transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-heading text-xl font-bold text-primary-foreground">
            Nova<span className="text-secondary">Mart</span>
          </span>
          <p className="text-xs">© 2026 NovaMart Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
