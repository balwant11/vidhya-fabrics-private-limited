"use client";

import React, { useState } from "react";

export default function LuxuryCollapse({ faq = [] }) {
  const [active, setActive] = useState(null);

  if (!faq || faq.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-heading font-black uppercase text-[var(--color-text-primary)]">
            FAQ Desk
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {faq.map((item, i) => (
            <div key={i} className="p-6 border border-[var(--color-border)]">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full text-left font-bold text-base uppercase text-[var(--color-text-primary)] mb-2 focus:outline-none"
              >
                {item.question}
              </button>
              {active === i && (
                <p className="text-xs text-[var(--color-text-muted)] mt-2 leading-relaxed font-body">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
