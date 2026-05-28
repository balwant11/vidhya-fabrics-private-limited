"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ variant = "transparent-floating", data = {}, sections = [], content = {} }) {
  const { name, email, phone, local_phone } = data;
  const targetPhone = phone || local_phone;
  const cleanedPhone = targetPhone ? targetPhone.replace(/[^0-9]/g, "") : "";
  const contactLink = email 
    ? `mailto:${email}` 
    : (cleanedPhone ? `https://wa.me/${cleanedPhone}` : "#contact");
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Extract element ID (e.g. #about -> about)
    const id = targetId.replace("#", "");
    const element = document.getElementById(id);
    
    if (element) {
      // 80ms delay gives the mobile menu collapsing animation a moment to run and prevent layout shift scrolling issues
      setTimeout(() => {
        const offset = 90; // Premium header offset height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 80);
    }
  };

  const SECTION_LABELS = {
    about: "About",
    fabrics: "Fabrics",
    process: "Process",
    gallery: "Gallery",
    stats: "Stats",
    reviews: "Reviews",
    faq: "FAQ"
  };

  // Map of section types to a function that checks if the section has actual data
  const SECTION_HAS_DATA = {
    stats: () => {
      const statsArr = Array.isArray(content.stats) ? content.stats : [];
      return statsArr.length > 0 || !!(data.rating || data.total_reviews);
    },
    fabrics: () => {
      const fabricArr = Array.isArray(content.fabrics) ? content.fabrics : [];
      return fabricArr.length > 0;
    },
    process: () => {
      const processArr = Array.isArray(content.process) ? content.process : [];
      return processArr.length > 0;
    },
    reviews: () => {
      // Check content.testimonials or content.reviews with actual text
      const contentReviews = Array.isArray(content.testimonials)
        ? content.testimonials.filter(r => r.quote && r.quote.trim())
        : Array.isArray(content.reviews)
          ? content.reviews.filter(r => r.quote && r.quote.trim())
          : [];
      if (contentReviews.length >= 2) return true;
      // Fallback: check business.reviews with actual written text (need min 2)
      const bizReviews = Array.isArray(data.reviews)
        ? data.reviews.filter(r => r.review && r.review.trim())
        : [];
      return bizReviews.length >= 2;
    },
    gallery: () => {
      // Need min 2 photos from any source (content.gallery array, business.photos, or main_photo_url doesn't count)
      if (Array.isArray(content.gallery) && content.gallery.length >= 2) return true;
      if (Array.isArray(data.photos) && data.photos.length >= 2) return true;
      return false;
    },
    faq: () => {
      const faqArr = Array.isArray(content.faq) ? content.faq : [];
      return faqArr.length > 0;
    },
    about: () => true, // About section can always fallback to business data
    contact: () => true, // Contact always has at least phone/email
  };

  const navLinks = (sections || [])
    .map(section => {
      const type = section.type?.toLowerCase();
      if (type === "contact") return null; // Sourced via far-right CTA button

      if (!SECTION_LABELS[type]) return null;

      // Skip section if it has no actual data to show
      const hasData = SECTION_HAS_DATA[type];
      if (hasData && !hasData()) return null;

      return {
        id: `#${type}`,
        label: SECTION_LABELS[type]
      };
    })
    .filter(Boolean);

  const fallbackLinks = [
    { id: "#about", label: "About" },
    { id: "#fabrics", label: "Fabrics" }
  ];

  const linksToRender = navLinks.length > 0 ? navLinks : fallbackLinks;

  // Split links for "centered-logo" variant
  const halfLength = Math.ceil(linksToRender.length / 2);
  const leftLinks = linksToRender.slice(0, halfLength);
  const rightLinks = linksToRender.slice(halfLength);

  // Render Variant A: transparent-floating (Floating Glass Pill)
  if (variant === "transparent-floating") {
    return (
      <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
        <div className={`max-w-5xl mx-auto rounded-3xl md:rounded-full border border-[var(--color-border)] backdrop-blur-lg bg-[var(--color-bg-primary)]/75 py-3 px-6 md:px-8 transition-all duration-500 shadow-lg ${isScrolled ? "shadow-2xl translate-y-1" : ""}`}>
          <div className="flex justify-between items-center w-full gap-4">
            <a href="#" className="font-heading font-black tracking-tighter text-sm md:text-base leading-[0.95] text-[var(--color-text-primary)] uppercase max-w-[150px] md:max-w-[200px] block">
              {name || "ATELIER"}
            </a>

            <div className="hidden md:flex space-x-6 lg:space-x-8 text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--color-text-primary)] shrink-0">
              {linksToRender.map((link) => (
                <a key={link.id} href={link.id} onClick={(e) => handleNavClick(e, link.id)} className="hover:text-[var(--color-accent)] transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            <a 
              href={contactLink} 
              className="hidden sm:inline-block bg-[var(--color-primary)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent)] uppercase tracking-[0.2em] text-[9px] font-bold px-5 py-2.5 rounded-full transition-all duration-500 font-heading whitespace-nowrap"
            >
              Inquire
            </a>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[var(--color-text-primary)] focus:outline-none"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">{mobileMenuOpen ? "✕" : "Menu"}</span>
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden pt-4 pb-2"
              >
                <div className="flex flex-col space-y-4 text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--color-text-primary)] border-t border-[var(--color-border)] pt-4">
                  {linksToRender.map((link) => (
                    <a key={link.id} href={link.id} onClick={(e) => handleNavClick(e, link.id)} className="hover:text-[var(--color-accent)]">
                      {link.label}
                    </a>
                  ))}
                  <a href={contactLink} onClick={() => setMobileMenuOpen(false)} className="inline-block bg-[var(--color-primary)] text-[var(--color-bg-primary)] py-2.5 text-center uppercase tracking-[0.2em] text-[9px] rounded-full font-bold font-heading">
                    Inquire
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    );
  }

  // Render Variant B: dark-minimal (Cyber Brutalist streetwear style)
  if (variant === "dark-minimal") {
    return (
      <header className={`sticky top-0 z-50 bg-black text-white border-b-2 border-[#333333] transition-all duration-300 py-4 md:py-5`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
          <a href="#" className="font-heading font-black tracking-widest text-base md:text-lg leading-[0.95] text-white uppercase flex items-start gap-2 max-w-[180px] md:max-w-[240px] block">
            <span className="bg-[#FF4500] text-black font-black px-1.5 py-0.5 text-sm md:text-base shrink-0 mt-0.5">■</span>
            <span className="block">{name || "ATELIER"}</span>
          </a>

          <div className="hidden md:flex space-x-8 lg:space-x-12 text-[10px] uppercase font-black tracking-[0.3em] text-neutral-300 shrink-0">
            {linksToRender.map((link) => (
              <a key={link.id} href={link.id} onClick={(e) => handleNavClick(e, link.id)} className="hover:text-[#FF4500] transition-colors relative group">
                {link.label}
                <span className="absolute bottom-[-6px] left-0 right-0 h-0.5 bg-[#FF4500] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:block shrink-0">
            <a 
              href={contactLink} 
              className="bg-[#FF4500] text-black hover:bg-white hover:text-black uppercase font-black tracking-widest text-[9px] px-6 py-3 transition-all duration-300 border-2 border-[#FF4500] whitespace-nowrap"
            >
              ALLOCATION REQUEST
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <span className="text-xs uppercase tracking-widest font-black">{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-t-2 border-[#333333] py-8 px-6 mt-4"
            >
              <div className="flex flex-col space-y-6 text-[10px] uppercase font-black tracking-[0.3em]">
                {linksToRender.map((link) => (
                  <a key={link.id} href={link.id} onClick={(e) => handleNavClick(e, link.id)} className="hover:text-[#FF4500] text-neutral-300">
                    {link.label}
                  </a>
                ))}
                <a href={contactLink} onClick={() => setMobileMenuOpen(false)} className="inline-block bg-[#FF4500] text-black py-3 text-center font-black tracking-widest text-[9px]">
                  ALLOCATION REQUEST
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }

  // Render Variant C: centered-logo (Haute Couture layout)
  if (variant === "centered-logo") {
    return (
      <header className={`sticky top-0 z-50 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] transition-all duration-500 ${isScrolled ? "py-3 shadow-sm" : "py-6 md:py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full gap-4">
          
          {/* Brand Name on the Left */}
          <div className="flex justify-start shrink-0">
            <a href="#" className="font-heading font-black tracking-tighter text-sm sm:text-base md:text-lg leading-[0.95] text-[var(--color-text-primary)] uppercase max-w-[180px] md:max-w-[240px] block text-left">
              {name || "ATELIER"}
            </a>
          </div>

          {/* Centered links */}
          <div className="hidden md:flex flex-grow justify-center space-x-6 lg:space-x-8 text-xs uppercase font-bold tracking-[0.15em] text-[var(--color-text-primary)]">
            {linksToRender.map((link) => (
              <a key={link.id} href={link.id} onClick={(e) => handleNavClick(e, link.id)} className="hover:text-[var(--color-accent)] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex justify-end shrink-0">
            <a 
              href={contactLink} 
              className="border border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)] uppercase tracking-[0.15em] text-[11px] font-bold px-5 py-2.5 transition-all duration-500 font-heading whitespace-nowrap"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex justify-end">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--color-text-primary)] focus:outline-none"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">{mobileMenuOpen ? "✕" : "Menu"}</span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] py-8 px-6 mt-4"
            >
              <div className="flex flex-col space-y-6 text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--color-text-primary)]">
                {linksToRender.map((link) => (
                  <a key={link.id} href={link.id} onClick={(e) => handleNavClick(e, link.id)} className="hover:text-[var(--color-accent)]">
                    {link.label}
                  </a>
                ))}
                <a href={contactLink} onClick={() => setMobileMenuOpen(false)} className="inline-block border border-[var(--color-text-primary)] py-3 text-center uppercase tracking-[0.2em] text-[9px] font-bold font-heading">
                  Direct Link
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }

  // Render Variant D: glassmorphism (Fluid Aero Blur full width)
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled ? "bg-[var(--color-bg-primary)]/80 backdrop-blur-xl py-3.5 shadow-sm" : "py-5 md:py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
        <a href="#" className="font-heading font-black tracking-tighter text-base md:text-lg leading-[0.95] text-[var(--color-text-primary)] uppercase max-w-[160px] md:max-w-[220px] block">
          {name || "ATELIER"}
        </a>

        <div className="hidden md:flex space-x-8 lg:space-x-10 text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--color-text-primary)] shrink-0">
          {linksToRender.map((link) => (
            <a key={link.id} href={link.id} onClick={(e) => handleNavClick(e, link.id)} className="hover:text-[var(--color-accent)] transition-colors relative py-1">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block shrink-0">
          <a 
            href={contactLink} 
            className="border-b-2 border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] uppercase tracking-[0.2em] text-[10px] font-bold pb-1 transition-all duration-300 font-heading whitespace-nowrap"
          >
            Connect Sourcing →
          </a>
        </div>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[var(--color-text-primary)] focus:outline-none"
        >
          <span className="text-xs uppercase tracking-widest font-bold">{mobileMenuOpen ? "✕" : "Menu"}</span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] py-8 px-6 absolute top-full left-0 right-0 z-40"
          >
            <div className="flex flex-col space-y-6 text-[10px] uppercase font-bold tracking-[0.25em] text-[var(--color-text-primary)]">
              {linksToRender.map((link) => (
                <a key={link.id} href={link.id} onClick={(e) => handleNavClick(e, link.id)} className="hover:text-[var(--color-accent)]">
                  {link.label}
                </a>
              ))}
              <a href={contactLink} onClick={() => setMobileMenuOpen(false)} className="inline-block border border-[var(--color-text-primary)] py-3 text-center uppercase tracking-[0.2em] text-[9px] font-bold font-heading">
                Connect Sourcing
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
