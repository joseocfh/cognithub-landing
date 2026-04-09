import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import AutomationSection from "@/components/AutomationSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DiagnosticFormModal from "@/components/DiagnosticFormModal";

const Index = () => {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  useEffect(() => {
    const handler = () => setDiagnosticOpen(true);
    window.addEventListener("open-diagnostic", handler);
    return () => window.removeEventListener("open-diagnostic", handler);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ChallengesSection />
      <SolutionsSection />
      <ProcessSection />
      <ProjectsSection />
      <AutomationSection />
      <ResultsSection />
      <AboutSection />
      <CTASection />
      <Footer />
      <DiagnosticFormModal open={diagnosticOpen} onOpenChange={setDiagnosticOpen} />
    </div>
  );
};

export default Index;
