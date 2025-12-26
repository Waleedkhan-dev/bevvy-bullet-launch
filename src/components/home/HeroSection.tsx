import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const BASE_URL = "http://localhost:3000";
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
     setIsLoading(true);
 try {
  await axios.post("https://bevvy-bullet.app.n8n.cloud/webhook/email-capture", { email });
 
     toast({
       title: "You're in! 🎉",
       description:
         "You'll be the first to know when we launch + get 45% off Founder pricing.",
     });
 
     setEmail("");
     setIsLoading(false);
 } catch (error) {
  
 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern w-full">
      {/* Gradient Orbs - constrained to prevent overflow */}
      <div className="absolute top-1/4 left-0 sm:left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Headline */}
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
              Stop Walking 40 Yards for Your{" "}
              <span className="text-primary">Favorite Drink</span>. Start
              Throwing It.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              The world's only foam football that delivers drinks across
              tailgates, pools, and parties.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">
                  Floats on Lakes, Pools, and Party Tubs
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">
                  Securely holds any 12-16oz can or bottle
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">
                  Engineered to fly 40+ yards for next-level catch and delivery
                </span>
              </div>
            </div>

            {/* THE FETCH IS DEAD */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-primary uppercase tracking-wider mb-6 md:mb-8"
            >
              THE FETCH IS DEAD.
            </motion.p>

            {/* Email Signup Form - HERO PRIORITY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass-card p-4 sm:p-6 max-w-md border-primary/30"
            >
              <h3 className="font-mono font-bold text-base sm:text-lg mb-3 sm:mb-4">
                Get Launch Alert + 45% Off Founder Pricing
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background border-border focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Get Launch Alert
                    </span>
                  )}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-3">
                No Spam. Unsubscribe anytime. Founders get $41 pricing (Retail
                $75).
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md lg:max-w-lg mx-auto">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-xl" />

              {/* Product Image Container */}
              <div className="relative w-full h-full rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 to-black/50 flex flex-col items-center justify-center p-8">
                {/* Football Icon Placeholder */}
                <div className="text-8xl mb-6 opacity-60">🏈</div>

                {/* Placeholder Text */}
                <p className="font-mono text-sm text-center text-foreground/80 uppercase tracking-wider mb-2">
                  REPLACE WITH REAL PRODUCT PHOTO
                </p>
                <p className="text-xs text-muted-foreground text-center max-w-xs">
                  From "BB pics" Google Drive folder
                  <br />
                  Show product with can/bottle inserted
                  <br />
                  OR lifestyle shot of someone throwing it
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
