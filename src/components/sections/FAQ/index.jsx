"use client";

import React from "react";
import AccordionMinimal from "./variants/AccordionMinimal";
import LuxuryCollapse from "./variants/LuxuryCollapse";

const variants = {
  "accordion-minimal": AccordionMinimal,
  "luxury-collapse": LuxuryCollapse
};

export default function FAQ({ variant = "accordion-minimal", business = {}, content = {} }) {
  const faqList = Array.isArray(content.faq) ? content.faq : [];

  if (faqList.length === 0) return null;

  const Component = variants[variant] || AccordionMinimal;
  return <Component faq={faqList} />;
}
