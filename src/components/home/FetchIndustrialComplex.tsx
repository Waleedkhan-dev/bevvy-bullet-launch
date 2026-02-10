import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FetchIndustrialComplex = () => {
  const [walkedToday, setWalkedToday] = useState(127394);
  const [pantsSplit, setPantsSplit] = useState(892);

  // WALKED TODAY counter - increments every 2 seconds (fast)
  useEffect(() => {
    const interval = setInterval(() => {
      setWalkedToday((prev) => prev + Math.floor(Math.random() * 3) + 1); // +1 to +3
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // PANTS SPLIT counter - increments every 8 seconds (slow)
  useEffect(() => {
    const interval = setInterval(() => {
      setPantsSplit((prev) => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const stats = [
    {
      label: "WALKED TODAY",
      value: formatNumber(walkedToday),
      unit: "miles",
      color: "text-primary",
      isLive: true,
    
    },
    {
      label: "PANTS SPLIT",
      value: formatNumber(pantsSplit),
      unit: "dads",
      color: "text-red-500",
      isLive: true,
    
    },
    {
      label: "BIG PLAYS MISSED",
      value: "All ",
     
      color: "text-yellow-500  ",
      isLive: false,
    
    },
    {
      label: "YOUR DIGNITY",
      value: "Pending",
      unit: "",
      color: "text-blue-500",
      isLive: false,
    
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden w-full bg-gradient-to-b from-background to-background/50">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            THE FETCH INDUSTRIAL COMPLEX
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            A real-time look at the cost of drink fetching
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-full"
            >
              {/* Dashboard Card */}
              <div className="glass-card p-6 md:p-8 border-primary/30 relative overflow-hidden group hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Animated Background Gradient */}
                {stat.isLive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Label */}
                  <h3 className="font-mono text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                    {stat.label}
                  </h3>

                  {/* Value - centered and flexible */}
                  <div className="flex-1 flex items-center justify-center mb-2">
                    <motion.p
                      key={stat.value}
                      initial={stat.isLive ? { scale: 1.05 } : {}}
                      animate={stat.isLive ? { scale: 1 } : {}}
                      transition={{ duration: 0.3 }}
                      className={`font-mono text-4xl md:text-5xl font-bold ${stat.color} leading-none text-center break-words`}
                    >
                      {stat.value}
                    </motion.p>
                  </div>

                  {/* Unit */}
                  {stat.unit && (
                    <p className="font-mono text-sm md:text-base text-foreground/60 text-center">
                      {stat.unit}
                    </p>
                  )}

                  {/* Speed Indicator */}
                  {stat.isLive && stat.speed && (
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 bg-foreground/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary/50"
                            animate={{
                            
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground uppercase">
                          {stat.speed === "fast" ? "↑ Fast" : "↑ Slow"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="font-mono text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
            The fetch is costing us more than we think.
          </p>
        </motion.div>
      </div>
    </section>
  );
};