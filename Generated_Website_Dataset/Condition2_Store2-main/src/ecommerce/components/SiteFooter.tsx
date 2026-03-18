import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground" role="contentinfo">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-display text-lg font-bold mb-4">NovaMart</h2>
            <p className="text-sm opacity-80">Your trusted online marketplace for electronics, home goods, and apparel.</p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=electronics" className="opacity-80 hover:opacity-100 transition-opacity">Electronics</Link></li>
              <li><Link to="/products?category=kitchen" className="opacity-80 hover:opacity-100 transition-opacity">Kitchen</Link></li>
              <li><Link to="/products?category=clothing" className="opacity-80 hover:opacity-100 transition-opacity">Clothing</Link></li>
              <li><Link to="/products?category=sports" className="opacity-80 hover:opacity-100 transition-opacity">Sports</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/account" className="opacity-80 hover:opacity-100 transition-opacity">My Account</Link></li>
              <li><Link to="/cart" className="opacity-80 hover:opacity-100 transition-opacity">Cart</Link></li>
              <li><Link to="/account" className="opacity-80 hover:opacity-100 transition-opacity">Order History</Link></li>
              <li><Link to="/account" className="opacity-80 hover:opacity-100 transition-opacity">Wishlist</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="opacity-80">Contact Us</span></li>
              <li><span className="opacity-80">Shipping Info</span></li>
              <li><span className="opacity-80">Returns & Exchanges</span></li>
              <li><span className="opacity-80">FAQ</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-secondary-foreground/20 pt-6 text-center text-xs opacity-60">
          <p>© 2026 NovaMart. All rights reserved. This is a demo website.</p>
        </div>
      </div>
    </footer>
  );
}
