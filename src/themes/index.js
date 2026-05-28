export const themes = {
  "luxury-fashion": {
    name: "Luxury Fashion",
    colors: {
      primary: "#0f0f0f",
      secondary: "#FAF9F6",
      accent: "#B89047",
      muted: "#8c8c8c",
      border: "#e5e5e5",
      bgPrimary: "#FAF9F6",
      bgSecondary: "#FFFFFF",
      textPrimary: "#1a1a1a",
      textMuted: "#666666"
    },
    fonts: {
      heading: "var(--font-playfair, 'Playfair Display', serif)",
      body: "var(--font-inter, 'Inter', sans-serif)"
    },
    spacing: {
      sectionPadding: "py-24 md:py-32",
      containerMaxWidth: "max-w-7xl"
    },
    borderRadius: "rounded-none",
    shadows: "shadow-none",
    animation: {
      hoverTransition: "transition-all duration-700 ease-out",
      cardHover: "hover:-translate-y-1 hover:shadow-lg hover:border-[#B89047]"
    },
    buttons: {
      primary: "bg-[#0f0f0f] text-white hover:bg-[#B89047] uppercase tracking-[0.2em] text-xs font-bold px-8 py-4 transition-all duration-500",
      secondary: "border border-[#0f0f0f] text-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-white uppercase tracking-[0.2em] text-xs font-bold px-8 py-4 transition-all duration-500"
    }
  },
  "dark-editorial": {
    name: "Dark Editorial",
    colors: {
      primary: "#FFFFFF",
      secondary: "#0a0a0a",
      accent: "#E5E7EB",
      muted: "#9CA3AF",
      border: "#262626",
      bgPrimary: "#000000",
      bgSecondary: "#0a0a0a",
      textPrimary: "#FFFFFF",
      textMuted: "#9CA3AF"
    },
    fonts: {
      heading: "var(--font-syne, 'Syne', sans-serif)",
      body: "var(--font-instrument, 'Instrument Sans', sans-serif)"
    },
    spacing: {
      sectionPadding: "py-28 md:py-36",
      containerMaxWidth: "max-w-7xl"
    },
    borderRadius: "rounded-none",
    shadows: "shadow-2xl shadow-black",
    animation: {
      hoverTransition: "transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1)",
      cardHover: "hover:scale-[1.02] hover:border-white"
    },
    buttons: {
      primary: "bg-white text-black hover:bg-transparent hover:text-white border border-white uppercase tracking-[0.25em] text-[10px] font-bold px-8 py-4 transition-all duration-500",
      secondary: "border border-[#262626] text-white hover:border-white uppercase tracking-[0.25em] text-[10px] font-bold px-8 py-4 transition-all duration-500"
    }
  },
  "premium-minimal": {
    name: "Premium Minimal",
    colors: {
      primary: "#171717",
      secondary: "#F5F5F5",
      accent: "#737373",
      muted: "#A3A3A3",
      border: "#E5E5E5",
      bgPrimary: "#FFFFFF",
      bgSecondary: "#F5F5F5",
      textPrimary: "#171717",
      textMuted: "#737373"
    },
    fonts: {
      heading: "var(--font-space, 'Space Grotesk', sans-serif)",
      body: "var(--font-inter, 'Inter', sans-serif)"
    },
    spacing: {
      sectionPadding: "py-20 md:py-28",
      containerMaxWidth: "max-w-6xl"
    },
    borderRadius: "rounded-md",
    shadows: "shadow-sm",
    animation: {
      hoverTransition: "transition-all duration-300 ease-in-out",
      cardHover: "hover:shadow-md hover:scale-[1.01]"
    },
    buttons: {
      primary: "bg-[#171717] text-white hover:bg-neutral-800 tracking-wider text-xs font-semibold px-6 py-3 transition-all duration-300 rounded-md",
      secondary: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 tracking-wider text-xs font-semibold px-6 py-3 transition-all duration-300 rounded-md"
    }
  },
  "modern-streetwear": {
    name: "Modern Streetwear",
    colors: {
      primary: "#FF4500",
      secondary: "#121212",
      accent: "#FF4500",
      muted: "#787878",
      border: "#333333",
      bgPrimary: "#1c1c1c",
      bgSecondary: "#121212",
      textPrimary: "#ffffff",
      textMuted: "#a0a0a0"
    },
    fonts: {
      heading: "var(--font-archivo, 'Archivo Black', sans-serif)",
      body: "var(--font-dmsans, 'DM Sans', sans-serif)"
    },
    spacing: {
      sectionPadding: "py-24 md:py-32",
      containerMaxWidth: "max-w-7xl"
    },
    borderRadius: "rounded-none",
    shadows: "shadow-[4px_4px_0px_0px_rgba(255,69,0,1)]",
    animation: {
      hoverTransition: "transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1)",
      cardHover: "hover:shadow-[8px_8px_0px_0px_rgba(255,69,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
    },
    buttons: {
      primary: "bg-[#FF4500] text-black hover:bg-white hover:text-black uppercase font-black tracking-widest text-xs px-8 py-4 transition-all duration-300 border-2 border-[#FF4500]",
      secondary: "bg-transparent text-white border-2 border-white hover:border-[#FF4500] hover:text-[#FF4500] uppercase font-black tracking-widest text-xs px-8 py-4 transition-all duration-300"
    }
  }
};

export const getThemeStyles = (themeName) => {
  const activeTheme = themes[themeName] || themes["luxury-fashion"];
  const c = activeTheme.colors;
  
  let borderRadiusVal = "0px";
  let borderWidthVal = "1px";
  let buttonPaddingVal = "1rem 2.25rem";
  let letterSpacingVal = "0.15em";
  let textTransformVal = "uppercase";
  let shadowVal = "none";

  if (themeName === "premium-minimal") {
    borderRadiusVal = "12px";
    buttonPaddingVal = "0.75rem 1.75rem";
    letterSpacingVal = "0.025em";
    textTransformVal = "none";
    shadowVal = "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 8px -1px rgba(0, 0, 0, 0.02)";
  } else if (themeName === "modern-streetwear") {
    borderRadiusVal = "0px";
    borderWidthVal = "2.5px";
    buttonPaddingVal = "1rem 2rem";
    letterSpacingVal = "0.2em";
    textTransformVal = "uppercase";
    shadowVal = "5px 5px 0px 0px var(--color-primary)";
  } else if (themeName === "dark-editorial") {
    borderRadiusVal = "0px";
    buttonPaddingVal = "1.25rem 2.5rem";
    letterSpacingVal = "0.25em";
    textTransformVal = "uppercase";
    shadowVal = "0 25px 50px -12px rgba(0, 0, 0, 0.8)";
  }
  
  return {
    "--color-primary": c.primary,
    "--color-secondary": c.secondary,
    "--color-accent": c.accent,
    "--color-muted": c.muted,
    "--color-border": c.border,
    "--color-bg-primary": c.bgPrimary,
    "--color-bg-secondary": c.bgSecondary,
    "--color-text-primary": c.textPrimary,
    "--color-text-muted": c.textMuted,
    "--font-heading": activeTheme.fonts.heading,
    "--font-body": activeTheme.fonts.body,
    "--border-radius": borderRadiusVal,
    "--border-width": borderWidthVal,
    "--button-padding": buttonPaddingVal,
    "--letter-spacing": letterSpacingVal,
    "--text-transform": textTransformVal,
    "--shadow": shadowVal,
  };
};
