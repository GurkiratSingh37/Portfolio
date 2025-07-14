import { Code, Palette, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Development",
      description: "Node.js, Express, MySQL, MongoDB, Redis, TypeScript"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "DevOps & Tools",
      description: "Docker, CI/CD, Git, GitHub Docker, Postman"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Architecture",
      description: "REST APIs, Microservices, Event-driven systems"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Passion",
      description: "Clean architecture, Scalable backends, Product-focused engineering"
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-light mb-6 text-gradient">
          About Me
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Story */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-medium mb-6">
            Crafting Digital Experiences
          </h3>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            With 2 years of hands-on experience in backend development using Node.js, I specialize in building and scaling product-driven systems that power seamless digital experiences. My journey into software engineering was fueled by a love for solving real problems with clean, efficient code.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I focus on writing maintainable APIs, optimizing performance, and collaborating closely with product teams to bring ideas to life. Most of my work has been in fast-paced product environments, where adaptability and ownership are key.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I’m not deep in code, I’m usually diving into new backend technologies, streamlining developer workflows, or exploring architecture patterns that scale.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently based in India, I’m passionate about building systems that are not just functional—but thoughtful, resilient, and built to last.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="gradient-card border-0 shadow-soft hover-lift transition-spring"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{skill.title}</h4>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;