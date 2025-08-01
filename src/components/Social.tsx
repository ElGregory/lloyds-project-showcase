
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { socialLinks, interests, favoriteBooks } from "@/data/socialData";
import { siteConfig } from "@/data/siteConfig";
import heroBg from "@/assets/hero-bg.jpg";

const Social = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-surface/30" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {siteConfig.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {siteConfig.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="bg-gradient-surface border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">{siteConfig.contact.connectWith}</h3>

              <div className="space-y-4 mb-8">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg text-primary">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{social.label}</p>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors duration-300"
                      >
                        {social.username}
                      </a>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(social.link, '_blank')}
                      className="hover:text-primary hover:bg-primary/10"
                    >
                      {siteConfig.actions.visit}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:bg-primary/10"
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="bg-gradient-surface border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">{siteConfig.contact.interests}</h3>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <a href={interest.link}><span className="text-foreground/80 text-lg">{interest.label}</span></a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Favorite Books */}
          <Card className="bg-gradient-surface border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">{siteConfig.contact.recommendedReading}</h3>
              <div className="space-y-4">
                {favoriteBooks.map((book, index) => (
                  <div key={index} className="border-l-2 border-accent/30 pl-4">
                    <p className="text-sm text-foreground/80 leading-relaxed"><a href={book.link} className="text-lg">{book.label}</a></p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Social;
