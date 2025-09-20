import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Upload, Database, Cpu, Shield, CheckCircle, Download, Code } from "lucide-react";

export function ApiFlowSection() {
  const steps = [
    {
      number: 1,
      title: "User Upload",
      description: "Photo/video submission via mobile app",
      icon: Upload,
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: "Firebase Storage",
      description: "Secure media storage with signed URLs",
      icon: Database,
      color: "bg-purple-500"
    },
    {
      number: 3,
      title: "AI Processing",
      description: "Automated verification pipeline",
      icon: Cpu,
      color: "bg-green-500"
    },
    {
      number: 4,
      title: "Risk Assessment",
      description: "ML-based scoring algorithm",
      icon: Shield,
      color: "bg-orange-500"
    },
    {
      number: 5,
      title: "Officer Review",
      description: "Human verification and approval",
      icon: CheckCircle,
      color: "bg-accent"
    }
  ];

  const apiExample = `{
  "submission_id": "sub_123456",
  "status": "processing",
  "risk_score": 0.85,
  "verification_checks": {
    "metadata_valid": true,
    "tamper_detected": false,
    "duplicate_found": false
  },
  "created_at": "2025-01-19T10:30:00Z"
}`;

  return (
    <section id="api" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Submission Lifecycle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From upload to approval: a seamless verification pipeline
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {step.number}
                      </span>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 mt-12 w-0.5 h-6 bg-border" />
                  )}
                </div>
              );
            })}
          </div>

          {/* API Example */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground flex items-center">
                    <Code className="w-5 h-5 mr-2 text-primary" />
                    API Response Example
                  </h3>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                    JSON
                  </span>
                </div>
                <pre className="bg-secondary p-4 rounded-lg text-sm overflow-x-auto">
                  <code className="text-foreground">{apiExample}</code>
                </pre>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                <Code className="w-4 h-4 mr-2" />
                OpenAPI Docs
              </Button>
              <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-white">
                <Download className="w-4 h-4 mr-2" />
                Postman Collection
              </Button>
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-4">
                <h4 className="font-medium text-accent mb-2">Rate Limits</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Authentication: 1000 requests/hour</li>
                  <li>• File uploads: 100 MB/request</li>
                  <li>• Webhook delivery: 99.9% SLA</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}