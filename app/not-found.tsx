import { Button } from "@/components/ui/button"
import Container from "@/components/Container"
import Section from "@/components/Section"

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl font-semibold">Page not found</h1>
          <p className="text-muted-foreground">The page you’re looking for doesn’t exist or has moved.</p>
          <Button asChild>
            <a href="/">Back to home</a>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
