import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">City of Lakewood</h3>
            <address className="not-italic text-sm opacity-80 leading-relaxed">
              480 S. Allison Parkway<br />
              Lakewood, CO 80226<br />
              Phone: (555) 555-0100<br />
              Fax: (555) 555-0199
            </address>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Quick Links</h4>
            <nav aria-label="Footer quick links">
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="opacity-80 hover:opacity-100 hover:underline focus-visible:underline">All Services</Link></li>
                <li><Link to="/services/permits" className="opacity-80 hover:opacity-100 hover:underline focus-visible:underline">Permits & Licenses</Link></li>
                <li><Link to="/services/pay-bill" className="opacity-80 hover:opacity-100 hover:underline focus-visible:underline">Pay a Bill</Link></li>
                <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:underline focus-visible:underline">About Lakewood</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Resources</h4>
            <nav aria-label="Footer resources">
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="opacity-80 hover:opacity-100 hover:underline focus-visible:underline">Contact Us</Link></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline focus-visible:underline">Accessibility</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline focus-visible:underline">Privacy Policy</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline focus-visible:underline">Terms of Use</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Connect With Us</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors focus-visible:outline-ring" aria-label="Facebook">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors focus-visible:outline-ring" aria-label="Twitter">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors focus-visible:outline-ring" aria-label="YouTube">
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors focus-visible:outline-ring" aria-label="Email newsletter">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <p className="text-sm opacity-70 mt-4">Sign up for city alerts and newsletters.</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} City of Lakewood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
