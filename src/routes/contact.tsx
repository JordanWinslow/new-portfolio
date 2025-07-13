import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { AchievementId } from '@/assets/data/achievements'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import { CallToAction } from '@/components/contact/CallToAction'
import { ContactBackground } from '@/components/contact/ContactBackground'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactMethodsGrid } from '@/components/contact/ContactMethodsGrid'
import { FloatingEmploymentStatus } from '@/components/contact/FloatingEmploymentStatus'

export const Route = createFileRoute('/contact')({
  head: () => ({
    title: 'Contact Jordan Winslow - Software Engineer & Frontend Developer',
    meta: [
      {
        name: 'description',
        content:
          'Get in touch with Jordan Winslow for software engineering opportunities, project collaborations, or technical consulting. Available for freelance work and full-time positions in frontend development.',
      },
      {
        name: 'keywords',
        content:
          'contact Jordan Winslow, software engineer contact, frontend developer hire, React developer, web development services, freelance developer',
      },
      {
        name: 'author',
        content: 'Jordan Winslow',
      },
      // Open Graph tags
      {
        property: 'og:title',
        content:
          'Contact Jordan Winslow - Software Engineer & Frontend Developer',
      },
      {
        property: 'og:description',
        content:
          'Get in touch with Jordan Winslow for software engineering opportunities, project collaborations, or technical consulting. Available for freelance work and full-time positions in frontend development.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://jordanwinslow.dev/contact',
      },
      {
        property: 'og:image',
        content: '/og-contact.png',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      // Twitter Card tags
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content:
          'Contact Jordan Winslow - Software Engineer & Frontend Developer',
      },
      {
        name: 'twitter:description',
        content:
          'Get in touch with Jordan Winslow for software engineering opportunities, project collaborations, or technical consulting. Available for freelance work and full-time positions in frontend development.',
      },
      {
        name: 'twitter:image',
        content: '/og-contact.png',
      },
    ],
  }),
  component: Contact,
})

const isEmployed = false

function Contact() {
  const { unlockAchievement } = useAchievements()

  useEffect(() => {
    unlockAchievement(AchievementId.contactReacher)
  }, [unlockAchievement])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ContactBackground />

      <FloatingEmploymentStatus isEmployed={isEmployed} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 mt-[8vh]">
        <ContactHero />

        <div className="mb-16">
          <ContactMethodsGrid />
        </div>

        <CallToAction
          title="Ready to Start Your Next Project?"
          description="I'm passionate about creating exceptional digital experiences. Let's discuss how we can bring your vision to life with cutting-edge technology and innovative design."
          primaryButtonText="Get In Touch"
          secondaryButtonText="Learn More About Me"
          secondaryButtonHref="/about"
          className="mb-8"
        />
      </div>
    </div>
  )
}
