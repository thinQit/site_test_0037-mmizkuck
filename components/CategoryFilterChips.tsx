'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CategoryFilterChipsProps {
  categories?: string[]
  activeCategory?: string
  onCategoryChange?: (category: string) => void
  className?: string
}

export default function CategoryFilterChips({
  categories = ['All', 'Weddings', 'Portraits', 'Editorial'],
  activeCategory = 'All',
  onCategoryChange = () => {},
  className = '',
}: Partial<CategoryFilterChipsProps>) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {categories.map((category) => {
        const active = activeCategory === category
        return (
          <Button
            key={category}
            type="button"
            variant={active ? 'default' : 'outline'}
            className={cn('h-9 rounded-full px-4 text-xs', active && 'bg-black text-white hover:bg-black/90')}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        )
      })}
    </div>
  )
}
