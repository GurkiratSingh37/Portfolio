import { Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Growth Natives",
      location: "Mohali, India",
      period: "March 2025 - Present",
      description: "Leading development of enterprise applications with a focus on scalable backend solutions and system integrations.",
      achievements: [
        "Promoted to Senior Software Engineer in March 2025",
        "Currently handling 3 projects (2 products and 1 service-based project)",
        "Integrated Workverse with Keycloak for secure authentication",
        "Implemented Stripe payment processing for Workverse",
        "Developed Salesforce to QuickBooks data synchronization service"
      ]
    },
    {
      title: "Software Developer",
      company: "Growth Natives",
      location: "Mohali, India",
      period: "Aug 2023 - March 2025",
      description: "Full-stack development with focus on backend systems, API development, and database management.",
      achievements: [
        "Developed backend for 'Gotit' app with WebSocket notifications",
        "Enhanced admin dashboard with custom APIs and analytics",
        "Expanded Workverse app with new modules using Node.js",
        "Created comprehensive Swagger documentation for all APIs",
        "Optimized database queries and improved API response times"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "STMicroelectronics",
      location: "Greater Noida, India",
      period: "Sept 2022 - July 2023",
      description: "Contributed to enterprise applications development using Spring Boot and modern web technologies.",
      achievements: [
        "Developed Investment Declaration and Proof Submission System for 1000+ users",
        "Implemented RESTful API endpoints for employee investment declarations",
        "Designed and optimized database schemas for high performance",
        "Built leave management system using Liotro X framework",
        "Developed work time declaration module for Germany's leave service portal"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto relative">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Work History
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          My professional journey spanning design, development, and leadership roles 
          across various industries and team sizes.
        </p>
      </motion.div>

      <div className="relative z-10">
        {/* Animated timeline line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 origin-top"
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1
              }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Animated timeline dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.3 + (index * 0.1),
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium z-10"
              />

              {/* Animated content */}
              <motion.div 
                className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="gradient-card border-0 shadow-soft hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 relative overflow-hidden">
                    {/* Subtle background highlight on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      initial={{ x: -100, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    />
                    <motion.div 
                      className="flex flex-wrap items-start justify-between mb-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (index * 0.05) }}
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.p 
                      className="text-muted-foreground mb-4 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (index * 0.05) }}
                    >
                      {exp.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (index * 0.05) }}
                    >
                      <h4 className="font-medium mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li 
                            key={achIndex} 
                            className="flex items-start text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: 0.5 + (index * 0.05) + (achIndex * 0.05),
                              type: "spring",
                              stiffness: 300,
                              damping: 20
                            }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: 0.5 + (index * 0.05) + (achIndex * 0.05),
                                type: "spring",
                                stiffness: 500,
                                damping: 20
                              }}
                            />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;