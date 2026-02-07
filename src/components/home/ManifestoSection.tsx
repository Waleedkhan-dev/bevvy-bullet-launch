import { motion } from "framer-motion";

export const ManifestoSection = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto  relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" mx-auto"
        >
          {/* Title */}
          <header className="text-center mb-16">
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4">
              A Public Declaration
            </p>
            <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-primary uppercase tracking-tight">
              The Great Liberation
              <br />
              Manifesto
            </h2>
          </header>

          {/* Blog Card */}
          <div className="glass-card px-6 sm:px-10 md:px-14 py-12 space-y-14 border-primary/30 leading-relaxed">
            
            {/* Opening */}
            <section className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                Americans walk <span className="text-primary">47 miles</span> per year  
                for other people’s beers.
              </p>
              <p className="text-lg text-foreground/80">
                That’s a marathon.  
                Plus Dallas to Fort Worth.  
                <br />
                For drinks we didn’t even want to get.
              </p>
            </section>

            <hr className="border-primary/20" />

            {/* Stats */}
            <section className="space-y-3">
              <p className="text-lg">
                Lake days: <span className="text-primary font-semibold">37,000 steps</span> to the cooler.
              </p>
              <p className="text-lg">
                Tailgates: <span className="text-primary font-semibold">3.5 hours</span> of missed action.
              </p>
              <p className="text-lg">
                Pool parties: <span className="text-primary font-semibold">4,821 slips</span> per day.
              </p>
              <p className="text-sm italic text-muted-foreground mt-4">
                All documented. All preventable.
              </p>
            </section>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-primary pl-6 text-xl md:text-2xl font-bold text-primary">
              We measured it.  
              It’s insane.
            </blockquote>

            {/* Comparison */}
            <section className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-mono uppercase text-primary mb-4">
                  The Fetcher Loses
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Their seat</li>
                  <li>• The moment</li>
                  <li>• Their dignity</li>
                  <li>• The big play</li>
                </ul>
              </div>

              <div>
                <h3 className="font-mono uppercase text-primary mb-4">
                  The Catcher Fails
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Wet cans slip</li>
                  <li>• Distance is wrong</li>
                  <li>• Grandma gets hit</li>
                  <li>• Beer explodes</li>
                </ul>
              </div>
            </section>

            {/* Old Way */}
            <section className="space-y-2 text-lg text-foreground/80">
              <p>For decades, we accepted this.</p>
              <p>The walk of shame.</p>
              <p>The impossible catch.</p>
              <p>The fetch quest.</p>
            </section>

            {/* Revolution */}
            <section className="space-y-2 border-t border-primary/30 pt-8 text-lg font-bold">
              <p className="text-primary">Today, that changes.</p>
              <p className="text-primary">Today, physics bends.</p>
              <p className="text-primary">
                Today, nobody walks for another man’s beer.
              </p>
            </section>

            {/* Benefits */}
            <section className="grid grid-cols-2 gap-4 text-lg">
              <p><span className="text-primary font-semibold">Steps:</span> Saved</p>
              <p><span className="text-primary font-semibold">Seat:</span> Secured</p>
              <p><span className="text-primary font-semibold">Dignity:</span> Intact</p>
              <p><span className="text-primary font-semibold">Grandma:</span> Safe</p>
            </section>

            {/* Closing */}
            <footer className="text-center space-y-6 border-t border-primary/30 pt-10">
              <h3 className="font-mono text-3xl md:text-4xl font-bold uppercase">
                <span className="text-primary">The Fetch Is Dead.</span>
                <br />
                <span className="text-foreground">Long Live The Throw.</span>
              </h3>

              <div>
                <p className="font-mono text-2xl font-bold text-primary">
                  Bevvy Bullet
                </p>
                <p className="italic text-muted-foreground">
                  Because 47 miles is 47 miles too many.
                </p>
              </div>
            </footer>

          </div>
        </motion.article>
      </div>
    </section>
  );
};
