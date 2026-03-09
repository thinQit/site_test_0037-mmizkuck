export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import GalleryMasonry from "@/components/GalleryMasonry"
import ServiceCards from "@/components/ServiceCards"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import CTABanner from "@/components/CTABanner"
import Container from "@/components/Container"
import Section from "@/components/Section"

export default function HomePage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Photography that feels like a film still—clean, honest, unforgettable."
        subheadline="I’m Maya Laurent, a freelance photographer in Brooklyn. I shoot weddings, portraits, and brand stories with a minimal aesthetic and a focus on real moments."
        primaryCta={{ label: "View Portfolio", href: "/gallery" }}
        secondaryCta={{ label: "Check Availability", href: "/contact" }}
        overlayOpacity="0.35"
      />

      <Section>
        <Container>
          <GalleryMasonry
            headline="Selected work"
            subheadline="A small edit across weddings, portraits, and brand sessions."
            images={[
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg", alt: "Couple walking under city lights", caption: "Weddings • DUMBO" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Studio portrait with crisp shadows", caption: "Portraits • Greenpoint" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Minimal product composition", caption: "Brand • SoHo" },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <ServiceCards />
        </Container>
      </Section>

      <Section>
        <Container>
          <TestimonialsGrid
            headline="Kind words"
            subheadline="Clients who wanted a calm experience and images that feel like them."
            testimonials={[
              {
                quote:
                  "Maya was a steady presence all day. The photos feel effortless—like we’re inside a movie, but still completely ourselves.",
                name: "Ava & Daniel R.",
                title: "Brooklyn wedding, 8-hour coverage",
              },
              {
                quote:
                  "Our product photos finally match the quality of our brand. Clean, bright, and consistent across the whole set.",
                name: "Nina Patel",
                title: "Founder, Stone & Sea Skincare",
              },
              {
                quote:
                  "I usually hate being photographed. Maya made it easy and the portraits look confident without feeling posed.",
                name: "Jordan K.",
                title: "Portrait session, Prospect Park",
              },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            headline="Ready to create something simple and striking?"
            description="Share your date, location, and what you’re planning. I’ll reply within 24–48 hours."
            ctaLabel="Contact"
            ctaHref="/contact"
            secondaryCtaLabel="Pricing"
            secondaryCtaHref="/pricing"
          />
        </Container>
      </Section>
    </main>
  )
}
