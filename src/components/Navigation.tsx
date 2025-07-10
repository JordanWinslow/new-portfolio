import { Link, useLocation } from '@tanstack/react-router'
import { Briefcase, Code2, FileText, Mail, User } from 'lucide-react'
import type * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/NavigationMenu'
import { cn } from '@/lib/utils'

// Route definitions
const routes = [
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

function ListItem({
  title,
  children,
  href,
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {
  href: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 focus:bg-gradient-to-r focus:from-white/5 focus:to-white/10"
        >
          <div className="flex items-center gap-2 text-sm font-mohave font-semibold leading-none text-white tracking-wide">
            <Icon className="h-4 w-4" />
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400 font-inter">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

interface NavigationProps {
  isScrolled?: boolean
}

export function Navigation({ isScrolled = false }: NavigationProps) {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <NavigationMenu viewport={false}>
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
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="from-black/50 to-black/80 flex h-full w-full flex-col justify-end rounded-xl bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md border border-white/20"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="h-6 w-6 text-white" />
                      <div className="text-lg font-mohave font-bold text-white tracking-wide">
                        Intro Page
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-tight font-inter">
                      Welcome to my portfolio. Explore my work and get to know
                      me better.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {routes.map((route) => (
                <ListItem
                  key={route.href}
                  href={route.href}
                  title={route.title}
                  icon={route.icon}
                  className={cn(
                    currentPath === route.href &&
                      'bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 rounded-lg border border-white/20',
                  )}
                >
                  {route.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
