import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingCart, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/ecommerce/Header";
import Footer from "@/components/ecommerce/Footer";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { products } from "@/data/products";

const CartPage = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const shipping = totalPrice > 50 ? 0 : 5.99;
  const discount = promoApplied ? totalPrice * 0.1 : 0;
  const total = totalPrice - discount + shipping;

  // If cart empty, pre-populate with demo items
  const showEmpty = items.length === 0;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-8">Shopping Cart</h1>

        {showEmpty ? (
          <div className="text-center py-20">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors focus-ring">
              Continue Shopping <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b border-border px-4">
                <span className="col-span-6">Product</span>
                <span className="col-span-2 text-center">Quantity</span>
                <span className="col-span-2 text-right">Price</span>
                <span className="col-span-2 text-right">Total</span>
              </div>

              {items.map((item) => (
                <article key={item.product.id} className="bg-card rounded-lg border border-border p-4" aria-label={`${item.product.name} in cart`}>
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Product info */}
                    <div className="col-span-12 md:col-span-6 flex gap-4">
                      <Link to={`/product/${item.product.id}`} className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center text-2xl shrink-0 focus-ring" aria-label={`View ${item.product.name}`}>
                        {item.product.category === "Electronics" ? "💻" : item.product.category === "Kitchen" ? "🍳" : "👕"}
                      </Link>
                      <div className="min-w-0">
                        <Link to={`/product/${item.product.id}`} className="focus-ring rounded-sm">
                          <h3 className="font-display font-semibold text-sm text-card-foreground hover:text-accent transition-colors line-clamp-2">{item.product.name}</h3>
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">{item.product.brand}</p>
                        {item.selectedColor && <p className="text-xs text-muted-foreground">Color: {item.selectedColor}</p>}
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-4 md:col-span-2 flex items-center justify-center" role="group" aria-label={`Quantity for ${item.product.name}`}>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="h-8 w-8 rounded-l-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors focus-ring"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="h-8 w-10 border-y border-border flex items-center justify-center text-sm font-medium" aria-live="polite">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-8 w-8 rounded-r-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors focus-ring"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="col-span-4 md:col-span-2 text-right">
                      <span className="text-sm font-medium">${item.product.price.toFixed(2)}</span>
                      {item.product.originalPrice && (
                        <span className="block text-xs text-muted-foreground line-through">${item.product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>

                    {/* Total + remove */}
                    <div className="col-span-4 md:col-span-2 text-right flex items-center justify-end gap-2">
                      <span className="font-display font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="h-8 w-8 flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors focus-ring rounded-lg"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              <Link to="/products" className="inline-flex items-center gap-2 text-sm text-accent hover:underline focus-ring rounded-sm mt-4">
                <ArrowRight className="h-4 w-4 rotate-180" /> Continue Shopping
              </Link>
            </div>

            {/* Order summary */}
            <aside className="lg:col-span-1" aria-label="Order summary">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24 space-y-4">
                <h2 className="font-display font-bold text-lg">Order Summary</h2>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={`font-medium ${shipping === 0 ? "text-success" : ""}`}>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-success">
                      <span>Promo (10% off)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                {/* Promo code */}
                <div>
                  <label htmlFor="promo-input" className="text-sm font-medium block mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      id="promo-input"
                      type="text"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 h-10 px-3 rounded-lg border border-border bg-background text-sm focus-ring"
                    />
                    <button
                      onClick={() => {
                        if (promoCode.toLowerCase() === "nova50") setPromoApplied(true);
                      }}
                      className="h-10 px-4 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors focus-ring"
                    >
                      <Tag className="h-4 w-4" />
                    </button>
                  </div>
                  {promoApplied && <p className="text-xs text-success mt-1">Code NOVA50 applied!</p>}
                </div>

                <div className="border-t border-border pt-4 flex justify-between">
                  <span className="font-display font-bold text-lg">Total</span>
                  <span className="font-display font-bold text-lg">${total.toFixed(2)}</span>
                </div>

                <button className="w-full h-12 rounded-lg bg-accent text-accent-foreground font-display font-semibold hover:bg-accent/90 transition-colors focus-ring text-lg">
                  Proceed to Checkout
                </button>
                <p className="text-xs text-center text-muted-foreground">Secure checkout powered by Stripe</p>
              </div>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
