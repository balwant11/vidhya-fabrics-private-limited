"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Masonry({ gallery = [] }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {gallery.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative overflow-hidden bg-neutral-100 border border-[var(--color-border)] aspect-[3/4]"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
