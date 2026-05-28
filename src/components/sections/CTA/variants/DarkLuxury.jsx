"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DarkLuxury({ business = {}, content = {} }) {
  const ctaContent = content.cta || {};
  const { name, email, phone, local_phone } = business;
  const { title, subtitle, description } = ctaContent;
  
  const targetPhone = phone || local_phone;
  const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";
  const contactLink = email 
    ? `mailto:${email}` 
    : (cleanedPhone ? `https://wa.me/${cleanedPhone}` : "#contact");

  return (
    <section className="relative py-28 md:py-36 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 bottom-0 left-[20%] w-px bg-white" />
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-white" />
        <div className="absolute top-0 bottom-0 left-[80%] w-px bg-white" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="uppercase text-xs tracking-[0.3em] text-[var(--color-accent)] font-heading mb-6 font-bold">
            {subtitle || "Production Allocation"}
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-none mb-8 max-w-4xl">
            {title || "Secure Your Brand's Next Production Run"}
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mb-12 leading-relaxed font-body">
            {description || `Partner with ${name || "Atelier Exporters"} for premium traceable execution.`}
          </p>
          
          <a href={contactLink} className="bg-white text-black hover:bg-[var(--color-accent)] hover:text-white uppercase tracking-[0.25em] text-xs font-bold px-10 py-5 transition-all duration-500 font-heading">
            Request Manufacturing Prospectus
          </a>
        </motion.div>
      </div>
    </section>
  );
}
