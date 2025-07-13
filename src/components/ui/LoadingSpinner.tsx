import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function LoadingSpinner({
  className,
  size = 'md',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className={cn('relative', sizeClasses[size])}>
        {/* Outer ring with glow */}
        <div
          className={cn(
            'absolute inset-0 rounded-full border-2 border-white/20',
            'animate-pulse',
            sizeClasses[size],
          )}
        />

        {/* Inner spinning ring */}
        <div
          className={cn(
            'absolute inset-1 rounded-full border-2 border-transparent',
            'border-t-white border-r-white/60',
            'animate-spin',
            sizeClasses[size],
          )}
          style={{
            animationDuration: '1.5s',
          }}
        />

        {/* Center dot with glow */}
        <div
          className={cn(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'w-1 h-1 bg-white rounded-full',
            'animate-pulse',
            size === 'lg'
              ? 'w-2 h-2'
              : size === 'sm'
                ? 'w-0.5 h-0.5'
                : 'w-1 h-1',
          )}
        />

        {/* Glow effect */}
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-white/10 blur-sm',
            'animate-pulse',
            sizeClasses[size],
          )}
          style={{
            animationDuration: '2s',
          }}
        />
      </div>
    </div>
  )
}
