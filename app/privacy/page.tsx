export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import Container from "@/components/Container"
import Section from "@/components/Section"

export default function PrivacyPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg"
        headline="Privacy policy"
        subheadline="A simple explanation of what information is collected and how it’s used."
        primaryCta={{ label: "Contact", href: "/contact" }}
        secondaryCta={{ label: "Home", href: "/" }}
      />

      <Section>
        <Container>
          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Inquiry information</h2>
              <p className="mt-2 text-muted-foreground">
                When you submit the contact form, you may provide your name, email, phone, date, location, and
                project details. This is used only to respond and manage bookings.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Analytics</h2>
              <p className="mt-2 text-muted-foreground">
                Basic privacy-friendly analytics may be used to understand page performance. No personal information is
                sold.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Data retention</h2>
              <p className="mt-2 text-muted-foreground">
                Inquiry emails are retained for business records. To request deletion, email hello@noirframe.photo.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
