import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const TermsConditions = () => (
  <Layout>
    <section className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-8 md:mb-12 text-center">
            <span className="text-primary">Terms & Conditions</span>
          </h1>

          <div className="space-y-8 text-base md:text-lg text-foreground/90">
            <p className="text-muted-foreground text-sm">
              Last updated: March 7, 2026
            </p>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using the Bevvy Bullet website and purchasing
                our products, you agree to be bound by these Terms & Conditions.
                If you do not agree with any part of these terms, you may not
                access our website or use our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                2. Use of Our Website
              </h2>
              <p>You agree to use our website only for lawful purposes. You must not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Use the site to transmit harmful or malicious content</li>
                <li>Reproduce, duplicate, or resell any part of our website without permission</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                3. Products & Orders
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All product descriptions, images, and pricing are subject to change without notice.</li>
                <li>We reserve the right to limit quantities or refuse any order at our discretion.</li>
                <li>Prices are listed in USD and do not include taxes or shipping unless otherwise stated.</li>
                <li>An order confirmation does not guarantee acceptance; we may cancel orders due to pricing errors, stock limitations, or suspected fraud.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                4. Payment
              </h2>
              <p>
                We accept major credit cards, debit cards, and PayPal. By
                submitting your payment information, you authorize us to charge
                the total order amount. All payments are processed securely
                through our third-party payment processor.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                5. Shipping & Delivery
              </h2>
              <p>
                Shipping times and costs vary based on your location and selected
                shipping method. Estimated delivery dates are not guaranteed. We
                are not responsible for delays caused by carriers, customs, or
                events beyond our control.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                6. Returns & Refunds
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We accept returns within 30 days of delivery for unused, unopened items in original packaging.</li>
                <li>To initiate a return, contact us at support@bevvybullet.com.</li>
                <li>Refunds will be processed to the original payment method within 7-10 business days after we receive the returned item.</li>
                <li>Shipping costs are non-refundable unless the return is due to our error.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                7. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, graphics, logos,
                images, and software — is the property of Bevvy Bullet and is
                protected by applicable intellectual property laws. You may not
                use, reproduce, or distribute any content without our prior
                written consent.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Bevvy Bullet shall not be
                liable for any indirect, incidental, special, or consequential
                damages arising from your use of our website or products. Our
                total liability shall not exceed the amount you paid for the
                product in question.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                9. Disclaimer of Warranties
              </h2>
              <p>
                Our website and products are provided "as is" and "as available"
                without warranties of any kind, either express or implied. We do
                not warrant that the website will be uninterrupted, error-free,
                or free of viruses or other harmful components.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                10. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with
                the laws of the State of Kansas, without regard to its conflict
                of law provisions. Any disputes arising under these terms shall
                be subject to the exclusive jurisdiction of the courts located in
                Kansas.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                11. Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting to this page. Your
                continued use of the website after changes are posted constitutes
                your acceptance of the revised terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                12. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms & Conditions, please
                contact us:
              </p>
              <p className="font-mono text-primary">
                Email: support@bevvybullet.com
              </p>
              <p>
                Or visit our{" "}
                <Link to="/contact" className="text-primary underline hover:text-primary/80">
                  Contact page
                </Link>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default TermsConditions;
