import { jsxs, jsx } from 'react/jsx-runtime';
import { motion, AnimatePresence } from 'framer-motion';
import debounce from 'lodash.debounce';
import { Globe, Cloud, Palette, Zap, Code2, Layers, Shield, Database, Star, StarHalf, StarOff, ChevronUp, ChevronDown, X } from 'lucide-react';
import React__default__default, { useCallback, useMemo, useState, useEffect } from 'react';
import { f as Badge, B as Button, u as useAchievements, A as AchievementId } from './ssr.mjs';
import { I as Input } from './Input-Cp6Zj0xY.mjs';

const techItems = [
  {
    name: "TypeScript",
    icon: "\u{1F4D8}",
    category: "Languages",
    experience: "expert",
    lucideIcon: "typescript"
  },
  {
    name: "JavaScript",
    icon: "\u{1F7E8}",
    category: "Languages",
    experience: "expert",
    lucideIcon: "javascript"
  },
  {
    name: "HTML",
    icon: "\u{1F310}",
    category: "Languages",
    experience: "expert",
    lucideIcon: "html"
  },
  {
    name: "CSS",
    icon: "\u{1F3A8}",
    category: "Languages",
    experience: "expert",
    lucideIcon: "css"
  },
  {
    name: "React",
    icon: "\u269B\uFE0F",
    category: "Frontend",
    experience: "expert",
    lucideIcon: "react"
  },
  {
    name: "Material-UI",
    icon: "\u{1F3AD}",
    category: "Frontend",
    experience: "expert",
    lucideIcon: "material"
  },
  {
    name: "TanStack",
    icon: "\u{1F4CA}",
    category: "Frontend",
    experience: "expert",
    lucideIcon: "tanstack"
  },
  {
    name: "React Router",
    icon: "\u{1F6E3}\uFE0F",
    category: "Frontend",
    experience: "expert",
    lucideIcon: "router"
  },
  {
    name: "Vite",
    icon: "\u26A1",
    category: "Tools",
    experience: "expert",
    lucideIcon: "vite"
  },
  {
    name: "Babel",
    icon: "\u{1F527}",
    category: "Tools",
    experience: "expert",
    lucideIcon: "babel"
  },
  {
    name: "Figma",
    icon: "\u{1F3A8}",
    category: "Design",
    experience: "expert",
    lucideIcon: "figma"
  },
  {
    name: "NestJS",
    icon: "\u{1F6E1}\uFE0F",
    category: "Backend",
    experience: "expert",
    lucideIcon: "nest"
  },
  {
    name: "Node.js",
    icon: "\u{1F7E2}",
    category: "Backend",
    experience: "expert",
    lucideIcon: "node"
  },
  {
    name: "SQL",
    icon: "\u{1F5C4}\uFE0F",
    category: "Database",
    experience: "expert",
    lucideIcon: "sql"
  },
  {
    name: "Redis",
    icon: "\u{1F9E0}",
    category: "Database",
    experience: "expert",
    lucideIcon: "redis"
  },
  {
    name: "Twilio",
    icon: "\u{1F4DE}",
    category: "Tools",
    experience: "expert",
    lucideIcon: "twilio"
  },
  {
    name: "Next.js",
    icon: "\u25B2",
    category: "Frontend",
    experience: "intermediate",
    lucideIcon: "next"
  },
  {
    name: "Tailwind CSS",
    icon: "\u{1F3A8}",
    category: "Frontend",
    experience: "intermediate",
    lucideIcon: "tailwind"
  },
  {
    name: "Angular",
    icon: "\u{1F170}\uFE0F",
    category: "Frontend",
    experience: "intermediate",
    lucideIcon: "angular"
  },
  {
    name: "Vue",
    icon: "\u{1F7E9}",
    category: "Frontend",
    experience: "intermediate",
    lucideIcon: "vue"
  },
  {
    name: "Java",
    icon: "\u2615",
    category: "Languages",
    experience: "intermediate",
    lucideIcon: "java"
  },
  {
    name: "C#",
    icon: "\u{1F537}",
    category: "Languages",
    experience: "intermediate",
    lucideIcon: "csharp"
  },
  {
    name: "Python",
    icon: "\u{1F40D}",
    category: "Languages",
    experience: "intermediate",
    lucideIcon: "python"
  },
  {
    name: "GraphQL",
    icon: "\u{1F517}",
    category: "Languages",
    experience: "intermediate",
    lucideIcon: "graphql"
  },
  {
    name: "Spring",
    icon: "\u{1F331}",
    category: "Backend",
    experience: "intermediate",
    lucideIcon: "spring"
  },
  {
    name: "AWS",
    icon: "\u2601\uFE0F",
    category: "Cloud",
    experience: "intermediate",
    lucideIcon: "aws"
  },
  {
    name: "CircleCI",
    icon: "\u{1F504}",
    category: "DevOps",
    experience: "intermediate",
    lucideIcon: "circleci"
  },
  {
    name: "Jenkins",
    icon: "\u{1F916}",
    category: "DevOps",
    experience: "intermediate",
    lucideIcon: "jenkins"
  },
  {
    name: "Webpack",
    icon: "\u{1F4E6}",
    category: "Tools",
    experience: "intermediate",
    lucideIcon: "webpack"
  },
  {
    name: "Maven",
    icon: "\u{1F3D7}\uFE0F",
    category: "Tools",
    experience: "intermediate",
    lucideIcon: "maven"
  },
  {
    name: "Bitbucket",
    icon: "\u{1F419}",
    category: "Tools",
    experience: "intermediate",
    lucideIcon: "bitbucket"
  },
  {
    name: "Sentry",
    icon: "\u{1F6A8}",
    category: "Tools",
    experience: "intermediate",
    lucideIcon: "sentry"
  },
  {
    name: "SendGrid",
    icon: "\u{1F4E7}",
    category: "Tools",
    experience: "intermediate",
    lucideIcon: "sendgrid"
  },
  {
    name: "n8n",
    icon: "\u{1F504}",
    category: "Tools",
    experience: "intermediate",
    lucideIcon: "n8n"
  },
  {
    name: "Unity",
    icon: "\u{1F3AE}",
    category: "Tools",
    experience: "intermediate",
    lucideIcon: "unity"
  },
  {
    name: "Gatsby",
    icon: "\u{1F4DA}",
    category: "Frontend",
    experience: "limited",
    lucideIcon: "gatsby"
  }
];
const experienceColors = {
  expert: "border-emerald-500/50 text-emerald-300 bg-emerald-500/10",
  intermediate: "border-blue-500/50 text-blue-300 bg-blue-500/10",
  limited: "border-gray-500/50 text-gray-300 bg-gray-500/10"
};
function useTechGridFilters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(
    /* @__PURE__ */ new Set()
  );
  const [selectedExperiences, setSelectedExperiences] = useState(
    /* @__PURE__ */ new Set()
  );
  const [showFilters, setShowFilters] = useState(false);
  const [filterChangeCount, setFilterChangeCount] = useState(0);
  const { unlockAchievement } = useAchievements();
  const debouncedSetSearch = useMemo(
    () => debounce((val) => {
      setDebouncedSearch(val);
      if (val.trim().length > 0) {
        unlockAchievement(AchievementId.techSearcher);
      }
    }, 800),
    [unlockAchievement]
  );
  const handleSearchChange = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
      debouncedSetSearch(e.target.value);
    },
    [debouncedSetSearch]
  );
  useEffect(() => {
    const allCategories = new Set(techItems.map((item) => item.category));
    const allExperiences = new Set(techItems.map((item) => item.experience));
    setSelectedCategories(allCategories);
    setSelectedExperiences(allExperiences);
  }, []);
  const filteredTechnologies = useMemo(
    () => techItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesCategory = selectedCategories.has(item.category);
      const matchesExperience = selectedExperiences.has(item.experience);
      return matchesSearch && matchesCategory && matchesExperience;
    }),
    [debouncedSearch, selectedCategories, selectedExperiences]
  );
  const handleCategoryToggle = useCallback(
    (category) => {
      setSelectedCategories((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(category)) {
          newSet.delete(category);
        } else {
          newSet.add(category);
        }
        return newSet;
      });
      setFilterChangeCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= 7) {
          unlockAchievement(AchievementId.techFilterer);
        }
        return newCount;
      });
    },
    [unlockAchievement]
  );
  const handleExperienceToggle = useCallback(
    (experience) => {
      setSelectedExperiences((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(experience)) {
          newSet.delete(experience);
        } else {
          newSet.add(experience);
        }
        return newSet;
      });
      setFilterChangeCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= 7) {
          unlockAchievement(AchievementId.techFilterer);
        }
        return newCount;
      });
    },
    [unlockAchievement]
  );
  const clearFilters = useCallback(() => {
    const allCategories = new Set(techItems.map((item) => item.category));
    const allExperiences = new Set(techItems.map((item) => item.experience));
    setSelectedCategories(allCategories);
    setSelectedExperiences(allExperiences);
    setSearchTerm("");
    setDebouncedSearch("");
    setFilterChangeCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 7) {
        unlockAchievement(AchievementId.techFilterer);
      }
      return newCount;
    });
  }, [unlockAchievement]);
  const categories = useMemo(
    () => Array.from(new Set(techItems.map((item) => item.category))),
    []
  );
  const experiences = useMemo(() => ["expert", "intermediate", "limited"], []);
  return {
    searchTerm,
    setSearchTerm,
    setDebouncedSearch,
    showFilters,
    setShowFilters,
    selectedCategories,
    setSelectedCategories,
    selectedExperiences,
    setSelectedExperiences,
    handleCategoryToggle,
    handleExperienceToggle,
    clearFilters,
    categories,
    experiences,
    filteredTechnologies,
    handleSearchChange
  };
}
const TechGridComponent = ({
  title,
  compact = false,
  showExperience = false,
  interactive = true,
  className = ""
}) => {
  const {
    searchTerm,
    setSearchTerm,
    setDebouncedSearch,
    showFilters,
    setShowFilters,
    selectedCategories,
    setSelectedCategories,
    selectedExperiences,
    handleCategoryToggle,
    handleExperienceToggle,
    clearFilters,
    categories,
    experiences,
    filteredTechnologies,
    handleSearchChange
  } = useTechGridFilters();
  const getLucideIcon = useCallback((iconName) => {
    const iconMap = {
      typescript: Code2,
      javascript: Code2,
      react: Globe,
      node: Code2,
      nest: Shield,
      html: Globe,
      css: Palette,
      sql: Database,
      java: Code2,
      python: Code2,
      csharp: Code2,
      graphql: Globe,
      next: Globe,
      spring: Shield,
      tailwind: Palette,
      material: Palette,
      tanstack: Layers,
      router: Globe,
      redis: Database,
      vite: Zap,
      babel: Code2,
      figma: Palette,
      twilio: Zap,
      circleci: Zap,
      webpack: Layers,
      sentry: Shield,
      sendgrid: Zap,
      jenkins: Zap,
      maven: Layers,
      bitbucket: Code2,
      n8n: Zap,
      unity: Palette,
      angular: Globe,
      vue: Globe,
      aws: Cloud,
      gatsby: Globe
    };
    return iconMap[iconName.toLowerCase()] || Code2;
  }, []);
  const categoryIcons = {
    Frontend: Globe,
    Backend: Shield,
    DevOps: Zap,
    Design: Palette,
    Database,
    Cloud,
    Tools: Layers,
    Languages: Code2
  };
  const experienceIcons = {
    expert: Star,
    intermediate: StarHalf,
    limited: StarOff
  };
  const orbs = useMemo(() => {
    const orbCount = 8;
    const colors = [
      "rgba(139,92,246,0.18)",
      // purple
      "rgba(236,72,153,0.15)",
      // pink
      "rgba(245,158,11,0.13)",
      // orange
      "rgba(16,185,129,0.13)"
      // teal
    ];
    return Array.from({ length: orbCount }, (_, i) => {
      var _a;
      return {
        left: `${10 + i * 10 + Math.random() * 10}%`,
        top: `${10 + Math.random() * 70}%`,
        size: 120 + Math.random() * 100,
        delay: Math.random() * 2,
        duration: 8 + Math.random() * 6,
        color: (_a = colors[i % colors.length]) != null ? _a : colors[0]
      };
    });
  }, []);
  if (!interactive) {
    return /* @__PURE__ */ jsxs("div", { className: `space-y-4 ${className}`, children: [
      title && /* @__PURE__ */ jsx("h3", { className: "font-mohave text-xl font-bold text-white uppercase tracking-wide", children: title }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          layout: true,
          className: `grid gap-4 ${compact ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"}`,
          children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: filteredTechnologies.map((item, index) => {
            const IconComponent = getLucideIcon(item.name);
            const ExperienceIcon = item.experience === "expert" ? Star : item.experience === "intermediate" ? StarHalf : StarOff;
            return /* @__PURE__ */ jsx(
              motion.div,
              {
                layout: true,
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
                transition: {
                  duration: 0.3,
                  delay: index * 0.02,
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                },
                whileHover: {
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                },
                className: "group relative",
                children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-300 cursor-pointer", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-300 pointer-events-none" }),
                  /* @__PURE__ */ jsx("div", { className: "relative z-10 mb-3", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-6 h-6 text-white" }) }) }),
                  /* @__PURE__ */ jsx("div", { className: "relative z-10 text-center mb-2", children: /* @__PURE__ */ jsx("div", { className: "font-medium text-white text-sm group-hover:text-white/90 transition-colors", children: item.name }) }),
                  showExperience && /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      variant: "outline",
                      className: `text-xs px-2 py-1 ${experienceColors[item.experience]} border-opacity-50`,
                      children: [
                        /* @__PURE__ */ jsx(ExperienceIcon, { className: "w-3 h-3 mr-1" }),
                        item.experience
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-xs px-1 py-0.5 border-white/20 text-white/60 bg-white/5",
                      children: item.category
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 pointer-events-none blur-xl" })
                ] })
              },
              item.name
            );
          }) })
        }
      ),
      filteredTechnologies.length === 0 && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center py-12",
          children: /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-lg mb-2", children: "No technologies match your filters" })
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative w-full max-w-5xl mx-auto h-[70vh] min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${className}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-pink-900/40" }),
          orbs.map((orb, i) => /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute rounded-full blur-2xl",
              style: {
                left: orb.left,
                top: orb.top,
                width: orb.size,
                height: orb.size,
                background: orb.color,
                zIndex: 1
              },
              animate: {
                y: [0, -40, 0],
                x: [0, 30, 0],
                opacity: [0.7, 1, 0.7]
              },
              transition: {
                duration: orb.duration,
                repeat: Infinity,
                repeatType: "mirror",
                delay: orb.delay,
                ease: "easeInOut"
              }
            },
            `orb-${i}-${orb.color}`
          ))
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 z-10 pointer-events-none",
            style: {
              boxShadow: "0 40px 80px 0 rgba(139,92,246,0.18), 0 0 120px 0 rgba(236,72,153,0.10)"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-20 flex flex-col h-full", children: [
          /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-30", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "glass-pane-filter px-6 py-4 bg-white/10 backdrop-blur-xl border-b border-white/10 rounded-t-2xl shadow-lg",
              style: { boxShadow: "0 8px 32px 0 rgba(139,92,246,0.10)" },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-4 items-center justify-between", children: [
                  /* @__PURE__ */ jsx("div", { className: "relative flex-1 max-w-md", children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "text",
                      placeholder: "Search technologies...",
                      value: searchTerm,
                      onChange: handleSearchChange,
                      className: "pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-500"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:gap-4", children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        onClick: () => setShowFilters(!showFilters),
                        className: "border-white/20 text-white hover:bg-white/10",
                        Icon: showFilters ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" }),
                        children: "Filters"
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        onClick: () => {
                          setSelectedCategories(/* @__PURE__ */ new Set());
                          setSearchTerm("");
                          setDebouncedSearch("");
                        },
                        className: "text-gray-400 hover:text-white",
                        Icon: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" }),
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Clear All" }),
                          /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Clear" })
                        ]
                      }
                    ),
                    (searchTerm || selectedCategories.size < categories.length || selectedExperiences.size < 3) && /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        onClick: clearFilters,
                        className: "text-gray-400 hover:text-white",
                        Icon: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" }),
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Reset" }),
                          /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Reset" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-400", children: [
                    filteredTechnologies.length,
                    " of ",
                    techItems.length,
                    " technologies"
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: false,
                    animate: {
                      height: showFilters ? "auto" : 0,
                      opacity: showFilters ? 1 : 0
                    },
                    transition: { duration: 0.3 },
                    className: showFilters ? "overflow-visible absolute left-0 right-0 mt-2" : "hidden",
                    style: showFilters ? { zIndex: 40 } : {},
                    children: /* @__PURE__ */ jsxs("div", { className: "mt-0 pt-6 border-t border-white/10 space-y-6 bg-black/80 rounded-b-2xl shadow-2xl px-6 pb-6", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("h4", { className: "text-white font-semibold mb-3 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Layers, { className: "w-4 h-4" }),
                          "Categories"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: categories.map((category) => {
                          const IconComponent = categoryIcons[category] || Layers;
                          return /* @__PURE__ */ jsxs(
                            "label",
                            {
                              className: "flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/5 transition-all duration-200",
                              children: [
                                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsx(
                                    "input",
                                    {
                                      type: "checkbox",
                                      checked: selectedCategories.has(category),
                                      onChange: () => handleCategoryToggle(category),
                                      className: "sr-only"
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(
                                    "div",
                                    {
                                      className: `w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${selectedCategories.has(category) ? "border-pink-400 bg-pink-400/20" : "border-white/30 bg-white/5 group-hover:border-white/50"}`,
                                      children: selectedCategories.has(category) && /* @__PURE__ */ jsx(
                                        motion.div,
                                        {
                                          initial: { scale: 0, opacity: 0 },
                                          animate: { scale: 1, opacity: 1 },
                                          transition: { duration: 0.2 },
                                          className: "w-2 h-2 bg-pink-300 rounded-sm"
                                        }
                                      )
                                    }
                                  )
                                ] }),
                                /* @__PURE__ */ jsx(IconComponent, { className: "w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200" }),
                                /* @__PURE__ */ jsx("span", { className: "text-sm text-white/80 group-hover:text-white transition-colors duration-200 font-medium", children: category })
                              ]
                            },
                            category
                          );
                        }) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("h4", { className: "text-white font-semibold mb-3 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Star, { className: "w-4 h-4" }),
                          "Experience Level"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: experiences.map((experience) => {
                          const IconComponent = experienceIcons[experience];
                          return /* @__PURE__ */ jsxs(
                            "label",
                            {
                              className: "flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/5 transition-all duration-200",
                              children: [
                                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                                  /* @__PURE__ */ jsx(
                                    "input",
                                    {
                                      type: "checkbox",
                                      checked: selectedExperiences.has(experience),
                                      onChange: () => handleExperienceToggle(experience),
                                      className: "sr-only"
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(
                                    "div",
                                    {
                                      className: `w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${selectedExperiences.has(experience) ? "border-pink-400 bg-pink-400/20" : "border-white/30 bg-white/5 group-hover:border-white/50"}`,
                                      children: selectedExperiences.has(experience) && /* @__PURE__ */ jsx(
                                        motion.div,
                                        {
                                          initial: { scale: 0, opacity: 0 },
                                          animate: { scale: 1, opacity: 1 },
                                          transition: { duration: 0.2 },
                                          className: "w-2 h-2 bg-pink-300 rounded-sm"
                                        }
                                      )
                                    }
                                  )
                                ] }),
                                /* @__PURE__ */ jsx(IconComponent, { className: "w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200" }),
                                /* @__PURE__ */ jsx("span", { className: "text-sm text-white/80 group-hover:text-white transition-colors duration-200 font-medium capitalize", children: experience })
                              ]
                            },
                            experience
                          );
                        }) })
                      ] })
                    ] })
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 min-h-0 overflow-auto scrollbar-thin scrollbar-thumb-purple-500/40 scrollbar-track-transparent px-6 py-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                layout: true,
                className: "grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
                children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: filteredTechnologies.map((item, index) => {
                  const IconComponent = getLucideIcon(item.name);
                  const ExperienceIcon = item.experience === "expert" ? Star : item.experience === "intermediate" ? StarHalf : StarOff;
                  return /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      layout: true,
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.8 },
                      transition: {
                        duration: 0.3,
                        delay: index * 0.02,
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      },
                      whileHover: {
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.2 }
                      },
                      className: "group relative",
                      children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-300 cursor-pointer", children: [
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-300 pointer-events-none" }),
                        /* @__PURE__ */ jsx("div", { className: "relative z-10 mb-3", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-6 h-6 text-white" }) }) }),
                        /* @__PURE__ */ jsx("div", { className: "relative z-10 text-center mb-2", children: /* @__PURE__ */ jsx("div", { className: "font-medium text-white text-sm group-hover:text-white/90 transition-colors", children: item.name }) }),
                        /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxs(
                          Badge,
                          {
                            variant: "outline",
                            className: `text-xs px-2 py-1 ${experienceColors[item.experience]} border-opacity-50`,
                            children: [
                              /* @__PURE__ */ jsx(ExperienceIcon, { className: "w-3 h-3 mr-1" }),
                              item.experience
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: "text-xs px-1 py-0.5 border-white/20 text-white/60 bg-white/5",
                            children: item.category
                          }
                        ) }),
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300 pointer-events-none blur-xl" })
                      ] })
                    },
                    item.name
                  );
                }) })
              }
            ),
            filteredTechnologies.length === 0 && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                className: "text-center py-12",
                children: /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-lg mb-2", children: "No technologies match your filters" })
              }
            )
          ] }) })
        ] })
      ]
    }
  );
};
const TechGrid = React__default__default.memo(TechGridComponent);
function TechGridSection({
  title = "Technology Expertise",
  description = "Below is a component I made to help you identify whether or not I am familiar with the particular technologies you use. Feel free to search for a specific technology or sort the grid with the filters.",
  interactive = true,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("section", { className: `space-y-8 ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "font-mohave text-3xl lg:text-4xl font-bold text-white mb-6",
          children: title
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed",
          children: description
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.4 },
        children: /* @__PURE__ */ jsx(TechGrid, { interactive })
      }
    )
  ] });
}

export { TechGridSection as T };
//# sourceMappingURL=TechGridSection-DjT9rnVL.mjs.map
