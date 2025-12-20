import { motion } from "framer-motion";
import { Circle, Snowflake, Waves } from "lucide-react";

const features = [
  {
    icon: Circle,
    title: "IT'S A FOOTBALL",
    description: "Regulation grip, perfect spiral every time. Fly 40+ yards.",
    color: "primary",
    glow: "glow-pink",
  },
  {
    icon: Snowflake,
    title: "IT'S A KOOZIE",
    description: "Securely holds any 12-16oz can or bottle. Keeps drinks cold.",
    color: "primary",
    glow: "glow-pink",
  },
  {
    icon: Waves,
    title: "IT FLOATS",
    description:
      "Floats on lakes, pools, and party tubs. Pool parties upgraded.",
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
            Why Walk When You Can
            <br />
            <span className="text-primary">Throw?</span>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-card p-8 text-center group cursor-pointer hover-glow-cyan`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${feature.glow}`}
                style={{
                  backgroundColor: `hsl(var(--${feature.color}) / 0.1)`,
                  borderColor: `hsl(var(--${feature.color}) / 0.3)`,
                  borderWidth: "1px",
                }}
              >
                <feature.icon
                  className={`w-10 h-10 text-${feature.color}`}
                  style={{ color: `hsl(var(--${feature.color}))` }}
                />
              </motion.div>
              <h3 className="font-mono text-xl font-bold uppercase mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
