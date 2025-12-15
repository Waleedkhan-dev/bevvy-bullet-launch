import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { getProductBySlug, products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Minus, Plus, Heart, ShoppingCart, Truck, RotateCcw, Shield, Star } from 'lucide-react';
import { ProductCard } from '@/components/shop/ProductCard';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductBySlug(productId || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');
  const addItem = useCartStore((state) => state.addItem);
  const { toast } = useToast();

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-mono text-4xl font-bold mb-4">Product Not Found</h1>
            <Button asChild variant="glow">
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      });
    }
    toast({
      title: "Added to cart! 🏈",
      description: `${quantity}x ${product.name} added to your cart.`,
    });
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  const trustBadges = [
    { icon: Truck, text: 'Free Shipping on $50+' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: 'Secure Checkout' },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{product.name}</span>
          </nav>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card aspect-square flex items-center justify-center text-[12rem]"
            >
              🏈
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badge */}
              {product.badge && (
                <span className={`inline-block px-4 py-1.5 text-sm font-mono font-bold uppercase rounded-full ${
                  product.badge === 'BEST VALUE' 
                    ? 'bg-accent text-accent-foreground' 
                    : product.badge === 'LIMITED'
                    ? 'bg-highlight text-highlight-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}>
                  {product.badge}
                </span>
              )}

              <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-4xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="font-mono text-xl text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-lg">
                {product.shortDescription}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm uppercase text-muted-foreground">Quantity:</span>
                <div className="flex items-center gap-3 bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-background rounded-lg transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-lg font-bold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-background rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleAddToCart} variant="glow" size="xl" className="flex-1">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="xl">
                  <Heart className="w-5 h-5 mr-2" />
                  Wishlist
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {trustBadges.map((badge) => (
                  <div key={badge.text} className="text-center">
                    <badge.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <span className="text-xs text-muted-foreground">{badge.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tabs Section */}
          <div className="mb-20">
            <div className="flex gap-4 border-b border-border mb-8">
              {(['description', 'specs', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-mono text-sm uppercase font-bold transition-colors relative ${
                    activeTab === tab ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab === 'specs' ? 'Specifications' : tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="glass-card p-8">
              {activeTab === 'description' && (
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <h3 className="font-mono text-xl font-bold mb-4">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="grid gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-border last:border-0">
                      <span className="font-mono text-sm uppercase text-muted-foreground">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg mb-4">
                    No reviews yet. Be the first to review this product!
                  </p>
                  <Button variant="outline">Write a Review</Button>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="font-mono text-2xl font-bold uppercase mb-8">
              You Might Also <span className="text-gradient-cyan">Like</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
