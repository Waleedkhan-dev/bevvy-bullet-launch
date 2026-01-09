import { motion } from "framer-motion";

export const ManifestoSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 uppercase tracking-tight">
              THE GREAT LIBERATION
              <br />
              MANIFESTO
            </h2>
          </div>

          {/* Manifesto Content */}
          <div className="glass-card p-6 sm:p-8 md:p-12 space-y-8 border-primary/30">
            {/* Opening Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl text-foreground font-bold">
                Americans walk 47 miles per year for other people's beers.
              </p>
              <p className="text-base md:text-lg text-foreground/90">
                That's a marathon. Plus Dallas to Fort Worth.
                <br />
                For drinks we didn't even want to get.
              </p>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 border-l-4 border-primary pl-6"
            >
              <p className="text-base md:text-lg text-foreground/90">
                Lake days: <span className="text-primary font-bold">37,000 steps</span> to the cooler.
              </p>
              <p className="text-base md:text-lg text-foreground/90">
                Tailgates: <span className="text-primary font-bold">3.5 hours</span> of missing the game.
              </p>
              <p className="text-base md:text-lg text-foreground/90">
                Pool parties: <span className="text-primary font-bold">4,821 slips</span> nationwide. Per day.
              </p>
              <p className="text-sm md:text-base text-muted-foreground italic mt-4">
                All documented. All preventable.
              </p>
            </motion.div>

            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl font-bold text-primary">
                We measured it. It's insane.
              </p>
            </motion.div>

            {/* Fetcher vs Catcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Fetcher */}
              <div className="space-y-3">
                <h3 className="font-mono text-lg md:text-xl font-bold text-primary uppercase">
                  The fetcher always loses:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Their seat (taken)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>The moment (gone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Their dignity (slipped on wet deck)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>The big play (missed while walking)</span>
                  </li>
                </ul>
              </div>

              {/* Catcher */}
              <div className="space-y-3">
                <h3 className="font-mono text-lg md:text-xl font-bold text-primary uppercase">
                  The catcher always fails:
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wet cans slip (physics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Distance is wrong (always)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Grandma gets hit (inevitable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Beer explodes (guaranteed)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* The Old Way */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 text-base md:text-lg text-foreground/90"
            >
              <p>For decades, we've accepted this.</p>
              <p>The walk of shame.</p>
              <p>The impossible catch.</p>
              <p>The fetch quest.</p>
              <p>The head trauma.</p>
            </motion.div>

            {/* The Revolution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3 text-base md:text-lg text-foreground font-bold border-t-2 border-primary pt-8"
            >
              <p className="text-primary">Today, that changes.</p>
              <p className="text-primary">Today, physics bends to our will.</p>
              <p className="text-primary">Today, nobody walks for another man's beer.</p>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3 text-base md:text-lg text-foreground/90"
            >
              <p>We weaponized refreshment.</p>
              <p>We solved aerial beverage delivery.</p>
              <p>We ended the fetch forever.</p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 gap-4 text-base md:text-lg"
            >
              <div className="text-foreground/90">
                <span className="text-primary font-bold">Your steps:</span> Saved.
              </div>
              <div className="text-foreground/90">
                <span className="text-primary font-bold">Your seat:</span> Secured.
              </div>
              <div className="text-foreground/90">
                <span className="text-primary font-bold">Your dignity:</span> Intact.
              </div>
              <div className="text-foreground/90">
                <span className="text-primary font-bold">Grandma:</span> Safe.
              </div>
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center space-y-4 border-t-2 border-primary pt-8"
            >
              <h3 className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight">
                <span className="text-primary">THE FETCH IS DEAD.</span>
                <br />
                <span className="text-foreground">LONG LIVE THE THROW.</span>
              </h3>
            </motion.div>

            {/* Brand Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center space-y-2 pt-6"
            >
              <p className="font-mono text-xl md:text-2xl font-bold text-primary">
                Bevvy Bullet.
              </p>
              <p className="text-base md:text-lg text-muted-foreground italic">
                Because 47 miles is 47 miles too many.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
