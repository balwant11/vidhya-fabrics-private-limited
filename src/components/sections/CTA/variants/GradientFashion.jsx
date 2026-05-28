"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GradientFashion({ business = {}, content = {} }) {
  const ctaContent = content.cta || {};
  const { name } = business;
  const { title } = ctaContent;

  return (
    <section className="py-24 bg-gradient-to-r from-neutral-900 to-neutral-950 text-white relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-5xl font-heading font-black mb-8 uppercase tracking-tighter">
            {title || `Architecting the Future of Streetwear with ${name}`}
          </h2>
          <a href="#contact" className="bg-white text-black uppercase font-bold tracking-widest text-xs px-8 py-4 transition-transform hover:scale-105">
            Partner Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
