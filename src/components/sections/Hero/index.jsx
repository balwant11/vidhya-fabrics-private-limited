"use client";

import React from "react";
import EditorialSplit from "./variants/EditorialSplit";
import FullscreenFashion from "./variants/FullscreenFashion";
import MinimalDark from "./variants/MinimalDark";
import LuxuryParallax from "./variants/LuxuryParallax";

const variants = {
  "editorial-split": EditorialSplit,
  "fullscreen-fashion": FullscreenFashion,
  "minimal-dark": MinimalDark,
  "luxury-parallax": LuxuryParallax
};

export default function Hero({ variant = "editorial-split", business = {}, content = {} }) {
  const Component = variants[variant] || EditorialSplit;
  return <Component business={business} content={content} />;
}
