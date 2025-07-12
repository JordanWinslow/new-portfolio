import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle, RotateCcw, Send, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

// import emailjs from '@emailjs/browser' // Uncomment when you have EmailJS credentials

const contactFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true // Optional field
      // Remove all non-digit characters except + at the start
      const cleaned = val.replace(/[^\d+]/g, '')
      // Must start with + or digit, and be 7-15 digits total
      return /^[+]?[1-9][\d]{6,14}$/.test(cleaned)
    }, 'Please enter a valid phone number (e.g., +1234567890 or 1234567890)'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
  captcha: z.string().min(1, 'Please complete the captcha'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface CallToActionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

export function CallToAction({
  title = "Let's Build Something Amazing Together",
  description = "I'm always excited to work on new projects and collaborate with talented teams. Whether you have a specific project in mind or just want to discuss possibilities, I'd love to hear from you.",
  primaryButtonText = 'Start a Conversation',
  secondaryButtonText = 'About Me',
  secondaryButtonHref = '/about',
  className = '',
}: CallToActionProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [captchaValue, setCaptchaValue] = useState('')
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captchaAttempts, setCaptchaAttempts] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    clearErrors,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  // Generate simple math captcha
  const generateCaptcha = useCallback(() => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const answer = num1 + num2
    setCaptchaAnswer(answer.toString())
    setCaptchaValue(`${num1} + ${num2} = ?`)
    // Clear the captcha field when generating new one
    setValue('captcha', '')
    clearErrors('captcha')
  }, [setValue, clearErrors])

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha()
  }, [generateCaptcha])

  // Prevent body scroll when modal is open
  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      return false
    }

    if (isFormOpen) {
      // Save current scroll position
      const scrollY = window.scrollY

      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${scrollY}px`

      // Prevent scroll events
      document.addEventListener('wheel', preventScroll, {
        passive: false,
        capture: true,
      })
      document.addEventListener('touchmove', preventScroll, {
        passive: false,
        capture: true,
      })
      document.addEventListener('scroll', preventScroll, {
        passive: false,
        capture: true,
      })
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      if (scrollY) {
        window.scrollTo({
          top: parseInt(scrollY || '0') * -1,
          behavior: 'instant',
        })
      }

      // Remove scroll event listeners
      document.removeEventListener('wheel', preventScroll, { capture: true })
      document.removeEventListener('touchmove', preventScroll, {
        capture: true,
      })
      document.removeEventListener('scroll', preventScroll, { capture: true })
    }

    return () => {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      if (scrollY) {
        window.scrollTo({
          top: parseInt(scrollY || '0') * -1,
          behavior: 'instant',
        })
      }

      // Remove scroll event listeners
      document.removeEventListener('wheel', preventScroll, { capture: true })
      document.removeEventListener('touchmove', preventScroll, {
        capture: true,
      })
      document.removeEventListener('scroll', preventScroll, { capture: true })
    }
  }, [isFormOpen])

  const onSubmit = async (data: ContactFormData) => {
    // Validate captcha
    if (data.captcha !== captchaAnswer) {
      setCaptchaAttempts((prev) => prev + 1)
      setValue('captcha', '')
      setValue('captcha', '', { shouldValidate: true })

      // Generate new captcha after failed attempts
      if (captchaAttempts >= 2) {
        generateCaptcha()
        setCaptchaAttempts(0)
      }
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Option 1: EmailJS Integration (recommended for client-side)
      // Uncomment and configure when you have EmailJS credentials
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'jwinsemail@gmail.com',
          from_name: data.name || 'Anonymous',
          from_email: data.email,
          from_phone: data.phone || 'Not provided',
          message: data.message,
        },
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      */

      // Option 2: Custom API endpoint (recommended for production)
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name || 'Anonymous',
          email: data.email,
          phone: data.phone || 'Not provided',
          message: data.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }
      */

      // Option 3: Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log('Form data to be sent:', {
        to: 'jwinsemail@gmail.com',
        from: data.email,
        name: data.name || 'Anonymous',
        phone: data.phone || 'Not provided',
        message: data.message,
      })

      setSubmitStatus('success')
      reset()
      generateCaptcha()
      setCaptchaAttempts(0)

      // Close dialog after 2 seconds
      setTimeout(() => {
        setIsFormOpen(false)
        setSubmitStatus('idle')
      }, 2000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = useCallback(() => {
    if (!isSubmitting) {
      setIsFormOpen(false)
      reset()
      setSubmitStatus('idle')
      generateCaptcha()
      setCaptchaAttempts(0)
    }
  }, [isSubmitting, reset, generateCaptcha])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFormOpen) {
        handleClose()
      }
    }

    if (isFormOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isFormOpen, handleClose])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-center ${className}`}
      >
        <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 relative overflow-hidden">
          {/* Elegant background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5" />
          <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent" />

          {/* Subtle animated border */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10">
            <motion.h2
              className="font-mohave text-3xl lg:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                onClick={() => setIsFormOpen(true)}
                className="relative overflow-hidden bg-black text-white font-mohave font-semibold text-lg px-8 py-3 rounded-xl uppercase tracking-wide inline-flex items-center justify-center group border-2 border-white/20 hover:border-white/40 transition-all duration-0 min-w-[200px] cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-0"
                  initial={false}
                />

                {/* Subtle pulse animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex items-center">
                  <Send className="w-5 h-5 mr-3" />
                  {primaryButtonText}
                </div>
              </motion.button>

              {secondaryButtonHref && (
                <motion.a
                  href={secondaryButtonHref}
                  className="relative overflow-hidden bg-black/20 backdrop-blur-md border-2 border-transparent text-white font-mohave font-semibold text-lg px-8 py-3 rounded-xl uppercase tracking-wide inline-flex items-center justify-center transition-all duration-0 min-w-[200px] cursor-pointer"
                  style={{
                    background:
                      'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981) border-box',
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="w-5 h-5 mr-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>About me</title>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  {secondaryButtonText}
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form Modal - Rendered via Portal */}
      {isFormOpen &&
        createPortal(
          <div className="fixed inset-0 z-[999999] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl w-full max-w-4xl mx-4 h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="font-mohave text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Start a Conversation
                </h2>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  disabled={isSubmitting}
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto h-[calc(90vh-80px)]">
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                      >
                        <CheckCircle className="w-10 h-10 text-green-400" />
                      </motion.div>
                      <h3 className="font-mohave text-xl font-bold text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-300">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </motion.div>
                  ) : submitStatus === 'error' ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center"
                      >
                        <AlertCircle className="w-10 h-10 text-red-400" />
                      </motion.div>
                      <h3 className="font-mohave text-xl font-bold text-white mb-2">
                        Something went wrong
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Please try again or contact me directly at
                        jwinsemail@gmail.com
                      </p>
                      <Button
                        onClick={() => setSubmitStatus('idle')}
                        className="relative overflow-hidden bg-black/20 backdrop-blur-md border-2 border-transparent text-white font-mohave font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                        style={{
                          background:
                            'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981) border-box',
                        }}
                      >
                        Try Again
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-white font-medium"
                          >
                            Name (Optional)
                          </Label>
                          <Input
                            id="name"
                            {...register('name')}
                            className="bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p className="text-red-400 text-sm">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-white font-medium"
                          >
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            className="bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                            placeholder="your.email@example.com"
                            required
                          />
                          {errors.email && (
                            <p className="text-red-400 text-sm">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-white font-medium"
                        >
                          Phone (Optional)
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className="bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-sm">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-white font-medium"
                        >
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          {...register('message')}
                          className="bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 min-h-[120px] resize-none"
                          placeholder="Tell me about your project or how I can help..."
                          required
                        />
                        {errors.message && (
                          <p className="text-red-400 text-sm">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="captcha"
                          className="text-white font-medium"
                        >
                          Security Check *
                        </Label>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <Input
                              id="captcha"
                              {...register('captcha')}
                              className="bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                              placeholder="Enter the answer"
                              required
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-mono text-lg bg-white/10 px-3 py-2 rounded-lg">
                              {captchaValue}
                            </span>
                            <button
                              type="button"
                              onClick={generateCaptcha}
                              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                              disabled={isSubmitting}
                            >
                              <RotateCcw className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        </div>
                        {errors.captcha && (
                          <p className="text-red-400 text-sm">
                            {errors.captcha.message}
                          </p>
                        )}
                      </div>

                      <div className="flex justify-end gap-4 pt-4">
                        <Button
                          type="button"
                          onClick={handleClose}
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-black/20 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-black/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative overflow-hidden bg-black/20 backdrop-blur-md border-2 border-transparent text-white font-mohave font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                          style={{
                            background:
                              'linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981) border-box',
                          }}
                          Icon={
                            isSubmitting ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: 'linear',
                                }}
                                className="flex items-center"
                              >
                                <Send className="w-4 h-4" />
                              </motion.div>
                            ) : (
                              <Send className="w-4 h-4 mr-2" />
                            )
                          }
                        >
                          Send Message
                        </Button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>,
          document.body,
        )}
    </>
  )
}
