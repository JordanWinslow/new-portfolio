import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { u as useAchievements, A as AchievementId } from './ssr.mjs';
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

const ResumeDownload = "/assets/Jordan_Winslow_Software_Engineer_Frontend_Resume-DN6HV9SH.pdf";
const PageBackground = () => {
  const particles = useMemo(() => Array.from({
    length: 40
  }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    key: `particle-${i}-${Math.random()}`,
    size: Math.random() * 3 + 1,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 3
  })), []);
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-0", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.1),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", children: particles.map((p) => /* @__PURE__ */ jsx(motion.div, { className: "absolute bg-white/40 rounded-full backdrop-blur-sm", style: {
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
    } }, p.key)) }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/20 rounded-full animate-pulse" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 right-1/4 w-24 h-24 border border-pink-500/20 rounded-lg rotate-45 animate-pulse", style: {
      animationDelay: "1s"
    } }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 left-1/3 w-20 h-20 border border-orange-500/20 rounded-full animate-pulse", style: {
      animationDelay: "2s"
    } })
  ] });
};
const SplitComponent = function Resume() {
  const {
    unlockAchievement
  } = useAchievements();
  useEffect(() => {
    unlockAchievement(AchievementId.resumeReader);
  }, [unlockAchievement]);
  const handleDownloadResume = () => {
    unlockAchievement(AchievementId.resumeDownloader);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black text-white relative overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(PageBackground, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6 py-12 mt-[8vh]", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "text-center mb-12", initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, children: [
        /* @__PURE__ */ jsx("h1", { className: "font-mohave text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wider mb-6", children: "Resume" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-lg mb-8 max-w-2xl mx-auto", children: "Download my professional resume to learn more about my experience, skills, and achievements in software engineering." }),
        /* @__PURE__ */ jsxs(motion.a, { href: ResumeDownload, download: true, onClick: handleDownloadResume, className: "group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-orange-600/90 backdrop-blur-md text-white font-mohave font-semibold px-8 py-4 rounded-2xl uppercase tracking-wide hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 border border-white/20 relative overflow-hidden", whileHover: {
          scale: 1.05
        }, whileTap: {
          scale: 0.95
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden rounded-2xl", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -left-1 w-2 h-2 bg-white/60 rounded-full animate-ping" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-1 h-1 bg-white/40 rounded-full animate-ping", style: {
              animationDelay: "0.5s"
            } }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -left-1 w-1 h-1 bg-white/40 rounded-full animate-ping", style: {
              animationDelay: "1s"
            } }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 w-2 h-2 bg-white/60 rounded-full animate-ping", style: {
              animationDelay: "1.5s"
            } })
          ] }),
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" }),
          /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Download PDF" }),
          /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { className: "relative", initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.2
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "relative bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl p-1 shadow-2xl border border-white/20", children: /* @__PURE__ */ jsx("div", { className: "bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-inner", children: /* @__PURE__ */ jsx("iframe", { src: ResumeDownload, className: "w-full h-[calc(100vh-300px)] min-h-[700px] border-0", title: "Jordan Winslow Resume" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-3xl -z-10 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-3 bg-gradient-to-r from-purple-400/15 via-pink-400/15 to-orange-400/15 rounded-2xl blur-xl -z-5" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -left-4 w-8 h-8 border border-purple-400/30 rounded-full animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -right-6 w-6 h-6 border border-pink-400/30 rounded-lg rotate-45 animate-pulse", style: {
          animationDelay: "1s"
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -left-6 w-4 h-4 border border-orange-400/30 rounded-full animate-pulse", style: {
          animationDelay: "2s"
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -right-4 w-8 h-8 border border-purple-400/30 rounded-lg rotate-45 animate-pulse", style: {
          animationDelay: "1.5s"
        } })
      ] })
    ] })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=resume-CoHoTcm2.mjs.map
