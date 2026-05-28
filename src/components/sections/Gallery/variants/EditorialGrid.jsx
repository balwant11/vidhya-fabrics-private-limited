"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EditorialGrid({ gallery = [] }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="uppercase text-xs tracking-[0.25em] text-[var(--color-accent)] font-semibold mb-4 block">Precision Archive</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--color-text-primary)] font-black tracking-tight">
            Factory & Production Archives
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {gallery.slice(0, 4).map((item, i) => {
            const gridClasses = 
              i === 0 ? "md:col-span-8 aspect-[16/10]" :
              i === 1 ? "md:col-span-4 aspect-[4/5]" :
              i === 2 ? "md:col-span-4 aspect-[4/5]" :
              "md:col-span-8 aspect-[16/10]";

            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden bg-neutral-200 border border-[var(--color-border)] ${gridClasses}`}
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="uppercase text-[9px] tracking-widest text-[var(--color-accent)] font-bold mb-1">{item.category}</p>
                  <h3 className="text-lg font-heading font-bold">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
