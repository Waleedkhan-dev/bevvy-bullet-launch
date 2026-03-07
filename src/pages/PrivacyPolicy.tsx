import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <section className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-8 md:mb-12 text-center">
            <span className="text-primary">Privacy Policy</span>
          </h1>

          <div className="space-y-8 text-base md:text-lg text-foreground/90">
            <p className="text-muted-foreground text-sm">
              Last updated: March 7, 2026
            </p>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                1. Introduction
              </h2>
              <p>
                Welcome to Bevvy Bullet. We respect your privacy and are
                committed to protecting your personal data. This privacy policy
                explains how we collect, use, and safeguard your information
                when you visit our website or make a purchase.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                2. Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  shipping address, phone number, and payment information when
                  you place an order.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact
                  with our website, including pages visited, time spent, and
                  browser type.
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies and similar
                  technologies to enhance your browsing experience and analyze
                  site traffic.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>
                  Send promotional emails and marketing communications (with
                  your consent)
                </li>
                <li>Improve our website and product offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                4. Sharing Your Information
              </h2>
              <p>
                We do not sell your personal information. We may share your data
                with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Service Providers:</strong> Third-party companies that
                  help us operate our business (e.g., payment processors,
                  shipping carriers, email services).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to
                  protect our rights and safety.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                5. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                6. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                7. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of those sites and
                encourage you to review their privacy policies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                8. Children's Privacy
              </h2>
              <p>
                Our website and products are not intended for individuals under
                the age of 21. We do not knowingly collect personal information
                from minors.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold text-primary">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy or your
                personal data, please contact us at:
              </p>
              <p className="font-mono text-primary">
                Email: support@bevvybullet.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
