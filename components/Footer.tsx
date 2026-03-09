"use client";

import Link from 'next/link'
import { Instagram, Mail, MapPin } from 'lucide-react'
import Container from '@/components/Container'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  brand?: string
  location?: string
  hours?: string
  email?: string
  instagramUrl?: string
  quickLinks?: { label: string; href: string }[]
}

export default function Footer({
  brand = 'Lumen Frames Photography',
  location = 'Based in Austin, TX · Available Worldwide',
  hours = 'Mon–Fri, 9:00 AM – 6:00 PM',
  email = 'hello@lumenframes.com',
  instagramUrl = 'https://instagram.com',
  quickLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-light uppercase tracking-[0.18em]">{brand}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {location}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{hours}</p>
          </div>

          <div>
            <p className="text-sm font-medium">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label + item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Connect</p>
            <div className="mt-3 space-y-2">
              <a
                href={'mailto:' + email}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                {email}
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {brand}. All rights reserved.</p>
      </Container>
    </footer>
  )
}
