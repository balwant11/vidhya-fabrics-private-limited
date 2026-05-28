"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StackedCards({ testimonials = [] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16 overflow-hidden"
        >
          <span className="uppercase text-xs tracking-[0.25em] text-[var(--color-accent)] font-semibold mb-4 block">Industry Standards</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-[var(--color-text-primary)] font-black tracking-tight break-words">
            Client Verification
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-10 border border-[var(--color-border)] bg-[var(--color-bg-secondary)] flex flex-col justify-between"
            >
              <div className="mb-8">
                <span className="text-5xl font-heading text-[var(--color-accent)] opacity-30 font-black leading-none block mb-4">“</span>
                <p className="text-base text-[var(--color-text-primary)] leading-relaxed italic font-body">
                  {item.quote}
                </p>
              </div>
              <div className="border-t border-[var(--color-border)] pt-6 flex flex-col">
                <span className="text-sm font-heading text-[var(--color-text-primary)] font-bold">{item.author}</span>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-medium mt-1">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
