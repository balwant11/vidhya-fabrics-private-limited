"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LuxuryGrid({ stats = [] }) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={{ whileInView: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center p-8 border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-heading text-[var(--color-text-primary)] font-black tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="uppercase text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
