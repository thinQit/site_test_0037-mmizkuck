'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  links?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Navbar({
  logoText = 'Lumen Frames',
  links = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel = 'Inquire',
  ctaHref = '#contact',
}: Partial<NavbarProps>) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur transition-all',
        scrolled && 'border-border'
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="text-base font-light tracking-[0.18em] uppercase">
            {logoText}
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="text-sm font-light text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button asChild className="rounded-lg px-5">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </nav>
      </Container>
    </header>
  )
}
