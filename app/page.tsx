
import Hero from "./components/sections/Hero";
import ServiceSection from "./components/sections/ServicesSection";
import ProjectsPreview from "./components/sections/ProjectsPreview";
import CallToAction from "./components/sections/CallToAction";

export const dynamic = "force-static"


export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <ProjectsPreview />
      <CallToAction />
    </>
    
  );
}
