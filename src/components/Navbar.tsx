"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Govt Mandate", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Project", href: "/projects" },
  { name: "Impact Report", href: "/impact-report" },
  { name: "Community", href: "/community" },
  { name: "Partnerships", href: "/partnerships" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-outline-variant sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-6 h-20 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="https://eriteam.org" target="_blank" rel="noopener noreferrer" className="font-h2 text-2xl font-bold text-primary flex items-center gap-3">
            <Image 
              src="/pdf_images/page_1_img_4.jpeg" 
              alt="AbiaFIRST Logo" 
              width={40} 
              height={40} 
              className="object-contain shrink-0"
              style={{ width: '40px', height: 'auto' }}
            />
            AbiaFIRST
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary font-bold" : "text-on-surface-variant"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:block bg-primary text-white px-6 py-2.5 font-bold uppercase tracking-wider rounded-lg shadow-md hover:bg-primary-container transition-all text-sm"
            style={{ backgroundColor: "#a43700" }}
          >
            Get Involved
          </Link>
          <button 
            className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-outline-variant px-6 py-4 flex flex-col gap-2 overflow-hidden shadow-xl"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block font-bold py-3 text-lg border-b border-outline-variant/30",
                    isActive ? "text-primary" : "text-on-surface"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-white text-center px-6 py-4 mt-4 font-bold uppercase tracking-wider rounded-xl shadow-md w-full"
              style={{ backgroundColor: "#a43700" }}
            >
              Get Involved
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
