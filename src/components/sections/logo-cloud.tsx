"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";

const logos = [
  { name: "Vercel", width: 120 },
  { name: "Stripe", width: 100 },
  { name: "Notion", width: 110 },
  { name: "Linear", width: 100 },
  { name: "Figma", width: 90 },
  { name: "Discord", width: 120 },
];

export function LogoCloud() {
  return (
    <section className="relative py-20 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/10 dark:via-violet-950/5 to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-white/40">
            Trusted by industry leaders
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

          {/* Simple CSS animation marquee - more performant */}
          <div className="flex overflow-hidden">
            <div className="flex gap-16 items-center animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 h-12 flex items-center justify-center text-gray-400 dark:text-white/40 hover:text-gray-600 dark:hover:text-white/60 transition-colors"
                >
                  <span className="text-2xl font-bold tracking-tight whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10M+", label: "Users worldwide" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "150+", label: "Countries" },
            { value: "500K+", label: "Deployments/day" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white/60 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-white/40">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
