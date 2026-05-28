"use client";

import React from "react";
import SplitImage from "./variants/SplitImage";
import EditorialStory from "./variants/EditorialStory";
import MinimalBrand from "./variants/MinimalBrand";
import LuxuryNarrative from "./variants/LuxuryNarrative";

const variants = {
  "split-image": SplitImage,
  "editorial-story": EditorialStory,
  "minimal-brand": MinimalBrand,
  "luxury-narrative": LuxuryNarrative
};

export default function About({ variant = "split-image", business = {}, content = {} }) {
  const Component = variants[variant] || SplitImage;
  return <Component business={business} content={content} />;
}
