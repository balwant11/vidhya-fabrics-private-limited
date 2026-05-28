"use client";

import React from "react";
import EditorialGrid from "./variants/EditorialGrid";
import Masonry from "./variants/Masonry";
import Carousel from "./variants/Carousel";
import { getPhotos } from "@/lib/getPhotos";

const variants = {
  "editorial-grid": EditorialGrid,
  "masonry": Masonry,
  "carousel": Carousel
};

export default function Gallery({ variant = "editorial-grid", business = {}, content = {} }) {
  const galleryList = getPhotos(business, content);

  // Require minimum 2 photos to show the gallery section
  if (galleryList.length < 2) return null;

  const Component = variants[variant] || EditorialGrid;
  return <Component gallery={galleryList} />;
}
