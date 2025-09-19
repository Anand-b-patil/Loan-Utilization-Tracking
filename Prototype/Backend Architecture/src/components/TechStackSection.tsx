import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function TechStackSection() {
  const techStack = {
    "Core Backend": [
      { name: "FastAPI", description: "High-performance Python web framework" },
      { name: "PostgreSQL", description: "Reliable relational database" },
      { name: "Redis", description: "In-memory data store for caching" },
      { name: "Celery", description: "Distributed task queue" }
    ],
    "AI & ML": [
      { name: "PyTorch", description: "Deep learning framework" },
      { name: "OpenCV", description: "Computer vision library" },
      { name: "YOLO", description: "Real-time object detection" },
      { name: "ImageHash", description: "Perceptual image hashing" }
    ],
    "Storage & Cloud": [
      { name: "Firebase Storage", description: "Cloud file storage" },
      { name: "FCM", description: "Push notification service" },
      { name: "AWS S3", description: "Backup storage solution" },
      { name: "CDN", description: "Content delivery network" }
    ],
    "Infrastructure": [
      { name: "Docker", description: "Containerization platform" },
      { name: "Prometheus", description: "Monitoring and alerting" },
      { name: "Sentry", description: "Error tracking and performance" },
      { name: "GitHub Actions", description: "CI/CD automation" }
    ]
  };

  const getColorForCategory = (category: string) => {
    const colors = {
      "Core Backend": "bg-primary",
      "AI & ML": "bg-accent",
      "Storage & Cloud": "bg-purple-500",
      "Infrastructure": "bg-orange-500"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <section id="tech-stack" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern, scalable technologies powering our AI-driven backend infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category} className="space-y-4">
              <div className="flex items-center space-x-2 mb-6">
                <div className={`w-3 h-3 ${getColorForCategory(category)} rounded-full`} />
                <h3 className="font-semibold text-foreground">{category}</h3>
              </div>
              
              <div className="space-y-3">
                {technologies.map((tech) => (
                  <Card key={tech.name} className="group hover:shadow-md transition-all duration-200 hover:scale-105">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{tech.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          Active
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-primary/20">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg font-medium text-foreground mb-1">Technologies</div>
              <div className="text-sm text-muted-foreground">Integrated systems</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-accent/20">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-lg font-medium text-foreground mb-1">Reliability</div>
              <div className="text-sm text-muted-foreground">System uptime</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-purple-500/20">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-purple-500 mb-2">&lt;50ms</div>
              <div className="text-lg font-medium text-foreground mb-1">Response Time</div>
              <div className="text-sm text-muted-foreground">Average API latency</div>
            </CardContent>
          </Card>
        </div>

        {/* Architecture Layers */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Layered Architecture
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-l-primary">
              <span className="font-medium">Presentation Layer</span>
              <span className="text-sm text-muted-foreground">React Native, Web UI</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-l-accent">
              <span className="font-medium">API Gateway</span>
              <span className="text-sm text-muted-foreground">FastAPI, Authentication</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-l-purple-500">
              <span className="font-medium">Business Logic</span>
              <span className="text-sm text-muted-foreground">AI Workers, Processing</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-l-orange-500">
              <span className="font-medium">Data Layer</span>
              <span className="text-sm text-muted-foreground">PostgreSQL, Redis, Storage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}