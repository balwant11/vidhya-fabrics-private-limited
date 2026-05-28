"use client";

import React from "react";

export default function MinimalBorder() {
  return (
    <section className="py-20 bg-[var(--color-bg-primary)] border-y-2 border-black">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <h2 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-black">
          Capacity slots are highly restricted.
        </h2>
        <a href="#contact" className="border-2 border-black text-black uppercase font-bold tracking-widest text-xs px-8 py-4 hover:bg-black hover:text-white transition-colors">
          Secure Access
        </a>
      </div>
    </section>
  );
}
