import { motion } from "framer-motion";
import { UserPlus, Rocket, Package } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign Up",
    description: "Join our email list for exclusive early access and updates",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Back Us",
    description: "Support us on Kickstarter when we launch and save big",
  },
  {
    icon: Package,
    number: "03",
    title: "Catch It",
    description: "Receive your Bevvy Bullet and start tossing suds with buds",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
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
            Want One? <span className="text-primary">Here's How</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Mobile Icon - Shown on small screens */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex md:hidden w-14 h-14 rounded-full bg-background border-2 border-primary items-center justify-center glow-cyan"
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Content */}
                <div
                  className={`flex-1 glass-card p-5 md:p-6 lg:p-8 hover-glow-cyan text-center md:text-left ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                    {step.number}
                  </span>
                  <h3 className="font-mono text-lg md:text-xl lg:text-2xl font-bold uppercase mt-2 mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="hidden md:flex w-16 h-16 rounded-full bg-background border-2 border-primary items-center justify-center glow-cyan z-10"
                >
                  <step.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Spacer for alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
