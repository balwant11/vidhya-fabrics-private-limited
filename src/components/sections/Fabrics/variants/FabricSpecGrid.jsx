"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FabricSpecGrid({ fabrics = [] }) {
  if (!fabrics || fabrics.length === 0) return null;

  return (
    <section id="fabrics" className="py-28 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-20 border-b border-[var(--color-border)] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="uppercase text-[10px] tracking-[0.35em] text-[var(--color-accent)] font-bold mb-4 block font-heading">
              Technical Specifications
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading text-[var(--color-text-primary)] font-black tracking-tight">
              Tactile Engineering Catalog
            </h2>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] max-w-md font-body leading-relaxed">
            Architected for high-end luxury labels and performance-tier brands. Each fabric weave is dynamically certified for traceability and raw physical durability.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {fabrics.map((fabric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch border border-[var(--color-border)] bg-[var(--color-bg-secondary)] theme-card overflow-hidden p-6 sm:p-10"
            >
              {/* Swatch Zoom Block */}
              <div className="lg:col-span-5 relative min-h-[300px] overflow-hidden bg-neutral-900 border border-[var(--color-border)]">
                <img 
                  src={fabric.image || "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800"} 
                  alt={fabric.name} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-black/75 text-[9px] uppercase tracking-[0.2em] font-bold text-white px-3 py-1.5 border border-white/10">
                  Swatch No. 0{i + 1}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4 mb-6">
                    <h3 className="text-2xl sm:text-3xl font-heading text-[var(--color-text-primary)] font-black tracking-tight">
                      {fabric.name}
                    </h3>
                    <span className="text-xs uppercase font-heading font-bold tracking-widest text-[var(--color-accent)] border border-[var(--color-accent)] px-3 py-1">
                      {fabric.weight || "320 GSM"}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--color-text-muted)] font-body leading-relaxed mb-8">
                    {fabric.description}
                  </p>
                </div>

                {/* Specs Block */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[var(--color-border)]">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Composition</span>
                    <span className="text-xs font-semibold text-[var(--color-text-primary)] font-heading">{fabric.composition || "100% Cotton"}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Yarn Density</span>
                    <span className="text-xs font-semibold text-[var(--color-text-primary)] font-heading">{fabric.yarnDensity || "32s Double Combed"}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Traceability</span>
                    <span className="text-xs font-semibold text-[var(--color-text-primary)] font-heading">GOTS Certified Organic</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
