import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Set launch date to 30 days from now for demo purposes
const LAUNCH_DATE = new Date();
LAUNCH_DATE.setDate(LAUNCH_DATE.getDate() + 30);

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = LAUNCH_DATE.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're in! 🎉",
        description: "We'll notify you the moment we launch on Kickstarter.",
      });
      setEmail("");
    }
  };

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-5 sm:p-8 md:p-12 text-center hover-glow-cyan">
            <h2 className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest text-primary mb-6 md:mb-8">
              Kickstarter Launch In
            </h2>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 mb-8 md:mb-10">
              {timeBlocks.map((block, index) => (
                <motion.div
                  key={block.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-full aspect-square max-w-[70px] sm:max-w-24 md:max-w-32 bg-background rounded-lg sm:rounded-xl border border-primary/30 flex items-center justify-center glow-cyan">
                    <span className="font-mono text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                      {block.value.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1 sm:mt-2 md:mt-3">
                    {block.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto">
              <h3 className="font-mono text-base sm:text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">
                Be First In Line
              </h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background border-border focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  variant="glow"
                  className="whitespace-nowrap text-sm sm:text-base"
                >
                  JOIN THE REVOLUTION
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
