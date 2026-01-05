"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTA() {
  return (
    <section className="relative py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Static background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-100/50 dark:from-violet-600/20 via-fuchsia-100/50 dark:via-fuchsia-600/20 to-indigo-100/50 dark:to-indigo-600/20" />
        
        {/* Static central glow - reduced blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-300/20 dark:bg-violet-600/20 rounded-full blur-2xl" />
      </div>

      {/* Static grid pattern */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
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

          {/* Headline - static gradient */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Ready to build the{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400 bg-clip-text text-transparent">
              future?
            </span>
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
