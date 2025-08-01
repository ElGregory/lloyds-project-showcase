
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroBg from "@/assets/hero-bg.jpg";
import { experienceList } from "@/data/experienceList";

const Experience = () => {
  const [currentExperience, setCurrentExperience] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const experiences = experienceList;

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentExperience((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentExperience]);

  const currentExp = experiences[currentExperience];

  return (
    <section
      id="experience"
      className="min-h-[calc(100vh-80px)] pt-20 flex justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/10" />
      
      {/* Navigation Chevrons - Outside Container */}
      <Button 
        variant="tech" 
        size="icon" 
        onClick={prevExperience}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      
      <Button 
        variant="tech" 
        size="icon" 
        onClick={nextExperience}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="relative z-10 w-full px-6">
        <div className="w-full max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-center items-start">
            <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl shadow-glow transition-all duration-500 flex gap-8 max-w-6xl">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-6">
                    <h3 className="text-2xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {currentExp.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl text-accent font-semibold">{currentExp.company}</h4>
                    <Badge variant="outline" className="text-muted-foreground border-primary/30">
                      {currentExp.period}
                    </Badge>
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {currentExp.description}
                  </p>
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {currentExp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentExp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-surface-bright hover:bg-primary/20 transition-colors duration-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 justify-center mt-4">
                    {experiences.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentExperience(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentExperience ? 'bg-primary' : 'bg-muted'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {currentExp.title}
                </h3>
                <div className="flex gap-2">
                  <Button variant="tech" size="icon" onClick={prevExperience}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="tech" size="icon" onClick={nextExperience}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-xl text-accent font-semibold">{currentExp.company}</h4>
                <Badge variant="outline" className="text-muted-foreground border-primary/30">
                  {currentExp.period}
                </Badge>
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {currentExp.description}
              </p>
              <div className="mb-6">
                <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                <ul className="space-y-2">
                  {currentExp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {currentExp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-surface-bright hover:bg-primary/20 transition-colors duration-300 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 justify-center mt-4">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExperience(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentExperience ? 'bg-primary' : 'bg-muted'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
