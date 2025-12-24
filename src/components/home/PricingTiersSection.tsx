import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Crown, Zap, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "@/hooks/use-toast";

interface PricingTier {
  id: string;
  name: string;
  icon: React.ElementType;
  price: number;
  originalPrice: number;
  packPrice: number;
  packOriginalPrice: number;
  discount: string;
  remaining: number;
  total: number;
  badge?: string;
  perks: string[];
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: "founder",
    name: "FOUNDERS",
    icon: Crown,
    price: 37,
    originalPrice: 67,
    packPrice: 105,
    packOriginalPrice: 201,
    discount: "45% OFF",
    remaining: 23,
    total: 100,
    badge: "FIRST 100",
    perks: [
      "Gold Bevvy Bullet Edition",
      "Founder Serial Number",
      "Lifetime 20% Discount",
      "Exclusive Founders Discord",
    ],
    popular: true,
  },
  {
    id: "super-early-bird",
    name: "SUPER EARLY BIRD",
    icon: Star,
    price: 42,
    originalPrice: 67,
    packPrice: 120,
    packOriginalPrice: 201,
    discount: "37% OFF",
    remaining: 287,
    total: 400,
    badge: "NEXT 400",
    perks: [
      "Silver Bevvy Bullet Edition",
      "Early Supporter Badge",
      "Lifetime 15% Discount",
    ],
  },
  {
    id: "early-bird",
    name: "EARLY BIRD",
    icon: Zap,
    price: 47,
    originalPrice: 67,
    packPrice: 135,
    packOriginalPrice: 201,
    discount: "30% OFF",
    remaining: 500,
    total: 500,
    badge: "NEXT 500",
    perks: ["10% Future Discount", "Priority Shipping"],
  },
  {
    id: "standard",
    name: "STANDARD",
    icon: Package,
    price: 52,
    originalPrice: 67,
    packPrice: 150,
    packOriginalPrice: 201,
    discount: "22% OFF",
    remaining: 999,
    total: 999,
    perks: ["Standard Bevvy Bullet", "Free Shipping"],
  },
];

export const PricingTiersSection = () => {
  const [selectedPack, setSelectedPack] = useState<{
    [key: string]: "single" | "3pack";
  }>({});
  const { toast } = useToast();

  const handleAddToCart = (tier: PricingTier, packType: "single" | "3pack") => {
    toast({
      title: "Added to cart! 🎉",
      description: `${tier.name} ${
        packType === "3pack" ? "3-Pack" : "Single"
      } added.`,
    });
  };

  const getPackType = (tierId: string) => selectedPack[tierId] || "single";

  return (
    <section className="py-20 md:py-32 relative bg-background-secondary">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-4">
            Choose Your <span className="text-primary">Tier</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Early supporters get the best deals. Lock in your price before it's
            gone.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-4 sm:p-6 relative flex flex-col ${
                tier.popular ? "border-primary ring-2 ring-primary/20" : ""
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-mono font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-black text-primary text-xs font-mono font-bold px-2 py-1 rounded border border-primary">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center pt-4 mb-6">
                <tier.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="font-mono text-lg font-bold uppercase tracking-wider">
                  {tier.name}
                </h3>
                <span className="inline-block bg-primary/20 text-primary text-xs font-mono px-2 py-1 rounded mt-2">
                  {tier.discount}
                </span>
              </div>

              {/* Pack Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() =>
                    setSelectedPack({ ...selectedPack, [tier.id]: "single" })
                  }
                  className={`flex-1 py-2 px-3 text-xs font-mono rounded-lg transition-all ${
                    getPackType(tier.id) === "single"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  SINGLE
                </button>
                <button
                  onClick={() =>
                    setSelectedPack({ ...selectedPack, [tier.id]: "3pack" })
                  }
                  className={`flex-1 py-2 px-3 text-xs font-mono rounded-lg transition-all ${
                    getPackType(tier.id) === "3pack"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  3-PACK
                </button>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-mono text-4xl font-bold text-foreground">
                    $
                    {getPackType(tier.id) === "single"
                      ? tier.price
                      : tier.packPrice}
                  </span>
                  <span className="text-muted-foreground line-through text-sm">
                    $
                    {getPackType(tier.id) === "single"
                      ? tier.originalPrice
                      : tier.packOriginalPrice}
                  </span>
                </div>
                {getPackType(tier.id) === "3pack" && (
                  <p className="text-xs text-muted-foreground mt-1">
                    ${Math.round(tier.packPrice / 3)} each
                  </p>
                )}
              </div>

              {/* Remaining Counter */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-primary font-bold">
                    {tier.remaining} remaining
                  </span>
                  <span className="text-muted-foreground">of {tier.total}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${(tier.remaining / tier.total) * 100}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>

              {/* Perks */}
              <ul className="space-y-2 mb-6 flex-grow">
                {tier.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{perk}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={tier.popular ? "glow" : "outline"}
                size="lg"
                className="w-full mt-auto"
                onClick={() => handleAddToCart(tier, getPackType(tier.id))}
              >
                {tier.remaining > 0 ? "CLAIM SPOT" : "SOLD OUT"}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto"
        >
          All prices are pre-order pricing. Retail price will be $67 per unit
          after launch. Shipping calculated at checkout. Expected delivery:
          Spring 2025.
        </motion.p>
      </div>
    </section>
  );
};
