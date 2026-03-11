
import Hero from "./components/sections/Hero";
import ServiceSection from "./components/sections/ServicesSection";
import ProjectsPreview from "./components/sections/ProjectsPreview";
import CallToAction from "./components/sections/CallToAction";
import LocationPreview from "./components/sections/LocationsPreview";

export const dynamic = "force-static"


export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <ProjectsPreview />
      <LocationPreview />
      <CallToAction />
    </>
    
  );
}
