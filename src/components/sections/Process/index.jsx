"use client";

import React from "react";
import TimelineEditorial from "./variants/TimelineEditorial";
import VerticalSteps from "./variants/VerticalSteps";
import ImageProcess from "./variants/ImageProcess";
import NumberedCards from "./variants/NumberedCards";

const variants = {
  "timeline-editorial": TimelineEditorial,
  "vertical-steps": VerticalSteps,
  "image-process": ImageProcess,
  "numbered-cards": NumberedCards
};

export default function Process({ variant = "timeline-editorial", business = {}, content = {} }) {
  const processList = Array.isArray(content.process) ? content.process : [];

  if (processList.length === 0) return null;

  const Component = variants[variant] || TimelineEditorial;
  return <Component process={processList} content={content} business={business} />;
}
