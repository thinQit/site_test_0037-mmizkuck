'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface LightboxItem {
  imageSrc: string
  title: string
  width: number
  height: number
}

interface LightboxModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  items?: LightboxItem[]
  currentIndex?: number
  onIndexChange?: (index: number) => void
}

export default function LightboxModal({
  open = false,
  onOpenChange = () => {},
  items = [],
  currentIndex = 0,
  onIndexChange = () => {},
}: Partial<LightboxModalProps>) {
  const hasItems = items.length > 0
  const safeIndex = hasItems ? Math.max(0, Math.min(currentIndex, items.length - 1)) : 0
  const current = hasItems ? items[safeIndex] : null

  const goPrev = () => {
    if (!hasItems) return
    onIndexChange((safeIndex - 1 + items.length) % items.length)
  }

  const goNext = () => {
    if (!hasItems) return
    onIndexChange((safeIndex + 1) % items.length)
  }

  useEffect(() => {
    if (!open) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
      if (event.key === 'Escape') onOpenChange(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl border-0 bg-black/95 p-4 text-white sm:p-6">
        <div className="relative">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="absolute right-0 top-0 z-20 text-white hover:bg-white/10"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-5 w-5" />
          </Button>

          {current && (
            <div className="mx-auto flex max-h-[80vh] items-center justify-center">
              <Image
                src={current.imageSrc}
                alt={current.title}
                width={current.width}
                height={current.height}
                className="max-h-[75vh] w-auto rounded-md object-contain"
                unoptimized
              />
            </div>
          )}

          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <p className="mt-3 text-center text-sm text-white/80">{current?.title || ''}</p>
      </DialogContent>
    </Dialog>
  )
}
