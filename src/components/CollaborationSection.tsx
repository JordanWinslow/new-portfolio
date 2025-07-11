import { Button } from '@/components/ui/Button'

interface CollaborationSectionProps {
  title?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
  className?: string
}

export function CollaborationSection({
  title = 'READY TO COLLABORATE?',
  description = "Let's build something amazing together. I'm always open to discussing new projects and opportunities.",
  buttonText = 'GET IN TOUCH',
  onButtonClick,
  className = '',
}: CollaborationSectionProps) {
  return (
    <section className={`py-32 relative overflow-hidden ${className}`}>
      <div className="relative z-10 text-center px-8">
        <h2 className="font-mohave text-3xl md:text-4xl font-bold mb-6 text-white uppercase tracking-wide">
          {title}
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          {description}
        </p>
        <Button
          className="gradient-cta-button font-mohave font-semibold text-lg px-8 py-4 rounded-xl uppercase tracking-wide hover-lift"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  )
}
