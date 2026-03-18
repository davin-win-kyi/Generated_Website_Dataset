import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? "fill-rating text-rating" : "text-border"}`} />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">({count.toLocaleString()})</span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col">
      <Link to={`/product/${product.id}`} className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-badge-sale text-badge-sale-foreground text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-2 right-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-1 rounded-sm">
            -{discount}%
          </span>
        )}
      </Link>
      <div className="p-3 flex flex-col flex-1">
        <Link to={`/product/${product.id}`} className="text-sm font-medium text-card-foreground line-clamp-2 hover:text-primary transition-colors mb-1">
          {product.name}
        </Link>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <div className="mt-auto pt-2 flex items-end justify-between">
          <div>
            <span className="text-lg font-heading font-bold text-card-foreground">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-1.5 text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); addToCart(product); }}
            className="p-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export { StarRating };
