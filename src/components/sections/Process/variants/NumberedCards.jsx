"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NumberedCards({ process = [] }) {
  if (!process || process.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="uppercase text-xs tracking-[0.25em] text-[var(--color-accent)] font-semibold mb-4 block">Operational Framework</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--color-text-primary)] font-black tracking-tight">
            How We Execute Sourcing
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="p-8 border border-[var(--color-border)] bg-[var(--color-bg-primary)] flex flex-col justify-between relative group min-h-[300px]"
            >
              {/* Giant Watermark Number */}
              <div className="absolute top-4 right-4 text-7xl font-heading font-black text-[var(--color-text-primary)] opacity-5 select-none pointer-events-none group-hover:opacity-15 transition-opacity duration-500">
                {step.step || String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold mb-6 block font-heading">
                  Stage // {step.step || String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-heading text-[var(--color-text-primary)] font-bold tracking-tight mb-4">
                  {step.title}
                </h3>
              </div>

              <p className="text-xs leading-relaxed text-[var(--color-text-muted)] font-body relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
