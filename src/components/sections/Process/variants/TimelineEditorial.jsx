"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TimelineEditorial({ process = [] }) {
  if (!process || process.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <span className="uppercase text-xs tracking-[0.25em] text-[var(--color-accent)] font-semibold mb-4 block">Traceable Sourcing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--color-text-primary)] font-black tracking-tight">
            Vertical Manufacturing Blueprint
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative">
          {process.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative flex flex-col p-8 border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
            >
              <div className="text-4xl sm:text-5xl font-heading text-[var(--color-accent)]/20 font-black mb-6">
                {step.step}
              </div>
              <h3 className="text-lg font-heading text-[var(--color-text-primary)] font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
