import { useState } from "react";
import { Package, MapPin, CreditCard, Heart, Settings, ChevronRight, LogOut } from "lucide-react";
import Header from "@/components/ecommerce/Header";
import Footer from "@/components/ecommerce/Footer";

const sections = [
  { id: "orders", label: "Order History", icon: Package },
  { id: "addresses", label: "Saved Addresses", icon: MapPin },
  { id: "payment", label: "Payment Methods", icon: CreditCard },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "settings", label: "Account Settings", icon: Settings },
] as const;

type SectionId = typeof sections[number]["id"];

const mockOrders = [
  { id: "NM-20260301", date: "Mar 1, 2026", status: "Delivered", items: 3, total: 249.97 },
  { id: "NM-20260215", date: "Feb 15, 2026", status: "Shipped", items: 1, total: 599.99 },
  { id: "NM-20260128", date: "Jan 28, 2026", status: "Delivered", items: 5, total: 147.45 },
];

const mockAddresses = [
  { id: 1, label: "Home", name: "Jordan Smith", address: "123 Maple Street, Apt 4B, New York, NY 10001", phone: "(555) 123-4567", isDefault: true },
  { id: 2, label: "Work", name: "Jordan Smith", address: "456 Corporate Blvd, Suite 200, New York, NY 10016", phone: "(555) 987-6543", isDefault: false },
];

const AccountPage = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("orders");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-8">My Account</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar nav */}
          <nav className="md:col-span-1" aria-label="Account sections">
            <div className="bg-card rounded-lg border border-border p-4 space-y-1">
              <div className="p-3 mb-3">
                <p className="font-display font-bold text-card-foreground">Jordan Smith</p>
                <p className="text-sm text-muted-foreground">jordan@example.com</p>
              </div>
              {sections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors focus-ring ${
                    activeSection === id ? "bg-accent/10 text-accent font-medium" : "text-card-foreground hover:bg-secondary"
                  }`}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {label}
                  <ChevronRight className="h-3 w-3 ml-auto" aria-hidden="true" />
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-colors focus-ring mt-4">
                <LogOut className="h-4 w-4" aria-hidden="true" />
                Sign Out
              </button>
            </div>
          </nav>

          {/* Content */}
          <div className="md:col-span-3">
            {activeSection === "orders" && (
              <section aria-labelledby="orders-heading">
                <h2 id="orders-heading" className="font-display text-xl font-bold mb-4">Order History</h2>
                <div className="space-y-3">
                  {mockOrders.map((order) => (
                    <article key={order.id} className="bg-card rounded-lg border border-border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <p className="font-display font-semibold text-card-foreground">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date} · {order.items} items</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${order.status === "Delivered" ? "bg-success/10 text-success" : "bg-accent/10 text-accent"}`}>
                          {order.status}
                        </span>
                        <span className="font-display font-semibold">${order.total.toFixed(2)}</span>
                        <button className="text-sm text-accent hover:underline focus-ring rounded-sm">Details</button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {activeSection === "addresses" && (
              <section aria-labelledby="addr-heading">
                <h2 id="addr-heading" className="font-display text-xl font-bold mb-4">Saved Addresses</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {mockAddresses.map((addr) => (
                    <article key={addr.id} className={`bg-card rounded-lg border p-4 ${addr.isDefault ? "border-accent" : "border-border"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-display font-semibold text-sm">{addr.label}</span>
                        {addr.isDefault && <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">Default</span>}
                      </div>
                      <p className="text-sm text-card-foreground">{addr.name}</p>
                      <p className="text-sm text-muted-foreground">{addr.address}</p>
                      <p className="text-sm text-muted-foreground">{addr.phone}</p>
                      <div className="mt-3 flex gap-3">
                        <button className="text-sm text-accent hover:underline focus-ring rounded-sm">Edit</button>
                        <button className="text-sm text-destructive hover:underline focus-ring rounded-sm">Remove</button>
                      </div>
                    </article>
                  ))}
                  <button className="rounded-lg border-2 border-dashed border-border p-4 flex items-center justify-center text-sm text-muted-foreground hover:border-accent hover:text-accent transition-colors focus-ring h-full min-h-[120px]">
                    + Add New Address
                  </button>
                </div>
              </section>
            )}

            {activeSection === "payment" && (
              <section aria-labelledby="payment-heading">
                <h2 id="payment-heading" className="font-display text-xl font-bold mb-4">Payment Methods</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <article className="bg-card rounded-lg border border-accent p-4">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-display font-semibold text-sm">Visa •••• 4242</span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">Default</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Expires 08/2027</p>
                    <p className="text-sm text-muted-foreground">Jordan Smith</p>
                  </article>
                  <button className="rounded-lg border-2 border-dashed border-border p-4 flex items-center justify-center text-sm text-muted-foreground hover:border-accent hover:text-accent transition-colors focus-ring min-h-[100px]">
                    + Add Payment Method
                  </button>
                </div>
              </section>
            )}

            {activeSection === "wishlist" && (
              <section aria-labelledby="wish-heading">
                <h2 id="wish-heading" className="font-display text-xl font-bold mb-4">Wishlist</h2>
                <p className="text-muted-foreground text-sm mb-4">Items you've saved for later</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Just show a few placeholder items */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card rounded-lg border border-border p-4">
                      <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center text-3xl mb-3">💻</div>
                      <p className="font-display font-semibold text-sm line-clamp-1">Saved Product {i}</p>
                      <p className="text-accent font-semibold mt-1">$99.99</p>
                      <button className="w-full mt-3 h-9 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors focus-ring">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeSection === "settings" && (
              <section aria-labelledby="settings-heading">
                <h2 id="settings-heading" className="font-display text-xl font-bold mb-4">Account Settings</h2>
                <div className="bg-card rounded-lg border border-border p-6 space-y-6 max-w-lg">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium block mb-1.5">Full Name</label>
                    <input id="name" type="text" defaultValue="Jordan Smith" className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus-ring" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium block mb-1.5">Email</label>
                    <input id="email" type="email" defaultValue="jordan@example.com" className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus-ring" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium block mb-1.5">Phone</label>
                    <input id="phone" type="tel" defaultValue="(555) 123-4567" className="w-full h-10 px-3 rounded-lg border border-border bg-background text-sm focus-ring" />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button className="h-10 px-6 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-colors focus-ring">Save Changes</button>
                    <button className="h-10 px-6 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors focus-ring">Change Password</button>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountPage;
