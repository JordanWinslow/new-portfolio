import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect, useMemo, useState } from 'react';
import { u as useAchievements, A as AchievementId } from './ssr.mjs';
import { C as CallToAction } from './CallToAction-DcIkmcV8.mjs';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import '@tanstack/react-router';
import 'sonner';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import '@radix-ui/react-dialog';
import '@radix-ui/react-navigation-menu';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import '@tanstack/router-core/ssr/server';
import 'node:async_hooks';
import 'tiny-invariant';
import '@tanstack/react-router/ssr/server';
import '@emailjs/browser';
import '@hookform/resolvers/zod';
import 'react-hook-form';
import 'zod';
import './Input-Cp6Zj0xY.mjs';
import '@radix-ui/react-label';

function ContactBackground() {
  const particles = useMemo(
    () => Array.from({ length: 35 }, (_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      key: `particle-${i}-${Math.random()}`,
      size: Math.random() * 2 + 1,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 3
    })),
    []
  );
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-0 pointer-events-none", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", children: particles.map((p) => /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute bg-white/30 rounded-full",
        style: {
          left: `${p.left}%`,
          top: `${p.top}%`,
          width: `${p.size}px`,
          height: `${p.size}px`
        },
        animate: {
          y: [0, -120, 0],
          opacity: [0, 0.8, 0],
          scale: [0.5, 1.2, 0.5]
        },
        transition: {
          duration: p.duration,
          repeat: Infinity,
          delay: p.delay,
          ease: "easeInOut"
        }
      },
      p.key
    )) })
  ] });
}
function ContactHero() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1 },
      className: "text-center mb-16",
      children: [
        /* @__PURE__ */ jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3, duration: 1 },
            className: "font-mohave text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wider mb-6",
            children: "Get In Touch"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.6, duration: 0.8 },
            className: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
            children: "Ready to collaborate? Let's discuss your next project and bring your ideas to life."
          }
        )
      ]
    }
  );
}
const contactMethods = [
  {
    title: "Email",
    description: "Primary contact method",
    icon: Mail,
    href: "mailto:jwinsemail@gmail.com"
  },
  {
    title: "GitHub",
    description: "View my code and projects",
    icon: Github,
    href: "https://github.com/JordanWinslow"
  },
  {
    title: "LinkedIn",
    description: "Connect professionally",
    icon: Linkedin,
    href: "https://linkedin.com/in/jordanwinslow"
  },
  {
    title: "Facebook",
    description: "Connect socially",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61573754030578"
  },
  {
    title: "Twitter",
    description: "Follow for updates",
    icon: Twitter,
    href: "https://x.com/LiminalFDN"
  }
];
function ContactMethodsGrid() {
  const { unlockAchievement } = useAchievements();
  const [clickedSocialLinks, setClickedSocialLinks] = useState(
    /* @__PURE__ */ new Set()
  );
  const handleEmailClick = () => {
    unlockAchievement(AchievementId.emailSender);
  };
  const handleSocialLinkClick = (title) => {
    if (title === "Email") return;
    setClickedSocialLinks((prev) => {
      const newSet = new Set(prev);
      newSet.add(title);
      if (newSet.size >= 3) {
        unlockAchievement(AchievementId.socialButterfly);
      }
      return newSet;
    });
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 1.2, duration: 0.8 },
      className: "mb-16",
      children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto", children: contactMethods.map((method, index) => {
        const Icon = method.icon;
        return /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1.5 + index * 0.1, duration: 0.6 },
            className: "relative group",
            children: /* @__PURE__ */ jsxs(
              motion.a,
              {
                href: method.href,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: method.title === "Email" ? handleEmailClick : () => handleSocialLinkClick(method.title),
                className: "block relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-black/30 transition-all duration-500 h-full overflow-hidden cursor-pointer",
                whileHover: { y: -2, scale: 1.02 },
                whileTap: { scale: 0.98 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                      initial: false
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "relative z-10 text-center h-full flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "mx-auto mb-3 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10",
                        whileHover: { rotate: 5 },
                        children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-white" })
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-mohave text-lg font-bold text-white mb-1", children: method.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs leading-tight", children: method.description })
                  ] }) })
                ]
              }
            )
          },
          method.title
        );
      }) })
    }
  );
}
function FloatingEmploymentStatus({
  isEmployed: isEmployed2 = false
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const statusConfig = isEmployed2 ? {
    title: "Happily Employed",
    description: "I am no longer seeking a new role.",
    color: "from-green-400 to-emerald-500",
    pulseColor: "bg-green-400",
    icon: "\u{1F4BC}"
  } : {
    title: "Open to Opportunities",
    description: "I am actively seeking a new, exciting role!",
    color: "from-orange-400 to-red-500",
    pulseColor: "bg-orange-400",
    icon: "\u{1F680}"
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, delay: 1.5 },
      className: "fixed top-24 right-6 z-50",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "relative cursor-pointer",
          onClick: () => setIsExpanded(!isExpanded),
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-3 h-3 z-10", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                className: `w-full h-full rounded-full ${statusConfig.pulseColor} shadow-lg`,
                animate: {
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                },
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            ) }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "relative bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden",
                animate: {
                  width: isExpanded ? 200 : 50,
                  height: isExpanded ? 80 : 50,
                  borderRadius: isExpanded ? 16 : 25
                },
                transition: {
                  duration: 0.4,
                  ease: "easeInOut"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute inset-0 flex items-center justify-center",
                      animate: {
                        opacity: isExpanded ? 0 : 1,
                        scale: isExpanded ? 0.8 : 1
                      },
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                      },
                      children: /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          className: `w-10 h-10 rounded-full bg-gradient-to-r ${statusConfig.color} flex items-center justify-center text-lg shadow-lg`,
                          animate: isHovered ? { rotate: 5 } : { rotate: 0 },
                          transition: { duration: 0.2 },
                          children: statusConfig.icon
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute inset-0 p-3 flex items-center",
                      animate: {
                        opacity: isExpanded ? 1 : 0,
                        scale: isExpanded ? 1 : 0.8
                      },
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: isExpanded ? 0.1 : 0
                      },
                      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 w-full", children: [
                        /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: `w-8 h-8 rounded-full bg-gradient-to-r ${statusConfig.color} flex items-center justify-center text-sm shadow-lg flex-shrink-0`,
                            animate: { rotate: [0, 5, -5, 0] },
                            transition: { duration: 0.5 },
                            children: statusConfig.icon
                          }
                        ),
                        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsx(
                            motion.h3,
                            {
                              className: `font-mohave text-sm font-bold bg-gradient-to-r ${statusConfig.color} bg-clip-text text-transparent leading-tight`,
                              initial: { opacity: 0, x: 10 },
                              animate: {
                                opacity: isExpanded ? 1 : 0,
                                x: isExpanded ? 0 : 10
                              },
                              transition: { delay: 0.2, duration: 0.3 },
                              children: statusConfig.title
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            motion.p,
                            {
                              className: "text-gray-300 text-xs leading-tight mt-1",
                              initial: { opacity: 0, x: 10 },
                              animate: {
                                opacity: isExpanded ? 1 : 0,
                                x: isExpanded ? 0 : 10
                              },
                              transition: { delay: 0.3, duration: 0.3 },
                              children: statusConfig.description
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "w-1.5 h-1.5 bg-white/30 rounded-full flex-shrink-0",
                            initial: { opacity: 0 },
                            animate: { opacity: isExpanded ? 1 : 0 },
                            transition: { delay: 0.4, duration: 0.3 }
                          }
                        )
                      ] })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-xl opacity-0",
                animate: {
                  opacity: isHovered ? 1 : 0,
                  borderRadius: isExpanded ? 16 : 25
                },
                transition: { duration: 0.3 }
              }
            )
          ]
        }
      )
    }
  );
}
const isEmployed = false;
const SplitComponent = function Contact() {
  const {
    unlockAchievement
  } = useAchievements();
  useEffect(() => {
    unlockAchievement(AchievementId.contactReacher);
  }, [unlockAchievement]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black text-white relative overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(ContactBackground, {}),
    /* @__PURE__ */ jsx(FloatingEmploymentStatus, { isEmployed }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-6 py-16 mt-[8vh]", children: [
      /* @__PURE__ */ jsx(ContactHero, {}),
      /* @__PURE__ */ jsx(ContactMethodsGrid, {}),
      /* @__PURE__ */ jsx(CallToAction, { title: "Ready to Start Your Next Project?", description: "I'm passionate about creating exceptional digital experiences. Let's discuss how we can bring your vision to life with cutting-edge technology and innovative design.", primaryButtonText: "Get In Touch", secondaryButtonText: "Learn More About Me", secondaryButtonHref: "/about", className: "mb-8" })
    ] })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=contact-DuGr1qgi.mjs.map
