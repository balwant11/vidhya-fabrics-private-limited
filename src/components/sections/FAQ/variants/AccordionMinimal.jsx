"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccordionMinimal({ faq = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!faq || faq.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="uppercase text-xs tracking-[0.25em] text-[var(--color-accent)] font-semibold mb-4 block">Knowledge Base</span>
          <h2 className="text-3xl sm:text-4xl font-heading text-[var(--color-text-primary)] font-black tracking-tight">
            Frequently Answered Inquiries
          </h2>
        </div>

        <div className="border-t border-[var(--color-border)]">
          {faq.map((item, i) => {
            const isOpen = activeIndex === i;

            return (
              <div key={i} className="border-b border-[var(--color-border)]">
                <button 
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full py-6 flex justify-between items-center text-left text-lg font-heading font-bold text-[var(--color-text-primary)] focus:outline-none transition-colors"
                >
                  <span>{item.question}</span>
                  <span className="text-xl ml-4 font-light text-[var(--color-accent)]">
                    {isOpen ? "—" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-sm text-[var(--color-text-muted)] leading-relaxed font-body">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
