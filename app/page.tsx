import Image from "next/image";
import Hero from "./components/sections/Hero";
import ServiceSection from "./components/sections/ServicesSection";
import ProjectsPreview from "./components/sections/ProjectsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <ProjectsPreview />
    </>
    
  );
}
