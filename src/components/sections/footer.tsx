"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import { Container } from "@/components/ui/container";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "#" },
    { name: "Docs", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "Community", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Licenses", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <motion.a
                href="#"
                className="flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">Nexus</span>
              </motion.a>
              <p className="text-gray-600 dark:text-white/60 text-sm max-w-xs mb-6">
                The modern platform for building exceptional digital experiences.
                Ship faster, scale effortlessly.
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-full text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-white/40">
               2026 Nexus. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
