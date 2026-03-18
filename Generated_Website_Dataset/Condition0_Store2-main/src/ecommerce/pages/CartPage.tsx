import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();
  const shipping = subtotal >= 49 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
        <h1 className="text-2xl font-heading font-bold text-foreground mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Continue Shopping <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-heading font-bold text-foreground mb-6">Shopping Cart ({items.length} items)</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.product.id} className="bg-card rounded-lg p-4 flex gap-4 shadow-card">
              <Link to={`/product/${item.product.id}`} className="w-24 h-24 rounded-md overflow-hidden shrink-0">
                <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/product/${item.product.id}`} className="text-sm font-medium text-card-foreground hover:text-primary transition-colors line-clamp-2">
                  {item.product.name}
                </Link>
                {item.selectedColor && <p className="text-xs text-muted-foreground mt-0.5">Color: {item.selectedColor}</p>}
                {item.selectedSize && <p className="text-xs text-muted-foreground">Size: {item.selectedSize}</p>}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-border rounded-md">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2.5 py-1 text-sm text-muted-foreground hover:text-foreground">−</button>
                    <span className="px-3 py-1 text-sm font-medium text-foreground border-x border-border">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2.5 py-1 text-sm text-muted-foreground hover:text-foreground">+</button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-heading font-bold text-card-foreground">${(item.product.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-card rounded-lg p-6 shadow-card sticky top-28 space-y-4">
            <h2 className="font-heading font-bold text-card-foreground text-lg">Order Summary</h2>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-success font-medium">FREE</span> : `$${shipping.toFixed(2)}`}</span>
              </div>
              {shipping > 0 && <p className="text-xs text-primary">Add ${(49 - subtotal).toFixed(2)} more for free shipping!</p>}
            </div>

            {/* Promo code */}
            <div className="flex gap-2">
              <input type="text" placeholder="Promo code" className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md outline-none focus:border-primary text-foreground" />
              <button className="px-4 py-2 text-sm font-medium bg-muted text-foreground rounded-md hover:bg-border transition-colors">Apply</button>
            </div>

            <div className="border-t border-border pt-3 flex justify-between font-heading font-bold text-card-foreground text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-secondary text-secondary-foreground py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity">
              Proceed to Checkout
            </button>

            <Link to="/products" className="block text-center text-sm text-primary font-medium hover:underline">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
