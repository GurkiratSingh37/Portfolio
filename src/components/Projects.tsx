import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "workverse",
      title: "Workverse",
      description: "An enterprise collaboration platform with advanced security and monitoring capabilities.",
      image: "/Workverse.png",
      technologies: ["Node.js", "JavaScript", "MySQL", "Neo4J", "Socket.io", "Keycloak", "JWT", "Stripe", "Redis", "Grafana", "Swagger", "MongoDB", "GIT"],
      liveUrl: "https://workverse.com/",
      features: [
        "Enterprise-grade security with Keycloak",
        "Real-time collaboration",
        "Comprehensive monitoring with Grafana"
      ]
    },
    {
      id: "networkon",
      title: "NetworkOn",
      description: "Smash delivery bottlenecks with NetworkON — the next-gen Delivery Management Software that fuses AI, speed, and simplicity into one unified platform.",
      image: "/NetworkOn.png",
      technologies: ["React Native", "JavaScript", "Express.js", "PostgreSQL", "JWT", "Socket.io", "Keycloak", "Stripe", "Redis", "Grafana", "Swagger", "AWS DynamoDB", "MongoDB", "GIT"],
      liveUrl: "https://networkon.io/",
      features: [
        "Biometric authentication",
        "Real-time transaction updates",
        "Investment tracking and analytics"
      ]
    },
    {
      id: "simon-game",
      title: "Simon Game",
      description: "A classic Simon Game built with React and Node.js.",
      image: "/simon-game.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      liveUrl: "https://gurkiratsingh37.github.io/SimonGame/",
      githubUrl: "https://github.com/GurkiratSingh37/SimonGame",
      features: ["Responsive design", "Easy to use", "Fun to play", "No dependencies"],
    },
    {
      id: "ayurvedic-wellness",
      title: "Ayurvedic Wellness Platform",
      description: "A modern, fully responsive Ayurvedic Wellness Platform built with React and Node.js. Embracing ancient wisdom for modern wellness through authentic Ayurvedic practices.",
      image: "/ayurvedic-wellness.png",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      liveUrl: "https://mohan-ayurveda.vercel.app/",
      githubUrl: "#",
      features: [
        "Appointment booking system",
        "Admin dashboard for managing content",
        "Integrated Stripe for payments"
      ]
    },
    {
      id: "gotit",
      title: "Gotit",
      description: "Gotit is a collaborative job applying and posting platform built with Node.js and JavaScript. It provides a seamless experience for job seekers and employers to connect and collaborate.",
      image: "/Gotit.jpg",
      technologies: ["Node.js", "JavaScript", "MySQL", "Socket.io", "JWT", "Stripe", "Redis", "Grafana", "Swagger", "GIT"],
      liveUrl: "#",
      features: [
        "Real-time task updates",
        "Team collaboration features",
        "Advanced project analytics"
      ]
    }
  ];

  return (
    <section id="projects" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30"></div>
      
      <div className="relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of my recent work, showcasing innovative solutions and 
            <span className="text-foreground font-medium"> exceptional user experiences</span>.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="group h-full flex flex-col border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pt-16 bg-gradient-to-t from-background to-transparent">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <CardContent className="p-6 flex-grow">
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs px-2.5 py-1 font-medium bg-secondary/50 text-foreground/80 border-border/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs px-2.5 py-1 font-medium text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 mt-auto">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:text-primary transition-all"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  <Button 
                    variant={project.liveUrl ? "outline" : "default"}
                    size="sm"
                    className={`flex-1 group-hover:bg-primary/90 transition-all ${
                      project.liveUrl 
                        ? 'group-hover:bg-primary/5 group-hover:border-primary/30 group-hover:text-primary' 
                        : 'shadow-md shadow-primary/20'
                    }`}
                    asChild
                  >
                    <Link to={`/projects/${project.id}`} className="flex items-center justify-center">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </Button>
                </div>
                
                {project.githubUrl && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full mt-3 text-muted-foreground hover:text-foreground group-hover:bg-secondary/30 transition-colors"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>  
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;