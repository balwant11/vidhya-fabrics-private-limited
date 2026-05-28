"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DarkContact({ business = {} }) {
  const { email, phone, local_phone, address, full_address } = business;
  const contactAddress = address || full_address;

  const targetPhone = phone || local_phone;
  const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";
  const phoneLink = cleanedPhone ? `https://wa.me/${cleanedPhone}` : `tel:${targetPhone}`;

  return (
    <section id="contact" className="py-24 bg-black text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-800 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-bold block mb-4 font-heading">
            Sourcing Address
          </span>
          {contactAddress ? (
            <p className="text-sm leading-relaxed text-neutral-300 font-body">{contactAddress}</p>
          ) : (
            <p className="text-sm leading-relaxed text-neutral-500 italic">No address provided</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-bold block mb-4 font-heading">
            Corporate Email
          </span>
          {email ? (
            <a 
              href={`mailto:${email}`} 
              className="text-sm text-neutral-300 hover:text-[var(--color-accent)] transition-colors duration-300 font-body block"
            >
              {email}
            </a>
          ) : (
            <p className="text-sm leading-relaxed text-neutral-500 italic">No email provided</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-bold block mb-4 font-heading">
            Phone Desk
          </span>
          {targetPhone ? (
            <a 
              href={phoneLink}
              className="text-sm text-neutral-300 hover:text-[var(--color-accent)] transition-colors duration-300 font-body block"
            >
              {targetPhone}
            </a>
          ) : (
            <p className="text-sm leading-relaxed text-neutral-500 italic">No phone provided</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
