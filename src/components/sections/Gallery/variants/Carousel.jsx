"use client";

import React from "react";

export default function Carousel({ gallery = [] }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)] overflow-hidden border-b border-[var(--color-border)]">
      <div className="flex space-x-8 px-6 overflow-x-auto scrollbar-none py-4">
        {gallery.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-80 aspect-[3/4] border border-[var(--color-border)] relative">
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute bottom-4 left-4 text-white z-10 bg-black/60 px-3 py-2 text-xs uppercase font-bold tracking-widest">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
