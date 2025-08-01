
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Social from "@/components/Social";
import HorizontalNav from "@/components/HorizontalNav";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState('portfolio');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeSection]);

  const handleSectionChange = (section: string) => {
    if (section === activeSection) return;

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveSection(section);
        }
      });
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'portfolio':
        return <Hero />;
      case 'experience':
        return <Experience />;
      case 'social':
        return <Social />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HorizontalNav
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <div className="flex-1 flex flex-col pt-10" ref={contentRef}>
        {renderActiveSection()}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
