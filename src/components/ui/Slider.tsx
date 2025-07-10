import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '@/lib/utils'

interface SliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root> {
  variant?: 'default' | 'flick-speed' | 'spin-degrees'
}

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  variant = 'default',
  ...props
}: SliderProps) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  )

  const getThumbClassName = () => {
    const baseClasses =
      'block size-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black disabled:pointer-events-none disabled:opacity-50 transition-all duration-200 hover:scale-110'

    switch (variant) {
      case 'flick-speed':
        return cn(
          baseClasses,
          'border-2 border-white bg-black focus:ring-white/50',
        )
      case 'spin-degrees':
        return cn(
          baseClasses,
          'border-2 border-black bg-pink-500 focus:ring-pink-500/50',
        )
      default:
        return cn(
          baseClasses,
          'border-2 border-black bg-white focus:ring-white/50',
        )
    }
  }

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          'bg-neutral-800 relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2',
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            variant === 'flick-speed'
              ? 'bg-white'
              : 'bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500',
            'absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
          )}
        />
      </SliderPrimitive.Track>
      {_values.map((val) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={`thumb-${val}`}
          className={getThumbClassName()}
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
