import { jsxs, jsx } from 'react/jsx-runtime';
import InteractiveBackground from '@splinetool/react-spline';
import { Code2 } from 'lucide-react';
import { useEffect } from 'react';
import { u as useAchievements, A as AchievementId, F as Fade, I as InternalLink } from './ssr.mjs';
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

const PortfolioButton = () => /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center z-20 w-full h-screen pointer-events-none", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center pulse-fade-group", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute w-40 h-40 rounded-full bg-white opacity-40 blur-3xl z-10" }),
  /* @__PURE__ */ jsx(InternalLink, { to: "/portfolio", className: "cursor-pointer pointer-events-auto w-20 h-20 flex items-center justify-center rounded-full border-2 border-white/90 bg-black/80 shadow-2xl transition-all duration-300 focus:outline-none z-20", "aria-label": "View Portfolio", children: /* @__PURE__ */ jsx(Code2, { className: "text-white w-10 h-10 drop-shadow-lg transition duration-200" }) })
] }) });
const PageLayout = () => /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 w-full h-full z-10 pointer-events-none", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute top-[10vh] left-[4vw] text-white text-base sm:text-lg font-light tracking-wider", children: "2025" }),
  /* @__PURE__ */ jsx("div", { className: "absolute top-[10vh] right-[4vw] text-white text-base sm:text-lg font-light tracking-wider", children: "20XX" }),
  /* @__PURE__ */ jsx("div", { className: "absolute top-[8vh] right-1/2 text-white text-2xl", children: "\xD7" }),
  /* @__PURE__ */ jsx("div", { className: "absolute top-[8vh] left-1/4 transform -translate-x-1/2 text-white text-xl", children: "\u2666" }),
  /* @__PURE__ */ jsx("div", { className: "absolute top-[8vh] right-1/4 text-white text-xl", children: "\u2666" }),
  /* @__PURE__ */ jsx("div", { className: "absolute bottom-[8vh] left-[30vw] transform -translate-x-1/2 text-white text-xl", children: "\u2666" }),
  /* @__PURE__ */ jsx("div", { className: "absolute bottom-[8vh] right-[30vw] text-white text-xl", children: "\u2666" }),
  /* @__PURE__ */ jsx("div", { className: "absolute top-[20vh] right-[4vw] text-white text-2xl", children: "\xD7" }),
  /* @__PURE__ */ jsx("div", { className: "absolute top-[23vh] right-[4vw] text-white text-2xl", children: "\xD7" }),
  /* @__PURE__ */ jsx("div", { className: "absolute top-[26vh] right-[4vw] text-white text-2xl", children: "\xD7" }),
  /* @__PURE__ */ jsx("div", { className: "absolute left-[4vw] top-[50vh] text-white text-2xl", children: "\xD7" }),
  /* @__PURE__ */ jsx("div", { className: "absolute left-[4vw] top-[53vh] text-white text-2xl", children: "\xD7" }),
  /* @__PURE__ */ jsx("div", { className: "absolute left-[4vw] top-[56vh] text-white text-2xl", children: "\xD7" }),
  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-[8vh] left-[4vw]", children: [
    /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs uppercase tracking-wider mb-1", children: "FRONTEND" }),
    /* @__PURE__ */ jsx("div", { className: "text-white text-sm font-light tracking-wide", children: "REACT | TANSTACK" })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-[8vh] right-[4vw]", children: [
    /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs uppercase tracking-wider mb-1", children: "BACKEND" }),
    /* @__PURE__ */ jsx("div", { className: "text-white text-sm font-light tracking-wide", children: "NESTJS | NODE" })
  ] })
] });
const SplitComponent = function Home() {
  const {
    unlockAchievement
  } = useAchievements();
  useEffect(() => {
    const timer = setTimeout(() => {
      unlockAchievement(AchievementId.firstSteps);
    }, 2e4);
    return () => clearTimeout(timer);
  }, [unlockAchievement]);
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-screen overflow-hidden bg-black font-mohave", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-full h-full z-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(InteractiveBackground, { scene: "./src/assets/spline/home-animation.splinecode" }) }),
    /* @__PURE__ */ jsx(PageLayout, {}),
    /* @__PURE__ */ jsx(Fade, { fadeInDelay: 3e3, fadeInDuration: 3e3, children: /* @__PURE__ */ jsx(PortfolioButton, {}) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=index-CX14zZeZ.mjs.map
