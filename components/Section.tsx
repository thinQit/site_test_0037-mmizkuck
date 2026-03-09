"use client";

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Container from '@/components/Container'

interface SectionProps {
  id?: string
  children?: ReactNode
  className?: string
  containerClassName?: string
  muted?: boolean
  fullBleed?: boolean
}

export default function Section({
  id = '',
  children,
  className = '',
  containerClassName = '',
  muted = false,
  fullBleed = false,
}: Partial<SectionProps>) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-28', muted && 'bg-muted/40', className)}
    >
      {fullBleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
