"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export function ProductShowcase() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Simplified parallax - only essential transforms
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="product"
      ref={containerRef}
      className="relative py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300"
    >
      {/* Static background */}
      <div className="absolute inset-0">
        {/* Static central glow - reduced blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-300/15 dark:bg-violet-600/15 rounded-full blur-2xl" />
        
        {/* Static accent orbs - reduced blur */}
        <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] bg-gradient-to-bl from-fuchsia-400/10 to-pink-400/10 dark:from-fuchsia-600/10 dark:to-pink-600/10 rounded-full blur-xl" />
      </div>

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="primary" className="mb-4">Product</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            Designed for the{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              modern developer
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-white/60">
            An intuitive interface that puts you in control. Every pixel has been
            crafted to help you work faster and smarter.
          </p>
        </motion.div>

        {/* Product image with simple parallax */}
        <motion.div
          style={{ y, opacity }}
          className="relative max-w-6xl mx-auto will-change-transform"
        >
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl shadow-violet-500/10 transition-shadow duration-300 hover:shadow-violet-500/20">
              {/* Browser chrome */}
              <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm border-b border-gray-200 dark:border-white/10 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white dark:bg-white/10 rounded-lg px-4 py-1.5 text-sm text-gray-500 dark:text-white/40 max-w-md mx-auto border border-gray-200 dark:border-transparent flex items-center justify-center gap-2">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    app.nexus.dev
                  </div>
                </div>
              </div>
              
              {/* Product screenshot */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1000&fit=crop&q=80"
                  alt="Nexus dashboard interface"
                  width={1600}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Static floating feature cards - hidden on mobile */}
          <div className="absolute -right-4 top-1/4 p-4 bg-white dark:bg-black/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hidden xl:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Instant Previews</p>
                <p className="text-xs text-gray-500 dark:text-white/60">See changes in real-time</p>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 bottom-1/4 p-4 bg-white dark:bg-black/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hidden xl:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Auto Scaling</p>
                <p className="text-xs text-gray-500 dark:text-white/60">Handle any traffic</p>
              </div>
            </div>
          </div>
          
          <div className="absolute right-8 -bottom-4 p-4 bg-white dark:bg-black/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hidden xl:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">99.99% Uptime</p>
                <p className="text-xs text-gray-500 dark:text-white/60">Enterprise reliability</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
