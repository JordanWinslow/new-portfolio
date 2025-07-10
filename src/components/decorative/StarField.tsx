import { useEffect, useState } from 'react'

interface Star {
  id: string
  x: number
  y: number
  type: 'star' | 'cross' | 'diamond'
  size: 'xs' | 'sm' | 'base' | 'lg'
  animation: 'twinkle' | 'float' | 'pulse-glow' | 'spin' | 'ping' | 'sparkle'
  color: 'white' | 'purple' | 'pink' | 'orange'
  delay: number
  duration: number
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      const positions: { x: number; y: number }[] = []
      const minDistance = 16 // 16px minimum distance between stars
      const maxAttempts = 1000

      const starTypes = ['star', 'cross', 'diamond'] as const
      const sizes = ['xs', 'sm', 'base', 'lg'] as const
      const animations = [
        'twinkle',
        'float',
        'pulse-glow',
        'spin',
        'ping',
        'sparkle',
      ] as const
      const accentColors = ['purple', 'pink', 'orange'] as const

      // Generate 60 stars with proper spacing
      for (let i = 0; i < 60; i++) {
        let attempts = 0
        let validPosition = false
        let x = 0
        let y = 0

        // Try to find a valid position
        while (attempts < maxAttempts && !validPosition) {
          x = Math.random() * 100 // percentage
          y = Math.random() * 100 // percentage

          // Check distance from existing positions
          validPosition = positions.every((pos) => {
            const distance = Math.sqrt(
              (((x - pos.x) * window.innerWidth) / 100) ** 2 +
                (((y - pos.y) * window.innerHeight) / 100) ** 2,
            )
            return distance >= minDistance
          })

          attempts++
        }

        if (validPosition) {
          positions.push({ x, y })

          const star: Star = {
            id: `star-${i}-${Math.random().toString(36).substr(2, 9)}`,
            x,
            y,
            type:
              starTypes[Math.floor(Math.random() * starTypes.length)] || 'star',
            size: sizes[Math.floor(Math.random() * sizes.length)] || 'sm',
            animation:
              animations[Math.floor(Math.random() * animations.length)] ||
              'twinkle',
            color:
              Math.random() < 0.2
                ? accentColors[
                    Math.floor(Math.random() * accentColors.length)
                  ] || 'purple'
                : 'white',
            delay: Math.random() * 3,
            duration: 2 + Math.random() * 4,
          }

          newStars.push(star)
        }
      }

      setStars(newStars)
    }

    generateStars()
  }, [])

  const getStarSymbol = (type: Star['type']) => {
    switch (type) {
      case 'star':
        return '✦'
      case 'cross':
        return '✕'
      case 'diamond':
        return '◆'
      default:
        return '✦'
    }
  }

  const getColorClass = (color: Star['color']) => {
    switch (color) {
      case 'white':
        return 'text-white'
      case 'purple':
        return 'text-purple-400'
      case 'pink':
        return 'text-pink-400'
      case 'orange':
        return 'text-orange-400'
      default:
        return 'text-white'
    }
  }

  const getSizeClass = (size: Star['size']) => {
    switch (size) {
      case 'xs':
        return 'text-xs'
      case 'sm':
        return 'text-sm'
      case 'base':
        return 'text-base'
      case 'lg':
        return 'text-lg'
      default:
        return 'text-sm'
    }
  }

  const getAnimationStyle = (
    animation: Star['animation'],
    delay: number,
    duration: number,
  ) => {
    switch (animation) {
      case 'twinkle':
        return {
          animationDelay: `${delay}s`,
          animation: `twinkle ${duration}s ease-in-out infinite`,
        }
      case 'float':
        return {
          animationDelay: `${delay}s`,
          animation: `float ${duration}s ease-in-out infinite`,
        }
      case 'pulse-glow':
        return {
          animationDelay: `${delay}s`,
          animation: `pulse-glow ${duration}s ease-in-out infinite`,
        }
      case 'spin':
        return {
          animationDelay: `${delay}s`,
          animation: `spin ${duration}s linear infinite`,
        }
      case 'ping':
        return {
          animationDelay: `${delay}s`,
          animation: `ping ${duration}s cubic-bezier(0, 0, 0.2, 1) infinite`,
        }
      case 'sparkle':
        return {
          animationDelay: `${delay}s`,
          animation: `sparkle ${duration}s ease-in-out infinite`,
        }
      default:
        return {
          animationDelay: `${delay}s`,
          animation: `twinkle ${duration}s ease-in-out infinite`,
        }
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute ${getColorClass(star.color)} ${getSizeClass(star.size)} ${
            star.animation === 'sparkle' ? 'sparkle' : ''
          }`}
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            transform: 'translate(-50%, -50%)',
            ...getAnimationStyle(star.animation, star.delay, star.duration),
          }}
        >
          {getStarSymbol(star.type)}
        </div>
      ))}
      <div className="absolute right-1/2 top-1/2">Wheeeeeeeeeeeee</div>
    </div>
  )
}
