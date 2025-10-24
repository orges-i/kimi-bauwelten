import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import WaterPumpsSection from "@/components/WaterPumpsSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServiceCards />
      <WaterPumpsSection />
      <ProjectsPreview />
      <Footer />
    </div>
  );
};

export default Index;
