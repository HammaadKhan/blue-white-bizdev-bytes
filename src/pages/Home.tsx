// Portfolio Home Page - Muhammad Hammad Khan
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BrainCircuit, 
  Target, 
  TrendingUp, 
  Users,
  CheckCircle,
  Star
} from "lucide-react";

const Home = () => {
  const skills = [
    "Business Development",
    "Bid Project Management", 
    "WordPress Development",
    "Shopify Development",
    "SEO Expert",
    "Digital Marketing",
    "Google Ads",
    "Upwork Expert"
  ];

  const achievements = [
    "Google Partner Certification",
    "1+ Years at Smart Leading Solutions LLC",
    "Expert in Multiple Platforms (Upwork, Freelancer, Fiverr)",
    "Turkish Language Professional Working Proficiency"
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Business Development Expert
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Muhammad 
                <span className="block text-white/90">Hammad Khan</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Bid Project Manager | WordPress & Shopify Developer | SEO Expert | 
                Digital Marketing Specialist
              </p>
              <p className="text-lg mb-8 text-white/80 max-w-2xl">
                Transforming business opportunities into success stories through strategic 
                bidding, innovative development, and data-driven marketing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  asChild
                  className="group"
                >
                  <Link to="/portfolio">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className="bg-transparent border-blue-500 text-blue-500 hover:bg-white hover:text-blue-600 hover:border-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 dark:bg-white/10 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-8 shadow-2xl">
                  <img
                    src="/uploads/33dc25e8-03aa-4fed-80fe-38e6d8b148b9.png"
                    alt="Muhammad Hammad Khan - Professional Profile"
                    className="w-80 h-80 object-cover rounded-xl shadow-card"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 section-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized skills that drive business growth and digital transformation
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <Badge variant="outline" className="text-sm font-medium">
                    {skill}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a Bid Project Manager at Smart Leading Solutions LLC, I lead the entire 
                bidding process to secure high-value projects across various online platforms. 
                My role is central to business growth, aligning client needs with tailored, 
                competitive proposals.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm passionate about turning ideas into exceptional digital experiences, 
                combining business development expertise with technical skills in WordPress, 
                Shopify, and SEO optimization.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="card-gradient border-0 shadow-card">
                <CardContent className="p-6">
                  <BrainCircuit className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Strategic Thinking</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyzing market opportunities and crafting winning proposals
                  </p>
                </CardContent>
              </Card>
              <Card className="card-gradient border-0 shadow-card">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Goal-Oriented</h3>
                  <p className="text-sm text-muted-foreground">
                    Focused on delivering results and exceeding expectations
                  </p>
                </CardContent>
              </Card>
              <Card className="card-gradient border-0 shadow-card">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Growth Mindset</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuously learning and adapting to market trends
                  </p>
                </CardContent>
              </Card>
              <Card className="card-gradient border-0 shadow-card">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Working with cross-functional teams to achieve success
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 section-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Key Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that demonstrate my commitment to excellence and professional growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="card-gradient border-0 shadow-primary">
            <CardContent className="p-12 text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to unlock new opportunities, secure valuable projects, 
                and drive your business to new heights of success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;