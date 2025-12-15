import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { CountdownSection } from '@/components/home/CountdownSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { SocialProofSection } from '@/components/home/SocialProofSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { EmailCTASection } from '@/components/home/EmailCTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CountdownSection />
      <FeaturesSection />
      <SocialProofSection />
      <HowItWorksSection />
      <EmailCTASection />
    </Layout>
  );
};

export default Index;
