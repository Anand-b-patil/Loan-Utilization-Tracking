import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { ApiFlowSection } from "./components/ApiFlowSection";
import { AIEngineSection } from "./components/AIEngineSection";
import { SecuritySection } from "./components/SecuritySection";
import { TechStackSection } from "./components/TechStackSection";
import { DocumentationSection } from "./components/DocumentationSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ArchitectureSection />
        <ApiFlowSection />
        <AIEngineSection />
        <SecuritySection />
        <TechStackSection />
        <DocumentationSection />
      </main>
      <Footer />
    </div>
  );
}