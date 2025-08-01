
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroBg from "@/assets/hero-bg.jpg";
import { projectList } from "@/data/projectList";
import { siteConfig } from "@/data/siteConfig";
import Social from "./Social";

const Hero = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = projectList;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (projects[currentProject]?.url && !projects[currentProject]?.hidePreview) {
      setIsLoading(true);
    }
  }, [currentProject]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
      .fromTo(contentRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(scrollRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

    gsap.to(scrollRef.current, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentProject]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    console.log('Iframe loading error for:', projects[currentProject].url);
    setIsLoading(false);
    const iframe = e.currentTarget;
    iframe.src = `https://web.archive.org/web/20240101000000/${projects[currentProject].url}`;
  };

  const getSortedTechnologies = (project: any) =>
    Array.isArray(project.technologies)
      ? [...project.technologies].sort((a, b) => a.localeCompare(b))
      : [];

  const renderProjectContent = (project: any, hidePreview: boolean) => (
    <>
      <p className={hidePreview
        ? "text-2xl md:text-3xl text-muted-foreground mb-8 font-light"
        : "text-foreground/70 text-lg leading-relaxed"}>
        {project.description}
      </p>
      {!hidePreview && (
        <div className="flex items-center gap-3 mt-2">
          {project.year && (
            <Badge variant="outline" className="border-accent/50 text-accent">
              {project.year}
            </Badge>
          )}
          {project.status && (
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary border-primary/30"
            >
              {project.status}
            </Badge>
          )}
        </div>
      )}
      {project.technologies && (
        <div className={`flex flex-wrap gap-2 ${hidePreview ? "mb-4" : "mb-4 mt-2"}`}>
          {getSortedTechnologies(project).map((tech: string) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-surface-bright hover:bg-primary/20 transition-colors duration-300 text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      )}
      {project.highlights && (
        <div className="mb-4">
          <p className="text-lg text-muted-foreground mb-2 font-medium">Key Highlights:</p>
          <ul className="space-y-1">
            {project.highlights.map((highlight: string, idx: number) => (
              <li key={idx} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground/70 text-lg">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!hidePreview && project.why && (
        <div>
          <h4 className="text-primary font-semibold mb-2">Why I Created It:</h4>
          <p className="text-foreground/70 text-lg">{project.why}</p>
        </div>
      )}
      {!hidePreview && project.unique && (
        <div>
          <h4 className="text-primary font-semibold mb-2">What Makes It Unique:</h4>
          <p className="text-foreground/70 text-lg">{project.unique}</p>
        </div>
      )}
      <div className={`flex ${hidePreview ? "flex-col sm:flex-row gap-4 justify-center items-center" : "items-center justify-between pt-4"}`}>
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentProject ? 'bg-primary' : 'bg-muted'}`}
            />
          ))}
        </div>
        {hidePreview ? (
          <>
            <Button
              variant="glow"
              size="xl"
              onClick={nextProject}
              className="w-full sm:w-auto"
            >
              {siteConfig.hero.cta.viewWork}
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="tech"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <Mail className="mr-2" />
                  {siteConfig.hero.cta.getInTouch}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
                <Social />
              </DialogContent>
            </Dialog>
          </>
        ) : (
          project.url && (
            <Button
              variant="tech"
              onClick={() => window.open(`https://${project.url}`, '_blank')}
            >
              {siteConfig.actions.viewProject}
            </Button>
          )
        )}
      </div>
    </>
  );

  const renderPhonePreview = (isMobile = false) => {
    const sizeClasses = isMobile
      ? "w-80 h-[480px] rounded-[1.75rem]"
      : "w-96 h-[740px] rounded-[2.25rem]";

    const caseClasses = isMobile
      ? "rounded-[2.5rem] p-2"
      : "rounded-[3rem] p-3";

    const screenClasses = isMobile
      ? "rounded-[2rem] p-1"
      : "rounded-[2.5rem] p-1";

    const notchClasses = isMobile
      ? "top-4 w-20 h-2 rounded-b-xl"
      : "top-4 w-32 h-2 rounded-b-2xl";

    const homeIndicatorClasses = isMobile
      ? "bottom-1 w-20 h-1"
      : "bottom-2 w-32 h-1";

    return (
      <div className="flex-shrink-0">
        <div className="relative">
          <div className={`absolute inset-0 bg-black/90 blur-xl transform translate-y-4 ${caseClasses}`}></div>
          <div className={`relative bg-gradient-to-b from-gray-700 to-gray-800 ${caseClasses} shadow-2xl`}>
            <div className={`bg-black ${screenClasses}`}>
              <div className={`absolute ${notchClasses} left-1/2 transform -translate-x-1/2 bg-black z-10`}></div>
              <div className={`${sizeClasses} bg-white overflow-hidden relative`}>
                {isLoading && (
                  <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-9 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground">{siteConfig.actions.loading}</p>
                        <p className="text-xs text-muted-foreground">{projects[currentProject].title}</p>
                      </div>
                    </div>
                  </div>
                )}
                <iframe
                  key={`${isMobile ? 'mobile' : 'desktop'}-${currentProject}-${projects[currentProject].url}`}
                  src={`https://${projects[currentProject].url}`}
                  className={`w-full h-full border-0 ${isMobile ? 'rounded-[1.75rem]' : 'rounded-[2.25rem]'}`}
                  title={projects[currentProject].title}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                />
              </div>
            </div>
            <div className={`absolute ${homeIndicatorClasses} left-1/2 transform -translate-x-1/2 bg-white/30 rounded-full`}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={heroRef}
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
        onClick={prevProject}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      
      <Button 
        variant="tech" 
        size="icon" 
        onClick={nextProject}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="relative z-10 w-full px-6">
        <div ref={contentRef}>
          <div className="w-full max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:flex justify-center items-start">
              <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl shadow-glow transition-all duration-500 flex gap-8 max-w-6xl">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-6">
                      <h1 className="text-2xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {projects[currentProject].title}
                      </h1>
                    </div>
                    <div className="space-y-6">
                      {renderProjectContent(projects[currentProject], !!projects[currentProject].hidePreview)}
                    </div>
                  </div>
                </div>
                {!projects[currentProject].hidePreview && (
                  <div className="flex-shrink-0 flex items-center">
                    {renderPhonePreview(false)}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-8">
              <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {projects[currentProject].title}
                  </h1>
                  <div className="flex gap-2">
                    <Button variant="tech" size="icon" onClick={prevProject}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="tech" size="icon" onClick={nextProject}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  {renderProjectContent(projects[currentProject], !!projects[currentProject].hidePreview)}
                </div>
              </div>

              {!projects[currentProject].hidePreview && (
                <div className="flex justify-center">
                  {renderPhonePreview(true)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
