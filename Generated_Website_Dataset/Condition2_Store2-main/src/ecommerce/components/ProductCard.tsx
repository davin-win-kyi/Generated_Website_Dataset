import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <article className="group relative flex flex-col rounded-lg bg-card shadow-nova-sm hover:shadow-nova-md transition-shadow duration-200">
      <Link
        to={`/product/${product.id}`}
        className="relative aspect-square overflow-hidden rounded-t-lg"
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute left-2 top-2 rounded-sm bg-nova-badge px-2 py-0.5 text-xs font-semibold text-primary-foreground">
            {product.badge}
          </span>
        )}
        {discount && !product.badge && (
          <span className="absolute left-2 top-2 rounded-sm bg-nova-success px-2 py-0.5 text-xs font-semibold text-primary-foreground">
            {discount}% Off
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
          <h3 className="text-sm font-medium leading-tight line-clamp-2">{product.name}</h3>
        </Link>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <div className="mt-auto flex items-end justify-between pt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold font-display">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
