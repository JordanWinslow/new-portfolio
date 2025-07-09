import Spline from '@splinetool/react-spline'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Route as portfolioRoute } from '../routes/portfolio'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Link to={portfolioRoute.to} className="absolute top-6 left-6 z-10">
        <Button size="lg" variant="secondary">
          VIEW PORTFOLIO
        </Button>
      </Link>
      <div className="relative flex items-center justify-center">
        <div className="w-full h-full">
          <Spline scene="./src/assets/spline/home-animation.splinecode" />
        </div>
      </div>
    </div>
  )
}
