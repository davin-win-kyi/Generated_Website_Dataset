import { useState } from "react";
import { Package, MapPin, CreditCard, Heart, Settings, ChevronRight } from "lucide-react";
import Layout from "../components/Layout";
import { products } from "../data/products";

type Section = "orders" | "addresses" | "payment" | "wishlist" | "settings";

const sections: { id: Section; label: string; icon: typeof Package }[] = [
  { id: "orders", label: "Order History", icon: Package },
  { id: "addresses", label: "Saved Addresses", icon: MapPin },
  { id: "payment", label: "Payment Methods", icon: CreditCard },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "settings", label: "Account Settings", icon: Settings },
];

const mockOrders = [
  { id: "NM-20260301", date: "Mar 1, 2026", status: "Delivered", total: 349.98, items: 2 },
  { id: "NM-20260215", date: "Feb 15, 2026", status: "Delivered", total: 129.99, items: 1 },
  { id: "NM-20260128", date: "Jan 28, 2026", status: "Delivered", total: 599.00, items: 1 },
];

const mockAddresses = [
  { id: 1, label: "Home", name: "Alex Johnson", line1: "123 Main St", line2: "Apt 4B", city: "New York", state: "NY", zip: "10001", default: true },
  { id: 2, label: "Work", name: "Alex Johnson", line1: "456 Business Ave", line2: "Suite 200", city: "New York", state: "NY", zip: "10016", default: false },
];

const wishlistItems = products.slice(0, 4);

export default function AccountPage() {
  const [active, setActive] = useState<Section>("orders");

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="font-display text-3xl font-bold mb-8">My Account</h1>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar nav */}
          <nav aria-label="Account sections" className="lg:col-span-1">
            <div className="rounded-lg bg-card p-4 shadow-nova-sm">
              <div className="mb-4 pb-4 border-b border-border">
                <p className="font-display font-semibold">Alex Johnson</p>
                <p className="text-sm text-muted-foreground">alex.johnson@email.com</p>
              </div>
              <ul className="space-y-1">
                {sections.map(({ id, label, icon: Icon }) => (
                  <li key={id}>
                    <button
                      onClick={() => setActive(id)}
                      className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        active === id
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      }`}
                      aria-current={active === id ? "page" : undefined}
                    >
                      <Icon size={18} aria-hidden="true" />
                      {label}
                      <ChevronRight size={14} className="ml-auto opacity-40" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Content */}
          <section aria-label={sections.find((s) => s.id === active)?.label} className="lg:col-span-3">
            {active === "orders" && (
              <div>
                <h2 className="font-display text-xl font-bold mb-4">Order History</h2>
                <div className="space-y-3">
                  {mockOrders.map((order) => (
                    <article key={order.id} className="flex items-center justify-between rounded-lg bg-card p-4 shadow-nova-sm">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date} · {order.items} {order.items === 1 ? "item" : "items"}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-display font-bold">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-nova-success font-medium">{order.status}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {active === "addresses" && (
              <div>
                <h2 className="font-display text-xl font-bold mb-4">Saved Addresses</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {mockAddresses.map((addr) => (
                    <article key={addr.id} className="rounded-lg bg-card p-4 shadow-nova-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{addr.label}</span>
                        {addr.default && (
                          <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Default</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{addr.name}</p>
                      <p className="text-sm text-muted-foreground">{addr.line1}</p>
                      {addr.line2 && <p className="text-sm text-muted-foreground">{addr.line2}</p>}
                      <p className="text-sm text-muted-foreground">{addr.city}, {addr.state} {addr.zip}</p>
                      <div className="mt-3 flex gap-3">
                        <button className="text-sm text-primary hover:underline">Edit</button>
                        <button className="text-sm text-destructive hover:underline">Delete</button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {active === "payment" && (
              <div>
                <h2 className="font-display text-xl font-bold mb-4">Payment Methods</h2>
                <article className="rounded-lg bg-card p-4 shadow-nova-sm max-w-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Visa •••• 4242</span>
                    <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Default</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Expires 12/2027</p>
                  <div className="mt-3 flex gap-3">
                    <button className="text-sm text-primary hover:underline">Edit</button>
                    <button className="text-sm text-destructive hover:underline">Remove</button>
                  </div>
                </article>
                <button className="mt-4 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
                  + Add Payment Method
                </button>
              </div>
            )}

            {active === "wishlist" && (
              <div>
                <h2 className="font-display text-xl font-bold mb-4">Wishlist</h2>
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                  {wishlistItems.map((product) => (
                    <article key={product.id} className="rounded-lg bg-card p-3 shadow-nova-sm">
                      <img src={product.image} alt={product.name} className="aspect-square w-full rounded-md object-cover mb-2" loading="lazy" />
                      <p className="text-sm font-medium line-clamp-2">{product.name}</p>
                      <p className="font-display font-bold mt-1">${product.price.toFixed(2)}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {active === "settings" && (
              <div>
                <h2 className="font-display text-xl font-bold mb-4">Account Settings</h2>
                <div className="max-w-md space-y-4">
                  <div>
                    <label htmlFor="settings-name" className="text-sm font-medium mb-1 block">Full Name</label>
                    <input
                      id="settings-name"
                      type="text"
                      defaultValue="Alex Johnson"
                      className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="settings-email" className="text-sm font-medium mb-1 block">Email</label>
                    <input
                      id="settings-email"
                      type="email"
                      defaultValue="alex.johnson@email.com"
                      className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="settings-phone" className="text-sm font-medium mb-1 block">Phone</label>
                    <input
                      id="settings-phone"
                      type="tel"
                      defaultValue="(555) 123-4567"
                      className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <button className="rounded-lg bg-primary px-6 py-2.5 font-display font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
}
