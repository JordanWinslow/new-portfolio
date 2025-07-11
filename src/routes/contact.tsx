import { createFileRoute } from '@tanstack/react-router'
import { Github, Linkedin, Mail } from 'lucide-react'
import { FixedNavigation } from '@/components/navigation/FixedNavigation'
import { Badge } from '@/components/ui/Badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/HoverCard'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const contactMethods = [
    {
      title: 'Email',
      description: 'Get in touch via email',
      icon: Mail,
      href: 'mailto:jordan.winslow@example.com',
      badge: 'Primary',
      badgeVariant: 'default' as const,
    },
    {
      title: 'LinkedIn',
      description: 'Connect professionally',
      icon: Linkedin,
      href: 'https://linkedin.com/in/jordanwinslow',
      badge: 'Professional',
      badgeVariant: 'secondary' as const,
    },
    {
      title: 'GitHub',
      description: 'View my code and projects',
      icon: Github,
      href: 'https://github.com/jordanwinslow',
      badge: 'Code',
      badgeVariant: 'outline' as const,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <FixedNavigation />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="font-mohave text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wider mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project and bring your
            ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <HoverCard key={method.title}>
                <HoverCardTrigger asChild>
                  <Card className="border-white/20 bg-black/50 backdrop-blur-md hover:bg-black/70 transition-all duration-300 cursor-pointer group">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="font-mohave text-xl font-bold text-white">
                        {method.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant={method.badgeVariant} className="mb-4">
                        {method.badge}
                      </Badge>
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full gradient-border bg-black text-white font-bold text-lg px-8 py-4 enhanced-shadow hover:scale-105 transition-all duration-300 border-transparent tracking-widest uppercase shadow-2xl hover-lift inline-flex items-center justify-center"
                      >
                        Connect
                      </a>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-black/95 backdrop-blur-md border-white/20">
                  <div className="space-y-2">
                    <h4 className="font-mohave font-semibold text-white">
                      {method.title}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {method.description}
                    </p>
                    <p className="text-xs text-gray-400">
                      Click to open {method.title.toLowerCase()}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-mohave text-2xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-300 mb-8">
              I'm always excited to work on new projects and collaborate with
              talented teams. Whether you have a specific project in mind or
              just want to discuss possibilities, I'd love to hear from you.
            </p>
            <a
              href="mailto:jordan.winslow@example.com"
              className="gradient-cta-button font-mohave font-semibold text-lg px-8 py-4 rounded-xl uppercase tracking-wide hover-lift inline-flex items-center justify-center"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
