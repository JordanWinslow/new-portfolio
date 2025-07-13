/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { AchievementsProvider } from '@/components/achievements/AchievementsContext'
import { AppControlsHeader } from '@/components/navigation/AppControlsHeader'
import { Fade } from '@/components/ui/Fade'
import { Toaster } from '@/components/ui/Sonner'
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
        title: 'Jordan Winslow - Software Engineer & Frontend Expert Portfolio',
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
  return (
    <FadeTransitionProvider>
      <AchievementsProvider>
        <RootDocument>
          <AppControlsHeader />
          <FadeTransitionOutlet />
          <Toaster />
        </RootDocument>
      </AchievementsProvider>
    </FadeTransitionProvider>
  )
}

function FadeTransitionOutlet() {
  const { isFadingOut, fadeInDuration, fadeOutDuration, fadeInDelay } =
    useFadeTransition()

  return (
    <Fade
      fadeInDuration={fadeInDuration}
      fadeOutDuration={fadeOutDuration}
      fadeInDelay={fadeInDelay}
      isFadingOut={isFadingOut}
    >
      <Outlet />
    </Fade>
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
