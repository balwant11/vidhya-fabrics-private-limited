"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FabricCards({ fabrics = [] }) {
  if (!fabrics || fabrics.length === 0) return null;

  return (
    <section id="fabrics" className="py-24 md:py-32 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="uppercase text-xs tracking-[0.25em] text-[var(--color-accent)] font-semibold mb-4 block">Engineered Materials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--color-text-primary)] font-black tracking-tight">
            Premium Textile Catalog
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fabrics.map((fabric, i) => (
            <div 
              key={i} 
              className="group flex flex-col bg-[var(--color-bg-primary)] border border-[var(--color-border)] overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img 
                  src={fabric.image} 
                  alt={fabric.name} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 text-[10px] uppercase font-bold tracking-widest">
                  {fabric.weight}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-heading text-[var(--color-text-primary)] font-bold mb-2">
                  {fabric.name}
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-[var(--color-accent)] font-semibold mb-4">
                  {fabric.composition}
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6 flex-grow font-body">
                  {fabric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
