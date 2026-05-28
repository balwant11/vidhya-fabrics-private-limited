"use client";

import React from "react";

export default function MinimalBrand({ content = {} }) {
  const aboutContent = content.about || {};
  const { description } = aboutContent;

  if (!description) return null;

  return (
    <section className="py-16 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-xs uppercase tracking-widest font-bold text-[var(--color-accent)] font-heading">Overview</h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-base text-[var(--color-text-primary)] leading-relaxed font-body">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
