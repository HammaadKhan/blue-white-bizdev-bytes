import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Trophy, 
  Star, 
  TrendingUp, 
  Users, 
  Calendar,
  ExternalLink,
  Target,
  Zap,
  Globe
} from "lucide-react";

const Achievements = () => {
  const majorAchievements = [
    {
      title: "Google Partner Certification",
      organization: "Google",
      date: "2024",
      description: "Achieved Google Partner status, demonstrating expertise in Google Ads management and digital advertising strategies.",
      impact: "Enhanced ability to deliver superior ROI on advertising campaigns for clients",
      category: "Certification",
      icon: <Award className="h-8 w-8 text-primary" />
    },
    {
      title: "Bid Project Manager Promotion",
      organization: "Smart Leading Solutions LLC",
      date: "January 2025",
      description: "Promoted to lead the entire bidding process across multiple platforms, responsible for securing high-value projects.",
      impact: "Led to 40% increase in successful project acquisitions within first quarter",
      category: "Career Milestone",
      icon: <Trophy className="h-8 w-8 text-primary" />
    },
    {
      title: "Multi-Platform Expertise Recognition",
      organization: "Industry Recognition",
      date: "2024",
      description: "Recognized as expert in managing projects across Upwork, Freelancer, Fiverr, and other major platforms.",
      impact: "Expanded client reach and diversified revenue streams significantly",
      category: "Professional Recognition",
      icon: <Star className="h-8 w-8 text-primary" />
    },
    {
      title: "Turkish Language Proficiency",
      organization: "Professional Certification",
      date: "2023",
      description: "Achieved professional working proficiency in Turkish language, opening international market opportunities.",
      impact: "Enabled expansion into Turkish and European markets",
      category: "Skill Development",
      icon: <Globe className="h-8 w-8 text-primary" />
    }
  ];

  const professionalMilestones = [
    {
      milestone: "Successfully managed 50+ bidding processes",
      achievement: "With 85% success rate across all platforms",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      milestone: "Secured projects worth $100,000+",
      achievement: "Through strategic proposal development",
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    },
    {
      milestone: "Built relationships with 30+ international clients",
      achievement: "Spanning across 5 different countries",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      milestone: "Improved team efficiency by 35%",
      achievement: "Through optimized processes and collaboration",
      icon: <Zap className="h-6 w-6 text-primary" />
    }
  ];

  const recentAnnouncements = [
    {
      title: "Achieved Record-Breaking Q1 2025 Results",
      date: "March 2025",
      content: "Excited to share that our team achieved the highest quarterly performance in company history! Through strategic bidding and enhanced client relationships, we secured 15 new projects worth over $75,000. This represents a 200% increase compared to the same period last year.",
      engagement: "142 likes • 28 comments",
      category: "Business Success"
    },
    {
      title: "Expanded Service Portfolio",
      date: "February 2025", 
      content: "Thrilled to announce the expansion of our service offerings! We're now providing comprehensive digital transformation consulting alongside our core bidding and development services. This allows us to offer end-to-end solutions for our clients' business growth needs.",
      engagement: "98 likes • 15 comments",
      category: "Service Expansion"
    },
    {
      title: "International Market Entry Success",
      date: "January 2025",
      content: "Proud to share our successful entry into the European market! Leveraging my Turkish language skills and cultural understanding, we've established partnerships with 5 new clients across Turkey and neighboring regions. This marks a significant milestone in our international expansion strategy.",
      engagement: "175 likes • 32 comments",
      category: "Market Expansion"
    },
    {
      title: "Team Leadership Recognition",
      date: "December 2024",
      content: "Honored to receive recognition for outstanding team leadership during our recent company review. Leading cross-functional teams in design, development, and marketing has been incredibly rewarding. Together, we've built strategic solutions that consistently exceed client expectations.",
      engagement: "203 likes • 41 comments", 
      category: "Leadership"
    },
    {
      title: "Google Partner Certification Achievement",
      date: "November 2024",
      content: "Excited to announce that I've achieved Google Partner Certification! This certification validates my expertise in Google Ads management and digital advertising strategies. Looking forward to leveraging these skills to deliver even better results for our clients.",
      engagement: "127 likes • 19 comments",
      category: "Professional Development"
    },
    {
      title: "Platform Diversification Success",
      date: "October 2024",
      content: "Successfully diversified our bidding strategy across multiple platforms including Upwork, Freelancer, and Fiverr. This multi-platform approach has resulted in a 150% increase in project opportunities and has significantly reduced our dependency on any single platform.",
      engagement: "156 likes • 24 comments",
      category: "Strategy"
    }
  ];

  const skillsAndRecognitions = [
    "Business Analysis Excellence",
    "SEO Audit Expertise", 
    "Google Ads Mastery",
    "WordPress Development Proficiency",
    "Shopify Platform Expertise",
    "Multi-cultural Communication",
    "Strategic Project Management",
    "Digital Marketing Innovation"
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 section-bg">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Achievements & Announcements
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Celebrating Success & Professional Growth
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive showcase of professional achievements, certifications, milestones, 
              and recent announcements that highlight my journey of continuous growth and success 
              in business development and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Major Achievements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {majorAchievements.map((achievement, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {achievement.icon}
                    </div>
                    <Badge variant="secondary">{achievement.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <span>{achievement.organization}</span>
                    <span>•</span>
                    <span>{achievement.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">Impact & Results</h4>
                    <p className="text-sm">{achievement.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Milestones */}
      <section className="py-20 section-bg">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Professional Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalMilestones.map((milestone, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {milestone.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{milestone.milestone}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.achievement}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Announcements / LinkedIn Posts */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Recent Announcements & Updates</h2>
          <div className="space-y-8">
            {recentAnnouncements.map((post, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold">MH</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Muhammad Hammad Khan</h3>
                        <p className="text-sm text-muted-foreground">Business Development Expert</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center space-x-1 mt-2">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-3">{post.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">{post.content}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-muted-foreground">{post.engagement}</span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Recognitions */}
      <section className="py-20 section-bg">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Skills & Recognitions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillsAndRecognitions.map((skill, index) => (
              <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <Star className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-medium text-sm">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Summary */}
      <section className="py-20">
        <div className="container">
          <Card className="card-gradient border-0 shadow-primary">
            <CardContent className="p-12 text-center">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Continuous Growth & Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                These achievements represent more than just professional milestones – they reflect 
                a commitment to continuous learning, strategic thinking, and delivering exceptional 
                value to clients and partners. Each success builds upon the last, creating a 
                foundation for even greater accomplishments ahead.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Successful Projects</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">International Clients</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <p className="text-sm text-muted-foreground">Countries Reached</p>
                </div>
              </div>
              <Button size="lg">
                Connect With Me
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Achievements;