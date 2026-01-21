import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { MidPageEmailSignup } from "@/components/home/MidPageEmailSignup";
import { PricingTiersSection } from "@/components/home/PricingTiersSection";
import { EmailCTASection } from "@/components/home/EmailCTASection";
import VIPOffer from "./VIPOffer";
import { FetchIndustrialComplex } from "@/components/home/FetchIndustrialComplex";
// import { ManifestoSection } from "@/components/home/ManifestoSection";


const Index = () => {
  return (
    <Layout>
      <div id="study">
        <HeroSection />
      </div>
      <div id="fetch">
        <FetchIndustrialComplex />
      </div>
      {/* <ManifestoSection /> */}
      {/* <VIPOffer /> */}
      <div id="throw">
        <FeaturesSection />
      </div>
      <div id="revolution">
        <HowItWorksSection />
      </div>
      <div id="join">
        <MidPageEmailSignup />
        <PricingTiersSection />
        <EmailCTASection />
      </div>
    </Layout>
  );
};

export default Index;
