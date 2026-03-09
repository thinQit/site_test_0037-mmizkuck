"use client";

import { Camera, Sparkles, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ServiceItem {
  title: string
  description: string
  startingPrice: string
  duration: string
  deliverables: string[]
  icon: string
}

interface ServiceCardsProps {
  services?: ServiceItem[]
}

const iconMap = {
  Camera,
  Sparkles,
  Users,
}

export default function ServiceCards({
  services = [
    {
      title: 'Portrait Sessions',
      description: 'Natural light portraits for individuals, couples, and personal branding.',
      startingPrice: '$450',
      duration: '60–90 min',
      deliverables: ['70+ edited images', 'Online gallery', 'Print release'],
      icon: 'Camera',
    },
    {
      title: 'Wedding Coverage',
      description: 'Story-driven wedding documentation from preparation to reception.',
      startingPrice: '$2,800',
      duration: '6 hours',
      deliverables: ['500+ edited images', 'Timeline planning call', 'Sneak peeks in 48 hrs'],
      icon: 'Sparkles',
    },
    {
      title: 'Editorial & Brand',
      description: 'Clean, intentional visuals for creative teams and small businesses.',
      startingPrice: '$900',
      duration: 'Half day',
      deliverables: ['Usage-ready retouched images', 'Creative direction', 'Commercial license'],
      icon: 'Users',
    },
  ],
}: Partial<ServiceCardsProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap] || Camera
        return (
          <Card key={service.title} className="rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <Icon className="h-5 w-5 text-foreground/80" />
              <Badge variant="outline">From {service.startingPrice}</Badge>
            </div>
            <h3 className="mt-4 text-lg font-medium">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            <p className="mt-4 text-sm">Duration: {service.duration}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {service.deliverables.map((item) => (
                <li key={service.title + item}>• {item}</li>
              ))}
            </ul>
          </Card>
        )
      })}
    </div>
  )
}
