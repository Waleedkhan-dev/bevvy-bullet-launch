import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
    toast({
      title: "Added to cart! 🏈",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist! ❤️",
      description: isWishlisted
        ? `${product.name} removed from your wishlist.`
        : `${product.name} added to your wishlist.`,
    });
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/shop/${product.slug}`}>
      <motion.div
        className="group glass-card overflow-hidden hover-glow-cyan cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-background-secondary">
          {/* Product Image */}
          <div className="w-full h-full flex items-center justify-center text-8xl">
            🏈
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge && (
              <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-full bg-primary text-primary-foreground">
                {product.badge}
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm transition-colors hover:bg-background"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isWishlisted
                  ? "fill-highlight text-highlight"
                  : "text-muted-foreground hover:text-highlight"
              }`}
            />
          </button>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent"
          >
            <div className="flex gap-2">
              <Button
                onClick={handleAddToCart}
                variant="glow"
                size="sm"
                className="flex-1"
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add
              </Button>
              <Button variant="glass" size="icon" className="shrink-0">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-mono text-sm font-bold uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-mono text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
