"use client";

import React from "react";
import { motion } from "framer-motion";
import { getPhotos } from "@/lib/getPhotos";

export default function LuxuryParallax({ business = {}, content = {} }) {
  const heroContent = content.hero || {};
  const { name, email, phone, local_phone } = business;
  const tagline = heroContent.tagline || heroContent.title || "Crafting Excellence";
  const description = heroContent.description || heroContent.subtitle || "";
  const gallery = getPhotos(business, content);
  const heroImg = gallery[1]?.url || gallery[0]?.url || null;

  const targetPhone = phone || local_phone;
  const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";
  const contactLink = email 
    ? `mailto:${email}` 
    : (cleanedPhone ? `https://wa.me/${cleanedPhone}` : "#contact");

  return (
    <section className="relative min-h-screen flex items-center bg-[var(--color-bg-primary)] overflow-hidden py-20">
      {/* Editorial Grid Backing Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-[25%] w-px bg-[var(--color-text-primary)]" />
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-[var(--color-text-primary)]" />
        <div className="absolute top-0 bottom-0 left-[75%] w-px bg-[var(--color-text-primary)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Typography Block */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="uppercase text-xs tracking-[0.35em] text-[var(--color-accent)] font-bold mb-6 block font-heading">
              [ Premier Sourcing Collective ]
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05] text-[var(--color-text-primary)] mb-8 break-words">
              {tagline}
            </h1>
            
            <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-xl mb-12 leading-relaxed font-body">
              {description || `Elevating premium fashion production at scale. Certified organic yarn traceability and zero-waste manufacture for the global epoch.`}
            </p>

            <div>
              <a 
                href={contactLink} 
                className="inline-block bg-[var(--color-primary)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent)] uppercase tracking-[0.25em] text-[10px] font-bold px-10 py-5 transition-all duration-500 font-heading"
              >
                Inquire Allocation
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Floating Portrait Block */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/5] bg-neutral-900 overflow-hidden border border-[var(--color-border)] shadow-2xl"
          >
            {heroImg && (
              <img 
                src={heroImg}
                alt={name || "Luxury Sourcing"}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            )}
            {/* Elegant Accent Outline */}
            <div className="absolute -inset-4 border border-[var(--color-accent)] opacity-20 -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
