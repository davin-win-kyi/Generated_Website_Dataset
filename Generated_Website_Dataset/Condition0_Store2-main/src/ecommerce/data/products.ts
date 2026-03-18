export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  brand: string;
  inStock: boolean;
  badge?: string;
  description?: string;
  specs?: Record<string, string>;
  colors?: string[];
  sizes?: string[];
}

export const products: Product[] = [
  { id: "1", name: "Sony WH-1000XM5 Wireless Headphones", price: 279.99, originalPrice: 399.99, rating: 4.8, reviewCount: 2847, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", category: "Electronics", brand: "Sony", inStock: true, badge: "Best Seller", description: "Industry-leading noise canceling with Auto NC Optimizer. Crystal clear hands-free calling with 4 beamforming microphones. Up to 30-hour battery life with quick charging.", specs: { "Driver Size": "30mm", "Frequency Response": "4Hz-40,000Hz", "Battery Life": "30 hours", "Weight": "250g", "Connectivity": "Bluetooth 5.2" }, colors: ["Black", "Silver", "Midnight Blue"], sizes: [] },
  { id: "2", name: "Apple MacBook Air M3 15-inch", price: 1299.00, originalPrice: 1499.00, rating: 4.9, reviewCount: 1523, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop", category: "Electronics", brand: "Apple", inStock: true, badge: "New Arrival" },
  { id: "3", name: "Samsung 65\" OLED 4K Smart TV", price: 1799.99, originalPrice: 2199.99, rating: 4.7, reviewCount: 892, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop", category: "Electronics", brand: "Samsung", inStock: true, badge: "Flash Deal" },
  { id: "4", name: "Nike Air Max 270 React", price: 149.99, originalPrice: 170.00, rating: 4.5, reviewCount: 3421, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", category: "Clothing", brand: "Nike", inStock: true, colors: ["Black/White", "Blue/Red", "All White"], sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"] },
  { id: "5", name: "Instant Pot Duo Plus 9-in-1", price: 89.99, originalPrice: 129.99, rating: 4.7, reviewCount: 5643, image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop", category: "Kitchen", brand: "Instant Pot", inStock: true, badge: "Top Rated" },
  { id: "6", name: "Levi's 501 Original Fit Jeans", price: 69.50, rating: 4.4, reviewCount: 8921, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop", category: "Clothing", brand: "Levi's", inStock: true, sizes: ["28x30", "30x32", "32x32", "34x34", "36x32"] },
  { id: "7", name: "Dyson V15 Detect Cordless Vacuum", price: 649.99, originalPrice: 749.99, rating: 4.6, reviewCount: 1876, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", category: "Home", brand: "Dyson", inStock: true },
  { id: "8", name: "KitchenAid Stand Mixer Artisan", price: 349.99, originalPrice: 449.99, rating: 4.8, reviewCount: 4532, image: "https://images.unsplash.com/photo-1594385208974-2f8bb07b7445?w=400&h=400&fit=crop", category: "Kitchen", brand: "KitchenAid", inStock: true, badge: "Best Seller" },
  { id: "9", name: "Canon EOS R6 Mark II Camera", price: 2499.00, rating: 4.8, reviewCount: 634, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop", category: "Electronics", brand: "Canon", inStock: true },
  { id: "10", name: "Adidas Ultraboost 23 Running Shoes", price: 189.99, originalPrice: 210.00, rating: 4.6, reviewCount: 2156, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop", category: "Sports", brand: "Adidas", inStock: true, sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"] },
  { id: "11", name: "Bose QuietComfort Earbuds II", price: 199.00, originalPrice: 279.00, rating: 4.5, reviewCount: 1932, image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop", category: "Electronics", brand: "Bose", inStock: true, badge: "Deal" },
  { id: "12", name: "Patagonia Better Sweater Fleece", price: 139.00, rating: 4.7, reviewCount: 3217, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop", category: "Clothing", brand: "Patagonia", inStock: true, colors: ["Navy", "Stone", "Black"], sizes: ["S", "M", "L", "XL"] },
  { id: "13", name: "Ninja Foodi Smart XL Grill", price: 219.99, originalPrice: 279.99, rating: 4.5, reviewCount: 2341, image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop", category: "Kitchen", brand: "Ninja", inStock: true },
  { id: "14", name: "Wilson Pro Staff Tennis Racket", price: 249.00, rating: 4.6, reviewCount: 487, image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=400&fit=crop", category: "Sports", brand: "Wilson", inStock: true },
  { id: "15", name: "Philips Sonicare DiamondClean", price: 169.99, originalPrice: 229.99, rating: 4.4, reviewCount: 3892, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop", category: "Home", brand: "Philips", inStock: true },
  { id: "16", name: "iPad Air M2 11-inch", price: 599.00, rating: 4.8, reviewCount: 2134, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop", category: "Electronics", brand: "Apple", inStock: true, badge: "New" },
  { id: "17", name: "North Face Nuptse Puffer Jacket", price: 320.00, rating: 4.7, reviewCount: 1876, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", category: "Clothing", brand: "The North Face", inStock: true, colors: ["Black", "Navy", "Red"], sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: "18", name: "Breville Barista Express Espresso", price: 699.95, originalPrice: 849.95, rating: 4.6, reviewCount: 2876, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop", category: "Kitchen", brand: "Breville", inStock: true, badge: "Premium" },
  { id: "19", name: "Garmin Forerunner 265 GPS Watch", price: 449.99, rating: 4.7, reviewCount: 1245, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", category: "Sports", brand: "Garmin", inStock: true },
  { id: "20", name: "iRobot Roomba j7+ Self-Emptying", price: 599.99, originalPrice: 799.99, rating: 4.3, reviewCount: 3421, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop", category: "Home", brand: "iRobot", inStock: true, badge: "25% Off" },
  { id: "21", name: "JBL Charge 5 Portable Speaker", price: 149.95, originalPrice: 179.95, rating: 4.7, reviewCount: 4532, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", category: "Electronics", brand: "JBL", inStock: true },
  { id: "22", name: "Under Armour HOVR Phantom 3", price: 159.99, rating: 4.4, reviewCount: 876, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", category: "Sports", brand: "Under Armour", inStock: true, sizes: ["US 8", "US 9", "US 10", "US 11"] },
  { id: "23", name: "Le Creuset Dutch Oven 5.5 Qt", price: 379.95, rating: 4.9, reviewCount: 6234, image: "https://images.unsplash.com/photo-1556909114-44e3e9399e2b?w=400&h=400&fit=crop", category: "Kitchen", brand: "Le Creuset", inStock: true, badge: "Top Pick", colors: ["Cerise", "Marseille", "White"] },
  { id: "24", name: "Casper Original Hybrid Mattress Queen", price: 1295.00, originalPrice: 1595.00, rating: 4.5, reviewCount: 2341, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop", category: "Home", brand: "Casper", inStock: true },
];

export const categories = ["Electronics", "Kitchen", "Clothing", "Sports", "Home"];
export const brands = [...new Set(products.map(p => p.brand))];
