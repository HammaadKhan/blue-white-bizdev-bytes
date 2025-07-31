import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Award
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Smart Leading Solutions LLC",
      position: "Bid Project Manager",
      period: "January 2025 - Present",
      duration: "7 months",
      location: "Texas, United States",
      type: "Current Role",
      description: "Leading the entire bidding process to secure high-value projects across various online platforms, central to business growth by aligning client needs with tailored, competitive proposals.",
      responsibilities: [
        "Identifying and qualifying project opportunities on platforms like Upwork, Freelancer, Fiverr, and more",
        "Preparing and submitting customized, high-quality proposals within deadlines",
        "Collaborating with internal teams (design, development, marketing) to build strategic solutions",
        "Managing communication with potential clients during pre-sales stages",
        "Tracking bidding performance and optimizing strategies to increase win rates"
      ],
      achievements: [
        "Increased proposal win rate by implementing strategic bidding methodologies",
        "Successfully secured multiple high-value projects across diverse industries",
        "Established efficient cross-team collaboration processes",
        "Built strong client relationships during pre-sales phases"
      ]
    },
    {
      company: "Smart Leading Solutions LLC",
      position: "Business Development Assistant",
      period: "November 2023 - Present",
      duration: "1 year 9 months",
      location: "Remote",
      type: "Ongoing",
      description: "Supporting business development initiatives and managing client acquisition strategies across multiple digital platforms.",
      responsibilities: [
        "Assisting in business development strategy formulation",
        "Supporting proposal development and client communication",
        "Analyzing market opportunities and competitive landscapes",
        "Contributing to team coordination and project management"
      ],
      achievements: [
        "Contributed to significant business growth during tenure",
        "Developed expertise in multi-platform client acquisition",
        "Enhanced proposal quality through strategic insights"
      ]
    },
    {
      company: "University of Management and Technology - UMT",
      position: "Intern",
      period: "October 2023 - November 2023",
      duration: "2 months",
      location: "Lahore, Punjab, Pakistan",
      type: "Internship",
      description: "Gained practical experience in organizational operations and project management methodologies.",
      responsibilities: [
        "Participated in various departmental projects and initiatives",
        "Observed and learned organizational best practices",
        "Assisted in documentation and administrative tasks",
        "Contributed to team projects and collaborative efforts"
      ],
      achievements: [
        "Successfully completed comprehensive internship program",
        "Gained valuable insights into organizational dynamics",
        "Developed professional communication skills"
      ]
    },
    {
      company: "University of Management and Technology - UMT",
      position: "Intern",
      period: "September 2023 - November 2023",
      duration: "3 months",
      location: "Lahore, Punjab, Pakistan",
      type: "Extended Internship",
      description: "Extended internship focusing on advanced project management and strategic planning.",
      responsibilities: [
        "Advanced project management tasks and responsibilities",
        "Strategic planning and analysis activities",
        "Cross-functional team collaboration",
        "Research and development initiatives"
      ],
      achievements: [
        "Completed extended internship with distinction",
        "Developed advanced analytical and strategic thinking skills",
        "Built strong foundation for future professional roles"
      ]
    },
    {
      company: "Smart Leading Solutions Pvt Ltd",
      position: "Frontend Developer",
      period: "September 2018 - October 2019",
      duration: "1 year 2 months",
      location: "Lahore, Punjab, Pakistan",
      type: "Technical Role",
      description: "Developed dynamic web pages and user interfaces using modern web technologies, focusing on creating engaging and responsive user experiences.",
      responsibilities: [
        "Creating dynamic web pages using HTML, CSS, JavaScript, and Bootstrap",
        "Implementing responsive design principles for cross-device compatibility",
        "Collaborating with design teams to translate mockups into functional interfaces",
        "Optimizing website performance and user experience",
        "Maintaining and updating existing web applications"
      ],
      achievements: [
        "Successfully delivered multiple web development projects",
        "Gained expertise in modern frontend technologies",
        "Contributed to improved user experience across client projects",
        "Built strong foundation in web development best practices"
      ]
    }
  ];

  const keySkillsGained = [
    "Strategic Business Development",
    "Project Bidding & Proposal Writing",
    "Client Relationship Management",
    "Cross-functional Team Leadership",
    "Market Analysis & Competitive Intelligence",
    "Performance Optimization",
    "Frontend Web Development",
    "Digital Marketing Strategy"
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 section-bg">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Professional Experience
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Career Journey & Professional Growth
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive overview of my professional journey, showcasing progression from 
              frontend development to strategic business leadership, with measurable achievements 
              and continuous skill development across diverse industry sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Professional Timeline</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Company & Role Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-start space-x-3 mb-4">
                        <Building2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold">{exp.position}</h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{exp.location}</span>
                        </div>
                      </div>
                      
                      <Badge variant={exp.type === "Current Role" ? "default" : "secondary"}>
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Description & Responsibilities */}
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Target className="h-4 w-4 text-primary mr-2" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Award className="h-4 w-4 text-primary mr-2" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm">
                                <TrendingUp className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-20 section-bg">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Skills Developed Through Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keySkillsGained.map((skill, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-medium">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Progression Summary */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Career Progression & Growth</h2>
            <Card className="card-gradient border-0 shadow-card">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Professional Evolution</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <p className="text-sm text-muted-foreground">Years of Experience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <p className="text-sm text-muted-foreground">Different Companies</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5</div>
                    <p className="text-sm text-muted-foreground">Professional Roles</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <p className="text-lg leading-relaxed text-center">
                    My career journey reflects a strategic progression from technical implementation 
                    to business leadership, combining hands-on development experience with strategic 
                    business acumen. This unique blend enables me to bridge the gap between technical 
                    capabilities and business objectives, delivering solutions that drive measurable results.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;