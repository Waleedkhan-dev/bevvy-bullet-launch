import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } =
    useCartStore();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-mono text-3xl font-bold uppercase mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild variant="glow" size="lg">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <Layout>
      <div className="min-h-screen py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 md:mb-12"
          >
            <nav className="text-sm text-muted-foreground mb-3 md:mb-4">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-primary">Cart</span>
            </nav>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
                <span className="text-gradient-cyan">Your Cart</span>
              </h1>
              <Button
                variant="ghost"
                onClick={clearCart}
                className="text-destructive hover:text-destructive self-start sm:self-auto"
              >
                Clear Cart
              </Button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 md:p-6"
                >
                  <div className="flex gap-4 md:gap-6">
                    {/* Image */}
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-background-secondary rounded-lg flex items-center justify-center text-4xl md:text-5xl shrink-0">
                      🏈
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-mono font-bold text-sm md:text-base uppercase">
                            {item.name}
                          </h3>
                          {item.variant && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.variant}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center gap-3 bg-muted rounded-lg p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1.5 hover:bg-background rounded transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-mono font-bold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1.5 hover:bg-background rounded transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-mono text-lg font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-4 sm:p-6 sticky top-20 md:top-24"
              >
                <h2 className="font-mono text-lg md:text-xl font-bold uppercase mb-4 md:mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-mono font-bold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-mono font-bold">
                      {shipping === 0 ? (
                        <span className="text-accent">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-sm text-muted-foreground">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="font-mono font-bold uppercase">
                        Total
                      </span>
                      <span className="font-mono text-2xl font-bold text-primary">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  variant="glow"
                  size="lg"
                  className="w-full mb-4"
                >
                  <Link to="/checkout">
                    Checkout <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                <Button asChild variant="ghost" className="w-full">
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
