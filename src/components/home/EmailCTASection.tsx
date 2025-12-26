import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

export const EmailCTASection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.post("https://bevvy-bullet.app.n8n.cloud/webhook/email-capture", { email: formData.email, firstName: formData.fullName });

    toast({
      title: "Welcome to the revolution! 🚀",
      description: "You'll be the first to know when we launch.",
    });

    setFormData({ fullName: "", email: "" });
    setIsLoading(false);
  };

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-5 sm:p-8 md:p-12 text-center hover-glow-orange">
            <h2 className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-3 md:mb-4">
              THE FETCH IS DEAD.
              <br />
              <span className="text-primary">The Throw Is Here.</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Get Launch Alert + 45% Off Founder Pricing
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="bg-background border-border focus:border-secondary"
                  required
                />
                {/* <Input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="bg-background border-border focus:border-secondary"
                  required
                /> */}
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-background border-border focus:border-secondary"
                required
              />
              <Button
                type="submit"
                variant="glowOrange"
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
                    SEND IT! <Send className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-6">
              No spam, just Kickstarter updates - promise :-)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
