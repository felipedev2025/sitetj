import { LocalBusinessJsonLd } from "@/components/seo/local-business-jsonld";
import { HeroSection } from "@/components/sections/hero-section";
import { BrandsMarqueeSection } from "@/components/sections/brands-marquee-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { CompleteSolutionSection } from "@/components/sections/complete-solution-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SegmentsSection } from "@/components/sections/segments-section";
import { SegmentsHighlightCarousel } from "@/components/sections/segments-highlight-carousel";
import { SystemSection } from "@/components/sections/system-section";
import { SupportHighlightSection } from "@/components/sections/support-highlight-section";
import { InfrastructureSection } from "@/components/sections/infrastructure-section";
import { EquipmentSection } from "@/components/sections/equipment-section";
import { TimeClockHighlightSection } from "@/components/sections/timeclock-highlight-section";
import { ProcessSection } from "@/components/sections/process-section";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { CompanySection } from "@/components/sections/company-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HeroSection />
      <ClientsSection />
      <BrandsMarqueeSection />
      <CompleteSolutionSection />
      <ServicesSection />
      <SegmentsSection />
      <SegmentsHighlightCarousel />
      <SystemSection />
      <SupportHighlightSection />
      <InfrastructureSection />
      <EquipmentSection />
      <TimeClockHighlightSection />
      <ProcessSection />
      <DifferentiatorsSection />
      <CompanySection />
      <ContactSection />
    </>
  );
}
