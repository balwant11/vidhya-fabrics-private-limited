"use client";

import React from "react";
import { getPhotos } from "@/lib/getPhotos";

export default function ImageProcess({ process = [], content = {}, business = {} }) {
  if (!process || process.length === 0) return null;
  const gallery = getPhotos(business, content);

  return (
    <section className="py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {process.slice(0, 2).map((step, i) => {
          const img = gallery[i]?.url || gallery[0]?.url || null;
          return (
            <div key={i} className="border border-[var(--color-border)] p-8">
              <div className="aspect-[16/10] bg-neutral-800 mb-6 overflow-hidden">
                {img ? (
                  <img 
                    src={img}
                    alt={step.title}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-800" />
                )}
              </div>
              <h3 className="text-lg font-heading font-black uppercase text-[var(--color-text-primary)] mb-2">
                {step.step}. {step.title}
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] font-body leading-relaxed">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
