import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Code, 
  TrendingUp, 
  Users, 
  Search,
  ShoppingCart,
  Globe,
  Target,
  BarChart3
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform Optimization",
      category: "Shopify Development",
      description: "Complete Shopify store optimization including SEO improvements, performance enhancement, and conversion rate optimization that resulted in 150% increase in sales.",
      technologies: ["Shopify", "Liquid", "JavaScript", "SEO", "Google Analytics"],
      results: [
        "150% increase in conversion rate",
        "40% improvement in page load speed",
        "200% boost in organic traffic",
        "Enhanced user experience across all devices"
      ],
      icon: <ShoppingCart className="h-8 w-8 text-primary" />
    },
    {
      title: "Business Development Campaign",
      category: "Strategic Bidding",
      description: "Led comprehensive bidding strategy across multiple platforms (Upwork, Freelancer, Fiverr) resulting in securing 15+ high-value projects worth $50,000+.",
      technologies: ["Strategic Planning", "Proposal Writing", "Client Communication", "Market Analysis"],
      results: [
        "15+ projects secured",
        "$50,000+ in project value",
        "85% proposal success rate",
        "Long-term client relationships established"
      ],
      icon: <Target className="h-8 w-8 text-primary" />
    },
    {
      title: "WordPress Multi-site Network",
      category: "WordPress Development",
      description: "Developed and managed a complex WordPress multi-site network for a corporate client with custom themes, plugins, and SEO optimization.",
      technologies: ["WordPress", "PHP", "MySQL", "Custom Themes", "SEO"],
      results: [
        "5 interconnected websites",
        "Custom admin dashboard",
        "Improved SEO rankings",
        "Streamlined content management"
      ],
      icon: <Code className="h-8 w-8 text-primary" />
    },
    {
      title: "SEO & Digital Marketing Campaign",
      category: "Digital Marketing",
      description: "Comprehensive SEO audit and digital marketing strategy implementation that significantly improved online visibility and lead generation.",
      technologies: ["Google Ads", "SEO Tools", "Analytics", "Content Strategy", "Social Media"],
      results: [
        "300% increase in organic traffic",
        "Top 3 Google rankings for key terms",
        "50% reduction in cost per acquisition",
        "Enhanced brand visibility"
      ],
      icon: <Search className="h-8 w-8 text-primary" />
    },
    {
      title: "International Client Acquisition",
      category: "Business Development",
      description: "Developed and executed international expansion strategy, leveraging Turkish language skills to enter new markets and secure European clients.",
      technologies: ["Market Research", "Cultural Intelligence", "Communication Strategy", "Relationship Building"],
      results: [
        "5 new international clients",
        "Expanded into Turkish market",
        "Diversified client portfolio",
        "Increased revenue by 40%"
      ],
      icon: <Globe className="h-8 w-8 text-primary" />
    },
    {
      title: "Performance Analytics Dashboard",
      category: "Data Analysis",
      description: "Created comprehensive analytics dashboard for tracking bidding performance, client acquisition metrics, and business growth indicators.",
      technologies: ["Data Analysis", "Dashboard Design", "Performance Metrics", "Reporting"],
      results: [
        "Real-time performance tracking",
        "Improved decision making",
        "25% increase in efficiency",
        "Data-driven strategy optimization"
      ],
      icon: <BarChart3 className="h-8 w-8 text-primary" />
    }
  ];

  const services = [
    {
      title: "Business Development",
      description: "Strategic business growth through targeted bidding and client acquisition",
      features: ["Project Bidding", "Proposal Writing", "Client Communication", "Strategy Development"]
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress solutions from simple sites to complex enterprise platforms",
      features: ["Custom Themes", "Plugin Development", "Performance Optimization", "Security Implementation"]
    },
    {
      title: "Shopify Development",
      description: "E-commerce solutions that drive sales and enhance user experience",
      features: ["Store Setup", "Theme Customization", "App Integration", "Performance Optimization"]
    },
    {
      title: "SEO & Digital Marketing",
      description: "Comprehensive digital marketing strategies that deliver measurable results",
      features: ["SEO Audits", "Google Ads", "Content Strategy", "Analytics & Reporting"]
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 section-bg">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Portfolio & Projects
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Transforming Ideas Into Success Stories
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Explore a collection of successful projects and strategic initiatives that demonstrate 
              my expertise in business development, web development, and digital marketing. Each project 
              represents a unique challenge solved through innovation, strategic thinking, and technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                View Recent Projects
              </Button>
              <Button size="lg" variant="outline">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {project.icon}
                    </div>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 section-bg">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">My Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Understanding your business goals, target audience, and project requirements"
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Creating a comprehensive plan tailored to your specific needs and objectives"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Executing the strategy with precision, keeping you updated throughout the process"
              },
              {
                step: "04",
                title: "Optimization & Growth",
                description: "Monitoring performance and continuously optimizing for better results"
              }
            ].map((process, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-3">{process.step}</div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-bg">
        <div className="container">
          <Card className="card-gradient border-0 shadow-primary">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to transform your business ideas into successful digital solutions. 
                Whether you need business development, web development, or digital marketing expertise, 
                I'm here to help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start a Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View More Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;