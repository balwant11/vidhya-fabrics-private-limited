"use client";

import React from "react";
import { motion } from "framer-motion";
import { getPhotos } from "@/lib/getPhotos";

export default function FullscreenFashion({ business = {}, content = {} }) {
  const heroContent = content.hero || {};
  const { name, email, phone, local_phone } = business;
  const tagline = heroContent.tagline || heroContent.title || "Crafting Excellence";
  const description = heroContent.description || heroContent.subtitle || "";
  const gallery = getPhotos(business, content);
  const heroBg = gallery[0]?.url || null;
  
  const targetPhone = phone || local_phone;
  const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";
  const contactLink = email 
    ? `mailto:${email}` 
    : (cleanedPhone ? `https://wa.me/${cleanedPhone}` : "#contact");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center bg-neutral-900"
        style={heroBg ? { backgroundImage: `url('${heroBg}')` } : {}}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full overflow-hidden"
        >
          <span className="uppercase text-xs tracking-[0.3em] text-[var(--color-accent)] font-heading mb-6 font-bold">Loom & Mill Immersive</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-[1.0] mb-6 break-words w-full text-center">
            {name}
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-xl mx-auto mb-4 font-semibold leading-relaxed px-2">
            {tagline}
          </p>
          {description && (
            <p className="text-xs sm:text-sm opacity-75 max-w-xl mx-auto mb-10 font-light leading-relaxed px-2">
              {description}
            </p>
          )}
          <a href={contactLink} className="bg-white text-black hover:bg-[var(--color-accent)] hover:text-white uppercase tracking-[0.25em] text-xs font-bold px-8 py-4 transition-all duration-500 font-heading">
            Review Capacities
          </a>
        </motion.div>
      </div>
    </section>
  );
}
