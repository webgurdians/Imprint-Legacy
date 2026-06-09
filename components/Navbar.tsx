"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/founder-book", label: "The Founder Book" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Left */}
          <div className="flex lg:flex-1">
            <Link href="/" className="group flex flex-col focus:outline-none">
              <span className="font-heading text-lg font-bold tracking-[0.2em] text-white transition-colors group-hover:text-accent duration-300">
                IMPRINT LEGACY
              </span>
              <span className="text-[9px] tracking-[0.35em] text-muted uppercase font-sans mt-0.5 group-hover:text-white/60 transition-colors duration-300">
                Institutional Publishing
              </span>
            </Link>
          </div>

          {/* Navigation Center */}
          <nav className="hidden md:flex gap-x-8 lg:gap-x-12">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-300 py-1 hover:text-white focus:outline-none ${
                    isActive ? "text-white" : "text-muted"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 h-[1px] w-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Right */}
          <div className="hidden md:flex md:flex-1 md:justify-end">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center border border-accent/40 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-white hover:text-background hover:bg-accent border-accent hover:border-accent font-sans transition-all duration-300 rounded-none focus:outline-none group"
            >
              Book Strategy Call
              <ArrowUpRight className="ml-1.5 h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="p-2.5 text-muted hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 stroke-[1.5]" />
              ) : (
                <Menu className="h-6 w-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-white/5 bg-secondary-bg"
          >
            <div className="space-y-1 px-6 py-6 pb-8 bg-[#121212] border-b border-white/5">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 font-sans text-xs uppercase tracking-[0.15em] transition-colors focus:outline-none ${
                      isActive ? "text-accent" : "text-muted hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-white/5 mt-4">
                <Link
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center border border-accent px-5 py-3 text-xs uppercase tracking-[0.15em] text-white hover:bg-accent hover:text-background font-sans transition-all duration-300 rounded-none focus:outline-none"
                >
                  Book Strategy Call
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
