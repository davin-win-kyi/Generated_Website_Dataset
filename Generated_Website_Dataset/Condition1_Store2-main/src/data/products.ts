export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  badge?: "sale" | "new" | "bestseller";
  inStock: boolean;
  description?: string;
  specs?: Record<string, string>;
  colors?: string[];
  sizes?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export const categories = [
  { name: "Electronics", icon: "💻", count: 2450 },
  { name: "Kitchen", icon: "🍳", count: 1820 },
  { name: "Clothing", icon: "👕", count: 3200 },
  { name: "Sports", icon: "⚽", count: 980 },
  { name: "Home & Garden", icon: "🏡", count: 1540 },
  { name: "Books", icon: "📚", count: 4100 },
];

export const products: Product[] = [
  { id: 1, name: "Sony WH-1000XM5 Headphones", price: 279.99, originalPrice: 399.99, image: "", rating: 4.8, reviews: 12453, category: "Electronics", brand: "Sony", badge: "bestseller", inStock: true, description: "Industry-leading noise canceling with Auto NC Optimizer. Crystal clear hands-free calling with 4 beamforming microphones. Up to 30 hours of battery life.", specs: { "Driver Size": "30mm", "Frequency Response": "4Hz-40,000Hz", "Battery Life": "30 hours", "Weight": "250g", "Connectivity": "Bluetooth 5.2" }, colors: ["Black", "Silver", "Midnight Blue"], sizes: [] },
  { id: 2, name: "Apple MacBook Air M3", price: 1099.00, originalPrice: 1299.00, image: "", rating: 4.9, reviews: 8921, category: "Electronics", brand: "Apple", badge: "sale", inStock: true, description: "Supercharged by M3 chip. Up to 18 hours of battery life. Strikingly thin design in four stunning colors.", specs: { "Chip": "Apple M3", "Memory": "8GB", "Storage": "256GB SSD", "Display": "13.6-inch Liquid Retina", "Battery": "Up to 18 hours" }, colors: ["Midnight", "Starlight", "Space Gray", "Silver"], sizes: [] },
  { id: 3, name: "Samsung 65\" 4K Smart TV", price: 547.99, originalPrice: 799.99, image: "", rating: 4.6, reviews: 5632, category: "Electronics", brand: "Samsung", badge: "sale", inStock: true },
  { id: 4, name: "Ninja Foodi 9-in-1 Pressure Cooker", price: 129.99, originalPrice: 179.99, image: "", rating: 4.7, reviews: 23100, category: "Kitchen", brand: "Ninja", badge: "bestseller", inStock: true },
  { id: 5, name: "Nike Air Max 270 Sneakers", price: 89.99, originalPrice: 150.00, image: "", rating: 4.5, reviews: 18700, category: "Clothing", brand: "Nike", badge: "sale", inStock: true },
  { id: 6, name: "KitchenAid Stand Mixer - Artisan", price: 349.99, image: "", rating: 4.9, reviews: 31200, category: "Kitchen", brand: "KitchenAid", badge: "bestseller", inStock: true },
  { id: 7, name: "Adidas Ultraboost Running Shoes", price: 119.99, originalPrice: 189.99, image: "", rating: 4.6, reviews: 9870, category: "Sports", brand: "Adidas", badge: "sale", inStock: true },
  { id: 8, name: "Levi's 501 Original Fit Jeans", price: 49.99, originalPrice: 69.50, image: "", rating: 4.4, reviews: 15400, category: "Clothing", brand: "Levi's", inStock: true },
  { id: 9, name: "Bose QuietComfort Earbuds II", price: 199.99, originalPrice: 279.00, image: "", rating: 4.7, reviews: 7650, category: "Electronics", brand: "Bose", badge: "sale", inStock: true },
  { id: 10, name: "Instant Pot Duo 7-in-1", price: 79.99, originalPrice: 99.99, image: "", rating: 4.8, reviews: 42300, category: "Kitchen", brand: "Instant Pot", badge: "bestseller", inStock: true },
  { id: 11, name: "The North Face Thermoball Jacket", price: 159.99, originalPrice: 220.00, image: "", rating: 4.5, reviews: 6200, category: "Clothing", brand: "The North Face", badge: "sale", inStock: true },
  { id: 12, name: "Dyson V15 Detect Vacuum", price: 599.99, originalPrice: 749.99, image: "", rating: 4.8, reviews: 4500, category: "Home & Garden", brand: "Dyson", badge: "new", inStock: true },
  { id: 13, name: "Under Armour Training Shorts", price: 29.99, image: "", rating: 4.3, reviews: 8900, category: "Sports", brand: "Under Armour", inStock: true },
  { id: 14, name: "Breville Barista Express Espresso", price: 699.99, originalPrice: 849.99, image: "", rating: 4.7, reviews: 11200, category: "Kitchen", brand: "Breville", badge: "sale", inStock: true },
  { id: 15, name: "Sony PlayStation 5", price: 499.99, image: "", rating: 4.9, reviews: 35600, category: "Electronics", brand: "Sony", badge: "bestseller", inStock: false },
  { id: 16, name: "Columbia Fleece Pullover", price: 39.99, originalPrice: 60.00, image: "", rating: 4.4, reviews: 12800, category: "Clothing", brand: "Columbia", badge: "sale", inStock: true },
  { id: 17, name: "Yeti Rambler 20oz Tumbler", price: 35.00, image: "", rating: 4.8, reviews: 28700, category: "Sports", brand: "Yeti", inStock: true },
  { id: 18, name: "iRobot Roomba j7+", price: 399.99, originalPrice: 599.99, image: "", rating: 4.5, reviews: 9100, category: "Home & Garden", brand: "iRobot", badge: "sale", inStock: true },
  { id: 19, name: "Patagonia Better Sweater", price: 99.00, image: "", rating: 4.6, reviews: 7300, category: "Clothing", brand: "Patagonia", badge: "new", inStock: true },
  { id: 20, name: "LG 27\" 4K UHD Monitor", price: 299.99, originalPrice: 449.99, image: "", rating: 4.6, reviews: 6700, category: "Electronics", brand: "LG", badge: "sale", inStock: true },
  { id: 21, name: "Cuisinart 14-Cup Coffee Maker", price: 99.99, originalPrice: 129.99, image: "", rating: 4.5, reviews: 15200, category: "Kitchen", brand: "Cuisinart", badge: "sale", inStock: true },
  { id: 22, name: "Wilson Evolution Basketball", price: 64.99, image: "", rating: 4.8, reviews: 11400, category: "Sports", brand: "Wilson", inStock: true },
  { id: 23, name: "Carhartt Beanie Watch Hat", price: 19.99, image: "", rating: 4.7, reviews: 22100, category: "Clothing", brand: "Carhartt", badge: "bestseller", inStock: true },
  { id: 24, name: "Philips Hue Starter Kit", price: 134.99, originalPrice: 199.99, image: "", rating: 4.5, reviews: 8900, category: "Home & Garden", brand: "Philips", badge: "sale", inStock: true },
  { id: 25, name: "Logitech MX Master 3S Mouse", price: 89.99, originalPrice: 99.99, image: "", rating: 4.7, reviews: 14300, category: "Electronics", brand: "Logitech", inStock: true },
];

export const heroSlides = [
  { title: "Flash Sale: Up to 50% off Electronics", subtitle: "Limited time deals on headphones, laptops, and more", cta: "Shop Electronics", bg: "from-primary to-accent" },
  { title: "New Arrivals in Home & Kitchen", subtitle: "Upgrade your space with the latest kitchen gadgets", cta: "Explore Kitchen", bg: "from-accent to-warning" },
  { title: "Spring Clothing Collection", subtitle: "Fresh styles for the new season starting at $19.99", cta: "Shop Clothing", bg: "from-primary to-primary/80" },
];
