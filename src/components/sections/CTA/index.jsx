"use client";

import React from "react";
import DarkLuxury from "./variants/DarkLuxury";
import GradientFashion from "./variants/GradientFashion";
import MinimalBorder from "./variants/MinimalBorder";

const variants = {
  "dark-luxury": DarkLuxury,
  "gradient-fashion": GradientFashion,
  "minimal-border": MinimalBorder
};

export default function CTA({ variant = "dark-luxury", business = {}, content = {} }) {
  const Component = variants[variant] || DarkLuxury;
  return <Component business={business} content={content} />;
}
