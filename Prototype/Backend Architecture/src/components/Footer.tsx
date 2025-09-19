import { Separator } from "./ui/separator";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/loantrack"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com/company/loantrack"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/loantrack"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:team@loantrack.dev"
    }
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "API Documentation", url: "/docs" },
        { name: "Postman Collection", url: "/postman" },
        { name: "Status Page", url: "/status" },
        { name: "Changelog", url: "/changelog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "GitHub Repository", url: "https://github.com/loantrack" },
        { name: "Integration Guide", url: "/docs/integration" },
        { name: "Security", url: "/docs/security" },
        { name: "Support", url: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", url: "/about" },
        { name: "Team", url: "/team" },
        { name: "Careers", url: "/careers" },
        { name: "Contact", url: "/contact" }
      ]
    }
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary">LoanTrack</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI-powered backend infrastructure for secure loan processing and document verification. 
              Built for hackathons, designed for enterprise.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} LoanTrack. Built for SIH 2025. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Project Attribution */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              🏆 <strong>Smart India Hackathon 2025</strong>
            </p>
            <p className="text-xs text-muted-foreground">
              Team: Backend Engineering • Role: AI Infrastructure & API Development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}