import { Skeleton } from "@/components/ui/skeleton"
import Container from "@/components/Container"
import Section from "@/components/Section"

export default function Loading() {
  return (
    <Section>
      <Container>
        <div className="space-y-4">
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-96 w-full rounded-xl" />
        </div>
      </Container>
    </Section>
  )
}
