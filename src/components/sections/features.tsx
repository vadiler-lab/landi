"use client";

import * as React from "react";
import { motion } from "motion/react";
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
  return (
    <section id="features" className="relative py-32 bg-gray-50 dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Static background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-black via-violet-50/30 dark:via-violet-950/10 to-gray-50 dark:to-black" />
        
        {/* Static gradient orbs - reduced blur */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-violet-300/15 to-indigo-300/10 dark:from-violet-600/15 dark:to-indigo-600/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-fuchsia-300/10 to-pink-300/10 dark:from-fuchsia-600/10 dark:to-pink-600/10 rounded-full blur-2xl" />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
              className="group"
            >
              <div className="relative h-full rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black p-6 transition-all duration-300 hover:border-violet-300 dark:hover:border-violet-600/50 hover:shadow-lg hover:-translate-y-1">
                {/* Icon container */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 mb-5`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Arrow indicator */}
                <div className="mt-4 flex items-center text-violet-600 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
