"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VerticalSteps({ process = [] }) {
  if (!process || process.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="uppercase text-xs tracking-[0.25em] text-[var(--color-accent)] font-semibold mb-4 block">Manufacturing Steps</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--color-text-primary)] font-black tracking-tight">
            Our Production Pipeline
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {process.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 sm:p-10 border border-[var(--color-border)] bg-[var(--color-bg-primary)] theme-card flex flex-col sm:flex-row gap-6 sm:gap-8 items-start justify-between relative overflow-hidden"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[var(--color-accent)] opacity-80" />

              <div className="flex gap-6 sm:gap-8 items-start pl-2">
                <span className="text-3xl sm:text-4xl font-heading font-black text-[var(--color-accent)] leading-none shrink-0">
                  {step.step || String(i + 1).padStart(2, "0")}
                </span>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[var(--color-text-primary)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
