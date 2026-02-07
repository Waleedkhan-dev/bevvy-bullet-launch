import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ManifestoSection } from "@/components/home/ManifestoSection";
const About = () => (
  <Layout>
    <section className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-10 md:mb-16"
        >
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 md:mb-8 text-center">
            <span className="text-primary">THE LAKE INCIDENT</span>
          </h1>
          
          <div className="space-y-6 text-base md:text-lg text-foreground/90">
            <p>
              Summer 2023. Table Rock Lake, Missouri. My buddy's in the water. I'm on the dock. He wants a beer. I throw it. Perfect spiral. Wet hands. Can slips through. Direct hit to the temple. Almost knocked him out.
            </p>
            
            <p className="font-bold text-lg md:text-xl text-primary">
              That's when it hit me: WE'VE BEEN THROWING WEAPONS AT OUR FRIENDS.
            </p>
            
            <p>
              So we fixed it. Foam football. Holds any 12oz can. Floats. Nobody gets a concussion. Nobody dies. Nobody walks 47 miles anymore.
            </p>
            
            <div className="pt-6 border-t border-border mt-8">
              <p className="font-mono text-sm md:text-base text-muted-foreground">
                - Kyle, Andy & Jason
              </p>
              <p className="font-mono text-xs md:text-sm text-muted-foreground mt-1">
                Three guys from Kansas who got tired of almost killing our friends
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className="text-center">
          <Button asChild variant="glow" size="lg">
            <Link to="/shop">Join the Revolution</Link>
          </Button>
        </div>
      </div>
      <ManifestoSection />
    </section>
    
  </Layout>
);

export default About;