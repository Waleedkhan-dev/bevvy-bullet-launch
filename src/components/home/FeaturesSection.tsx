import { motion } from "framer-motion";
import { AlertTriangle, Zap, Rocket } from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "THE PROBLEM",
    heading: "47 MILES TOO MANY",
    description: "Every year you walk a marathon plus Dallas to Fort Worth for other people's drinks. This is insane.",
    color: "primary",
    glow: "glow-pink",
  },
  {
    icon: Zap,
    title: "THE PHYSICS",
    heading: "FOAM > ALUMINUM",
    description: "Aluminum: 73% slip rate. Glass: Literal weapon. Foam: 100% catch rate. Math: Simple",
    color: "primary",
    glow: "glow-pink",
  },
  {
    icon: Rocket,
    title: "THE REVOLUTION",
    heading: "FIRST 1,000 SAVE 47%",
    description: "Join the revolution. Save 47 miles. Save grandma.",
    color: "primary",
    glow: "glow-pink",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-4">
            Why <span className="text-primary">Fetch</span> when you can <span className="text-primary">Yeet</span>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-card p-5 sm:p-6 md:p-8 text-center group cursor-pointer hover-glow-cyan`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl flex items-center justify-center ${feature.glow}`}
                style={{
                  backgroundColor: `hsl(var(--${feature.color}) / 0.1)`,
                  borderColor: `hsl(var(--${feature.color}) / 0.3)`,
                  borderWidth: "1px",
                }}
              >
                <feature.icon
                  className={`w-8 h-8 sm:w-10 sm:h-10 text-${feature.color}`}
                  style={{ color: `hsl(var(--${feature.color}))` }}
                />
              </motion.div>
              <h3 className="font-mono text-lg sm:text-xl font-bold uppercase mb-2 text-foreground">
                {feature.heading}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};