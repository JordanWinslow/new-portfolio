import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useAchievements } from '@/components/achievements/AchievementsContext'
import { CallToAction } from '@/components/contact/CallToAction'
import { ContactBackground } from '@/components/contact/ContactBackground'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactMethodsGrid } from '@/components/contact/ContactMethodsGrid'
import { FloatingEmploymentStatus } from '@/components/contact/FloatingEmploymentStatus'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const isEmployed = false

function Contact() {
  const { unlockAchievement } = useAchievements()

  useEffect(() => {
    unlockAchievement('contact-reacher')
  }, [unlockAchievement])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background with Floating Particles */}
      <ContactBackground />

      {/* Floating Employment Status */}
      <FloatingEmploymentStatus isEmployed={isEmployed} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 mt-[8vh]">
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Methods Grid */}
        <ContactMethodsGrid />

        {/* CTA Section */}
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
