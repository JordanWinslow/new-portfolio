import { useLocation } from '@tanstack/react-router'
import { Briefcase, Code2, FileText, Mail, User } from 'lucide-react'
import type * as React from 'react'
import { useRef } from 'react'
import { InternalLink } from '@/components/navigation/InternalLink'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/NavigationMenu'
import { cn } from '@/lib/utils'

// Route definitions
const routes = [
  {
    title: 'Intro Page',
    href: '/',
    description:
      'Welcome to my portfolio. Explore my work and get to know me better.',
    icon: Code2,
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
    description: 'View my latest projects and work',
    icon: Briefcase,
  },
  {
    title: 'About',
    href: '/about',
    description: 'Learn more about my background and skills',
    icon: User,
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch for collaboration opportunities',
    icon: Mail,
  },
  {
    title: 'View Resume',
    href: '/resume',
    description: 'Download my professional resume',
    icon: FileText,
  },
]

function NavigationListItem({
  title,
  children,
  href,
  icon: Icon,
  isActive = false,
  onNavigate,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {
  href: string
  icon: React.ComponentType<{ className?: string }>
  isActive?: boolean
  onNavigate: () => void
}) {
  return (
    <li {...props}>
      <InternalLink
        to={href}
        onClick={onNavigate}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300',
          isActive
            ? 'bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 border border-white/20'
            : 'hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 focus:bg-gradient-to-r focus:from-white/5 focus:to-white/10',
        )}
      >
        <div className="flex items-center gap-2 text-sm font-mohave font-semibold leading-none text-white tracking-wide">
          <Icon
            className={cn('text-white', isActive ? 'h-5 w-5' : 'h-4 w-4')}
          />
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-400 font-inter">
          {children}
        </p>
      </InternalLink>
    </li>
  )
}

interface NavigationProps {
  isScrolled?: boolean
}

export function Navigation({ isScrolled = false }: NavigationProps) {
  const location = useLocation()
  const currentPath = location.pathname
  const navigationMenuRef =
    useRef<React.ElementRef<typeof NavigationMenu>>(null)

  // Find the active route
  const activeRoute = routes.find((route) => route.href === currentPath)

  const handleNavigate = () => {
    // Close the navigation menu
    if (navigationMenuRef.current) {
      const trigger = navigationMenuRef.current.querySelector(
        '[data-state="open"]',
      )
      if (trigger) {
        ;(trigger as HTMLElement).click()
      }
    }
  }

  return (
    <NavigationMenu ref={navigationMenuRef} viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              'font-mohave font-semibold text-sm tracking-wide',
              isScrolled && 'rounded-tl-none rounded-tr-none rounded-bl-none',
            )}
          >
            Navigation
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className={cn(isScrolled && '!rounded-tl-none !rounded-bl-none')}
          >
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {/* Left side - Active route */}
              <li className="row-span-3">
                <InternalLink
                  to={activeRoute?.href || '/'}
                  onClick={handleNavigate}
                  className="flex h-full w-full flex-col justify-center rounded-xl p-6 no-underline outline-none select-none focus:shadow-md border border-white/20 transition-all duration-300 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20"
                >
                  <div className="text-center">
                    {/* Large Icon */}
                    <div className="flex justify-center mb-4">
                      {activeRoute && (
                        <activeRoute.icon className="h-16 w-16 text-white" />
                      )}
                    </div>
                    {/* Title */}
                    <div className="text-xl font-mohave font-bold text-white tracking-wide mb-3">
                      {activeRoute?.title}
                    </div>
                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-tight font-inter">
                      {activeRoute?.description}
                    </p>
                  </div>
                </InternalLink>
              </li>

              {/* Right side - Other routes */}
              <div className="space-y-2">
                {routes
                  .filter((route) => route.href !== currentPath)
                  .map((route) => (
                    <NavigationListItem
                      key={route.href}
                      href={route.href}
                      title={route.title}
                      icon={route.icon}
                      onNavigate={handleNavigate}
                    >
                      {route.description}
                    </NavigationListItem>
                  ))}
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
