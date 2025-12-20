import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Mail, Globe } from "lucide-react";

const stats = [
  { icon: Package, value: 1247, label: "Pre-Orders", suffix: "+" },
  { icon: Mail, value: 3892, label: "Email Subscribers", suffix: "+" },
  { icon: Globe, value: 42, label: "Countries", suffix: "" },
];

const AnimatedNumber = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const SocialProofSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background-secondary relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />

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
            Join the <span className="text-primary">Movement</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of beverage enthusiasts who are ready for the
            revolution
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 text-center hover-glow-cyan"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
