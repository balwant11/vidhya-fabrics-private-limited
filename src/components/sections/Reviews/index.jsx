"use client";

import React from "react";
import StackedCards from "./variants/StackedCards";
import EditorialQuotes from "./variants/EditorialQuotes";
import MarqueeTestimonials from "./variants/MarqueeTestimonials";

const variants = {
  "stacked-cards": StackedCards,
  "editorial-quotes": EditorialQuotes,
  "marquee-testimonials": MarqueeTestimonials
};

export default function Reviews({ variant = "stacked-cards", business = {}, content = {} }) {
  let reviewsList = Array.isArray(content.reviews) 
    ? content.reviews.filter(r => r.quote && r.quote.trim()) 
    : [];

  // Fallback: use Google reviews from business data, but ONLY if they have actual text
  if (reviewsList.length === 0 && Array.isArray(business.reviews)) {
    reviewsList = business.reviews
      .filter(r => r.review && r.review.trim()) // skip reviews with no text
      .map(r => ({
        quote: r.review,
        author: r.author_name,
        role: r.time_ago ? `Verified Customer · ${r.time_ago}` : "Verified Customer"
      }));
  }

  // Require minimum 2 reviews with actual text to show the section
  if (reviewsList.length < 2) return null;

  const Component = variants[variant] || StackedCards;
  return <Component testimonials={reviewsList} />;
}
