"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Product", href: "#product" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Nexus</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-white/70"
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button
              className="p-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 dark:border-white/10">
                  <Button variant="ghost" className="justify-center">
                    Sign in
                  </Button>
                  <Button variant="primary" className="justify-center">
                    Get Started
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
