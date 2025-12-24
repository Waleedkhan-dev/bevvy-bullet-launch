import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const MidPageEmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "You're in! 🎉",
      description: "You'll get early access + 45% off Founder pricing.",
    });

    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-5 sm:p-8 md:p-10 border-primary/30 text-center">
            <h2 className="font-mono text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight mb-2">
              Don't Miss the Launch
            </h2>
            <p className="text-primary font-mono text-lg mb-6">
              Get 45% Off Founder Pricing
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border focus:border-primary flex-1"
                required
              />
              <Button
                type="submit"
                variant="glow"
                disabled={isLoading}
                className="whitespace-nowrap"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                  />
                ) : (
                  <span className="flex items-center gap-2">
                    GET EARLY ACCESS <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              Join 3,800+ people waiting for launch. No spam, ever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
