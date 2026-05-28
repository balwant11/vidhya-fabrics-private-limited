"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer({ variant = "editorial-footer", data = {} }) {
  const { name, email, phone, local_phone, address, full_address, yearEstablished, tagline, type } = data;
  const contactAddress = address || full_address;
  const businessType = type || tagline || null;

  const targetPhone = phone || local_phone;
  const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";
  const phoneLink = cleanedPhone ? `https://wa.me/${cleanedPhone}` : `tel:${targetPhone}`;

  // Render Variant A: editorial-footer (Haute Couture Luxury Grid)
  if (variant === "editorial-footer") {
    return (
      <footer className="bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border-t border-[var(--color-border)] py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
          
          <div className="lg:col-span-6 flex flex-col justify-between min-h-[160px]">
            <div>
              {name && (
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold mb-4 block">
                  [ {name} ]
                </span>
              )}
              <h3 className="font-heading font-black tracking-tighter text-2xl sm:text-3xl lg:text-4xl mb-4 break-words leading-tight">{name || "ATELIER"}</h3>
              {(yearEstablished || businessType) && (
                <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-semibold font-heading">
                  {yearEstablished ? `Est. ${yearEstablished}` : ""}{yearEstablished && businessType ? " / " : ""}{businessType || ""}
                </p>
              )}
            </div>
            
            <p className="text-[9px] text-[var(--color-text-muted)] tracking-[0.15em] uppercase mt-12 font-body lg:block hidden">
              © {new Date().getFullYear()} {name || "ATELIER"}. All rights reserved.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)] font-bold font-heading">Logistics Hub</h4>
            {contactAddress ? (
              <p className="text-xs leading-relaxed text-[var(--color-text-muted)] font-body max-w-xs">{contactAddress}</p>
            ) : (
              <p className="text-xs text-[var(--color-text-muted)] italic font-body">Global Delivery Desk</p>
            )}
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)] font-bold font-heading">Secure Access</h4>
            <div className="flex flex-col space-y-3 text-xs font-body">
              {targetPhone && (
                <a href={phoneLink} className="text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors block pb-1 border-b border-dashed border-[var(--color-border)] max-w-xs">
                  WhatsApp: {targetPhone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors block pb-1 border-b border-dashed border-[var(--color-border)] max-w-xs">
                  Email: {email}
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-12 block lg:hidden border-t border-[var(--color-border)] pt-8 mt-4">
            <p className="text-[9px] text-[var(--color-text-muted)] tracking-[0.15em] uppercase font-body">
              © {new Date().getFullYear()} {name || "ATELIER"}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Render Variant B: dark-grid (Cyber Brutalist Streetwear black box footer)
  if (variant === "dark-grid") {
    return (
      <footer className="bg-black text-white border-t-2 border-[#222222] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-stretch">
          
          <div className="border-b md:border-b-0 md:border-r border-[#222222] pb-8 md:pb-0 md:pr-8 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-[#FF4500] text-black font-black text-[10px] tracking-widest px-2.5 py-1 mb-6 uppercase">
                ACTIVE PIPELINE STATUS
              </span>
              <h3 className="font-heading font-black tracking-widest text-xl sm:text-2xl lg:text-3xl mb-4 text-white uppercase break-words leading-tight">{name || "ATELIER"}</h3>
              {businessType && (
                <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  {businessType}
                </p>
              )}
            </div>
            
            <p className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase mt-12">
              © {new Date().getFullYear()} {name || "ATELIER"}. SYSTEM LOG: OK.
            </p>
          </div>

          <div className="border-b md:border-b-0 md:border-r border-[#222222] pb-8 md:pb-0 md:px-8 space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF4500] font-black">LOGISTICS MATRIX</h4>
            {contactAddress ? (
              <p className="text-xs leading-relaxed text-neutral-300 font-mono">{contactAddress}</p>
            ) : null}
          </div>

          <div className="md:pl-8 space-y-6 flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF4500] font-black mb-6">COMMS GATEWAY</h4>
              <div className="flex flex-col space-y-4 text-xs font-mono">
                {targetPhone && (
                  <a href={phoneLink} className="text-white hover:text-[#FF4500] transition-colors uppercase tracking-widest">
                    [ WA ] {targetPhone}
                  </a>
                )}
                {email && (
                  <a href={`mailto:${email}`} className="text-white hover:text-[#FF4500] transition-colors uppercase tracking-widest">
                    [ MX ] {email}
                  </a>
                )}
              </div>
            </div>
            
            {yearEstablished && (
              <span className="text-[10px] font-mono text-neutral-500 block mt-8">
                EST. {yearEstablished}
              </span>
            )}
          </div>
        </div>
      </footer>
    );
  }

  // Render Variant C: minimal-inline (Scandinavian Clean Split)
  return (
    <footer className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border-t border-[var(--color-border)] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* LeftCopyright info */}
        <div className="flex items-center gap-4">
          <a href="#" className="font-heading font-black tracking-tighter text-sm sm:text-base md:text-lg text-[var(--color-text-primary)] break-words max-w-[200px] leading-tight block">
            {name || "ATELIER"}
          </a>
          <span className="text-[10px] text-[var(--color-text-muted)] tracking-wider">
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Right Symmetrical Inline Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-text-muted)]">
          {email && (
            <a href={`mailto:${email}`} className="hover:text-[var(--color-text-primary)] transition-colors">
              {email}
            </a>
          )}
          {targetPhone && (
            <a href={phoneLink} className="hover:text-[var(--color-text-primary)] transition-colors">
              WhatsApp
            </a>
          )}
          {contactAddress && (
            <span className="hidden sm:inline opacity-40">|</span>
          )}
          {contactAddress && (
            <span className="text-[var(--color-text-muted)] cursor-default">
              {contactAddress.split(",")[0] || contactAddress}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
