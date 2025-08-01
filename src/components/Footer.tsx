
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/socialData";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { siteConfig } from "@/data/siteConfig";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(footerRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div ref={footerRef} className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="hover:text-primary"
              onClick={() => window.open(social.link, '_blank')}
              aria-label={`Visit ${siteConfig.hero.title}'s ${social.label} profile`}
              title={`Visit ${siteConfig.hero.title}'s ${social.label} profile`}
            >
              {social.icon}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
