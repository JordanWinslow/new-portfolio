import { useCallback, useState } from 'react'
import { Slider } from '../ui/Slider'
import PhoneStack from './PhoneStack'

interface PhoneStackShowcaseProps {
  images: string[]
}

export default function PhoneStackShowcase({
  images,
}: PhoneStackShowcaseProps) {
  const [flickSpeed, setFlickSpeed] = useState(5)
  const [maxSpinDegrees, setMaxSpinDegrees] = useState(180)

  // Display states for real-time updates
  const [flickSpeedDisplay, setFlickSpeedDisplay] = useState(5)
  const [spinDegreesDisplay, setSpinDegreesDisplay] = useState(180)

  const handleFlickSpeedChange = useCallback(([value]: number[]) => {
    setFlickSpeedDisplay(value ?? 5)
  }, [])

  const handleFlickSpeedCommit = useCallback(([value]: number[]) => {
    setFlickSpeed(value ?? 5)
    setFlickSpeedDisplay(value ?? 5)
  }, [])

  const handleSpinDegreesChange = useCallback(([value]: number[]) => {
    setSpinDegreesDisplay(value ?? 180)
  }, [])

  const handleSpinDegreesCommit = useCallback(([value]: number[]) => {
    setMaxSpinDegrees(value ?? 180)
    setSpinDegreesDisplay(value ?? 180)
  }, [])

  return (
    <section className="gradient-border rounded-3xl p-8 md:p-12 bg-black/20 backdrop-blur-sm max-w-6xl mx-auto relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-mohave text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide">
                INTERACTIVE PHONE STACK
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Experience the power of modern React animations with this
                interactive phone stack. Click and drag phones to see them
                respond naturally, or flick them away with realistic physics.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <label
                  htmlFor="flick-speed"
                  className="font-mohave text-xl font-bold text-white flex items-center gap-3"
                >
                  <span>Flick Speed</span>
                  <span className="text-white font-mono bg-gray-800 px-3 py-1 rounded text-sm">
                    {flickSpeedDisplay}
                  </span>
                </label>
                <Slider
                  id="flick-speed"
                  defaultValue={[flickSpeed]}
                  onValueChange={handleFlickSpeedChange}
                  onValueCommit={handleFlickSpeedCommit}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-50 rounded-lg transition-all duration-200"
                  variant="flick-speed"
                />
                <p className="text-xs text-gray-400">
                  Controls how fast phones can fly off screen when flicked (1 =
                  slow, 10 = fast)
                </p>
              </div>

              <div className="space-y-4">
                <label
                  htmlFor="spin-degrees"
                  className="font-mohave text-xl font-bold text-white flex items-center gap-3"
                >
                  <span>Spin Degrees</span>
                  <span className="text-white font-mono bg-gray-800 px-3 py-1 rounded text-sm">
                    {spinDegreesDisplay}°
                  </span>
                </label>
                <Slider
                  id="spin-degrees"
                  defaultValue={[maxSpinDegrees]}
                  onValueChange={handleSpinDegreesChange}
                  onValueCommit={handleSpinDegreesCommit}
                  max={360}
                  min={0}
                  step={10}
                  className="w-full focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-opacity-50 rounded-lg transition-all duration-200"
                  variant="spin-degrees"
                />
                <p className="text-xs text-gray-400">
                  Maximum rotation when phones are flicked (0° = no spin, 360° =
                  full rotation)
                </p>
              </div>
            </div>

            <div className="pt-6 pb-16 md:pb-24 lg:pb-0">
              <p className="text-sm text-gray-400 italic">
                💡 <strong>Tip:</strong> Pay attention to the speed & direction
                you flick each phone. The phone stack will re-assemble in the
                same directions and speeds you threw them!
              </p>
            </div>
          </div>

          <div className="relative lg:mt-16">
            <div className="relative z-10">
              <PhoneStack
                images={images}
                maxFlickVelocity={flickSpeed}
                maxSpinDegrees={maxSpinDegrees}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-cyan-500/5 to-teal-500/5 rounded-2xl blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
