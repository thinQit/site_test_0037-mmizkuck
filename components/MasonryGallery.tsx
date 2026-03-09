'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import CategoryFilterChips from '@/components/CategoryFilterChips'

interface GalleryItem {
  id: string
  imageSrc: string
  title: string
  category: string
  width: number
  height: number
}

interface MasonryGalleryProps {
  items?: GalleryItem[]
  className?: string
  onImageClick?: (index: number, filteredItems: GalleryItem[]) => void
}

export default function MasonryGallery({
  items = [
    { id: '1', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', title: 'Golden Hour Vows', category: 'Weddings', width: 900, height: 1200 },
    { id: '2', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', title: 'Studio Portrait', category: 'Portraits', width: 900, height: 1100 },
    { id: '3', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', title: 'Editorial Frame', category: 'Editorial', width: 1000, height: 1300 },
    { id: '4', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', title: 'Reception Light', category: 'Weddings', width: 900, height: 1000 },
    { id: '5', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', title: 'Brand Session', category: 'Portraits', width: 900, height: 1200 },
  ],
  className = '',
  onImageClick = () => {},
}: Partial<MasonryGalleryProps>) {
  const categories = useMemo(() => ['All', ...Array.from(new Set(items.map((i) => i.category)))], [items])
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = useMemo(
    () => (activeCategory === 'All' ? items : items.filter((i) => i.category === activeCategory)),
    [activeCategory, items]
  )

  return (
    <div className={cn('space-y-6', className)}>
      <CategoryFilterChips
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 lg:gap-4">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onImageClick(index, filteredItems)}
            className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl"
          >
            <div className="relative">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-left text-sm text-white">{item.title}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
