"use client";

import React from "react";
import LuxuryGrid from "./variants/LuxuryGrid";
import MinimalNumbers from "./variants/MinimalNumbers";
import SplitMetrics from "./variants/SplitMetrics";
import BrutalistBlocks from "./variants/BrutalistBlocks";

const variants = {
  "luxury-grid": LuxuryGrid,
  "minimal-numbers": MinimalNumbers,
  "split-metrics": SplitMetrics,
  "brutalist-blocks": BrutalistBlocks
};

export default function Stats({ variant = "luxury-grid", business = {}, content = {} }) {
  let statsList = Array.isArray(content.stats) ? content.stats : [];

  if (statsList.length === 0 && (business.rating || business.total_reviews)) {
    statsList = [];
    if (business.rating) {
      statsList.push({ value: `${business.rating} ★`, label: "Customer Rating" });
    }
    if (business.total_reviews) {
      statsList.push({ value: `${business.total_reviews}+`, label: "Verified Reviews" });
    }
    statsList.push({ value: "100%", label: "Operational Quality" });
  }

  if (statsList.length === 0) return null;

  const Component = variants[variant] || LuxuryGrid;
  return <Component stats={statsList} />;
}
