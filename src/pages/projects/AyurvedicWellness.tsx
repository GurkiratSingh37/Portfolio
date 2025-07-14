import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const AyurvedicWellness = () => {
  const project = {
    id: "ayurvedic-wellness",
    title: "Ayurvedic Wellness Platform",
    description: "A modern, fully responsive Ayurvedic Wellness Platform built with React and Node.js.",
    image: "/ayurvedic-wellness.png",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://mohan-ayurveda.vercel.app/",
    githubUrl: "#",
    features: [
      "Appointment booking system",
      "Admin dashboard for managing content",
      "Product catalog with search and filtering"
    ]
  };

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-5xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button variant="ghost" asChild className="mb-8 -ml-2">
            <Link to="/" className="flex items-center gap-2 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </motion.div>

          <motion.div variants={item} className="rounded-xl overflow-hidden shadow-2xl border">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 pt-4">
            <motion.div variants={item} className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none space-y-4">
                  <p>
                    The Ayurvedic Wellness Platform is a comprehensive web application designed to 
                    connect users with Ayurvedic practitioners and wellness services. The platform 
                    features an intuitive appointment booking system, a rich content library, and 
                    a seamless user experience across all devices.
                  </p>
                  <p>
                    Built with modern web technologies, the application ensures fast load times, 
                    smooth animations, and a responsive design that works perfectly on desktop 
                    and mobile devices.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <motion.ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={item}
                    >
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-6">
              <div className="p-6 bg-card rounded-xl border">
                <h3 className="font-medium mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (index * 0.05) }}
                    >
                      <Badge variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AyurvedicWellness;
