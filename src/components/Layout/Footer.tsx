import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Business Development",
    "Bid Project Management",
    "WordPress Development",
    "Shopify Development",
    "SEO Optimization",
    "Digital Marketing",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+92 316 6953916</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">mhaammadkhan@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hammad@smartleading.net</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="flex space-x-2">
              <Button
                variant="secondary"
                size="icon"
                asChild
                className="h-10 w-10"
              >
                <a
                  href="https://www.linkedin.com/in/hammad-khan-660-mhk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                asChild
                className="h-10 w-10"
              >
                <a
                  href="mailto:mhaammadkhan@gmail.com"
                  aria-label="Send Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                asChild
                className="h-10 w-10"
              >
                <a
                  href="tel:+923166953916"
                  aria-label="Call Phone"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Let's collaborate on your next project! I specialize in business development, 
              project bidding, and creating exceptional digital experiences.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Muhammad Hammad Khan. All rights reserved. 
            Built with precision and passion for digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;