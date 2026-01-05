"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTA() {
  const sectionRef = React.useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.5, 0.5, 0.2]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const orbit1Rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orbit2Rotate = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Enhanced background with animated gradients and parallax */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-100/50 dark:from-violet-600/20 via-fuchsia-100/50 dark:via-fuchsia-600/20 to-indigo-100/50 dark:to-indigo-600/20" />
        
        {/* Animated central glow with parallax */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-300/30 dark:bg-violet-600/30 rounded-full blur-[128px]"
          style={{ scale: backgroundScale, opacity: backgroundOpacity }}
        />
        
        {/* Orbiting particles with scroll-linked rotation */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
          style={{ rotate: orbit1Rotate }}
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-violet-500/40 rounded-full blur-sm" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-fuchsia-500/40 rounded-full blur-sm" />
          <div className="absolute top-1/2 left-0 w-4 h-4 bg-indigo-500/30 rounded-full blur-sm" />
          <div className="absolute top-1/2 right-0 w-2 h-2 bg-pink-500/40 rounded-full blur-sm" />
        </motion.div>
        
        {/* Secondary orbit with scroll-linked rotation */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2"
          style={{ rotate: orbit2Rotate }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-500/50 rounded-full blur-sm" />
          <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-violet-500/40 rounded-full blur-sm" />
        </motion.div>
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ y: contentY, opacity: contentOpacity }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Sparkle badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-white/10 border border-violet-200 dark:border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-sm text-violet-700 dark:text-white/80">Start building for free</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Ready to build the{" "}
            <motion.span 
              className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400 bg-clip-text text-transparent inline-block bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              future?
            </motion.span>
          </h2>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
            Join thousands of developers and teams who are already building
            amazing products with Nexus.
          </p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="primary" className="group">
              Get Started Free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </motion.div>

          {/* Trust text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm text-gray-500 dark:text-white/40"
          >
            No credit card required &bull; Free tier available &bull; Cancel anytime
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
