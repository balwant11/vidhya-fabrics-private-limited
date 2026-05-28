import { themes, getThemeStyles } from "@/themes";

export { themes, getThemeStyles };

export const useTheme = (themeName) => {
  const currentTheme = themes[themeName] || themes["luxury-fashion"];
  return {
    theme: currentTheme,
    styles: getThemeStyles(themeName)
  };
};
