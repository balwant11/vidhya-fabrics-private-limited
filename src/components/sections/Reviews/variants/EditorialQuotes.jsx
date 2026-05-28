"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EditorialQuotes({ testimonials = [] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-6">
        {testimonials.slice(0, 1).map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl sm:text-3xl font-heading text-[var(--color-text-primary)] leading-relaxed mb-8 italic">
              "{item.quote}"
            </p>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[var(--color-text-primary)]">
              {item.author} — {item.role}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
