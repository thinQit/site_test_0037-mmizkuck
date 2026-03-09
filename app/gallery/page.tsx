"use client"


export const dynamic = 'force-dynamic';
import { useState } from "react"
import HeroImage from "@/components/HeroImage"
import MasonryGallery from "@/components/MasonryGallery"
import CategoryFilterChips from "@/components/CategoryFilterChips"
import LightboxModal from "@/components/LightboxModal"
import CTABanner from "@/components/CTABanner"
import Container from "@/components/Container"
import Section from "@/components/Section"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg"
        headline="Portfolio"
        subheadline="Browse by category and focus on the work."
        primaryCta={{ label: "Inquire", href: "/contact" }}
        secondaryCta={{ label: "Pricing", href: "/pricing" }}
      />

      <Section>
        <Container>
          <div className="mb-8">
            <CategoryFilterChips />
          </div>
          <MasonryGallery />
          <LightboxModal />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTABanner
            headline="Want this look for your session?"
            description="Tell me what you’re planning and I’ll recommend the right package."
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
