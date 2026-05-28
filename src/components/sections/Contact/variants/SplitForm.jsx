"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SplitForm({ business = {} }) {
  const { email, phone, address, full_address } = business;
  const contactAddress = address || full_address;
  
  const [formData, setFormData] = useState({ name: "", emailField: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const targetPhone = phone || business.local_phone || "";
    const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";

    const text = `*New Sourcing Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.emailField}\n*Requirements:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);

    if (cleanedPhone) {
      setTimeout(() => {
        window.open(`https://wa.me/${cleanedPhone}?text=${encodedText}`, "_blank");
      }, 800);
    } else if (email) {
      setTimeout(() => {
        window.open(`mailto:${email}?subject=Sourcing Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.emailField}%0D%0ARequirements: ${formData.message}`, "_blank");
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <span className="uppercase text-xs tracking-[0.25em] text-[var(--color-accent)] font-semibold mb-4 block">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-heading text-[var(--color-text-primary)] font-black tracking-tight mb-8">
            Establish Connection
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-12 font-body max-w-md">
            Initiate custom sourcing audits, schedule material fabric checks, or request a complete mill capacity walkthrough.
          </p>

          <div className="space-y-6">
            {contactAddress && (
              <div className="flex gap-4">
                <span className="text-[var(--color-accent)] font-heading text-xs font-bold uppercase tracking-wider">Office</span>
                <p className="text-xs text-[var(--color-text-primary)] tracking-wide leading-relaxed font-body">{contactAddress}</p>
              </div>
            )}
            {phone && (
              <div className="flex gap-4">
                <span className="text-[var(--color-accent)] font-heading text-xs font-bold uppercase tracking-wider">Phone</span>
                <p className="text-xs text-[var(--color-text-primary)] tracking-wide font-body">{phone}</p>
              </div>
            )}
            {email && (
              <div className="flex gap-4">
                <span className="text-[var(--color-accent)] font-heading text-xs font-bold uppercase tracking-wider">Email</span>
                <p className="text-xs text-[var(--color-text-primary)] tracking-wide font-body">{email}</p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 p-8 sm:p-12 border border-[var(--color-border)] bg-[var(--color-bg-secondary)] theme-card"
        >
          {submitted ? (
            <div className="text-center py-12">
              <span className="text-5xl mb-4 block">✓</span>
              <h3 className="text-xl font-heading font-bold text-[var(--color-text-primary)] mb-2">Transmission Initiated</h3>
              <p className="text-xs text-[var(--color-text-muted)] max-w-md mx-auto leading-relaxed">
                Opening direct thread to our sourcing team. Please send the pre-filled inquiry inside the chat app.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] font-bold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-xs text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-body"
                  />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] font-bold mb-2">Corporate Email</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.emailField}
                    onChange={(e) => setFormData({ ...formData, emailField: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-xs text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-body"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] font-bold mb-2">Production Capacity Needed</label>
                <textarea 
                  rows="4" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe target MOQs and blueprints..."
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-xs text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors font-body resize-none"
                />
              </div>
              <button type="submit" className="w-full bg-[var(--color-primary)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent)] uppercase tracking-[0.2em] text-xs font-bold py-4 transition-all duration-500 font-heading">
                Submit Sourcing Inquiry
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
