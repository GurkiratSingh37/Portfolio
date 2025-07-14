import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sgurkirat3788@gmail.com",
      href: "mailto:sgurkirat3788@gmail.com"
    },
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   label: "Phone",
    //   value: "+91 9876543210",
    //   href: "tel:+919876543210"
    // },
    // {
    //   icon: <MapPin className="w-6 h-6" />,
    //   label: "Location",
    //   value: "San Francisco, CA",
    //   href: "#"
    // }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/GurkiratSingh37",
      username: "@Gurkirat Singh"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gurkirat-singh-2198b5196/",
      username: "Gurkirat Singh"
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-light mb-6 text-gradient">
          Let's Work Together
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Let's create something amazing together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-medium mb-6">Send Me a Message</h3>
          
          <Card className="gradient-card border-0 shadow-soft">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="transition-smooth focus:ring-2 focus:ring-primary/20"
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Let's discuss a project" 
                    className="transition-smooth focus:ring-2 focus:ring-primary/20"
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or idea..."
                    className="min-h-[120px] transition-smooth focus:ring-2 focus:ring-primary/20"
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full px-8 py-6 text-lg hover-lift shadow-soft bg-primary hover:bg-primary/90"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, 
              or potential collaborations. Feel free to reach out through any of 
              the channels below.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="gradient-card border-0 shadow-soft hover-lift transition-smooth">
                  <CardContent className="p-4">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <div className="text-primary">{info.icon}</div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-sm">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-medium mb-4">Follow Me</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <Card key={index} className="gradient-card border-0 shadow-soft hover-lift transition-smooth">
                  <CardContent className="p-4">
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-primary">{social.icon}</div>
                        <div>
                          <p className="font-medium text-foreground">{social.label}</p>
                          <p className="text-sm">{social.username}</p>
                        </div>
                      </div>
                      <div className="text-primary">
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;