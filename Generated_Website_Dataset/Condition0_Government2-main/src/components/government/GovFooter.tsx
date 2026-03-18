import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const GovFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="gov-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
                <span className="font-heading text-sm font-bold text-primary">CL</span>
              </div>
              <span className="font-heading text-lg font-bold">City of Lakewood</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Serving approximately 160,000 residents with transparency, efficiency, and dedication to community well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-bold mb-4 uppercase tracking-wider opacity-70">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="opacity-80 hover:opacity-100 hover:underline transition-opacity">All Services</Link></li>
              <li><Link to="/services/permits" className="opacity-80 hover:opacity-100 hover:underline transition-opacity">Permits & Licenses</Link></li>
              <li><Link to="/services/pay-bill" className="opacity-80 hover:opacity-100 hover:underline transition-opacity">Pay a Bill</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:underline transition-opacity">About Lakewood</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold mb-4 uppercase tracking-wider opacity-70">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
                <span className="opacity-80">480 S. Allison Pkwy<br />Lakewood, CO 80226</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-80">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-80">info@lakewood.gov</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-sm font-bold mb-4 uppercase tracking-wider opacity-70">Office Hours</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Monday – Friday</li>
              <li>8:00 AM – 5:00 PM</li>
              <li className="pt-2">Emergency Services</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <p>© 2026 City of Lakewood. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:opacity-100 cursor-pointer">Privacy Policy</span>
            <span className="hover:opacity-100 cursor-pointer">Terms of Use</span>
            <span className="hover:opacity-100 cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GovFooter;
