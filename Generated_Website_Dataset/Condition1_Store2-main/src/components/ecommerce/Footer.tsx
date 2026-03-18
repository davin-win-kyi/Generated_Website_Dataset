import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-4">
              Nova<span className="text-accent">Mart</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your one-stop marketplace for electronics, home goods, and apparel. Quality products, great prices.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Shop</h4>
            <nav aria-label="Shop links">
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                {["Electronics", "Kitchen", "Clothing", "Sports", "Home & Garden"].map(c => (
                  <li key={c}><Link to={`/products?category=${c}`} className="hover:text-accent transition-colors focus-ring rounded-sm">{c}</Link></li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Help Center", "Returns & Refunds", "Shipping Info", "Contact Us", "FAQ"].map(l => (
                <li key={l}><button className="hover:text-accent transition-colors focus-ring rounded-sm">{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["About Us", "Careers", "Press", "Privacy Policy", "Terms of Service"].map(l => (
                <li key={l}><button className="hover:text-accent transition-colors focus-ring rounded-sm">{l}</button></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2026 NovaMart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
