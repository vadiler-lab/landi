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

  // Enhanced parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -5]);
  
  // Background parallax
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.1]);
  const orb1X = useTransform(scrollYProgress, [0, 1], [-100, 150]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [50, -100]);
  const orb2X = useTransform(scrollYProgress, [0, 1], [100, -120]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [-50, 80]);
  
  // Floating cards parallax
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="product"
      ref={containerRef}
      className="relative py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300"
      style={{ perspective: "1000px" }}
    >
      {/* Enhanced background elements with scroll parallax */}
      <div className="absolute inset-0">
        {/* Central glow with parallax */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-300/20 dark:bg-violet-600/20 rounded-full blur-[128px]"
          style={{ scale: bgScale, opacity: bgOpacity }}
        />
        
        {/* Animated accent orbs with scroll parallax */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-cyan-400/20 to-blue-400/10 dark:from-cyan-600/15 dark:to-blue-600/10 rounded-full blur-3xl"
          style={{ x: orb1X, y: orb1Y }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-to-bl from-fuchsia-400/15 to-pink-400/10 dark:from-fuchsia-600/15 dark:to-pink-600/10 rounded-full blur-3xl"
          style={{ x: orb2X, y: orb2Y }}
        />
        
        {/* Subtle radial lines */}
        <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-violet-500 to-transparent" />
        </div>
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

        {/* Product image with enhanced parallax */}
        <motion.div
          style={{ y, opacity, scale, rotateX }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative group">
            {/* Glow effect behind the card */}
            <motion.div 
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-indigo-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            />
            
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl shadow-violet-500/20 transition-all duration-500 group-hover:shadow-violet-500/30">
              {/* Enhanced browser chrome */}
              <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm border-b border-gray-200 dark:border-white/10 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer"
                    whileHover={{ scale: 1.2, backgroundColor: "#ef4444" }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer"
                    whileHover={{ scale: 1.2, backgroundColor: "#eab308" }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer"
                    whileHover={{ scale: 1.2, backgroundColor: "#22c55e" }}
                  />
                </div>
                <div className="flex-1 mx-4">
                  <motion.div 
                    className="bg-white dark:bg-white/10 rounded-lg px-4 py-1.5 text-sm text-gray-500 dark:text-white/40 max-w-md mx-auto border border-gray-200 dark:border-transparent flex items-center justify-center gap-2"
                    whileHover={{ borderColor: "rgba(139, 92, 246, 0.3)" }}
                  >
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    app.nexus.dev
                  </motion.div>
                </div>
              </div>
              
              {/* Product screenshot with overlay effects */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1000&fit=crop&q=80"
                  alt="Nexus dashboard interface"
                  width={1600}
                  height={1000}
                  className="w-full h-auto"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Enhanced floating feature cards with scroll parallax */}
          <motion.div
            className="absolute -right-4 top-1/4 p-4 bg-white dark:bg-black/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hidden xl:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ y: card1Y }}
            whileHover={{ scale: 1.05, x: -5 }}
          >
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Instant Previews</p>
                <p className="text-xs text-gray-500 dark:text-white/60">See changes in real-time</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -left-4 bottom-1/4 p-4 bg-white dark:bg-black/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hidden xl:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ y: card2Y }}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Auto Scaling</p>
                <p className="text-xs text-gray-500 dark:text-white/60">Handle any traffic</p>
              </div>
            </div>
          </motion.div>
          
          {/* New floating stat card with scroll parallax */}
          <motion.div
            className="absolute right-8 -bottom-4 p-4 bg-white dark:bg-black/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hidden xl:block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ y: card3Y }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">99.99% Uptime</p>
                <p className="text-xs text-gray-500 dark:text-white/60">Enterprise reliability</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
