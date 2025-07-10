/*
Author: Jordan Winslow
License: Attribution - NonCommercial 4.0 International
Licence Link: https://creativecommons.org/licenses/by-nc/4.0/legalcode
GitHub Link: https://github.com/JordanWinslow/Animated-Phone-Stack
*/

import {
  animated,
  type SpringValue,
  to as springTo,
  useSprings,
} from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import type React from 'react'
import { useRef } from 'react'

export interface PhoneStackProps {
  images: string[]
  maxFlickVelocity?: number
  maxSpinDegrees?: number
  flickVelocityThreshold?: number
  phoneWidth?: number
  phoneHeight?: number
  stackOffsetY?: number
}

const DEFAULT_PHONE_WIDTH = 189
const DEFAULT_PHONE_HEIGHT = 378
const DEFAULT_STACK_OFFSET_Y = -21
const DEFAULT_MAX_FLICK_VELOCITY = 5
const DEFAULT_MAX_SPIN_DEGREES = 180
const DEFAULT_FLICK_VELOCITY_THRESHOLD = 0.2

interface PhoneSpringOptions {
  x: SpringValue<number>
  y: SpringValue<number>
  rot: SpringValue<number>
  scale: SpringValue<number>
}

export const PhoneStack: React.FC<PhoneStackProps> = ({
  images,
  maxFlickVelocity = DEFAULT_MAX_FLICK_VELOCITY,
  maxSpinDegrees = DEFAULT_MAX_SPIN_DEGREES,
  flickVelocityThreshold = DEFAULT_FLICK_VELOCITY_THRESHOLD,
  phoneWidth = DEFAULT_PHONE_WIDTH,
  phoneHeight = DEFAULT_PHONE_HEIGHT,
  stackOffsetY = DEFAULT_STACK_OFFSET_Y,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const flickedPhonesRef = useRef<Set<number>>(new Set())

  const getContainerCenter = () => {
    const rect = containerRef.current?.getBoundingClientRect()
    return rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : { x: window.innerWidth / 2, y: window.innerHeight / 2 }
  }

  const getInitialPosition = (index: number) => ({
    x: 0,
    y: index * stackOffsetY,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: index * 100,
  })

  const getStartPosition = () => ({ x: 0, y: 0, rot: 0, scale: 1.2 })

  const getTransform = (rotation: number, scale: number) =>
    `perspective(1200px) rotateX(25deg) rotateY(${rotation / 10}deg) rotateZ(${rotation}deg) scale(${scale})`

  const [springs, setSprings] = useSprings(images.length, (index: number) => ({
    ...getInitialPosition(index),
    from: getStartPosition(),
  }))

  const dragOffsetRef = useRef({ x: 0, y: 0 })

  const bind = useDrag(
    ({
      args: [phoneIndex],
      down,
      movement: [moveX, moveY],
      velocity,
      direction: [xDirection],
      xy: [mouseX, mouseY],
      first,
      last,
    }) => {
      const containerCenter = getContainerCenter()

      if (first) {
        dragOffsetRef.current = {
          x: mouseX - containerCenter.x,
          y: mouseY - containerCenter.y,
        }
      }

      const rawVelocity = velocity[0]
      const velocityScale = Math.max(1, Math.min(10, maxFlickVelocity))
      const flickSpeedFactor = 0.02 + ((velocityScale - 1) / 9) * (2.0 - 0.02)
      const clampedVelocity =
        Math.min(Math.abs(rawVelocity), flickSpeedFactor) *
        Math.sign(rawVelocity)
      const isFlicked = !down && Math.abs(rawVelocity) > flickVelocityThreshold
      const flickDirection = xDirection < 0 ? -1 : 1

      if (isFlicked) {
        flickedPhonesRef.current.add(phoneIndex)
      }

      setSprings((index: number) => {
        if (phoneIndex !== index) return

        const isFlicked = flickedPhonesRef.current.has(index)
        let targetX = 0
        let targetY = getInitialPosition(index).y

        if (down) {
          targetX = mouseX - containerCenter.x - dragOffsetRef.current.x
          targetY = mouseY - containerCenter.y - dragOffsetRef.current.y
        } else if (isFlicked) {
          targetX = (window.innerWidth + 200) * flickDirection
          targetY = moveY
        }

        let rotation = 0
        if (down) {
          rotation = (mouseX - containerCenter.x) / 20
        } else if (isFlicked) {
          rotation =
            flickDirection *
            Math.abs(maxSpinDegrees) *
            Math.sign(clampedVelocity)
        }

        rotation = Math.max(
          -Math.abs(maxSpinDegrees),
          Math.min(Math.abs(maxSpinDegrees), rotation),
        )
        const scale = down ? 1.08 : 1

        const springConfig = {
          friction: down ? 15 : isFlicked ? 60 - (velocityScale - 1) * 5 : 50,
          tension: down
            ? 200
            : isFlicked
              ? 220 + (velocityScale - 1) * 30
              : 500,
        }

        if (isFlicked) {
          const absVelocity = Math.abs(clampedVelocity)
          springConfig.friction = 60 - (velocityScale - 1) * 5 - absVelocity * 2
          springConfig.tension =
            220 + (velocityScale - 1) * 30 + absVelocity * 10
        }

        return {
          x: targetX,
          y: targetY,
          rot: rotation,
          scale,
          delay: undefined,
          immediate: down,
          config: springConfig,
        }
      })

      if (last && flickedPhonesRef.current.size === images.length) {
        setTimeout(() => {
          flickedPhonesRef.current.clear()
          setSprings((index: number) => getInitialPosition(index))
        }, 600)
      }
    },
    { filterTaps: true },
  )

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-full select-none mt-32 md:mt-0"
      style={{
        minHeight: phoneHeight * 0.75,
        minWidth: phoneWidth * 0.75,
        overflow: 'visible',
      }}
    >
      {springs.map(
        ({ x, y, rot, scale }: PhoneSpringOptions, index: number) => (
          <animated.div
            key={`phone-${images[index]}-${index}`}
            style={{
              transform: springTo(
                [x, y],
                (x, y) => `translate3d(${x}px,${y}px,0)`,
              ),
              zIndex: images.length - index,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <animated.div
              {...bind(index)}
              style={{
                transform: springTo([rot, scale], getTransform),
              }}
              className="phone-frame shadow-2xl cursor-grab active:cursor-grabbing"
            >
              <div
                className="bg-black border-neutral-800 flex items-center justify-center overflow-hidden relative"
                style={{
                  width: phoneWidth,
                  height: phoneHeight,
                  borderRadius: phoneWidth * 0.093,
                  borderWidth: 6,
                  borderStyle: 'solid',
                }}
              >
                <img
                  src={images[index]}
                  alt={`Phone ${index + 1}`}
                  className="object-cover shadow-lg"
                  style={{
                    width: phoneWidth * 0.89,
                    height: phoneHeight * 0.945,
                    borderRadius: phoneWidth * 0.074,
                  }}
                  draggable={false}
                />
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 bg-neutral-700 rounded-full opacity-70"
                  style={{ width: phoneWidth * 0.58, height: 4 }}
                />
                <div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-neutral-700 rounded-full opacity-60"
                  style={{ width: phoneWidth * 0.26, height: 4 }}
                />
              </div>
            </animated.div>
          </animated.div>
        ),
      )}
    </div>
  )
}

export default PhoneStack
