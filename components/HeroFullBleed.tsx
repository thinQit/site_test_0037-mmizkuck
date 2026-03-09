"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroFullBleedProps {
  imageSrc?: string
  title?: string
  subtitle?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  className?: string
}

export default function HeroFullBleed({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  title = 'Quiet, timeless photography for modern love stories.',
  subtitle = 'Freelance photographer capturing weddings, portraits, and editorial moments with a minimal, story-first approach.',
  primaryCtaLabel = 'View Portfolio',
  primaryCtaHref = '#portfolio',
  secondaryCtaLabel = 'Inquire',
  secondaryCtaHref = '#contact',
  className = '',
}: Partial<HeroFullBleedProps>) {
  return (
    <section className={cn('relative min-h-[78vh] w-full overflow-hidden', className)}>
      <Image
        src={imageSrc}
        alt="Photographer hero"
        fill
        priority
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl font-light leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-sm font-light text-white/85 md:text-base">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-lg bg-white text-black hover:bg-white/90">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg border-white text-white hover:bg-white/10">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
