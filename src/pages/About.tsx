import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Rocket } from "lucide-react";

const About = () => (
  <Layout>
    <section className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-16"
        >
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 md:mb-6">
            <span className="text-gradient-cyan">Our Story</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Born from a backyard BBQ idea: what if you could throw your drink to
            your friend without spilling a drop?
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-16">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "Make beverage sharing fun, social, and splash-free.",
            },
            {
              icon: Users,
              title: "The Team",
              desc: "A group of friends who love tailgates, pool parties, and cold drinks.",
            },
            {
              icon: Rocket,
              title: "The Vision",
              desc: "Every backyard, beach, and stadium deserves a Bevvy Bullet.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 sm:p-6 md:p-8 text-center hover-glow-cyan"
            >
              <item.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
              <h3 className="font-mono text-lg md:text-xl font-bold uppercase mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="glow" size="lg">
            <Link to="/shop">Join the Revolution</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
