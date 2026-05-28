"use client";

import React from "react";
import { sectionRegistry } from "./sectionRegistry";

export default function SectionRenderer({ sections = [], business = {}, content = {} }) {
  if (!Array.isArray(sections)) return null;

  return (
    <>
      {sections.map((section, index) => {
        if (!section || !section.type) return null;

        // Support case insensitive mappings (e.g. "Hero" or "hero", "CTA" or "cta")
        const SectionComponent = sectionRegistry[section.type.toLowerCase()];

        if (!SectionComponent) {
          console.warn(`[SectionRenderer] Section type "${section.type}" not found in registry.`);
          return null;
        }

        try {
          const sectionId = section.type.toLowerCase();
          return (
            <div id={sectionId} key={`${section.type}-${index}`}>
              <SectionComponent
                variant={section.variant}
                business={business}
                content={content}
                config={section}
              />
            </div>
          );
        } catch (error) {
          console.error(`[SectionRenderer] Failed to render section: ${section.type}`, error);
          return null;
        }
      })}
    </>
  );
}
