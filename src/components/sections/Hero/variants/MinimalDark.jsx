"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MinimalDark({ business = {}, content = {} }) {
  const heroContent = content.hero || {};
  const { name, email, phone, local_phone } = business;
  const tagline = heroContent.tagline || heroContent.title || "Crafting Excellence";
  const description = heroContent.description || heroContent.subtitle || "";
  
  const targetPhone = phone || local_phone;
  const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";
  const contactLink = email 
    ? `mailto:${email}` 
    : (cleanedPhone ? `https://wa.me/${cleanedPhone}` : "#contact");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] text-white px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 py-24">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="lg:col-span-8 flex flex-col justify-center"
        >
          <motion.span variants={fadeInUp} className="text-[var(--color-primary)] font-heading text-sm uppercase tracking-[0.3em] font-bold mb-6">
            [ {name ? name.toUpperCase() : "FOUNDRY"} ]
          </motion.span>
          
          <motion.h1 
            variants={fadeInUp} 
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8 break-words"
          >
            {tagline}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-neutral-400 text-base sm:text-lg max-w-xl mb-12 leading-relaxed font-body"
          >
            {description}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex gap-4">
            <a href={contactLink} className="bg-white text-black hover:bg-transparent hover:text-white uppercase font-black tracking-widest text-xs px-8 py-5 transition-all duration-300 border-2 border-white">
              Initiate Sourcing
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
