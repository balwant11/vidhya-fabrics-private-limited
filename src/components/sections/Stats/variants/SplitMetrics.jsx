"use client";

import React from "react";

export default function SplitMetrics({ stats = [] }) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="overflow-hidden">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-black uppercase tracking-tight text-[var(--color-text-primary)] mb-4 leading-tight break-words hyphens-auto">
            Global Production in Quantifiable Metrics
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-body max-w-sm">
            Our fully vertical integration models are evaluated against strict carbon trace benchmarks.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {stats.slice(0, 4).map((stat, i) => (
            <div key={i} className="p-4 md:p-6 border border-[var(--color-border)]">
              <span className="block text-2xl md:text-3xl font-heading font-black text-[var(--color-accent)]">{stat.value}</span>
              <span className="block text-[9px] md:text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-bold mt-1 leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
