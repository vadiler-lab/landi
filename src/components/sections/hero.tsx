"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function Hero() {
  const sectionRef = React.useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Simplified parallax - only essential transforms
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-black pt-16 transition-colors duration-300">
      {/* Static gradient background - NO animations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-100/50 dark:from-violet-950/50 via-gray-50 dark:via-black to-gray-50 dark:to-black" />
        
        {/* Static blobs - reduced blur for better performance */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/15 dark:from-violet-600/30 dark:to-fuchsia-600/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400/15 to-cyan-400/10 dark:from-indigo-600/20 dark:to-cyan-600/15 rounded-full blur-2xl" />
      </div>
      
      {/* Static grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center max-w-5xl mx-auto will-change-transform"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              Introducing Nexus 2.0
            </Badge>
          </motion.div>

          {/* Main headline - static gradient, no animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
          >
            Build the future
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400 bg-clip-text text-transparent">
              of the web
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-white/60 max-w-2xl leading-relaxed"
          >
            The modern platform for building exceptional digital experiences.
            Ship faster, scale effortlessly, and delight your users with every interaction.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" variant="primary" className="group">
              Start Building
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Hero image - simplified */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 relative w-full"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl shadow-violet-500/10">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&h=900&fit=crop&q=80"
                alt="Product dashboard preview"
                width={1600}
                height={900}
                className="w-full h-auto"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 dark:from-black/50 via-transparent to-transparent" />
            </div>
            
            {/* Static floating elements - hidden on mobile, no animations */}
            <div className="absolute -top-6 -right-6 p-4 bg-white dark:bg-white/10 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/20 shadow-lg hidden xl:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Deploy successful</p>
                  <p className="text-xs text-gray-500 dark:text-white/60">Just now</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-white/10 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/20 shadow-lg hidden xl:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 border-2 border-white dark:border-black" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white dark:border-black" />
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-white dark:border-black" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">+2.5k users</p>
                  <p className="text-xs text-gray-500 dark:text-white/60">This week</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-black to-transparent" />
    </section>
  );
}
