/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useLocation,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { AchievementsProvider } from '@/components/achievements/AchievementsContext'
import { FadeTransition } from '@/components/FadeTransition'
import { FixedNavigation } from '@/components/navigation/FixedNavigation'
import {
  FadeTransitionProvider,
  useFadeTransition,
} from '@/contexts/FadeTransitionContext'
import appCss from '@/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Jordan Winslow - Software Engineer & Frontend Expert',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const location = useLocation()
  const [showNav, setShowNav] = useState(location.pathname !== '/')
  const [hasShownNav, setHasShownNav] = useState(false)

  // Handle navigation delay for index page - only show nav once after 5 seconds
  useEffect(() => {
    if (location.pathname === '/') {
      if (!hasShownNav) {
        setShowNav(false)
        const timer = setTimeout(() => {
          setShowNav(true)
          setHasShownNav(true)
        }, 5000)
        return () => clearTimeout(timer)
      }
    } else {
      setShowNav(true)
    }
  }, [location.pathname, hasShownNav])

  return (
    <FadeTransitionProvider>
      <AchievementsProvider>
        <RootDocument>
          {showNav && <FixedNavigation />}
          <FadeTransitionWrapper />
        </RootDocument>
      </AchievementsProvider>
    </FadeTransitionProvider>
  )
}

function FadeTransitionWrapper() {
  const { isFadingOut } = useFadeTransition()
  const location = useLocation()

  return (
    <FadeTransition
      fadeInDuration={3000}
      fadeOutDuration={1000}
      isFadingOut={isFadingOut}
      fadeInDelay={location.pathname === '/' ? 0 : 0} // Intro page fades in immediately
    >
      <Outlet />
    </FadeTransition>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
