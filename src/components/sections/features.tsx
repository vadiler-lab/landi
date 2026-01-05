"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Zap,
  Shield,
  Globe,
  Layers,
  LineChart,
  Palette,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed with edge computing and smart caching strategies that deliver sub-second load times globally.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SOC 2 compliance, and advanced threat protection to keep your data safe and secure.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy to 150+ edge locations worldwide. Your users get blazing fast experiences, wherever they are.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description:
      "Connect with your favorite tools and services. From databases to APIs, we integrate with everything.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: LineChart,
    title: "Real-time Analytics",
    description:
      "Comprehensive insights and metrics at your fingertips. Understand user behavior and optimize performance.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description:
      "Stunning templates and components that are fully customizable. Build beautiful interfaces effortlessly.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

export function Features() {
  const sectionRef = React.useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const orb1X = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orb2X = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} id="features" className="relative py-32 bg-gray-50 dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Enhanced background with animated elements */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-black via-violet-50/30 dark:via-violet-950/10 to-gray-50 dark:to-black" />
        
        {/* Animated gradient orbs with parallax */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-300/20 to-indigo-300/10 dark:from-violet-600/20 dark:to-indigo-600/10 rounded-full blur-3xl"
          style={{ x: orb1X, y: orb1Y }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-fuchsia-300/15 to-pink-300/10 dark:from-fuchsia-600/15 dark:to-pink-600/10 rounded-full blur-3xl"
          style={{ x: orb2X, y: orb2Y }}
        />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <Container className="relative z-10">
        {/* Section header with parallax */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <Badge variant="primary" className="mb-4">Features</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              ship faster
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-white/60">
            Powerful features designed to help you build, deploy, and scale
            your applications with confidence.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Glow effect on hover */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                
                <div className="relative h-full rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-violet-500/10">
                  {/* Animated icon container */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 mb-5 relative overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-full h-full text-white relative z-10" />
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Subtle arrow indicator */}
                  <motion.div
                    className="mt-4 flex items-center text-violet-600 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
