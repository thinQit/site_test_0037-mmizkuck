import "./globals.css"
import { Syne, Space_Grotesk } from "next/font/google"
import NavbarSticky from "@/components/NavbarSticky"
import FooterMultiColumn from "@/components/FooterMultiColumn"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceGrotesk.variable} antialiased`}>
        <NavbarSticky
          logo="Noir Frame Photography"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Gallery", href: "/gallery" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Inquire"
          ctaHref="/contact"
        />
        {children}
        <FooterMultiColumn
          brand="Noir Frame Photography"
          description="Minimal, story-first photography for brands, couples, and creators."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Gallery", href: "/gallery" },
                { label: "Pricing", href: "/pricing" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Connect",
              links: [
                { label: "Instagram", href: "https://instagram.com/noirframephoto" },
                { label: "Email", href: "mailto:hello@noirframe.photo" },
                { label: "Privacy", href: "/privacy" },
              ],
            },
          ]}
          copyright="© 2026 Noir Frame Photography. All rights reserved."
        />
      </body>
    </html>
  )
}
