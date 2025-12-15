import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'When will Bevvy Bullet be available?', a: 'We\'re launching on Kickstarter soon! Sign up for our email list to be notified the moment we go live.' },
  { q: 'What size cans does it fit?', a: 'Bevvy Bullet fits standard 12oz cans perfectly. Slim cans and bottles are not compatible.' },
  { q: 'Does it really float?', a: 'Yes! The Bevvy Bullet floats in water, making it perfect for pool parties and beach days.' },
  { q: 'How long does it keep drinks cold?', a: 'Our premium neoprene insulation keeps your beverage cold for 2-3 hours depending on conditions.' },
  { q: 'What is your return policy?', a: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, send it back for a full refund.' },
  { q: 'Do you ship internationally?', a: 'Yes! We ship to over 40 countries. Shipping costs are calculated at checkout.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-mono text-4xl md:text-6xl font-bold uppercase mb-4">
              <span className="text-gradient-cyan">FAQ</span>
            </h1>
            <p className="text-muted-foreground text-lg">Got questions? We've got answers.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full p-6 flex items-center justify-between text-left">
                  <span className="font-mono font-bold pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
