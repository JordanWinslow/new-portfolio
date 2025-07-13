import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { ArrowDown, Grid3x2, Columns, List, Sheet, Code2, Play, ArrowUpRight, Github, ChevronDownIcon } from 'lucide-react';
import * as React__default from 'react';
import { useState, useRef, useEffect, Suspense, lazy, useCallback } from 'react';
import { u as useAchievements, b as useScrollToRef, A as AchievementId, d as useIntersectionObserver, a as useResizeObserver, B as Button, c as cn } from './ssr.mjs';
import { C as CallToAction } from './CallToAction-DHajRL1y.mjs';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { useSprings, animated, to } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
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
import '@hookform/resolvers/zod';
import 'react-hook-form';
import 'zod';
import './Input-Cp6Zj0xY.mjs';
import '@radix-ui/react-label';
import 'lodash.debounce';

function BackgroundDecorations() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute top-1/30 left-1/4 w-20 h-20 border-2 border-purple-500/40 rounded-full animate-pulse",
        style: { animationDelay: ".5s" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute top-1/10 right-1/4 w-16 h-16 border-2 border-pink-500/40 rounded-lg rotate-45 animate-pulse",
        style: { animationDelay: "1s" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute top-1/10 left-1/5 w-12 h-12 border-2 border-orange-500/40 rounded-full animate-pulse",
        style: { animationDelay: "2s" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-3xl text-purple-400 animate-spin",
        style: {
          top: "15%",
          left: "8%",
          animationDelay: "0s",
          animationDuration: "8s"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-2xl text-pink-400 animate-spin",
        style: {
          top: "25%",
          right: "12%",
          animationDelay: "1.5s",
          animationDuration: "6s"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-3xl text-orange-400 animate-spin",
        style: {
          top: "70%",
          left: "15%",
          animationDelay: "2.5s",
          animationDuration: "10s"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-2xl text-purple-400 animate-spin",
        style: {
          top: "85%",
          right: "20%",
          animationDelay: "3s",
          animationDuration: "7s"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-xl text-pink-400",
        style: { top: "35%", left: "75%", animationDelay: "0.5s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-lg text-purple-400",
        style: { top: "45%", right: "30%", animationDelay: "1.2s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-xl text-orange-400",
        style: { top: "55%", left: "85%", animationDelay: "2.1s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-lg text-pink-400",
        style: { top: "65%", right: "8%", animationDelay: "0.8s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-lg text-purple-400 animate-ping",
        style: {
          top: "20%",
          left: "60%",
          animationDelay: "1s",
          animationDuration: "3s"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-sm text-pink-400 animate-ping",
        style: {
          top: "40%",
          left: "25%",
          animationDelay: "2.3s",
          animationDuration: "4s"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-lg text-orange-400 animate-ping",
        style: {
          top: "60%",
          right: "35%",
          animationDelay: "0.7s",
          animationDuration: "5s"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-sm text-purple-400 animate-ping",
        style: {
          top: "80%",
          left: "45%",
          animationDelay: "1.8s",
          animationDuration: "3.5s"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-lg text-pink-400",
        style: { top: "30%", left: "80%", animationDelay: "1.5s" },
        children: "\u25C6"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-sm text-purple-400",
        style: { top: "50%", right: "25%", animationDelay: "0.3s" },
        children: "\u25C6"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-lg text-orange-400",
        style: { top: "75%", left: "90%", animationDelay: "2.7s" },
        children: "\u25C6"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-xs text-white",
        style: {
          top: "10%",
          left: "40%",
          animationDelay: "0.2s",
          animation: "twinkle 3s ease-in-out infinite"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-xs text-white",
        style: {
          top: "18%",
          right: "45%",
          animationDelay: "1.7s",
          animation: "float 4s ease-in-out infinite"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-xs text-purple-400",
        style: {
          top: "28%",
          left: "70%",
          animationDelay: "0.9s",
          animation: "pulse-glow 2.5s ease-in-out infinite"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-xs text-white",
        style: {
          top: "38%",
          right: "15%",
          animationDelay: "2.4s",
          animation: "twinkle 3.5s ease-in-out infinite"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-xs text-white",
        style: {
          top: "48%",
          left: "35%",
          animationDelay: "1.1s",
          animation: "float 5s ease-in-out infinite"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-xs text-pink-400",
        style: {
          top: "58%",
          right: "50%",
          animationDelay: "0.6s",
          animation: "pulse-glow 3s ease-in-out infinite"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-xs text-white",
        style: {
          top: "68%",
          left: "55%",
          animationDelay: "2.0s",
          animation: "twinkle 2.8s ease-in-out infinite"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-xs text-white",
        style: {
          top: "78%",
          right: "40%",
          animationDelay: "1.3s",
          animation: "float 4.5s ease-in-out infinite"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-xs text-orange-400",
        style: {
          top: "88%",
          left: "30%",
          animationDelay: "0.4s",
          animation: "pulse-glow 2.2s ease-in-out infinite"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none text-white absolute text-xs text-white",
        style: {
          top: "95%",
          right: "60%",
          animationDelay: "1.9s",
          animation: "twinkle 3.2s ease-in-out infinite"
        },
        children: "\u2726"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-sm text-pink-400",
        style: { top: "12%", left: "90%", animationDelay: "0.8s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-sm text-orange-400",
        style: { top: "22%", right: "5%", animationDelay: "2.2s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-sm text-purple-400",
        style: { top: "32%", left: "5%", animationDelay: "1.4s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-sm text-pink-400",
        style: { top: "42%", right: "70%", animationDelay: "0.1s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-sm text-orange-400",
        style: { top: "52%", left: "95%", animationDelay: "2.8s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-sm text-purple-400",
        style: { top: "62%", right: "80%", animationDelay: "1.6s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-sm text-pink-400",
        style: { top: "72%", left: "10%", animationDelay: "0.5s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-sm text-orange-400",
        style: { top: "82%", right: "90%", animationDelay: "2.6s" },
        children: "\u2715"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none sparkle text-sm text-purple-400",
        style: { top: "92%", left: "65%", animationDelay: "1.0s" },
        children: "\u2715"
      }
    )
  ] });
}
function StarField() {
  const [stars, setStars] = useState([]);
  const { unlockAchievement } = useAchievements();
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const positions = [];
      const minDistance = 16;
      const maxAttempts = 1e3;
      const starTypes = ["star", "cross", "diamond"];
      const sizes = ["xs", "sm", "base", "lg"];
      const animations = [
        "twinkle",
        "float",
        "pulse-glow",
        "spin",
        "ping",
        "sparkle"
      ];
      const accentColors = ["purple", "pink", "orange"];
      for (let i = 0; i < 60; i++) {
        let attempts = 0;
        let validPosition = false;
        let x = 0;
        let y = 0;
        while (attempts < maxAttempts && !validPosition) {
          x = Math.random() * 100;
          y = Math.random() * 100;
          validPosition = positions.every((pos) => {
            const distance = Math.sqrt(
              ((x - pos.x) * window.innerWidth / 100) ** 2 + ((y - pos.y) * window.innerHeight / 100) ** 2
            );
            return distance >= minDistance;
          });
          attempts++;
        }
        if (validPosition) {
          positions.push({ x, y });
          const star = {
            id: `star-${i}-${Math.random().toString(36).substr(2, 9)}`,
            x,
            y,
            type: starTypes[Math.floor(Math.random() * starTypes.length)] || "star",
            size: sizes[Math.floor(Math.random() * sizes.length)] || "sm",
            animation: animations[Math.floor(Math.random() * animations.length)] || "twinkle",
            color: Math.random() < 0.2 ? accentColors[Math.floor(Math.random() * accentColors.length)] || "purple" : "white",
            delay: Math.random() * 3,
            duration: 2 + Math.random() * 4
          };
          newStars.push(star);
        }
      }
      setStars(newStars);
    };
    generateStars();
  }, []);
  const getStarSymbol = (type) => {
    switch (type) {
      case "star":
        return "\u2726";
      case "cross":
        return "\u2715";
      case "diamond":
        return "\u25C6";
      default:
        return "\u2726";
    }
  };
  const getColorClass = (color) => {
    switch (color) {
      case "white":
        return "text-white";
      case "purple":
        return "text-purple-400";
      case "pink":
        return "text-pink-400";
      case "orange":
        return "text-orange-400";
      default:
        return "text-white";
    }
  };
  const getSizeClass = (size) => {
    switch (size) {
      case "xs":
        return "text-xs";
      case "sm":
        return "text-sm";
      case "base":
        return "text-base";
      case "lg":
        return "text-lg";
      default:
        return "text-sm";
    }
  };
  const getAnimationStyle = (animation, delay, duration) => {
    switch (animation) {
      case "twinkle":
        return {
          animationDelay: `${delay}s`,
          animation: `twinkle ${duration}s ease-in-out infinite`
        };
      case "float":
        return {
          animationDelay: `${delay}s`,
          animation: `float ${duration}s ease-in-out infinite`
        };
      case "pulse-glow":
        return {
          animationDelay: `${delay}s`,
          animation: `pulse-glow ${duration}s ease-in-out infinite`
        };
      case "spin":
        return {
          animationDelay: `${delay}s`,
          animation: `spin ${duration}s linear infinite`
        };
      case "ping":
        return {
          animationDelay: `${delay}s`,
          animation: `ping ${duration}s cubic-bezier(0, 0, 0.2, 1) infinite`
        };
      case "sparkle":
        return {
          animationDelay: `${delay}s`,
          animation: `sparkle ${duration}s ease-in-out infinite`
        };
      default:
        return {
          animationDelay: `${delay}s`,
          animation: `twinkle ${duration}s ease-in-out infinite`
        };
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
    stars.map((star) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute ${getColorClass(star.color)} ${getSizeClass(star.size)} ${star.animation === "sparkle" ? "sparkle" : ""}`,
        style: {
          top: `${star.y}%`,
          left: `${star.x}%`,
          transform: "translate(-50%, -50%)",
          ...getAnimationStyle(star.animation, star.delay, star.duration)
        },
        children: getStarSymbol(star.type)
      },
      star.id
    )),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "pointer-events-auto absolute right-1/2 top-1/2 cursor-default bg-transparent border-none text-white",
        onClick: () => unlockAchievement(AchievementId.gamerSpirit),
        "aria-label": "Gaming easter egg",
        children: "Wheeeeeeeeeeeee"
      }
    )
  ] });
}
const phone1 = "/assets/phone-1-BPRPrFhn.png";
const phone2 = "/assets/phone-2-DBDdrfqt.png";
const phone3 = "/assets/phone-3-DSWFs8u7.png";
const phone4 = "/assets/phone-4-_3bNVNVG.png";
const phone5 = "/assets/phone-5-4cAcvgC1.png";
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  variant = "default",
  ...props
}) {
  const _values = React__default.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  const getThumbClassName = () => {
    const baseClasses = "block size-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black disabled:pointer-events-none disabled:opacity-50 transition-all duration-200 hover:scale-110";
    switch (variant) {
      case "flick-speed":
        return cn(
          baseClasses,
          "border-2 border-white bg-black focus:ring-white/50"
        );
      case "spin-degrees":
        return cn(
          baseClasses,
          "border-2 border-black bg-pink-500 focus:ring-pink-500/50"
        );
      default:
        return cn(
          baseClasses,
          "border-2 border-black bg-white focus:ring-white/50"
        );
    }
  };
  return /* @__PURE__ */ jsxs(
    SliderPrimitive.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          SliderPrimitive.Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "bg-neutral-800 relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2"
            ),
            children: /* @__PURE__ */ jsx(
              SliderPrimitive.Range,
              {
                "data-slot": "slider-range",
                className: cn(
                  variant === "flick-speed" ? "bg-white" : "bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500",
                  "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        _values.map((val) => /* @__PURE__ */ jsx(
          SliderPrimitive.Thumb,
          {
            "data-slot": "slider-thumb",
            className: getThumbClassName()
          },
          `thumb-${val}`
        ))
      ]
    }
  );
}
const DEFAULT_PHONE_WIDTH = 189;
const DEFAULT_PHONE_HEIGHT = 378;
const DEFAULT_STACK_OFFSET_Y = -21;
const DEFAULT_MAX_FLICK_VELOCITY = 5;
const DEFAULT_MAX_SPIN_DEGREES = 180;
const DEFAULT_FLICK_VELOCITY_THRESHOLD = 0.2;
const PhoneStack = ({
  images,
  maxFlickVelocity = DEFAULT_MAX_FLICK_VELOCITY,
  maxSpinDegrees = DEFAULT_MAX_SPIN_DEGREES,
  flickVelocityThreshold = DEFAULT_FLICK_VELOCITY_THRESHOLD,
  phoneWidth = DEFAULT_PHONE_WIDTH,
  phoneHeight = DEFAULT_PHONE_HEIGHT,
  stackOffsetY = DEFAULT_STACK_OFFSET_Y
}) => {
  const { unlockAchievement } = useAchievements();
  const containerRef = useRef(null);
  const flickedPhonesRef = useRef(/* @__PURE__ */ new Set());
  const getContainerCenter = () => {
    var _a;
    const rect = (_a = containerRef.current) == null ? void 0 : _a.getBoundingClientRect();
    return rect ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 } : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  };
  const getInitialPosition = (index) => ({
    x: 0,
    y: index * stackOffsetY,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: index * 100
  });
  const getStartPosition = () => ({ x: 0, y: 0, rot: 0, scale: 1.2 });
  const getTransform = (rotation, scale) => `perspective(1200px) rotateX(25deg) rotateY(${rotation / 10}deg) rotateZ(${rotation}deg) scale(${scale})`;
  const [springs, setSprings] = useSprings(images.length, (index) => ({
    ...getInitialPosition(index),
    from: getStartPosition()
  }));
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const bind = useDrag(
    ({
      args: [phoneIndex],
      down,
      movement: [_moveX, moveY],
      velocity,
      direction: [xDirection],
      xy: [mouseX, mouseY],
      first,
      last
    }) => {
      const containerCenter = getContainerCenter();
      if (first) {
        dragOffsetRef.current = {
          x: mouseX - containerCenter.x,
          y: mouseY - containerCenter.y
        };
      }
      const rawVelocity = velocity[0];
      const velocityScale = Math.max(1, Math.min(10, maxFlickVelocity));
      const flickSpeedFactor = 0.02 + (velocityScale - 1) / 9 * (2 - 0.02);
      const clampedVelocity = Math.min(Math.abs(rawVelocity), flickSpeedFactor) * Math.sign(rawVelocity);
      const isFlicked = !down && Math.abs(rawVelocity) > flickVelocityThreshold;
      const flickDirection = xDirection < 0 ? -1 : 1;
      if (isFlicked) {
        flickedPhonesRef.current.add(phoneIndex);
      }
      setSprings((index) => {
        if (phoneIndex !== index) return;
        const isFlicked2 = flickedPhonesRef.current.has(index);
        let targetX = 0;
        let targetY = getInitialPosition(index).y;
        if (down) {
          targetX = mouseX - containerCenter.x - dragOffsetRef.current.x;
          targetY = mouseY - containerCenter.y - dragOffsetRef.current.y;
        } else if (isFlicked2) {
          targetX = (window.innerWidth + 200) * flickDirection;
          targetY = moveY;
        }
        let rotation = 0;
        if (down) {
          rotation = (mouseX - containerCenter.x) / 20;
        } else if (isFlicked2) {
          rotation = flickDirection * Math.abs(maxSpinDegrees) * Math.sign(clampedVelocity);
        }
        rotation = Math.max(
          -Math.abs(maxSpinDegrees),
          Math.min(Math.abs(maxSpinDegrees), rotation)
        );
        const scale = down ? 1.08 : 1;
        const springConfig = {
          friction: down ? 15 : isFlicked2 ? 60 - (velocityScale - 1) * 5 : 50,
          tension: down ? 200 : isFlicked2 ? 220 + (velocityScale - 1) * 30 : 500
        };
        if (isFlicked2) {
          const absVelocity = Math.abs(clampedVelocity);
          springConfig.friction = 60 - (velocityScale - 1) * 5 - absVelocity * 2;
          springConfig.tension = 220 + (velocityScale - 1) * 30 + absVelocity * 10;
        }
        return {
          x: targetX,
          y: targetY,
          rot: rotation,
          scale,
          delay: void 0,
          immediate: down,
          config: springConfig
        };
      });
      if (last && flickedPhonesRef.current.size === images.length) {
        unlockAchievement(AchievementId.phoneMaster);
        setTimeout(() => {
          flickedPhonesRef.current.clear();
          setSprings((index) => getInitialPosition(index));
        }, 600);
      }
    },
    { filterTaps: true }
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: "relative flex items-center justify-center w-full h-full select-none mt-32 md:mt-0",
      style: {
        minHeight: phoneHeight * 0.75,
        minWidth: phoneWidth * 0.75,
        overflow: "visible"
      },
      children: springs.map(
        ({ x, y, rot, scale }, index) => /* @__PURE__ */ jsx(
          animated.div,
          {
            style: {
              transform: to(
                [x, y],
                (x2, y2) => `translate3d(${x2}px,${y2}px,0)`
              ),
              zIndex: images.length - index
            },
            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            children: /* @__PURE__ */ jsx(
              animated.div,
              {
                ...bind(index),
                style: {
                  transform: to([rot, scale], getTransform)
                },
                className: "phone-frame shadow-2xl cursor-grab active:cursor-grabbing",
                children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "bg-black border-neutral-800 flex items-center justify-center overflow-hidden relative",
                    style: {
                      width: phoneWidth,
                      height: phoneHeight,
                      borderRadius: phoneWidth * 0.093,
                      borderWidth: 6,
                      borderStyle: "solid"
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: images[index],
                          alt: `Phone ${index + 1}`,
                          className: "object-cover shadow-lg",
                          style: {
                            width: phoneWidth * 0.89,
                            height: phoneHeight * 0.945,
                            borderRadius: phoneWidth * 0.074
                          },
                          draggable: false
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "absolute top-2 left-1/2 -translate-x-1/2 bg-neutral-700 rounded-full opacity-70",
                          style: { width: phoneWidth * 0.58, height: 4 }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "absolute bottom-2 left-1/2 -translate-x-1/2 bg-neutral-700 rounded-full opacity-60",
                          style: { width: phoneWidth * 0.26, height: 4 }
                        }
                      )
                    ]
                  }
                )
              }
            )
          },
          `phone-${images[index]}-${index}`
        )
      )
    }
  );
};
const phoneImages = [phone1, phone2, phone3, phone4, phone5];
function PhoneStackShowcase() {
  const [flickSpeed, setFlickSpeed] = useState(5);
  const [maxSpinDegrees, setMaxSpinDegrees] = useState(180);
  const [flickSpeedDisplay, setFlickSpeedDisplay] = useState(5);
  const [spinDegreesDisplay, setSpinDegreesDisplay] = useState(180);
  const handleFlickSpeedChange = useCallback(([value]) => {
    setFlickSpeedDisplay(value != null ? value : 5);
  }, []);
  const handleFlickSpeedCommit = useCallback(([value]) => {
    setFlickSpeed(value != null ? value : 5);
    setFlickSpeedDisplay(value != null ? value : 5);
  }, []);
  const handleSpinDegreesChange = useCallback(([value]) => {
    setSpinDegreesDisplay(value != null ? value : 180);
  }, []);
  const handleSpinDegreesCommit = useCallback(([value]) => {
    setMaxSpinDegrees(value != null ? value : 180);
    setSpinDegreesDisplay(value != null ? value : 180);
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "gradient-border rounded-3xl p-8 md:p-12 bg-black/20 backdrop-blur-sm max-w-6xl mx-auto relative z-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-mohave text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide", children: "INTERACTIVE PHONE STACK" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-300 leading-relaxed", children: "Experience the power of modern React animations with this interactive phone stack. Click and drag phones to see them respond naturally, or throw them off the screen with realistic physics." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs(
            "label",
            {
              htmlFor: "flick-speed",
              className: "font-mohave text-xl font-bold text-white flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx("span", { children: "Flick Speed" }),
                /* @__PURE__ */ jsx("span", { className: "text-white font-mono bg-gray-800 px-3 py-1 rounded text-sm", children: flickSpeedDisplay })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Slider,
            {
              id: "flick-speed",
              defaultValue: [flickSpeed],
              onValueChange: handleFlickSpeedChange,
              onValueCommit: handleFlickSpeedCommit,
              max: 10,
              min: 1,
              step: 1,
              className: "w-full focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-50 rounded-lg transition-all duration-200",
              variant: "flick-speed"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Controls how fast phones can fly off screen when flicked (1 = slow, 10 = fast)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs(
            "label",
            {
              htmlFor: "spin-degrees",
              className: "font-mohave text-xl font-bold text-white flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx("span", { children: "Spin Degrees" }),
                /* @__PURE__ */ jsxs("span", { className: "text-white font-mono bg-gray-800 px-3 py-1 rounded text-sm", children: [
                  spinDegreesDisplay,
                  "\xB0"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Slider,
            {
              id: "spin-degrees",
              defaultValue: [maxSpinDegrees],
              onValueChange: handleSpinDegreesChange,
              onValueCommit: handleSpinDegreesCommit,
              max: 360,
              min: 0,
              step: 10,
              className: "w-full focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-opacity-50 rounded-lg transition-all duration-200",
              variant: "spin-degrees"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Maximum rotation when phones are flicked (0\xB0 = no spin, 360\xB0 = full rotation)" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-6 pb-16 md:pb-24 lg:pb-0", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-400 italic", children: [
        "\u{1F4A1} ",
        /* @__PURE__ */ jsx("strong", { children: "Tip:" }),
        " Pay attention to the speed & direction you flick each phone. The phone stack will re-assemble in the same directions and speeds you threw them!"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative lg:mt-16", children: [
      /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsx(
        PhoneStack,
        {
          images: phoneImages,
          maxFlickVelocity: flickSpeed,
          maxSpinDegrees
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-cyan-500/5 to-teal-500/5 rounded-2xl blur-2xl" })
    ] })
  ] }) }) });
}
const containmentBreachImage = "/assets/containment-breach-Cm6SjBph.gif";
const ecosystemSimImage = "/assets/ecosystem-B4gSJlGc.gif";
const pokeTeamImage = "/assets/poketeamdemo-BBwo5uAP.gif";
const portfolioItems = [
  {
    id: 1,
    title: "Modern UI Horror RPG",
    description: "Extremely complex project designed, programmed and animated from scratch. Please see the demo video!",
    image: containmentBreachImage,
    videoLink: "https://youtu.be/ckLU5tGdlTM?si=yBGFAIl2cy6taF_O",
    tech: [
      "GML",
      "Systems Design",
      "Engine Building",
      "Desktop Applications",
      "Performance Optimization"
    ]
  },
  {
    id: 2,
    title: "Ecosystem Simulator",
    description: "Build-your-own-framework TypeScript project created to teach students web & object oriented programming fundamentals.",
    image: ecosystemSimImage,
    github: "https://github.com/JordanWinslow/TypeScript-Ecosystem-Game",
    demo: "https://typescript-ecosystem-simulator.netlify.app/",
    tech: ["TypeScript", "HTML", "CSS", "OOP", "Performance Optimization"]
  },
  {
    id: 3,
    title: "PokeTeam",
    description: "Responsive, mobile-first web app with infinite loading, local storage, & query caching",
    image: pokeTeamImage,
    github: "https://github.com/JordanWinslow/poke-team",
    demo: "https://poke-team.netlify.app/",
    tech: ["JavaScript", "React", "Redux", "MaterialUI"]
  },
  {
    id: 4,
    title: "Coming Soon",
    description: "Coming soon",
    image: pokeTeamImage,
    github: "https://github.com",
    demo: "https://demo.com",
    tech: ["Three.js", "WebGL", "React", "GSAP"]
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "Coming Soon",
    image: containmentBreachImage,
    github: "https://github.com",
    demo: "https://demo.com",
    tech: ["Vue.js", "Web3.js", "Ethereum", "Chart.js"]
  },
  {
    id: 6,
    title: "Coming Soon",
    description: "Coming Soon",
    image: ecosystemSimImage,
    github: "https://github.com",
    demo: "https://demo.com",
    tech: ["AR.js", "WebXR", "Three.js", "React"]
  }
];
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}
function ProjectAccordionItem({
  imageSrc,
  title,
  description,
  techItems,
  githubLink,
  demoLink,
  videoLink,
  onVideoClick,
  onLinkClick
}) {
  return /* @__PURE__ */ jsxs(
    AccordionItem,
    {
      value: title,
      className: "border-b border-white/10 last:border-b-0",
      children: [
        /* @__PURE__ */ jsxs(AccordionTrigger, { className: "px-6 py-4 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 transition-all duration-300 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-white/5 [&[data-state=open]]:to-white/10 group relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 w-full relative z-10", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: imageSrc,
                alt: title,
                className: "w-12 h-12 rounded object-cover flex-shrink-0",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "font-mohave font-semibold text-white text-left", children: title })
          ] })
        ] }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "px-6 pb-6 bg-gradient-to-br from-white/2 to-white/5", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full h-48 relative overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: imageSrc,
              alt: title,
              className: "w-full h-full object-cover",
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed line-clamp-3", children: description }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-mohave font-semibold text-white mb-3 text-sm uppercase tracking-wide", children: "Tech Stack" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: techItems.map((tech) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-3 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20",
                children: tech
              },
              tech
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-mohave font-semibold text-white mb-3 text-sm uppercase tracking-wide", children: "Links" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              githubLink && /* @__PURE__ */ jsxs(
                "a",
                {
                  href: githubLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: () => onLinkClick == null ? void 0 : onLinkClick(githubLink),
                  className: "gradient-border-button flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(Github, { size: 16 }),
                    "GITHUB"
                  ]
                }
              ),
              videoLink && onVideoClick && /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    onVideoClick(videoLink, title);
                    onLinkClick == null ? void 0 : onLinkClick(videoLink);
                  },
                  className: "gradient-border-button flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(Play, { size: 16 }),
                    "VIDEO"
                  ]
                }
              ),
              demoLink && !videoLink && /* @__PURE__ */ jsxs(
                "a",
                {
                  href: demoLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: () => onLinkClick == null ? void 0 : onLinkClick(demoLink),
                  className: "gradient-border-button flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 }),
                    "LIVE DEMO"
                  ]
                }
              )
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
const ProjectCard = ({
  variant,
  imageSrc,
  title,
  description,
  techItems,
  githubLink,
  demoLink,
  videoLink,
  onVideoClick,
  onLinkClick
}) => {
  const [cardRef, showTechBadges] = useResizeObserver(
    500,
    "width",
    "gt"
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: cardRef,
      className: "group relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transform transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.02] hover:-translate-y-2 hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none blur-xl" }),
        /* @__PURE__ */ jsxs("div", { className: "aspect-video relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: imageSrc,
              alt: title,
              className: "w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute inset-0 bg-gradient-to-t from-black/90 ${variant === "hoverToDisplay" ? "to-black/90 sm:via-black/80 sm:to-black/10" : "via-black/50 to-transparent"}  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform translate-y-4 group-hover:translate-y-0", children: [
            variant === "hoverToDisplay" && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-mohave text-xl font-bold text-white mb-2", children: title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4 line-clamp-2", children: description }),
              showTechBadges && /* @__PURE__ */ jsx("div", { className: "mb-6 flex flex-wrap gap-2", children: techItems.map((tech) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "cursor-pointer px-3 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                  children: tech
                },
                tech
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              githubLink && /* @__PURE__ */ jsx(
                "a",
                {
                  href: githubLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: () => onLinkClick == null ? void 0 : onLinkClick(githubLink),
                  children: /* @__PURE__ */ jsx(Button, { variant: "secondary", Icon: /* @__PURE__ */ jsx(Github, { size: 14 }), children: "CODE" })
                }
              ),
              videoLink && onVideoClick && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "secondary",
                  Icon: /* @__PURE__ */ jsx(Play, { size: 14 }),
                  onClick: () => {
                    onVideoClick(videoLink, title);
                    onLinkClick == null ? void 0 : onLinkClick(videoLink);
                  },
                  children: "VIDEO"
                }
              ),
              demoLink && !videoLink && /* @__PURE__ */ jsx(
                "a",
                {
                  href: demoLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: () => onLinkClick == null ? void 0 : onLinkClick(demoLink),
                  children: /* @__PURE__ */ jsx(Button, { variant: "secondary", Icon: /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 }), children: "DEMO" })
                }
              )
            ] })
          ] })
        ] }),
        variant === "alwaysDisplay" && /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-mohave text-xl font-bold text-white mb-2", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-md mb-4", children: description }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: techItems.map((tech) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "cursor-pointer px-3 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
              children: tech
            },
            tech
          )) })
        ] })
      ]
    }
  );
};
function ProjectListItem({
  imageSrc,
  title,
  description,
  techItems,
  githubLink,
  demoLink,
  videoLink,
  onVideoClick,
  onLinkClick
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 flex flex-col md:flex-row gap-6 hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-300 hover-lift group relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-300 pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 pointer-events-none blur-xl" }),
    /* @__PURE__ */ jsx("div", { className: "w-full md:w-64 h-48 md:h-auto relative overflow-hidden rounded-lg flex-shrink-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: imageSrc,
        alt: title,
        className: "w-full h-full object-cover",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 relative z-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-mohave text-xl font-bold text-white mb-2", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4 line-clamp-3", children: description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: techItems.map((tech) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "cursor-pointer px-2 py-1 text-xs font-mono bg-white/10 text-white/80 rounded border border-white/20",
          children: tech
        },
        tech
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        githubLink && /* @__PURE__ */ jsxs(
          "a",
          {
            href: githubLink,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: () => onLinkClick == null ? void 0 : onLinkClick(githubLink),
            className: "gradient-border-button flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(Github, { size: 16 }),
              "GITHUB"
            ]
          }
        ),
        videoLink && onVideoClick && /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              onVideoClick(videoLink, title);
              onLinkClick == null ? void 0 : onLinkClick(videoLink);
            },
            className: "gradient-border-button flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(Play, { size: 16 }),
              "VIDEO"
            ]
          }
        ),
        demoLink && !videoLink && /* @__PURE__ */ jsxs(
          "a",
          {
            href: demoLink,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: () => onLinkClick == null ? void 0 : onLinkClick(demoLink),
            className: "gradient-border-button flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 }),
              "LIVE DEMO"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "tooltip-gradient-border bg-black text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-lg px-4 py-3 text-sm text-balance max-w-xs shadow-2xl",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "fill-black border-l border-t border-purple-500/40 z-50 size-3 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
function ProjectTableRow({
  imageSrc,
  title,
  description,
  techItems,
  githubLink,
  demoLink,
  videoLink,
  onVideoClick,
  onLinkClick
}) {
  return /* @__PURE__ */ jsxs("tr", { className: "border-t border-white/10 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 transition-all duration-300 relative group", children: [
    /* @__PURE__ */ jsx("td", { className: "px-6 py-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: imageSrc,
          alt: title,
          className: "w-12 h-12 rounded object-cover",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "font-mohave font-semibold text-white", children: title })
    ] }) }),
    /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-gray-400 max-w-xs relative z-10", children: /* @__PURE__ */ jsxs(Tooltip, { delayDuration: 1e3, children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx("p", { className: "line-clamp-2 cursor-help overflow-hidden text-ellipsis whitespace-nowrap", children: description }) }),
      /* @__PURE__ */ jsx(TooltipContent, { children: description })
    ] }) }),
    /* @__PURE__ */ jsx("td", { className: "px-6 py-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1", children: [
      techItems.slice(0, 3).map((tech) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "px-2 py-1 text-xs font-mono bg-white/10 text-white/90 rounded-full border border-white/20",
          children: tech
        },
        tech
      )),
      techItems.length > 3 && /* @__PURE__ */ jsxs("span", { className: "px-2 py-1 text-xs text-gray-400", children: [
        "+",
        techItems.length - 3
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("td", { className: "px-6 py-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      githubLink && /* @__PURE__ */ jsx(
        "a",
        {
          href: githubLink,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => onLinkClick == null ? void 0 : onLinkClick(githubLink),
          className: "gradient-border-icon",
          title: "View Code",
          children: /* @__PURE__ */ jsx(Code2, { size: 16 })
        }
      ),
      videoLink && onVideoClick && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            onVideoClick(videoLink, title);
            onLinkClick == null ? void 0 : onLinkClick(videoLink);
          },
          className: "gradient-border-icon",
          title: "Watch Video",
          children: /* @__PURE__ */ jsx(Play, { size: 16 })
        }
      ),
      demoLink && !videoLink && /* @__PURE__ */ jsx(
        "a",
        {
          href: demoLink,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => onLinkClick == null ? void 0 : onLinkClick(demoLink),
          className: "gradient-border-icon",
          title: "Live Demo",
          children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none" })
  ] });
}
const VideoModal = lazy(
  () => import('./VideoModal-DOfmeXm-.mjs').then((mod) => ({ default: mod.VideoModal }))
);
function PortfolioGrid({ layout }) {
  var _a;
  const { unlockAchievement } = useAchievements();
  const [videoModalState, setVideoModalState] = useState({
    isOpen: false,
    videoUrl: "",
    title: ""
  });
  const [clickedLinks, setClickedLinks] = useState(/* @__PURE__ */ new Set());
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-clicked-links");
    if (saved) {
      try {
        const links = JSON.parse(saved);
        setClickedLinks(new Set(links));
      } catch {
        setClickedLinks(/* @__PURE__ */ new Set());
      }
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "portfolio-clicked-links",
      JSON.stringify([...clickedLinks])
    );
  }, [clickedLinks]);
  const checkForAchievement = (link) => {
    if (!link) return;
    setClickedLinks((prev) => {
      const newSet = new Set(prev);
      newSet.add(link);
      if (newSet.size >= 4) {
        unlockAchievement(AchievementId.projectExplorer);
      }
      return newSet;
    });
  };
  const handleVideoClick = (videoUrl, title) => {
    checkForAchievement(videoUrl);
    setVideoModalState({
      isOpen: true,
      videoUrl,
      title
    });
  };
  const handleVideoClose = () => {
    setVideoModalState({
      isOpen: false,
      videoUrl: "",
      title: ""
    });
  };
  switch (layout) {
    case "grid":
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: portfolioItems.map((item) => /* @__PURE__ */ jsx(
          ProjectCard,
          {
            variant: "alwaysDisplay",
            title: item.title,
            description: item.description,
            imageSrc: item.image,
            techItems: item.tech,
            githubLink: item.github,
            demoLink: item.demo,
            videoLink: item.videoLink,
            onVideoClick: handleVideoClick,
            onLinkClick: checkForAchievement
          },
          item.id
        )) }),
        /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(
          VideoModal,
          {
            isOpen: videoModalState.isOpen,
            onClose: handleVideoClose,
            videoUrl: videoModalState.videoUrl,
            title: videoModalState.title
          }
        ) })
      ] });
    case "columns":
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: portfolioItems.map((item) => /* @__PURE__ */ jsx(
          ProjectCard,
          {
            variant: "hoverToDisplay",
            title: item.title,
            description: item.description,
            imageSrc: item.image,
            techItems: item.tech,
            githubLink: item.github,
            demoLink: item.demo,
            videoLink: item.videoLink,
            onVideoClick: handleVideoClick,
            onLinkClick: checkForAchievement
          },
          item.id
        )) }),
        /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(
          VideoModal,
          {
            isOpen: videoModalState.isOpen,
            onClose: handleVideoClose,
            videoUrl: videoModalState.videoUrl,
            title: videoModalState.title
          }
        ) })
      ] });
    case "list":
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: portfolioItems.map((item) => /* @__PURE__ */ jsx(
          ProjectListItem,
          {
            title: item.title,
            description: item.description,
            imageSrc: item.image,
            techItems: item.tech,
            githubLink: item.github,
            demoLink: item.demo,
            videoLink: item.videoLink,
            onVideoClick: handleVideoClick,
            onLinkClick: checkForAchievement
          },
          item.id
        )) }),
        /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(
          VideoModal,
          {
            isOpen: videoModalState.isOpen,
            onClose: handleVideoClose,
            videoUrl: videoModalState.videoUrl,
            title: videoModalState.title
          }
        ) })
      ] });
    case "table":
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl overflow-hidden bg-black border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm transform transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-white/20 ", children: [
          /* @__PURE__ */ jsx("div", { className: "hidden sm:block overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsx("thead", { className: "bg-white/5", children: /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left font-mohave font-semibold text-white uppercase tracking-wide", children: "PROJECT" }),
              /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left font-mohave font-semibold text-white uppercase tracking-wide", children: "DESCRIPTION" }),
              /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left font-mohave font-semibold text-white uppercase tracking-wide", children: "TECH STACK" }),
              /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-left font-mohave font-semibold text-white uppercase tracking-wide", children: "LINKS" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: portfolioItems.map((item) => /* @__PURE__ */ jsx(
              ProjectTableRow,
              {
                title: item.title,
                description: item.description,
                imageSrc: item.image,
                techItems: item.tech,
                githubLink: item.github,
                demoLink: item.demo,
                videoLink: item.videoLink,
                onVideoClick: handleVideoClick,
                onLinkClick: checkForAchievement
              },
              item.id
            )) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "sm:hidden", children: /* @__PURE__ */ jsx(
            Accordion,
            {
              type: "single",
              defaultValue: ((_a = portfolioItems[0]) == null ? void 0 : _a.title) || "",
              collapsible: true,
              className: "w-full",
              children: portfolioItems.map((item) => /* @__PURE__ */ jsx(
                ProjectAccordionItem,
                {
                  title: item.title,
                  description: item.description,
                  imageSrc: item.image,
                  techItems: item.tech,
                  githubLink: item.github,
                  demoLink: item.demo,
                  videoLink: item.videoLink,
                  onVideoClick: handleVideoClick,
                  onLinkClick: checkForAchievement
                },
                item.id
              ))
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(
          VideoModal,
          {
            isOpen: videoModalState.isOpen,
            onClose: handleVideoClose,
            videoUrl: videoModalState.videoUrl,
            title: videoModalState.title
          }
        ) })
      ] });
    default:
      return /* @__PURE__ */ jsx("div", { children: "Error - Invalid layout type" });
  }
}
function PortfolioLayoutControls({
  layout,
  handleLayoutChange
}) {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 p-3 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl", children: [
    { id: "grid", icon: Grid3x2, label: "GRID" },
    {
      id: "columns",
      icon: Columns,
      label: "COLUMNS"
    },
    { id: "list", icon: List, label: "LIST" },
    { id: "table", icon: Sheet, label: "TABLE" }
  ].map((control) => {
    const Icon = control.icon;
    const isSelectedLayout = layout === control.id;
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => handleLayoutChange(control.id),
        className: `cursor-pointer p-3 rounded-lg transition-all duration-300 font-mohave font-semibold text-xs tracking-wide hover-lift ${isSelectedLayout ? "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/10"}`,
        "aria-label": `Switch to ${control.label} layout`,
        children: /* @__PURE__ */ jsx(Icon, { size: 20 })
      },
      control.id
    );
  }) });
}
const SplitComponent = function Portfolio() {
  const {
    unlockAchievement
  } = useAchievements();
  const [layout, setLayout] = useState("grid");
  const [_usedLayouts, setUsedLayouts] = useState(/* @__PURE__ */ new Set(["grid"]));
  const portfolioRef = useRef(null);
  const featuredWorkRef = useRef(null);
  const starfieldRef = useRef(null);
  const bottomRef = useRef(null);
  const scrollToRef = useScrollToRef();
  useEffect(() => {
    unlockAchievement(AchievementId.portfolioExplorer);
  }, [unlockAchievement]);
  const isPortfolioVisible = useIntersectionObserver(portfolioRef, {
    threshold: 0,
    rootMargin: "-60% 0px -40% 0px"
  });
  const isFeaturedWorkVisible = useIntersectionObserver(featuredWorkRef, {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
  });
  const isStarfieldVisible = useIntersectionObserver(starfieldRef, {
    threshold: 0,
    rootMargin: "-500px 0px 0px 0px"
  });
  const isBottomVisible = useIntersectionObserver(bottomRef, {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
  });
  if (isBottomVisible) {
    unlockAchievement(AchievementId.scrollMaster);
  }
  const shouldShowScrollButton = isFeaturedWorkVisible || isStarfieldVisible;
  const handleLayoutChange = (updatedLayout) => {
    setLayout(updatedLayout);
    setUsedLayouts((prev) => {
      const newUsed = new Set(prev);
      newUsed.add(updatedLayout);
      if (newUsed.size >= 4) {
        unlockAchievement(AchievementId.layoutExplorer);
      }
      return newUsed;
    });
    scrollToRef(portfolioRef);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black text-white relative overflow-x-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" })
    ] }),
    /* @__PURE__ */ jsx("section", { ref: featuredWorkRef, className: "min-h-screen flex items-center justify-center w-full relative", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 1
    }, className: "pt-24 pb-16 px-8 relative z-10 max-w-4xl w-full mx-auto space-y-6", children: [
      /* @__PURE__ */ jsx(motion.h2, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.3,
        duration: 1
      }, className: "max-w-2xl mx-auto font-mohave text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide", children: "PORTFOLIO" }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.6,
        duration: 0.8
      }, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-300 max-w-2xl mx-auto", children: [
          "This application, it's design, and all components herein were created from scratch in 5 days in July 2025 to showcase emerging Frontend technologies and demonstrate my expertise. You can view the code",
          " ",
          /* @__PURE__ */ jsx(motion.a, { href: "https://github.com/JordanWinslow/new-portfolio", target: "_blank", rel: "noopener noreferrer", onClick: () => unlockAchievement(AchievementId.codeExplorer), className: "text-orange-400 hover:text-orange-300 transition-colors underline decoration-orange-400/30 hover:decoration-orange-300/50", whileHover: {
            scale: 1.02
          }, transition: {
            duration: 0.2
          }, children: "here" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-300 max-w-2xl mx-auto", children: "Below, you can see 6 side-projects I have worked on and see demos or view source code. There are also easter eggs hidden in this application that you can unlock by experimenting with the UI!" }),
        /* @__PURE__ */ jsx("p", { className: "text-md italic text-gray-300 max-w-2xl mx-auto", children: "Click the down arrow below to begin your journey!" })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.8
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        delay: 1,
        duration: 0.8
      }, className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 rounded-full animate-pulse" }) })
    ] }) }),
    shouldShowScrollButton && /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.5
    }, className: "fixed bottom-16 right-1/2 translate-x-1/2 z-50", children: /* @__PURE__ */ jsx(motion.button, { type: "button", onClick: () => scrollToRef(portfolioRef), className: "w-14 h-14 rounded-full flex items-center justify-center border-[3px] border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-padding hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer", style: {
      background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981, #8b5cf6) border-box",
      backgroundSize: "200% 200%",
      animation: "gradientShift 3s ease infinite"
    }, whileHover: {
      scale: 1.1
    }, whileTap: {
      scale: 0.95
    }, "aria-label": "Scroll to portfolio", children: /* @__PURE__ */ jsx(motion.div, { animate: {
      y: [0, 5, 0]
    }, transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }, children: /* @__PURE__ */ jsx(ArrowDown, {}) }) }) }),
    /* @__PURE__ */ jsx("div", { ref: starfieldRef, className: "h-[3000px] relative", children: /* @__PURE__ */ jsx(StarField, {}) }),
    /* @__PURE__ */ jsx("section", { ref: portfolioRef, className: "px-2 sm:px-8 py-16 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl sm:mx-auto", children: /* @__PURE__ */ jsx(PortfolioGrid, { layout }) }) }),
    isPortfolioVisible && /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.5
    }, className: "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50", children: /* @__PURE__ */ jsx(PortfolioLayoutControls, { layout, handleLayoutChange }) }),
    /* @__PURE__ */ jsx("section", { className: "my-40", children: /* @__PURE__ */ jsx(PhoneStackShowcase, {}) }),
    /* @__PURE__ */ jsx("section", { className: "my-40", children: /* @__PURE__ */ jsx("div", { className: "px-6 py-16 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsx(TechGridSection, { title: "Technologies I Work With", description: "Here are the technologies I'm proficient in. Feel free to explore and filter by category or experience level.", interactive: true }) }) }) }),
    /* @__PURE__ */ jsx("section", { ref: bottomRef, className: "px-6 py-16 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsx(CallToAction, { title: "Ready to Start Your Next Project?", description: "I'm passionate about creating exceptional digital experiences. Let's discuss how we can bring your vision to life with cutting-edge technology and innovative design.", primaryButtonText: "Get In Touch", secondaryButtonText: "Learn More About Me", secondaryButtonHref: "/about" }) }) }),
    /* @__PURE__ */ jsx(BackgroundDecorations, {})
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=portfolio-BhS_-CMV.mjs.map
