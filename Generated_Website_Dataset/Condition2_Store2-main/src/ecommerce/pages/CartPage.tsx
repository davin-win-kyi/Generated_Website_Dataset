import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, Tag } from "lucide-react";
import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const shipping = subtotal >= 50 ? 0 : 5.99;
  const promoDiscount = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - promoDiscount;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "SAVE10") {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code. Try SAVE10 for 10% off.");
      setPromoApplied(false);
    }
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added anything yet.</p>
          <Link
            to="/products"
            className="inline-flex rounded-lg bg-primary px-6 py-3 font-display font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="font-display text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <section aria-label="Cart items" className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <article
                key={item.id}
                className="flex gap-4 rounded-lg bg-card p-4 shadow-nova-sm"
              >
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-md object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <Link to={`/product/${item.id}`} className="font-medium hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">{item.brand}</p>
                    </div>
                    <span className="font-display font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1" role="group" aria-label={`Quantity for ${item.name}`}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-border hover:bg-muted disabled:opacity-40 transition-colors"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus size={14} aria-hidden="true" />
                      </button>
                      <span className="flex h-8 w-10 items-center justify-center text-sm font-medium" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-border hover:bg-muted transition-colors"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus size={14} aria-hidden="true" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-1 text-sm text-destructive hover:underline"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 size={14} aria-hidden="true" />
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Order Summary */}
          <aside aria-label="Order summary" className="rounded-lg bg-card p-6 shadow-nova-sm h-fit sticky top-28">
            <h2 className="font-display text-xl font-bold mb-4">Order Summary</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="font-medium">${subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-nova-success">
                  <dt>Promo (SAVE10)</dt>
                  <dd className="font-medium">-${promoDiscount.toFixed(2)}</dd>
                </div>
              )}
              <div className="border-t border-border pt-3 flex justify-between text-base font-bold">
                <dt>Total</dt>
                <dd>${total.toFixed(2)}</dd>
              </div>
            </dl>

            {/* Promo Code */}
            <div className="mt-6">
              <label htmlFor="promo-code" className="text-sm font-medium flex items-center gap-1 mb-2">
                <Tag size={14} aria-hidden="true" /> Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  id="promo-code"
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter code"
                  className="h-10 flex-1 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-describedby={promoError ? "promo-error" : undefined}
                  aria-invalid={!!promoError}
                />
                <button
                  onClick={handleApplyPromo}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Apply
                </button>
              </div>
              {promoError && (
                <p id="promo-error" className="mt-1 text-xs text-destructive" role="alert">
                  {promoError}
                </p>
              )}
            </div>

            <button className="mt-6 w-full rounded-lg bg-primary py-3 font-display font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              Proceed to Checkout
            </button>

            <Link to="/products" className="mt-3 block text-center text-sm text-primary hover:underline">
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
