import { Hero, TrustSection, ServiceGrid, WhyChooseUs, CTASection } from "@bestlocal/ui";
import { landscapingConfig as config } from "@bestlocal/templates";

export default function HomePage() {
  return (
    <>
      <Hero config={config} />
      <TrustSection config={config} />
      <ServiceGrid config={config} />
      <WhyChooseUs config={config} />
      <CTASection config={config} />
    </>
  );
}
