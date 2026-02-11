import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const PressKit = () => (
  <Layout>
    <section className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 md:mb-8 text-center">
            <span className="text-primary">PRESS KIT</span>
          </h1>
          
          <div className="space-y-8 text-base md:text-lg text-foreground/90">
            <div className="glass-card p-6 md:p-8">
              <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-4">
                ABOUT BEVVY BULLET
              </h2>
              <p className="mb-4">
                Bevvy Bullet is revolutionizing social gatherings by ending the 47-mile annual walk Americans take for other people's drinks. Our patented foam football design safely delivers beverages across pools, tailgates, and parties—eliminating the fetch and protecting grandma.
              </p>
              <p>
                Founded after a near-concussion incident at Table Rock Lake, Missouri in 2023, Bevvy Bullet solves the age-old problem of aerial beverage delivery with physics, foam, and a whole lot of fun.
              </p>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-4">
                BRAND ASSETS
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div>
                    <p className="font-bold">Logo Pack (PNG, SVG)</p>
                    <p className="text-sm text-muted-foreground">High-resolution logos in various formats</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div>
                    <p className="font-bold">Product Images</p>
                    <p className="text-sm text-muted-foreground">High-quality product photography</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <div>
                    <p className="font-bold">Brand Guidelines</p>
                    <p className="text-sm text-muted-foreground">Colors, fonts, and usage guidelines</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-4">
                KEY FACTS
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Americans walk 47 steps per year for other people's drinks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>4,821 pool party slips occur daily nationwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Fits 12-16oz cans and bottles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Premium foam construction that floats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Launching on Kickstarter in 2026</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 md:p-8">
              <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-4">
                MEDIA CONTACT
              </h2>
              <p className="mb-2">
                <span className="font-bold">Email:</span> press@bevvybullet.com
              </p>
              <p className="mb-2">
                <span className="font-bold">Website:</span> www.bevvybullet.com
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                For media inquiries, interviews, or additional information, please contact our press team.
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground italic">
                THE FETCH IS DEAD. LONG LIVE THE THROW.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default PressKit;
