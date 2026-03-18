import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import StarRating from "./StarRating";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <article className="group bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-square bg-secondary overflow-hidden focus-ring"
        aria-label={`View ${product.name}`}
      >
        {/* Placeholder product image */}
        <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-secondary to-muted" aria-hidden="true">
          {product.category === "Electronics" ? "💻" : product.category === "Kitchen" ? "🍳" : product.category === "Clothing" ? "👕" : product.category === "Sports" ? "⚽" : "🏡"}
        </div>
        {product.badge && (
          <span
            className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-md ${
              product.badge === "sale"
                ? "bg-badge-sale text-badge-sale-foreground"
                : product.badge === "new"
                ? "bg-badge-new text-badge-new-foreground"
                : "bg-accent text-accent-foreground"
            }`}
          >
            {product.badge === "sale" ? `-${discount}%` : product.badge === "new" ? "NEW" : "BEST"}
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <span className="bg-card text-card-foreground font-semibold px-4 py-2 rounded-lg text-sm">Out of Stock</span>
          </div>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.brand}</p>
        <Link to={`/product/${product.id}`} className="focus-ring rounded-sm">
          <h3 className="font-display font-semibold text-sm leading-tight text-card-foreground group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} reviews={product.reviews} />
        <div className="mt-auto pt-2 flex items-end justify-between">
          <div>
            <span className="text-lg font-display font-bold text-card-foreground">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          {product.inStock && (
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="h-9 w-9 flex items-center justify-center rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors focus-ring"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
