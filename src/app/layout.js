import "./globals.css";
import { getThemeStyles } from "@/themes";
import businessData from "../../business.json";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export async function generateMetadata() {
  const seo = businessData.seo || {};
  return {
    title: seo.title || businessData.business?.name || "Apparel Manufacturer",
    description: seo.description || businessData.business?.tagline || "Conscious Garment Exporter",
  };
}

export default function RootLayout({ children }) {
  const themeName = businessData.website_config?.theme || "luxury-fashion";
  const themeStyles = getThemeStyles(themeName);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Grotesk:wght@300..700&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body 
        style={themeStyles} 
        className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased font-body min-h-screen flex flex-col transition-colors duration-500"
      >
        {children}
        <WhatsAppButton phone={businessData.business?.phone || businessData.business?.local_phone} />
      </body>
    </html>
  );
}
