export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import ContactForm from "@/components/ContactForm"
import CTABanner from "@/components/CTABanner"
import Container from "@/components/Container"
import Section from "@/components/Section"

export default function ContactPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Contact"
        subheadline="Tell me what you’re planning—date, location, and the vibe. I’ll respond within 24–48 hours."
        primaryCta={{ label: "Email Directly", href: "mailto:hello@noirframe.photo" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      />

      <Section>
        <Container>
          <ContactForm
            headline="Inquiry form"
            subheadline="The more detail you share, the better I can recommend coverage and timing."
            contactInfo={[
              { icon: "Mail", label: "Email", value: "hello@noirframe.photo" },
              { icon: "MapPin", label: "Location", value: "Brooklyn, NY (travel available)" },
              { icon: "Clock", label: "Hours", value: "Mon–Fri 10:00–18:00" },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            headline="Before you hit send"
            description="Turnaround: Portraits/brand 7–14 days. Weddings 4–6 weeks. Signed agreement + 30% retainer reserves your date."
            ctaLabel="Pricing"
            ctaHref="/pricing"
            secondaryCtaLabel="About"
            secondaryCtaHref="/about"
          />
        </Container>
      </Section>
    </main>
  )
}
