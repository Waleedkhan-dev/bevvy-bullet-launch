export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  badge?: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  features: string[];
  specifications: Record<string, string>;
  tier?: string;
  remaining?: number;
  total?: number;
}

export const products: Product[] = [
  {
    id: "founder-single",
    name: "Bevvy Bullet - Founders Edition",
    slug: "bevvy-bullet-founders",
    price: 37,
    originalPrice: 67,
    description:
      "The exclusive Founders Edition Bevvy Bullet - limited to the first 100 backers. Features a Gold finish, unique serial number, and lifetime 20% discount on all future purchases. The world's only foam football that delivers drinks across tailgates, pools, and parties.",
    shortDescription: "Gold Edition - First 100 backers only. 45% off retail.",
    images: ["/placeholder.svg"],
    category: "founders",
    badge: "FOUNDERS - 45% OFF",
    inStock: true,
    rating: 5,
    reviewCount: 0,
    features: [
      "Gold Bevvy Bullet Edition",
      "Founder Serial Number",
      "Lifetime 20% Discount",
      "Exclusive Founders Discord",
      "Floats on water",
      "Fits 12-16oz cans/bottles",
    ],
    specifications: {
      Material: "Premium Foam",
      Dimensions: '11" x 6.5"',
      Weight: "8 oz",
      Fits: "12-16oz cans/bottles",
      Floats: "Yes",
      Edition: "Gold Founders",
    },
    tier: "founders",
    remaining: 23,
    total: 100,
  },
  {
    id: "founder-3pack",
    name: "Bevvy Bullet 3-Pack - Founders Edition",
    slug: "bevvy-bullet-founders-3pack",
    price: 105,
    originalPrice: 201,
    description:
      "Three Founders Edition Bevvy Bullets at the best value. Perfect for you and your crew. Each features a Gold finish, unique serial number, and lifetime 20% discount.",
    shortDescription: "3 Gold Founders Editions - $35 each. Best value.",
    images: ["/placeholder.svg"],
    category: "founders",
    badge: "FOUNDERS 3-PACK",
    inStock: true,
    rating: 5,
    reviewCount: 0,
    features: [
      "3x Gold Bevvy Bullets",
      "Each with unique serial number",
      "Lifetime 20% Discount",
      "Exclusive Founders Discord",
      "Save $96 vs retail",
    ],
    specifications: {
      Quantity: "3 units",
      Material: "Premium Foam",
      Fits: "12-16oz cans/bottles",
      Edition: "Gold Founders",
      Savings: "$96 off retail",
    },
    tier: "founders",
    remaining: 23,
    total: 100,
  },
  {
    id: "super-early-bird-single",
    name: "Bevvy Bullet - Super Early Bird",
    slug: "bevvy-bullet-super-early-bird",
    price: 42,
    originalPrice: 67,
    description:
      "Super Early Bird Edition for our next 400 backers. Features a Silver finish, Early Supporter badge, and lifetime 15% discount on future purchases.",
    shortDescription: "Silver Edition - Next 400 backers. 37% off retail.",
    images: ["/placeholder.svg"],
    category: "early-bird",
    badge: "SUPER EARLY BIRD - 37% OFF",
    inStock: true,
    rating: 5,
    reviewCount: 0,
    features: [
      "Silver Bevvy Bullet Edition",
      "Early Supporter Badge",
      "Lifetime 15% Discount",
      "Floats on water",
      "Fits 12-16oz cans/bottles",
    ],
    specifications: {
      Material: "Premium Foam",
      Dimensions: '11" x 6.5"',
      Weight: "8 oz",
      Fits: "12-16oz cans/bottles",
      Floats: "Yes",
      Edition: "Silver",
    },
    tier: "super-early-bird",
    remaining: 287,
    total: 400,
  },
  {
    id: "super-early-bird-3pack",
    name: "Bevvy Bullet 3-Pack - Super Early Bird",
    slug: "bevvy-bullet-super-early-bird-3pack",
    price: 120,
    originalPrice: 201,
    description:
      "Three Super Early Bird Edition Bevvy Bullets. Perfect for sharing with friends. Each features a Silver finish and lifetime 15% discount.",
    shortDescription: "3 Silver Editions - $40 each. Great value.",
    images: ["/placeholder.svg"],
    category: "early-bird",
    badge: "SUPER EARLY 3-PACK",
    inStock: true,
    rating: 5,
    reviewCount: 0,
    features: [
      "3x Silver Bevvy Bullets",
      "Early Supporter Badge",
      "Lifetime 15% Discount",
      "Save $81 vs retail",
    ],
    specifications: {
      Quantity: "3 units",
      Material: "Premium Foam",
      Fits: "12-16oz cans/bottles",
      Edition: "Silver",
      Savings: "$81 off retail",
    },
    tier: "super-early-bird",
    remaining: 287,
    total: 400,
  },
  {
    id: "early-bird-single",
    name: "Bevvy Bullet - Early Bird",
    slug: "bevvy-bullet-early-bird",
    price: 47,
    originalPrice: 67,
    description:
      "Early Bird Edition for backers who want a great deal. Includes 10% future discount and priority shipping.",
    shortDescription: "Early Bird pricing - Next 500 backers. 30% off retail.",
    images: ["/placeholder.svg"],
    category: "early-bird",
    badge: "EARLY BIRD - 30% OFF",
    inStock: true,
    rating: 5,
    reviewCount: 0,
    features: [
      "10% Future Discount",
      "Priority Shipping",
      "Floats on water",
      "Fits 12-16oz cans/bottles",
    ],
    specifications: {
      Material: "Premium Foam",
      Dimensions: '11" x 6.5"',
      Weight: "8 oz",
      Fits: "12-16oz cans/bottles",
      Floats: "Yes",
    },
    tier: "early-bird",
    remaining: 500,
    total: 500,
  },
  {
    id: "early-bird-3pack",
    name: "Bevvy Bullet 3-Pack - Early Bird",
    slug: "bevvy-bullet-early-bird-3pack",
    price: 135,
    originalPrice: 201,
    description:
      "Three Early Bird Edition Bevvy Bullets at a great price. Perfect for tailgates and parties.",
    shortDescription: "3-Pack Early Bird - $45 each. Solid savings.",
    images: ["/placeholder.svg"],
    category: "early-bird",
    badge: "EARLY BIRD 3-PACK",
    inStock: true,
    rating: 5,
    reviewCount: 0,
    features: [
      "3x Bevvy Bullets",
      "10% Future Discount",
      "Priority Shipping",
      "Save $66 vs retail",
    ],
    specifications: {
      Quantity: "3 units",
      Material: "Premium Foam",
      Fits: "12-16oz cans/bottles",
      Savings: "$66 off retail",
    },
    tier: "early-bird",
    remaining: 500,
    total: 500,
  },
  {
    id: "standard-single",
    name: "Bevvy Bullet - Standard",
    slug: "bevvy-bullet-standard",
    price: 52,
    originalPrice: 67,
    description:
      "The standard Bevvy Bullet pre-order. Still a great deal at 22% off retail. Free shipping included.",
    shortDescription: "Standard pre-order - 22% off retail. Free shipping.",
    images: ["/placeholder.svg"],
    category: "standard",
    badge: "STANDARD - 22% OFF",
    inStock: true,
    rating: 5,
    reviewCount: 0,
    features: [
      "Standard Bevvy Bullet",
      "Free Shipping",
      "Floats on water",
      "Fits 12-16oz cans/bottles",
    ],
    specifications: {
      Material: "Premium Foam",
      Dimensions: '11" x 6.5"',
      Weight: "8 oz",
      Fits: "12-16oz cans/bottles",
      Floats: "Yes",
    },
    tier: "standard",
    remaining: 999,
    total: 999,
  },
  {
    id: "standard-3pack",
    name: "Bevvy Bullet 3-Pack - Standard",
    slug: "bevvy-bullet-standard-3pack",
    price: 150,
    originalPrice: 201,
    description:
      "Three standard Bevvy Bullets with free shipping. Perfect for sharing the fun.",
    shortDescription: "3-Pack Standard - $50 each. Free shipping.",
    images: ["/placeholder.svg"],
    category: "standard",
    badge: "STANDARD 3-PACK",
    inStock: true,
    rating: 5,
    reviewCount: 0,
    features: ["3x Bevvy Bullets", "Free Shipping", "Save $51 vs retail"],
    specifications: {
      Quantity: "3 units",
      Material: "Premium Foam",
      Fits: "12-16oz cans/bottles",
      Savings: "$51 off retail",
    },
    tier: "standard",
    remaining: 999,
    total: 999,
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};
