export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import PricingTable from "@/components/PricingTable"
import WeddingPackages from "@/components/WeddingPackages"
import FAQAccordion from "@/components/FAQAccordion"
import CTABanner from "@/components/CTABanner"
import Container from "@/components/Container"
import Section from "@/components/Section"

export default function PricingPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Pricing & packages"
        subheadline="Simple packages, clear deliverables, and a calm process from first email to final gallery."
        primaryCta={{ label: "Inquire", href: "/contact" }}
        secondaryCta={{ label: "View Portfolio", href: "/gallery" }}
      />

      <Section>
        <Container>
          <PricingTable
            headline="Choose your session"
            subheadline="Most clients book the Standard package."
            tiers={[
              {
                name: "Portrait Mini",
                price: "$350",
                period: "session",
                description: "Headshots, quick couple sessions, announcements",
                features: ["30 minutes • 1 location", "15 retouched images", "Delivery in 7 days"],
                ctaLabel: "Check Availability",
                ctaHref: "/contact",
              },
              {
                name: "Portrait Standard",
                price: "$450",
                period: "session",
                description: "Personal branding, couples, families",
                features: ["60 minutes • 1–2 nearby locations", "35+ edited images", "Delivery in 7–10 days"],
                ctaLabel: "Book Standard",
                ctaHref: "/contact",
                highlighted: true,
              },
              {
                name: "Brand Half-Day",
                price: "$1,200",
                period: "project",
                description: "Product launches, website refresh, founder portraits",
                features: ["Up to 4 hours coverage", "75+ edited images", "Delivery in 10–14 days"],
                ctaLabel: "Start Inquiry",
                ctaHref: "/contact",
              },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <WeddingPackages />
        </Container>
      </Section>

      <Section>
        <Container>
          <FAQAccordion
            headline="FAQs"
            subheadline="The details that help you plan with confidence."
            items={[
              {
                question: "How do I book?",
                answer:
                  "Send an inquiry with your date and location. We’ll confirm availability, then secure your date with a signed agreement and retainer.",
              },
              {
                question: "Do you offer prints?",
                answer: "Yes. Your gallery can include an optional print store with museum-quality paper.",
              },
              {
                question: "Do you deliver RAW files?",
                answer: "No. Final images are fully edited to match the look of the portfolio.",
              },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            headline="Let’s plan your shoot"
            description="Tell me what you’re making and I’ll recommend the right coverage."
            ctaLabel="Start an Inquiry"
            ctaHref="/contact"
            secondaryCtaLabel="Browse Gallery"
            secondaryCtaHref="/gallery"
          />
        </Container>
      </Section>
    </main>
  )
}
