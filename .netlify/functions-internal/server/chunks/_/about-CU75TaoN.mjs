import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useRef, useEffect, useMemo } from 'react';
import { u as useAchievements, A as AchievementId, d as useScrollToRef } from './ssr.mjs';
import { Sparkles, ChevronDown, BookOpen, Music, Gamepad2, Heart, Zap, Users } from 'lucide-react';
import { T as TechGridSection } from './TechGridSection-DjT9rnVL.mjs';
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
import 'lodash.debounce';
import './Input-Cp6Zj0xY.mjs';

const JordanWinslowAvatar = "/assets/JordanWinslowAvatar-C9ke13pV.jpg";
function AboutHero({ techSectionRef }) {
  const scrollToRef = useScrollToRef();
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1 },
      className: "text-center space-y-10",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.3, duration: 1, ease: "easeOut" },
            className: "flex justify-center",
            children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs("div", { className: "w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-black/20 blur-xl transform scale-110" }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: JordanWinslowAvatar,
                    alt: "Jordan Winslow",
                    className: "w-full h-full object-cover relative z-10"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-white" }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.6, duration: 1 },
            className: "space-y-6",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.8, duration: 0.8 },
                    className: "font-mohave text-3xl lg:text-5xl font-bold text-white",
                    children: "Hello, I'm Jordan Winslow!"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 1, duration: 0.8 },
                    className: "flex items-center justify-center gap-3",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "w-8 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-300 font-medium uppercase tracking-wider", children: "Software Engineer, Designer & Game Developer" }),
                      /* @__PURE__ */ jsx("div", { className: "w-8 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 1.2, duration: 0.8 },
                  className: "max-w-2xl mx-auto space-y-4",
                  children: [
                    /* @__PURE__ */ jsx("p", { className: "text-base lg:text-lg text-gray-300 leading-relaxed", children: "If you'd just like to know what technologies I have experience with, feel free to jump straight to my tech stack below. Otherwise keep scrolling to learn more about me and my values!" }),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 1.4, duration: 0.8 },
                        className: "flex justify-center",
                        children: /* @__PURE__ */ jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => scrollToRef(techSectionRef),
                            className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm text-white font-mohave font-semibold text-lg uppercase tracking-wide hover:border-white/40 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 group relative",
                            children: [
                              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-300 pointer-events-none" }),
                              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 pointer-events-none blur-xl" }),
                              /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "View My Tech Stack" }),
                              /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 relative z-10" })
                            ]
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function BackgroundJourney() {
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.8, duration: 1 },
      className: "space-y-8",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1, duration: 0.8 },
            className: "text-center mb-8",
            children: /* @__PURE__ */ jsx("h2", { className: "font-mohave text-3xl lg:text-4xl font-bold text-white mb-4", children: "Background & Journey" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 1.2, duration: 0.8 },
              className: "group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5 text-white" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "font-mohave text-xl font-bold text-white", children: "Lifelong Educator" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed", children: "I've developed and delivered multiple courses in web development and music production, fueled by a genuine enthusiasm for sharing knowledge. Teaching has been a cornerstone of my career, from structured classroom settings to hands-on mentoring in professional teams\u2014it's all about helping others level up their skills." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 1.4, duration: 0.8 },
              className: "group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Music, { className: "w-5 h-5 text-white" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "font-mohave text-xl font-bold text-white", children: "From Music to Tech" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed", children: "Starting out in electronic music production honed my skills in creativity, precision, and building engaging experiences from the ground up. That same meticulous mindset carried over perfectly into tech, where I now craft digital solutions with the rhythm and detail of a well-produced track." })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function LeadershipValues() {
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 1.2, duration: 1 },
      className: "space-y-8",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1.4, duration: 0.8 },
            className: "text-center mb-8",
            children: /* @__PURE__ */ jsx("h2", { className: "font-mohave text-3xl lg:text-4xl font-bold text-white mb-4", children: "Leadership & Values" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 1.6, duration: 0.8 },
              className: "group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-white" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "font-mohave text-xl font-bold text-white", children: "Natural Leader" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed", children: "With 5+ years of experience as a SCRUM master across 4 different teams, I excel at identifying individual strengths and fostering effective collaboration. Drawing from my studies in philosophy and spirituality, I approach leadership with empathy and insight." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 1.8, duration: 0.8 },
              className: "group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-white" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "font-mohave text-xl font-bold text-white", children: "What I'm Looking For" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed", children: "I'm seeking opportunities with companies working on innovative gaming projects, cutting-edge technology, or products that genuinely improve people's lives. I want to contribute to meaningful, impactful work, or at least make something fun!" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function PersonalInterests() {
  const { unlockAchievement } = useAchievements();
  const handleHeartClick = () => {
    unlockAchievement(AchievementId.heartFinder);
  };
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 1, duration: 1 },
      className: "space-y-8",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1.2, duration: 0.8 },
            className: "text-center mb-8",
            children: /* @__PURE__ */ jsx("h2", { className: "font-mohave text-3xl lg:text-4xl font-bold text-white mb-4", children: "Personal Interests" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1.4, duration: 0.8 },
              className: "group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsx(Gamepad2, { className: "w-6 h-6 text-blue-400" }),
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: "Gaming & Entertainment" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm leading-relaxed", children: "I am a horror movie encyclopedia and avid gamer who loves immersive storytelling. I also enjoy bringing people together for board game night and creating memorable experiences." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1.6, duration: 0.8 },
              className: "group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleHeartClick,
                      className: "bg-transparent border-none p-0 cursor-pointer hover:scale-110 transition-transform duration-200",
                      "aria-label": "Heart easter egg",
                      children: /* @__PURE__ */ jsx(Heart, { className: "w-6 h-6 text-green-400" })
                    }
                  ),
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: "Nature & Adventure" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm leading-relaxed", children: "I have a deep love and reverence for nature and the outdoors, whether it's exploring the local trails or camping under the stars. At home, I'm a committed cat dad to a pair of furry sidekicks who add just the right mix of chaos and calm to daily life." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1.8, duration: 0.8 },
              className: "group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "w-6 h-6 text-orange-400" }),
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: "Audio Enthusiast" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm leading-relaxed", children: "I've customized my car with two hidden subwoofers and amplifiers behind the seats. Bass-heavy tracks are my go-to, naturally, with drum & bass, hip-hop, and electronic rock topping the list. I'm also hooked on video game soundtracks, especially the epic vibes of Final Fantasy X." })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const PageBackground = () => {
  const particles = useMemo(() => Array.from({
    length: 35
  }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    key: `particle-${i}-${Math.random()}`,
    size: Math.random() * 2 + 1,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 3
  })), []);
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-0", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", children: particles.map((p, _i) => /* @__PURE__ */ jsx(motion.div, { className: "absolute bg-white/30 rounded-full", style: {
      left: `${p.left}%`,
      top: `${p.top}%`,
      width: `${p.size}px`,
      height: `${p.size}px`
    }, animate: {
      y: [0, -120, 0],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1.2, 0.5]
    }, transition: {
      duration: p.duration,
      repeat: Infinity,
      delay: p.delay,
      ease: "easeInOut"
    } }, p.key)) })
  ] });
};
const SplitComponent = function About() {
  const {
    unlockAchievement
  } = useAchievements();
  const techSectionRef = useRef(null);
  useEffect(() => {
    unlockAchievement(AchievementId.aboutDiscoverer);
  }, [unlockAchievement]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black text-white font-inter relative overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(PageBackground, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6 py-12 mt-[8vh]", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto space-y-20", children: [
        /* @__PURE__ */ jsx(AboutHero, { techSectionRef }),
        /* @__PURE__ */ jsx(BackgroundJourney, {}),
        /* @__PURE__ */ jsx(PersonalInterests, {}),
        /* @__PURE__ */ jsx(LeadershipValues, {})
      ] }),
      /* @__PURE__ */ jsx("section", { id: "tech-section", ref: techSectionRef, className: "mt-20", children: /* @__PURE__ */ jsx(TechGridSection, {}) })
    ] })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=about-CU75TaoN.mjs.map
