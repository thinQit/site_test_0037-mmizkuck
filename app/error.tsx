"use client"

import { Button } from "@/components/ui/button"
import Container from "@/components/Container"
import Section from "@/components/Section"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <Section>
      <Container>
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl font-semibold">Something went wrong.</h1>
          <p className="text-muted-foreground">Please try again, or return to the homepage.</p>
          <div className="flex gap-3">
            <Button onClick={() => reset()}>Try again</Button>
            <Button asChild variant="outline">
              <a href="/">Go home</a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
