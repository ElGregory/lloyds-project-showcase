
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface HorizontalNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const HorizontalNav = ({ activeSection, onSectionChange }: HorizontalNavProps) => {
  const { theme, setTheme } = useTheme();
  const sections = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'social', label: 'Social' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center items-center space-x-1">
          <div className="flex space-x-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                onClick={() => onSectionChange(section.id)}
                className={`
                  px-6 py-2 text-sm font-medium transition-all duration-300
                  ${activeSection === section.id
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                    : 'hover:bg-primary/20 hover:text-primary'
                  }
                `}
              >
                {section.label}
              </Button>
            ))}
          </div>

          <div className="ml-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-10 w-10 rounded-md hover:bg-primary/20"
              title="Toggle Color Scheme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-foreground" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNav;
