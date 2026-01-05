"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    content:
      "Nexus has completely transformed how we build and deploy our applications. The developer experience is unmatched.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    content:
      "We migrated our entire infrastructure to Nexus and saw a 40% reduction in deployment time. Absolutely game-changing.",
    author: "Marcus Johnson",
    role: "Lead Engineer at ScaleUp",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    content:
      "The best platform I have ever used. The team behind Nexus truly understands what developers need.",
    author: "Emily Rodriguez",
    role: "Founder at DevStudio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    content:
      "From zero to production in minutes. Nexus handles all the complexity so we can focus on building great products.",
    author: "David Kim",
    role: "VP Engineering at CloudBase",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    content:
      "The performance improvements we saw after switching to Nexus were incredible. Our users noticed immediately.",
    author: "Lisa Park",
    role: "Product Lead at Momentum",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
  {
    content:
      "Nexus is the infrastructure platform we always wished existed. It just works, every single time.",
    author: "James Wilson",
    role: "Senior Developer at Axiom",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    rating: 5,
  },
];

export function Testimonials() {
  const sectionRef = React.useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const orb1X = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orb2X = useTransform(scrollYProgress, [0, 1], [50, -80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const line1X = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const line2X = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-32 bg-gray-50 dark:bg-black overflow-hidden transition-colors duration-300"
    >
      {/* Enhanced background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-black via-violet-50/20 dark:via-violet-950/5 to-gray-50 dark:to-black" />
        
        {/* Animated orbs with parallax */}
        <motion.div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-300/15 to-blue-300/10 dark:from-cyan-600/15 dark:to-blue-600/10 rounded-full blur-3xl"
          style={{ x: orb1X, y: orb1Y }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-violet-300/15 to-purple-300/10 dark:from-violet-600/15 dark:to-purple-600/10 rounded-full blur-3xl"
          style={{ x: orb2X, y: orb2Y }}
        />
        
        {/* Animated decorative lines with parallax */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 overflow-hidden">
          <motion.div 
            className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"
            style={{ x: line1X }}
          />
          <motion.div 
            className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"
            style={{ x: line2X }}
          />
        </div>
      </motion.div>

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <Badge variant="primary" className="mb-4">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              developers
            </span>{" "}
            worldwide
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-white/60">
            Join thousands of developers who have already made the switch to a
            better way of building.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
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
                {/* Animated glow border */}
                <motion.div 
                  className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                
                <div className="relative h-full rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-amber-500/10">
                  {/* Animated quote icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Quote className="w-8 h-8 text-violet-400 dark:text-violet-500/50 mb-4 transition-colors duration-300 group-hover:text-violet-500 dark:group-hover:text-violet-400" />
                  </motion.div>

                  {/* Animated rating stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <Star
                          className="w-4 h-4 fill-yellow-500 text-yellow-500"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author with animated avatar */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="relative"
                    >
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="relative w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-white/50 transition-all duration-300"
                      />
                    </motion.div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">{testimonial.author}</p>
                      <p className="text-sm text-gray-500 dark:text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
