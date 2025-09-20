import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Download, Code, Book, Github, FileText } from "lucide-react";

export function DocumentationSection() {
  const documentationLinks = [
    {
      title: "OpenAPI Documentation",
      description: "Interactive API documentation with live testing capabilities",
      icon: Code,
      buttonText: "View API Docs",
      buttonIcon: ExternalLink,
      buttonVariant: "default" as const,
      url: "https://api.loantrack.dev/docs"
    },
    {
      title: "Postman Collection",
      description: "Ready-to-use API collection for testing and integration",
      icon: Download,
      buttonText: "Download Collection",
      buttonIcon: Download,
      buttonVariant: "outline" as const,
      url: "/api/postman-collection"
    }
  ];

  const additionalResources = [
    {
      title: "GitHub Repository",
      description: "Source code and development resources",
      icon: Github,
      link: "https://github.com/loantrack/backend"
    },
    {
      title: "API Reference Guide",
      description: "Comprehensive integration documentation",
      icon: Book,
      link: "/docs/api-reference"
    },
    {
      title: "Security Guidelines",
      description: "Best practices for secure integration",
      icon: FileText,
      link: "/docs/security"
    }
  ];

  return (
    <section id="docs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documentation & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to integrate with our AI-powered backend system
          </p>
        </div>

        {/* Main Documentation Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {documentationLinks.map((doc) => {
            const IconComponent = doc.icon;
            const ButtonIconComponent = doc.buttonIcon;
            return (
              <Card key={doc.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {doc.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {doc.description}
                  </p>

                  <Button 
                    variant={doc.buttonVariant}
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open(doc.url, '_blank')}
                  >
                    <ButtonIconComponent className="w-5 h-5 mr-2" />
                    {doc.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div>
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Additional Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <Card key={resource.title} className="group hover:shadow-md transition-all duration-200 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {resource.title}
                        </h4>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Quick Start Integration
                </h3>
                <p className="text-muted-foreground">
                  Get up and running with our API in just a few steps
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto font-semibold">
                    1
                  </div>
                  <h4 className="font-medium text-foreground">Get API Key</h4>
                  <p className="text-sm text-muted-foreground">Register and obtain your API credentials</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto font-semibold">
                    2
                  </div>
                  <h4 className="font-medium text-foreground">Test Endpoints</h4>
                  <p className="text-sm text-muted-foreground">Use Postman collection to test API calls</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto font-semibold">
                    3
                  </div>
                  <h4 className="font-medium text-foreground">Integrate</h4>
                  <p className="text-sm text-muted-foreground">Follow our documentation to integrate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}