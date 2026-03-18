import { useState } from "react";
import { Package, MapPin, CreditCard, Heart, Settings, ChevronRight, User } from "lucide-react";

const sections = [
  { id: "orders", label: "Order History", icon: Package },
  { id: "addresses", label: "Saved Addresses", icon: MapPin },
  { id: "payment", label: "Payment Methods", icon: CreditCard },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "settings", label: "Account Settings", icon: Settings },
] as const;

type SectionId = typeof sections[number]["id"];

const mockOrders = [
  { id: "NM-20260301", date: "Mar 1, 2026", status: "Delivered", total: 329.98, items: 2 },
  { id: "NM-20260215", date: "Feb 15, 2026", status: "Shipped", total: 89.99, items: 1 },
  { id: "NM-20260128", date: "Jan 28, 2026", status: "Delivered", total: 1549.00, items: 3 },
];

export default function AccountPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("orders");

  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
          <User className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">My Account</h1>
          <p className="text-sm text-muted-foreground">alex.johnson@email.com</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <nav className="space-y-1">
            {sections.map(s => (
              <button key={s.id} onClick={() => setActiveSection(s.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === s.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
                <s.icon className="w-4 h-4" />
                {s.label}
                <ChevronRight className="w-3.5 h-3.5 ml-auto" />
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeSection === "orders" && (
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-lg text-foreground">Order History</h2>
              {mockOrders.map(order => (
                <div key={order.id} className="bg-card rounded-lg p-5 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-card-foreground">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.date} · {order.items} items</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${order.status === "Delivered" ? "bg-success/10 text-success" : "bg-primary/10 text-primary"}`}>
                      {order.status}
                    </span>
                    <span className="font-heading font-bold text-card-foreground">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === "addresses" && (
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-lg text-foreground">Saved Addresses</h2>
              {[
                { label: "Home", address: "123 Main Street, Apt 4B, New York, NY 10001", default: true },
                { label: "Work", address: "456 Business Ave, Suite 200, New York, NY 10018", default: false },
              ].map(a => (
                <div key={a.label} className="bg-card rounded-lg p-5 shadow-card flex items-start justify-between">
                  <div>
                    <p className="font-medium text-card-foreground flex items-center gap-2">
                      {a.label}
                      {a.default && <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">Default</span>}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{a.address}</p>
                  </div>
                  <button className="text-sm text-primary hover:underline">Edit</button>
                </div>
              ))}
              <button className="text-sm text-primary font-medium hover:underline">+ Add New Address</button>
            </div>
          )}

          {activeSection === "payment" && (
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-lg text-foreground">Payment Methods</h2>
              <div className="bg-card rounded-lg p-5 shadow-card flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold text-muted-foreground">VISA</div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">•••• •••• •••• 4242</p>
                    <p className="text-xs text-muted-foreground">Expires 08/2027</p>
                  </div>
                </div>
                <button className="text-sm text-primary hover:underline">Edit</button>
              </div>
              <button className="text-sm text-primary font-medium hover:underline">+ Add Payment Method</button>
            </div>
          )}

          {activeSection === "wishlist" && (
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-lg text-foreground">Wishlist</h2>
              <p className="text-sm text-muted-foreground">Your wishlist is empty. Start adding items you love!</p>
            </div>
          )}

          {activeSection === "settings" && (
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-lg text-foreground">Account Settings</h2>
              <div className="max-w-md space-y-4">
                {[
                  { label: "Full Name", value: "Alex Johnson" },
                  { label: "Email", value: "alex.johnson@email.com" },
                  { label: "Phone", value: "+1 (555) 123-4567" },
                ].map(field => (
                  <div key={field.label}>
                    <label className="text-sm font-medium text-foreground block mb-1">{field.label}</label>
                    <input type="text" defaultValue={field.value} className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-lg outline-none focus:border-primary text-foreground" />
                  </div>
                ))}
                <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
