import Spline from '@splinetool/react-spline'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Link to="/portfolio" className="absolute top-6 left-6 z-10">
        <Button
          size="lg"
          variant="secondary"
          className="font-mohave font-bold text-lg px-8 py-4 gradient-border-proximity enhanced-shadow hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 border-0 tracking-wider uppercase shadow-2xl hover:shadow-purple-500/25"
        >
          <span className="flex items-center justify-center">
            VIEW PORTFOLIO
          </span>
        </Button>
      </Link>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full">
          <Spline scene="./assets/home-animation.splinecode" />
        </div>
      </div>
    </div>
  )
}
