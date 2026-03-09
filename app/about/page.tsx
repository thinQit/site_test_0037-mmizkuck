export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import CTABanner from "@/components/CTABanner"
import Container from "@/components/Container"
import Section from "@/components/Section"

export default function AboutPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg"
        headline="Hi, I’m Maya."
        subheadline="I photograph people the way they want to be remembered—present, confident, and real."
        primaryCta={{ label: "View Work", href: "/gallery" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">My approach</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Minimal direction, intentional composition, and a calm pace—so you can stay in the moment.
            </p>
            <p>
              I started as a street photographer, chasing light and small gestures. That documentary instinct still
              shapes everything I do—especially weddings and events.
            </p>
            <p>
              You’ll receive a curated gallery with consistent color, clean contrast, and a black & white set that
              feels timeless.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            headline="If you like clean images and an easy process, we’ll work well together."
            description="Tell me what you’re planning and I’ll recommend the right package."
            ctaLabel="Contact"
            ctaHref="/contact"
            secondaryCtaLabel="Gallery"
            secondaryCtaHref="/gallery"
          />
        </Container>
      </Section>
    </main>
  )
}
