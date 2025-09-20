import { Card, CardContent } from "./ui/card";
import { Shield, Key, Clock, FileText, Database, Eye } from "lucide-react";

export function SecuritySection() {
  const securityFeatures = [
    {
      title: "JWT Authentication",
      description: "Role-based access control with secure token management",
      icon: Key,
      details: ["RS256 encryption", "Token rotation", "Role-based permissions", "Session management"]
    },
    {
      title: "Signed URLs",
      description: "Time-limited access to private media files",
      icon: Eye,
      details: ["Firebase signed URLs", "Expiration controls", "Access logging", "Permission validation"]
    },
    {
      title: "Rate Limiting",
      description: "Redis-powered API throttling and abuse prevention",
      icon: Clock,
      details: ["Per-user limits", "IP-based throttling", "Burst protection", "Sliding windows"]
    },
    {
      title: "Audit Logging",
      description: "Comprehensive activity tracking and compliance",
      icon: FileText,
      details: ["User actions", "API requests", "Data changes", "Security events"]
    },
    {
      title: "Data Encryption",
      description: "End-to-end encryption for sensitive information",
      icon: Database,
      details: ["AES-256 encryption", "TLS in transit", "Key rotation", "PII protection"]
    },
    {
      title: "Security Headers",
      description: "HTTP security headers and CORS protection",
      icon: Shield,
      details: ["CSRF protection", "XSS prevention", "CORS policies", "Content security"]
    }
  ];

  return (
    <section id="security" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Secure by Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade security measures protecting sensitive financial data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.details.map((detail) => (
                      <div key={detail} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
            <div className="text-sm text-muted-foreground">AES Encryption</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">&lt;100ms</div>
            <div className="text-sm text-muted-foreground">Auth Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">SOC 2</div>
            <div className="text-sm text-muted-foreground">Compliance</div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12">
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-accent mb-2">Security & Privacy Commitment</h4>
                  <p className="text-sm text-muted-foreground">
                    LoanTrack is designed with privacy-first principles. We implement industry-standard 
                    security measures and comply with financial data protection regulations. All sensitive 
                    data is encrypted, access is logged, and we maintain strict data retention policies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}