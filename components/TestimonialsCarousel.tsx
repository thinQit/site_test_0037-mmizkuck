'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  name: string
  role: string
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
  autoPlay?: boolean
  intervalMs?: number
}

export default function TestimonialsCarousel({
  testimonials = [
    {
      quote: 'Every image felt effortless and emotional. We relive our wedding day every time we open the gallery.',
      name: 'Maya & Lucas',
      role: 'Wedding Clients',
    },
    {
      quote: 'She guided us naturally and delivered stunning portraits that still feel like us.',
      name: 'Elena R.',
      role: 'Portrait Client',
    },
    {
      quote: 'Our campaign visuals came out clean, modern, and exactly on brand.',
      name: 'North Atelier',
      role: 'Editorial Client',
    },
  ],
  autoPlay = true,
  intervalMs = 4500,
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [autoPlay, intervalMs, testimonials.length])

  return (
    <div>
      <div className="space-y-4 md:hidden">
        {testimonials.map((item) => (
          <Card key={item.name} className="rounded-xl border p-6">
            <p className="text-sm leading-relaxed">“{item.quote}”</p>
            <div className="mt-5 flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{item.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="hidden md:block">
        <Card className="rounded-xl border p-10">
          <p className="text-lg font-light leading-relaxed transition-all duration-500">
            “{testimonials[index]?.quote || ''}”
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{(testimonials[index]?.name || 'CL').slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{testimonials[index]?.name || 'Client'}</p>
              <p className="text-xs text-muted-foreground">{testimonials[index]?.role || ''}</p>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            {testimonials.map((_, dot) => (
              <button
                key={dot}
                type="button"
                onClick={() => setIndex(dot)}
                className={cn(
                  'h-1.5 w-6 rounded-full bg-muted transition-all',
                  dot === index && 'bg-foreground'
                )}
                aria-label={'Go to testimonial ' + (dot + 1)}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
