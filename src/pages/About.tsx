import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Award, 
  Globe, 
  Code, 
  TrendingUp,
  Users,
  Target,
  Lightbulb
} from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Information Management",
      field: "Library and Information Science",
      institution: "University of the Punjab",
      period: "November 2021 - November 2023",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    },
    {
      degree: "Associate's Degree",
      field: "Computer Science",
      institution: "Superior University",
      period: "2019 - 2021",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    }
  ];

  const certifications = [
    {
      name: "Google Partner Certification",
      issuer: "Google",
      icon: <Award className="h-6 w-6 text-primary" />
    }
  ];

  const languages = [
    { name: "English", level: "Native", progress: 100 },
    { name: "Turkish", level: "Professional Working", progress: 85 },
    { name: "Urdu", level: "Native", progress: 100 }
  ];

  const topSkills = [
    { name: "Business Analysis", progress: 95 },
    { name: "SEO Audits", progress: 90 },
    { name: "Google Ads", progress: 88 },
    { name: "Project Management", progress: 92 },
    { name: "WordPress Development", progress: 85 },
    { name: "Shopify Development", progress: 83 }
  ];

  const personalValues = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Precision & Excellence",
      description: "Every project demands meticulous attention to detail and unwavering commitment to quality."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centric Approach",
      description: "Building long-term relationships through responsive communication and client satisfaction."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation & Adaptability",
      description: "Continuously learning and adapting to emerging technologies and market trends."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Growth Mindset",
      description: "Committed to personal and professional development while driving business success."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 section-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge variant="outline" className="mb-4">
                About Muhammad Hammad Khan
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Driving Business Growth Through Strategic Excellence
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Business Development Professional and Technical Expert who thrives 
                on transforming business opportunities into remarkable success stories. Based in 
                Lahore, Pakistan, I bring a unique blend of strategic thinking, technical expertise, 
                and multicultural communication skills to every project.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in the digital landscape has been driven by an unwavering commitment 
                to excellence, continuous learning, and the belief that every challenge presents 
                an opportunity for innovation and growth.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Card className="card-gradient border-0 shadow-card p-8">
                <img
                  src="/lovable-uploads/33dc25e8-03aa-4fed-80fe-38e6d8b148b9.png"
                  alt="Muhammad Hammad Khan - Professional Portrait"
                  className="w-80 h-80 object-cover rounded-xl"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Professional Summary</h2>
            <Card className="card-gradient border-0 shadow-card">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  As a <strong>Bid Project Manager</strong> at Smart Leading Solutions LLC, I spearhead 
                  the entire bidding ecosystem, transforming business opportunities into strategic victories. 
                  My expertise lies in identifying high-value projects across multiple platforms including 
                  Upwork, Freelancer, and Fiverr, then crafting compelling, customized proposals that 
                  showcase our unique capabilities.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Beyond project management, I'm a <strong>coding maestro</strong> passionate about 
                  creating exceptional digital experiences. My technical foundation spans WordPress 
                  and Shopify development, complemented by deep expertise in SEO optimization and 
                  digital marketing strategies that drive measurable results.
                </p>
                <p className="text-lg leading-relaxed">
                  What sets me apart is my ability to bridge the gap between technical innovation 
                  and business strategy, ensuring that every solution not only meets immediate 
                  requirements but also positions clients for long-term success in an ever-evolving 
                  digital landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 section-bg">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Core Values & Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalValues.map((value, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-gradient border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Code className="h-6 w-6 text-primary mr-2" />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {topSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Globe className="h-6 w-6 text-primary mr-2" />
                  Languages
                </h3>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{language.name}</span>
                        <span className="text-sm text-muted-foreground">{language.level}</span>
                      </div>
                      <Progress value={language.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 section-bg">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Education & Certifications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="card-gradient border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{edu.icon}</div>
                        <div>
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <p className="text-primary font-medium">{edu.field}</p>
                          <p className="text-muted-foreground">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="card-gradient border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{cert.icon}</div>
                        <div>
                          <h4 className="font-semibold">{cert.name}</h4>
                          <p className="text-primary font-medium">{cert.issuer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Beyond Professional Life</h2>
            <Card className="card-gradient border-0 shadow-card">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  When I'm not crafting winning proposals or developing innovative digital solutions, 
                  I'm constantly exploring new technologies and industry trends. My curiosity drives 
                  me to stay ahead of the curve, ensuring that every client benefits from cutting-edge 
                  insights and methodologies.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  As someone fluent in Turkish at a professional working level, I bring a unique 
                  multicultural perspective to international projects, understanding diverse market 
                  dynamics and communication styles that enhance global collaboration.
                </p>
                <p className="text-lg leading-relaxed">
                  I believe that success is not just about individual achievement, but about creating 
                  value for others and contributing to a larger vision of digital transformation that 
                  empowers businesses to reach their full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;