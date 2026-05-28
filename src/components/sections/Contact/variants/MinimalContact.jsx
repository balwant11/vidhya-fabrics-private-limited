"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MinimalContact({ business = {} }) {
  const { email, phone, local_phone, full_address, address } = business;
  const contactAddress = full_address || address;

  const targetPhone = phone || local_phone;
  const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";
  const phoneLink = cleanedPhone ? `https://wa.me/${cleanedPhone}` : `tel:${targetPhone}`;

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center relative overflow-hidden">
      <div className="max-w-xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold mb-6 block font-heading">
            [ Sourcing Inquiry Desk ]
          </span>
          
          <h2 className="text-3xl font-heading text-[var(--color-text-primary)] font-black tracking-tight mb-12">
            Establish Connection
          </h2>

          <div className="space-y-6 text-xl sm:text-2xl font-heading font-medium text-[var(--color-text-primary)]">
            {email && (
              <a 
                href={`mailto:${email}`} 
                className="block hover:text-[var(--color-accent)] transition-colors duration-300 font-light border-b border-dashed border-[var(--color-border)] pb-4 max-w-sm mx-auto"
              >
                {email}
              </a>
            )}
            {targetPhone && (
              <a 
                href={phoneLink}
                className="block hover:text-[var(--color-accent)] transition-colors duration-300 font-light border-b border-dashed border-[var(--color-border)] pb-4 max-w-sm mx-auto"
              >
                {targetPhone}
              </a>
            )}
            {contactAddress && (
              <p className="text-xs uppercase tracking-widest leading-relaxed text-[var(--color-text-muted)] font-body font-medium mt-6 pt-2 max-w-md mx-auto">
                {contactAddress}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
