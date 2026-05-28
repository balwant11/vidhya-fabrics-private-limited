"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LuxuryNarrative({ business = {}, content = {} }) {
  const aboutContent = content.about || {};
  const title = aboutContent.title || "The Paradigm of Conscious Production";
  const description = aboutContent.description || "";

  return (
    <section className="py-32 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] relative overflow-hidden">
      {/* Decorative Large Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-heading font-black text-[var(--color-text-primary)] opacity-[0.02] uppercase select-none tracking-tighter whitespace-nowrap pointer-events-none">
        {business.name || "ATELIER"}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <span className="uppercase text-[10px] tracking-[0.4em] text-[var(--color-accent)] font-bold mb-8 block font-heading">
            [ Heritage Story ]
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-[var(--color-text-primary)] font-black tracking-tight max-w-4xl leading-tight mb-10">
            {title}
          </h2>

          <div className="w-24 h-px bg-[var(--color-accent)] opacity-40 mb-10" />

          <p className="text-lg sm:text-xl text-[var(--color-text-primary)] max-w-3xl leading-relaxed font-body font-light opacity-95">
            {description || `Atelier Exporters was founded to bridge high-end aesthetic blueprints with deep social and ecological responsibility. Our vertically integrated, zero-liquid discharge facility manages every phase of creation — from direct farm cotton sourcing to clean solar-powered tailoring assembly.`}
          </p>

          {business.yearEstablished && (
            <div className="mt-12 text-[11px] uppercase tracking-[0.25em] text-[var(--color-text-muted)] font-bold font-heading">
              Chronology / Established {business.yearEstablished}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
