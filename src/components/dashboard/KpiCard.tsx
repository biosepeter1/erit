"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface KpiCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  badge?: string;
  footer?: ReactNode;
  color: "primary" | "secondary" | "tertiary";
  delay?: number;
}

export default function KpiCard({ title, value, icon, badge, footer, color, delay = 0 }: KpiCardProps) {
  const borderColors = {
    primary: "border-l-primary",
    secondary: "border-l-secondary",
    tertiary: "border-l-tertiary",
  };

  const badgeBg = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    tertiary: "bg-tertiary/10 text-tertiary",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass-card border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4",
        borderColors[color]
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={cn("p-2 rounded-lg", badgeBg[color])}>
          {icon}
        </div>
        {badge && (
          <span className={cn("px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider", badgeBg[color])}>
            {badge}
          </span>
        )}
      </div>
      <div className="text-on-surface-variant text-sm font-semibold mb-1">{title}</div>
      <div className="text-4xl font-bold text-on-surface tracking-tight">{value}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </motion.div>
  );
}
