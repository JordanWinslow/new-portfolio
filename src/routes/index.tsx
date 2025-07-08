import Spline from '@splinetool/react-spline'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <Button
        size="lg"
        variant="destructive"
        className="font-mohave absolute top-6 left-6"
      >
        VIEW PORTFOLIO
      </Button>
      <Spline scene="./assets/home-animation.splinecode" />
    </div>
  )
}
