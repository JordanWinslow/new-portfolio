import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle, AlertCircle, RotateCcw, Send } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { u as useAchievements, D as Dialog, e as DialogContent, B as Button, I as InternalLink, c as cn, A as AchievementId } from './ssr.mjs';
import { I as Input } from './Input-Cp6Zj0xY.mjs';
import * as LabelPrimitive from '@radix-ui/react-label';

function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function TextArea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const contactFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional().refine((val) => {
    if (!val) return true;
    const cleaned = val.replace(/[^\d+]/g, "");
    return /^[+]?[1-9][\d]{6,14}$/.test(cleaned);
  }, "Please enter a valid phone number (e.g., +1234567890 or 1234567890)"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  captcha: z.string().min(1, "Please complete the captcha")
});
function CallToAction({
  title = "Let's Build Something Amazing Together",
  description = "I'm always excited to work on new projects and collaborate with talented teams. Whether you have a specific project in mind or just want to discuss possibilities, I'd love to hear from you.",
  primaryButtonText = "Start a Conversation",
  secondaryButtonText = "About Me",
  secondaryButtonHref = "/about",
  className = ""
}) {
  const { unlockAchievement } = useAchievements();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaAttempts, setCaptchaAttempts] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    clearErrors
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });
  const generateCaptcha = useCallback(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    setCaptchaAnswer(answer.toString());
    setCaptchaValue(`${num1} + ${num2} = ?`);
    setValue("captcha", "");
    clearErrors("captcha");
  }, [setValue, clearErrors]);
  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);
  const onSubmit = async (data) => {
    if (data.captcha !== captchaAnswer) {
      setCaptchaAttempts((prev) => prev + 1);
      setValue("captcha", "");
      setValue("captcha", "", { shouldValidate: true });
      if (captchaAttempts >= 2) {
        generateCaptcha();
        setCaptchaAttempts(0);
      }
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      console.log("Sending email with data:", data);
      const response = await fetch(
        `https://api.emailjs.com/api/v1.0/email/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            service_id: "service_exwmo8b",
            template_id: "template_9mshqsj",
            user_id: "70GrEDbZUjeL4ZSH2",
            template_params: {
              to_email: "jwinsemail@gmail.com",
              from_name: data.name || "Anonymous",
              from_email: data.email,
              from_phone: data.phone || "Not provided",
              message: data.message
            }
          })
        }
      );
      console.log("EmailJS response status:", response.status);
      if (!response.ok) {
        const errorData = await response.text();
        console.error("EmailJS API error:", errorData);
        setSubmitStatus("error");
      } else {
        setSubmitStatus("success");
        reset();
        generateCaptcha();
        setCaptchaAttempts(0);
        setTimeout(() => {
          setIsFormOpen(false);
          setSubmitStatus("idle");
        }, 2e3);
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleClose = useCallback(() => {
    if (!isSubmitting) {
      setIsFormOpen(false);
      reset();
      setSubmitStatus("idle");
      generateCaptcha();
      setCaptchaAttempts(0);
    }
  }, [isSubmitting, reset, generateCaptcha]);
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isFormOpen) {
        handleClose();
      }
    };
    if (isFormOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isFormOpen, handleClose]);
  const handleOpenForm = () => {
    unlockAchievement(AchievementId.emailSender);
    setIsFormOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Dialog, { open: isFormOpen, onOpenChange: handleClose, children: /* @__PURE__ */ jsxs(
      DialogContent,
      {
        className: "bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden sm:max-w-[60vw] sm:max-h-[90vh]",
        showCloseButton: false,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-white/10 pb-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-mohave text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase", children: "Start a Conversation" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: handleClose,
                className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                disabled: isSubmitting,
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-white" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pb-3 px-3 sm:p-6 overflow-y-auto max-h-[calc(100vh-120px-32px)] sm:max-h-[calc(90vh-120px)]", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: submitStatus === "success" ? /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              className: "text-center py-12",
              children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: {
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200
                    },
                    className: "w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center",
                    children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-10 h-10 text-green-400" })
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "font-mohave text-xl font-bold text-white mb-2", children: "Message Sent!" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Thank you for reaching out. I'll get back to you soon!" })
              ]
            },
            "success"
          ) : submitStatus === "error" ? /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              className: "text-center py-12",
              children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: {
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200
                    },
                    className: "w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center",
                    children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-10 h-10 text-red-400" })
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "font-mohave text-xl font-bold text-white mb-2", children: "Something went wrong" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: "Please try again or contact me directly at jwinsemail@gmail.com" }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: () => setSubmitStatus("idle"),
                    className: "relative overflow-hidden bg-black/20 backdrop-blur-md border-2 border-transparent text-white font-mohave font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1",
                    style: {
                      background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981) border-box"
                    },
                    children: "Try Again"
                  }
                )
              ]
            },
            "error"
          ) : /* @__PURE__ */ jsxs(
            motion.form,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              onSubmit: handleSubmit(onSubmit),
              className: "space-y-4",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx(Label, { htmlFor: "name", className: "text-white font-medium", children: "Name (Optional)" }),
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        id: "name",
                        ...register("name"),
                        className: "bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20",
                        placeholder: "Your name"
                      }
                    ),
                    errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.name.message })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx(Label, { htmlFor: "email", className: "text-white font-medium", children: "Email *" }),
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        id: "email",
                        type: "email",
                        ...register("email"),
                        className: "bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20",
                        placeholder: "your.email@example.com",
                        required: true
                      }
                    ),
                    errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.email.message })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "phone", className: "text-white font-medium", children: "Phone (Optional)" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "phone",
                      type: "tel",
                      ...register("phone"),
                      className: "bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20",
                      placeholder: "+1 (555) 123-4567"
                    }
                  ),
                  errors.phone && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.phone.message })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "message", className: "text-white font-medium", children: "Message *" }),
                  /* @__PURE__ */ jsx(
                    TextArea,
                    {
                      id: "message",
                      ...register("message"),
                      className: "bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 min-h-[120px] resize-none",
                      placeholder: "Tell me about your project or how I can help...",
                      required: true
                    }
                  ),
                  errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.message.message })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "captcha", className: "text-white font-medium", children: "Security Check *" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
                      Input,
                      {
                        id: "captcha",
                        ...register("captcha"),
                        className: "bg-black/50 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20",
                        placeholder: "Enter the answer",
                        required: true
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white font-mono text-lg bg-white/10 px-3 py-2 rounded-lg", children: captchaValue }),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          onClick: generateCaptcha,
                          className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                          disabled: isSubmitting,
                          children: /* @__PURE__ */ jsx(RotateCcw, { className: "w-4 h-4 text-white" })
                        }
                      )
                    ] })
                  ] }),
                  errors.captcha && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: errors.captcha.message })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4 pt-4", children: [
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      type: "button",
                      onClick: handleClose,
                      disabled: isSubmitting,
                      className: "px-6 py-3 bg-black/20 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-black/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      type: "submit",
                      disabled: isSubmitting,
                      className: "relative overflow-hidden bg-black/20 backdrop-blur-md border-2 border-transparent text-white font-mohave font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1",
                      style: {
                        background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981) border-box"
                      },
                      Icon: isSubmitting ? /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          animate: { rotate: 360 },
                          transition: {
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                          },
                          className: "flex items-center",
                          children: /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" })
                        }
                      ) : /* @__PURE__ */ jsx(Send, { className: "w-4 h-4 mr-2" }),
                      children: "Send Message"
                    }
                  )
                ] })
              ]
            },
            "form"
          ) }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: `text-center ${className}`,
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent" }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0",
              animate: { opacity: [0, 0.3, 0] },
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                className: "font-mohave text-3xl lg:text-4xl font-bold text-white mb-6",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2, duration: 0.8 },
                children: title
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                className: "text-gray-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4, duration: 0.8 },
                children: description
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.6, duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxs(
                    motion.button,
                    {
                      onClick: handleOpenForm,
                      className: "relative overflow-hidden bg-black text-white font-mohave font-semibold text-lg px-8 py-3 rounded-xl uppercase tracking-wide inline-flex items-center justify-center group border-2 border-white/20 hover:border-white/40 transition-all duration-0 min-w-[200px] cursor-pointer",
                      whileHover: { scale: 1.02, y: -2 },
                      whileTap: { scale: 0.98 },
                      children: [
                        /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-0",
                            initial: false
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-xl",
                            animate: {
                              scale: [1, 1.05, 1],
                              opacity: [0.3, 0.6, 0.3]
                            },
                            transition: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }
                        ),
                        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center", children: [
                          /* @__PURE__ */ jsx(Send, { className: "w-5 h-5 mr-3" }),
                          primaryButtonText
                        ] })
                      ]
                    }
                  ),
                  secondaryButtonHref && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      whileHover: { scale: 1.02, y: -2 },
                      whileTap: { scale: 0.98 },
                      children: /* @__PURE__ */ jsxs(
                        InternalLink,
                        {
                          to: secondaryButtonHref,
                          className: "relative overflow-hidden bg-black/20 backdrop-blur-md border-2 border-transparent text-white font-mohave font-semibold text-lg px-8 py-3 rounded-xl uppercase tracking-wide inline-flex items-center justify-center transition-all duration-0 min-w-[200px] cursor-pointer",
                          style: {
                            background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981) border-box"
                          },
                          children: [
                            /* @__PURE__ */ jsxs(
                              "svg",
                              {
                                className: "w-5 h-5 mr-3 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: [
                                  /* @__PURE__ */ jsx("title", { children: "About me" }),
                                  /* @__PURE__ */ jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" })
                                ]
                              }
                            ),
                            secondaryButtonText
                          ]
                        }
                      )
                    }
                  )
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
}

export { CallToAction as C };
//# sourceMappingURL=CallToAction-DHajRL1y.mjs.map
