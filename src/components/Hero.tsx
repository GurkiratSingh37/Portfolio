import { ArrowDown, Github, Linkedin, Mail, Mouse } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] [mask-image:linear-gradient(to_right,transparent,white,transparent)]"></div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto h-full flex flex-col justify-between py-20">
        <div className="animate-fade-in space-y-8">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-border/50 bg-background/30 backdrop-blur-sm text-sm text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Hello, I'm Gurkirat
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl mb-10 text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Crafting <span className="text-foreground font-medium">digital experiences</span> that blend
            <span className="text-primary font-medium"> design </span>
            with <span className="text-foreground font-medium">functionality</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg hover-lift shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
            >
              <a
                href="#projects"
                >View My Work
              </a>
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg hover-lift backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-background/50 transition-all duration-300"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/GurkiratSingh37" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon"
                className="w-12 h-12 hover-glow transition-spring"
              >
                <Github className="w-6 h-6" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/gurkirat-singh-2198b5196/" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                size="icon"
                className="w-12 h-12 hover-glow transition-spring"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
            </a>
            <a href="mailto:sgurkirat3788@gmail.com">
              <Button 
                variant="ghost" 
                size="icon"
                className="w-12 h-12 hover-glow transition-spring"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6">
        <div className="flex-col items-center space-y-2">
          <Mouse className="h-6 w-6 text-muted-foreground/60 animate-bounce" />
          {/* <span className="text-sm text-muted-foreground/60 font-medium tracking-wider">Scroll to explore</span> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;