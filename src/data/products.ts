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
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Bevvy Bullet Original',
    slug: 'bevvy-bullet-original',
    price: 29.99,
    originalPrice: 39.99,
    description: 'The original Bevvy Bullet - a regulation-sized football that holds your 12oz can. Perfect grip, perfect spiral, perfectly cold beverage. Made with premium neoprene insulation to keep your drinks ice cold for hours.',
    shortDescription: 'The original football koozie - keeps drinks cold, throws like a dream.',
    images: ['/placeholder.svg'],
    category: 'koozies',
    badge: 'PRE-ORDER',
    inStock: false,
    rating: 5,
    reviewCount: 0,
    features: [
      'Fits standard 12oz cans',
      'Premium neoprene insulation',
      'Regulation football grip',
      'Floats in water',
      'Easy-access drink opening'
    ],
    specifications: {
      'Material': 'Premium Neoprene',
      'Dimensions': '6" x 3.5"',
      'Weight': '4 oz',
      'Fits': '12oz standard cans',
      'Floats': 'Yes'
    }
  },
  {
    id: '2',
    name: 'Bevvy Bullet 3-Pack',
    slug: 'bevvy-bullet-3-pack',
    price: 74.99,
    originalPrice: 119.97,
    description: 'Get three Bevvy Bullets at an incredible value! Perfect for sharing with friends or keeping backups for every occasion. Each pack includes three original Bevvy Bullets.',
    shortDescription: 'Save big with the 3-pack - one for you, two for your buds.',
    images: ['/placeholder.svg'],
    category: 'koozies',
    badge: 'BEST VALUE',
    inStock: false,
    rating: 5,
    reviewCount: 0,
    features: [
      'Includes 3 Bevvy Bullets',
      'Save $45 vs individual purchase',
      'Perfect for sharing',
      'All features of original',
      'Great gift option'
    ],
    specifications: {
      'Quantity': '3 units',
      'Material': 'Premium Neoprene',
      'Fits': '12oz standard cans',
      'Savings': '$45 off retail'
    }
  },
  {
    id: '3',
    name: 'Bevvy Bullet Team Pack',
    slug: 'bevvy-bullet-team-pack',
    price: 139.99,
    originalPrice: 239.94,
    description: 'The ultimate party starter! Six Bevvy Bullets for you and your whole crew. Perfect for tailgates, pool parties, and backyard BBQs. Maximum fun, maximum savings.',
    shortDescription: 'Six-pack for the squad - tailgate ready.',
    images: ['/placeholder.svg'],
    category: 'koozies',
    badge: 'TEAM SIZE',
    inStock: false,
    rating: 5,
    reviewCount: 0,
    features: [
      'Includes 6 Bevvy Bullets',
      'Save $100 vs individual purchase',
      'Perfect for teams',
      'Tailgate essential',
      'Pool party ready'
    ],
    specifications: {
      'Quantity': '6 units',
      'Material': 'Premium Neoprene',
      'Fits': '12oz standard cans',
      'Savings': '$100 off retail'
    }
  },
  {
    id: '4',
    name: 'Bevvy Bullet Limited Edition',
    slug: 'bevvy-bullet-limited-edition',
    price: 39.99,
    originalPrice: 49.99,
    description: 'Limited edition Bevvy Bullet with exclusive colorway and premium finishing. Numbered edition for collectors. Features enhanced grip texture and metallic accents.',
    shortDescription: 'Exclusive limited release - collectors only.',
    images: ['/placeholder.svg'],
    category: 'koozies',
    badge: 'LIMITED',
    inStock: false,
    rating: 5,
    reviewCount: 0,
    features: [
      'Limited numbered edition',
      'Exclusive colorway',
      'Enhanced grip texture',
      'Metallic accents',
      'Collector\'s packaging'
    ],
    specifications: {
      'Edition': 'Limited 1000 units',
      'Material': 'Premium Neoprene',
      'Finish': 'Metallic accents',
      'Fits': '12oz standard cans'
    }
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};
