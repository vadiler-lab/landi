"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient" | "glow";
  hoverEffect?: "lift" | "glow" | "scale" | "none";
}

export function Card({ className, variant = "default", hoverEffect = "lift", ...props }: CardProps) {
  const variantStyles = {
    default: "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10",
    glass: "bg-white/70 dark:bg-white/5 backdrop-blur-xl border-white/20 dark:border-white/10",
    gradient: "bg-gradient-to-br from-white to-gray-50 dark:from-white/10 dark:to-white/5 border-gray-200/50 dark:border-white/10",
    glow: "bg-white dark:bg-black/50 border-gray-200 dark:border-white/10 shadow-lg shadow-violet-500/5 dark:shadow-violet-500/10",
  };

  const hoverStyles = {
    lift: "hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/10 dark:hover:shadow-violet-500/20",
    glow: "hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    scale: "hover:scale-[1.02]",
    none: "",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 transition-all duration-500 ease-out",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-violet-500/0 before:via-fuchsia-500/0 before:to-indigo-500/0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-5 before:pointer-events-none",
        variantStyles[variant],
        hoverStyles[hoverEffect],
        className
      )}
      {...props}
    />
  );
}

export function GlowCard({ className, children, ...props }: CardProps) {
  return (
    <div className="relative group">
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      <div
        className={cn(
          "relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black p-6 transition-all duration-500",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function ShimmerCard({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20",
        className
      )}
      {...props}
    >
      {children}
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-semibold text-gray-900 dark:text-white", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-gray-600 dark:text-white/60", className)} {...props} />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />;
}

export function CardIcon({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 p-2.5 mb-4 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
