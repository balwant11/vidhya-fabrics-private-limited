"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BrutalistBlocks({ stats = [] }) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 border-2 border-[var(--color-border)] bg-[var(--color-bg-secondary)] flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Corner Accent Detail */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-[var(--color-accent)] opacity-10 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center font-heading text-[10px] text-[var(--color-bg-primary)] font-bold">
                +
              </div>
              
              <div className="mb-6">
                <span className="text-sm font-heading tracking-widest text-[var(--color-text-muted)] uppercase block mb-1">
                  Metric // {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-accent)]">
                  Active Sourcing
                </span>
              </div>

              <div>
                <span className="text-5xl sm:text-6xl font-heading font-black tracking-tighter text-[var(--color-text-primary)] block mb-4">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-medium leading-relaxed block border-t border-[var(--color-border)] pt-4">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
