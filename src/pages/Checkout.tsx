import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Waves, Flame, TreePine, PartyPopper } from "lucide-react";

const lifestyleScenes = [
  {
    label: "BEACH",
    icon: Waves,
    gradient: "from-cyan-600/80 to-blue-800/80",
    tagline: "Sand. Sun. Sends.",
  },
  {
    label: "TAILGATE",
    icon: PartyPopper,
    gradient: "from-orange-600/80 to-red-800/80",
    tagline: "Game day. Sorted.",
  },
  {
    label: "BACKYARD BBQ",
    icon: Flame,
    gradient: "from-amber-600/80 to-orange-800/80",
    tagline: "Grill. Chill. Launch.",
  },
  {
    label: "LAKE",
    icon: TreePine,
    gradient: "from-emerald-600/80 to-teal-800/80",
    tagline: "No more swim retrieval.",
  },
];


const Checkout = () => {
  const { items, getTotalPrice } = useCartStore();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const { toast } = useToast();
  const subtotal = getTotalPrice();
  const shipping = subtotal >= 50 ? 0 : 9.99;
  const total = subtotal + shipping;
const BASE_URL =  import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:3000";
console.log("BASE_URL",BASE_URL);

const clearCart = useCartStore((state) => state.clearCart);
  const handleStripeCheckout = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch(`${BASE_URL}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          shippingCost: shipping,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }
      const data = await res.json();
      clearCart();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Error",
        description: "Failed to process checkout. Please try again.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="font-mono text-3xl font-bold uppercase mb-4">
              Your Cart is Empty
            </h1>
            <Button asChild variant="glow" size="lg">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Lifestyle Scenes Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {lifestyleScenes.map((scene, index) => (
                <motion.div
                  key={scene.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-xl aspect-[4/3] bg-gradient-to-br ${scene.gradient} flex flex-col items-center justify-center text-center p-4 group cursor-default`}
                >
                  <scene.icon className="w-8 h-8 md:w-10 md:h-10 text-white/90 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-mono text-xs md:text-sm font-bold text-white tracking-wider">
                    {scene.label}
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/70 mt-1">
                    {scene.tagline}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3 font-mono">
              BEVVY BULLET — BUILT FOR EVERY MOMENT
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Review */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-6 md:p-8"
              >
                <h2 className="font-mono text-2xl font-bold uppercase mb-6">
                  Review Your Order  Product
                </h2>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-muted rounded-lg"
                    >
                      <div className="w-16 h-16 bg-background-secondary rounded flex items-center justify-center text-2xl">
                        🏈
                      </div>

                      <div className="flex-1">
                        <h4 className="font-mono font-bold text-sm uppercase">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <span className="font-mono font-bold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

        
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h2 className="font-mono text-xl font-bold uppercase mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-mono">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-mono">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-mono">
                        {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="font-mono font-bold uppercase">
                        Total
                      </span>
                      <span className="font-mono text-2xl font-bold text-primary">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                    <Button
                      variant="glow"
                      size="lg"
                      className="w-full mt-8"
                      onClick={handleStripeCheckout}
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Place Order & Pay"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;