import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { MidPageEmailSignup } from "@/components/home/MidPageEmailSignup";
import { PricingTiersSection } from "@/components/home/PricingTiersSection";
import { EmailCTASection } from "@/components/home/EmailCTASection";
import VIPOffer from "./VIPOffer";
import { FetchIndustrialComplex } from "@/components/home/FetchIndustrialComplex";
import Header from "@/components/Header";


const Index = () => {
  return (
    <Layout>
      {/* <Header/> */}
      <HeroSection />
      <FetchIndustrialComplex/>
      {/* <VIPOffer /> */}
      <FeaturesSection />
      <SocialProofSection />
      <HowItWorksSection />
      <MidPageEmailSignup />
      <PricingTiersSection />
      <EmailCTASection />
    </Layout>
  );
};

export default Index;
