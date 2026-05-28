"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EditorialStory({ content = {} }) {
  const aboutContent = content.about || {};
  const { description } = aboutContent;

  if (!description) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-primary)] border-y border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase text-xs tracking-[0.3em] text-[var(--color-accent)] font-bold mb-8 block"
        >
          [ OUR SUSTAINABLE CHRONICLE ]
        </motion.span>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-heading text-[var(--color-text-primary)] leading-relaxed mb-12 font-medium tracking-tight"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
