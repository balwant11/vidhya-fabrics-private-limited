import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionRenderer from "@/components/renderer/SectionRenderer";
import businessData from "../../business.json";

export default function Home() {
  if (!businessData || !businessData.business) return null;

  const bData = businessData.business || {};
  const wConfig = businessData.website_config || {};
  const wContent = businessData.website_content || {};
  
  return (
    <>
      <Navbar 
        variant={wConfig.navbarVariant} 
        data={bData} 
        sections={wConfig.layout?.sections || []}
        content={wContent}
      />
      
      <main className="flex-grow">
        <SectionRenderer 
          sections={wConfig.layout?.sections || []} 
          business={bData} 
          content={wContent}
        />
      </main>

      <Footer variant={wConfig.footerVariant} data={bData} />
    </>
  );
}
