"use client";

import React from "react";
import { motion } from "framer-motion";
import { getPhotos } from "@/lib/getPhotos";

export default function SplitImage({ business = {}, content = {} }) {
  const aboutContent = content.about || {};
  const { yearEstablished, capacity } = business;
  const { title, description } = aboutContent;
  const gallery = getPhotos(business, content);
  const aboutImg = gallery[0]?.url || null;

  if (!description) return null;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative aspect-[4/5] bg-neutral-200 overflow-hidden"
        >
          {aboutImg ? (
            <img 
              src={aboutImg}
              alt={title || "Manufacturing process"} 
              className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
            />
          ) : (
            <div className="absolute inset-0 bg-neutral-800" />
          )}
          {yearEstablished && (
            <div className="absolute bottom-6 left-6 bg-[var(--color-bg-primary)] px-8 py-6 border border-[var(--color-border)]">
              <p className="text-3xl font-heading text-[var(--color-text-primary)] font-bold">{yearEstablished}</p>
              <p className="uppercase text-[9px] tracking-widest text-[var(--color-text-muted)] font-semibold mt-1">Established Mill</p>
            </div>
          )}
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <motion.span variants={fadeInUp} className="uppercase text-xs tracking-[0.25em] text-[var(--color-accent)] font-semibold mb-6">
            Our Legacy
          </motion.span>
          
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-heading text-[var(--color-text-primary)] tracking-tight mb-8 font-bold leading-tight">
            {title || "Crafting conscious garment solutions for the contemporary epoch."}
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-base text-[var(--color-text-muted)] leading-relaxed mb-8 font-body">
            {description}
          </motion.p>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 border-t border-[var(--color-border)] pt-8 mt-4">
            {capacity && (
              <div>
                <p className="text-2xl font-heading text-[var(--color-text-primary)] font-black">{capacity}</p>
                <p className="text-xs uppercase text-[var(--color-text-muted)] tracking-wider mt-1">Annual Capacity</p>
              </div>
            )}
            <div>
              <p className="text-2xl font-heading text-[var(--color-text-primary)] font-black">Carbon Neutral</p>
              <p className="text-xs uppercase text-[var(--color-text-muted)] tracking-wider mt-1">Sustainability Metric</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
