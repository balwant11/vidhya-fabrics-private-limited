"use client";

import React from "react";

export default function MinimalNumbers({ stats = [] }) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="py-16 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <span className="block text-5xl font-heading font-black text-[var(--color-text-primary)]">{stat.value}</span>
            <span className="block uppercase text-[9px] tracking-widest text-[var(--color-text-muted)] font-semibold mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
