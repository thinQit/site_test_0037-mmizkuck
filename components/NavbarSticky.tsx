'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarStickyProps {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function NavbarSticky({
  logo = 'Lumen Studio',
  navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel = 'Book Now',
  ctaHref = '#contact',
}: Partial<NavbarStickyProps>) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-white">
          {logo}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(function (item) {
            return (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                {item.label}
              </Link>
            );
          })}
          {ctaLabel && ctaHref && (
            <Button asChild>
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          )}
        </nav>
        <button className="p-2 text-white md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/20 bg-black/70 md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map(function (item) {
              return (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-white/90" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              );
            })}
            {ctaLabel && ctaHref && (
              <Button className="w-full" asChild>
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
