import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Globe,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "nogain447khan@gmail.com",
      link: "mailto:nogain447khan@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+92 316 6953916",
      link: "tel:+923166953916"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "Lahore, Punjab, Pakistan",
      link: "#"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      label: "LinkedIn",
      value: "hammad-khan-660-mhk",
      link: "https://www.linkedin.com/in/hammad-khan-660-mhk/"
    }
  ];

  const projectTypes = [
    "Business Development Consulting",
    "Bid Project Management",
    "WordPress Development",
    "Shopify Development", 
    "SEO Optimization",
    "Digital Marketing Strategy",
    "Other"
  ];

  const availabilityInfo = [
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Response Time",
      description: "Within 24 hours for all inquiries"
    },
    {
      icon: <Calendar className="h-5 w-5 text-primary" />,
      title: "Availability",
      description: "Monday - Saturday, 9 AM - 8 PM PKT"
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: "Time Zone",
      description: "Pakistan Standard Time (UTC+5)"
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Consultation",
      description: "Free initial consultation available"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 section-bg">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Transform Your Business Together
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to take your business to the next level? Whether you need strategic business 
              development, cutting-edge web solutions, or comprehensive digital marketing, I'm here 
              to help you achieve your goals. Let's discuss how we can create success together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 text-primary mr-2" />
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your project"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me more about your project, goals, timeline, and how I can help you achieve success..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-gradient border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <p className="text-muted-foreground">
                    Multiple ways to reach me for your convenience.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.link && info.link !== "#" ? (
                          <a 
                            href={info.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Availability & Response</CardTitle>
                  <p className="text-muted-foreground">
                    What you can expect when reaching out to me.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {availabilityInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Why Choose Me?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Proven track record with 85% project success rate</li>
                    <li>• Expertise across multiple platforms and technologies</li>
                    <li>• Strategic approach combining business and technical skills</li>
                    <li>• International experience with multicultural clients</li>
                    <li>• Commitment to long-term client relationships</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 section-bg">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Alternative Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me professionally and see my latest updates
                </p>
                <Button variant="outline" asChild>
                  <a 
                    href="https://www.linkedin.com/in/hammad-khan-660-mhk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Direct Email</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Send me an email directly for detailed project discussions
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:nogain447khan@gmail.com">
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a call to discuss your project requirements
                </p>
                <Button variant="outline" asChild>
                  <a href="tel:+923166953916">
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="card-gradient border-0 shadow-primary">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every great project starts with a conversation. Whether you're looking to expand 
                your business, build a new platform, or optimize your digital presence, I'm here 
                to help you turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline">
                  View My Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;