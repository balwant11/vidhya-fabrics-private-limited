"use client";

import React from "react";
import { motion } from "framer-motion";
import { getPhotos } from "@/lib/getPhotos";

export default function EditorialSplit({ business = {}, content = {} }) {
  const heroContent = content.hero || {};
  const { name, email, phone, local_phone } = business;
  const tagline = heroContent.tagline || heroContent.title || "Crafting Excellence";
  const description = heroContent.description || heroContent.subtitle || "";
  const gallery = getPhotos(business, content);
  const heroImg = gallery[0]?.url || null;
  
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
    <section className="relative min-h-screen flex items-center bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-24 z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-[var(--color-accent)]"></span>
            <span className="uppercase text-xs tracking-[0.25em] font-medium text-[var(--color-accent)] font-heading">{name || "Atelier"}</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp} 
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-heading text-[var(--color-text-primary)] leading-[1.1] tracking-tighter mb-8 font-black break-words"
          >
            {tagline || "Architecting Exquisite Textile Systems"}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-xl mb-12 leading-relaxed font-body"
          >
            {description}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <a href={contactLink} className="bg-[var(--color-primary)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent)] uppercase tracking-[0.2em] text-xs font-bold px-8 py-5 transition-all duration-500 text-center font-heading">
              Secure Sourcing Slots
            </a>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-5 relative min-h-[50vh] lg:min-h-screen bg-neutral-900 overflow-hidden">
          <motion.div
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-neutral-900"
            style={heroImg ? { backgroundImage: `url('${heroImg}')` } : {}}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  );
}
