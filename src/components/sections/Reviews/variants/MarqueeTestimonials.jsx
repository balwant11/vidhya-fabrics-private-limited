"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function MarqueeTestimonials({ testimonials = [] }) {
  const scrollRef = useRef(null);

  if (!testimonials || testimonials.length === 0) return null;

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  // If there is only 1 testimonial, show a beautiful grand spotlight quote
  if (testimonials.length === 1) {
    const item = testimonials[0];
    return (
      <section className="py-24 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold mb-8 block font-heading">
              Client Veracity
            </span>
            <span className="text-6xl font-heading text-[var(--color-accent)] opacity-35 block mb-2">“</span>
            <p className="text-2xl sm:text-3xl font-heading text-[var(--color-text-primary)] leading-relaxed italic mb-8 font-light">
              {item.quote}
            </p>
            <div className="w-16 h-px bg-[var(--color-accent)] opacity-30 mx-auto mb-6" />
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[var(--color-text-primary)]">
              {item.author}
            </h4>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] mt-1">
              {item.role || "Verified Sourcing Partner"}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // If there are exactly 2 testimonials, show a perfectly balanced dual-column grid
  if (testimonials.length === 2) {
    return (
      <section className="py-24 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold mb-4 block font-heading">
              Verification Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading text-[var(--color-text-primary)] font-black tracking-tight">
              Sourcing Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="p-10 border border-[var(--color-border)] bg-[var(--color-bg-primary)] flex flex-col justify-between"
              >
                <div className="mb-8">
                  <span className="text-5xl font-heading text-[var(--color-accent)] opacity-20 block mb-2">“</span>
                  <p className="text-base text-[var(--color-text-primary)] leading-relaxed italic font-body">
                    {item.quote}
                  </p>
                </div>
                <div className="border-t border-[var(--color-border)] pt-6 flex flex-col">
                  <span className="text-sm font-heading text-[var(--color-text-primary)] font-bold">{item.author}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mt-1">{item.role || "Verified Sourcing Partner"}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // If there are 3 or more testimonials, render a premium swipable deck with custom navigation controls
  return (
    <section className="py-24 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold mb-4 block font-heading">
              Global Sourcing Network
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[var(--color-text-primary)] font-black tracking-tight">
              Client Appraisals
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg-primary)] transition-all duration-300"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button 
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg-primary)] transition-all duration-300"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Swipeable Snap Deck */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-4"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[320px] sm:w-[450px] shrink-0 snap-start p-10 border border-[var(--color-border)] bg-[var(--color-bg-primary)] flex flex-col justify-between min-h-[320px]"
            >
              <div className="mb-8">
                <span className="text-5xl font-heading text-[var(--color-accent)] opacity-20 block mb-2">“</span>
                <p className="text-base text-[var(--color-text-primary)] leading-relaxed italic font-body">
                  {item.quote}
                </p>
              </div>
              
              <div className="border-t border-[var(--color-border)] pt-6 flex flex-col mt-auto">
                <span className="text-sm font-heading text-[var(--color-text-primary)] font-bold">{item.author}</span>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mt-1">{item.role || "Verified Partner"}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
