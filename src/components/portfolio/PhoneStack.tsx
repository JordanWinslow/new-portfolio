import {
  animated,
  type SpringValue,
  to as springTo,
  useSprings,
} from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import type React from 'react'
import { useState } from 'react'
import CNBCRedesign from '../../assets/images/portfolio/CNBCRedesign.jpg'
import containmentBreach from '../../assets/images/portfolio/containment-breach.gif'
import ecosystem from '../../assets/images/portfolio/ecosystem.gif'
import PokeTeam from '../../assets/images/portfolio/PokeTeam.jpg'
import poketeamdemo from '../../assets/images/portfolio/poketeamdemo.gif'

// import './PhoneStack.css'  // Removed because the file does not exist

interface PhoneSpringProps {
  x: SpringValue<number>
  y: SpringValue<number>
  rot: SpringValue<number>
  scale: SpringValue<number>
}

const stackOfPhones = [
  CNBCRedesign,
  PokeTeam,
  poketeamdemo,
  ecosystem,
  containmentBreach,
  CNBCRedesign,
  PokeTeam,
]

const PhoneStack: React.FC = () => {
  const to = (i: number) => ({
    x: 0,
    y: i * -30,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  })
  const from = (i: number) => ({ x: 0, rot: 0, scale: 1.2, y: -1000 })
  const trans = (r: number, s: number) =>
    `perspective(1200px) rotateX(25deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

  const [gone] = useState(() => new Set<number>())
  const [props, set] = useSprings(stackOfPhones.length, (i: number) => ({
    ...to(i),
    from: from(i),
  }))

  const bind = useDrag(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = Math.abs(velocity[0]) > 0.2
      const dir = xDir < 0 ? -1 : 1
      if (!down && trigger) gone.add(index)
      set((i: number) => {
        if (index !== i) return
        const isGone = gone.has(index)
        const x = isGone ? (window.innerWidth + 200) * dir : down ? xDelta : 0
        const rot = xDelta / 100 + (isGone ? dir * 20 * velocity[0] : 0)
        const scale = down ? 1.08 : 1
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!down && gone.size === stackOfPhones.length) {
        setTimeout(() => {
          gone.clear()
          set((i: number) => to(i))
        }, 600)
      }
    },
  )

  return (
    <div
      className="relative flex items-center justify-center w-full h-full select-none"
      style={{ minHeight: 400, minWidth: 300 }}
    >
      {props.map(({ x, y, rot, scale }: PhoneSpringProps, i: number) => (
        <animated.div
          key={`phone-${stackOfPhones[i]}-${i}`}
          style={{
            transform: springTo(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`,
            ),
            zIndex: stackOfPhones.length - i,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: springTo([rot, scale], trans),
            }}
            className="phone-frame shadow-2xl cursor-grab active:cursor-grabbing"
          >
            <div className="w-[270px] h-[540px] bg-black rounded-[2.5rem] border-[8px] border-neutral-800 flex items-center justify-center overflow-hidden relative">
              <img
                src={stackOfPhones[i]}
                alt={`Phone ${i + 1}`}
                className="object-cover w-[240px] h-[510px] rounded-[2rem] shadow-lg"
                draggable={false}
              />
              {/* Speaker and button for realism */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-neutral-700 rounded-full opacity-70" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-neutral-700 rounded-full opacity-60" />
            </div>
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default PhoneStack
