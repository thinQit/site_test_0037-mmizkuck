"use client";

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface WeddingPackage {
  name: string
  price: string
  coverageHours: string
  deliverables: string[]
  featured?: boolean
}

interface WeddingPackagesProps {
  packages?: WeddingPackage[]
}

export default function WeddingPackages({
  packages = [
    {
      name: 'Essentials',
      price: '$2,800',
      coverageHours: '6 hours',
      deliverables: ['One photographer', '500+ edited photos', 'Online gallery'],
      featured: false,
    },
    {
      name: 'Signature',
      price: '$3,900',
      coverageHours: '8 hours',
      deliverables: ['Engagement session', '700+ edited photos', 'Timeline planning'],
      featured: true,
    },
    {
      name: 'Weekend Story',
      price: '$5,200',
      coverageHours: '10 hours',
      deliverables: ['Two photographers', '900+ edited photos', 'Rehearsal coverage'],
      featured: false,
    },
  ],
}: Partial<WeddingPackagesProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {packages.map((pkg) => (
        <Card key={pkg.name} className="rounded-xl border p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{pkg.name}</h3>
            {pkg.featured && <Badge>Most Chosen</Badge>}
          </div>
          <p className="mt-4 text-3xl font-light">{pkg.price}</p>
          <p className="mt-1 text-sm text-muted-foreground">{pkg.coverageHours} coverage</p>

          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {pkg.deliverables.map((item) => (
              <li key={pkg.name + item}>• {item}</li>
            ))}
          </ul>

          <Button className="mt-6 w-full rounded-lg">Inquire</Button>
        </Card>
      ))}
    </div>
  )
}
