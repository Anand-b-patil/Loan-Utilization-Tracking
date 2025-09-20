import { Card, CardContent } from "./ui/card";
import { Database, Server, Cloud, Cpu, Users, ArrowRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export function ArchitectureSection() {
  const components = [
    {
      id: "client",
      title: "Client Apps",
      description: "React Native & Web Frontend",
      icon: Users,
      tech: "React Native, React.js",
      position: "col-start-1 row-start-1"
    },
    {
      id: "api",
      title: "FastAPI Gateway",
      description: "RESTful API Layer",
      icon: Server,
      tech: "FastAPI, Python, Uvicorn",
      position: "col-start-2 row-start-1"
    },
    {
      id: "database",
      title: "PostgreSQL",
      description: "Primary Database",
      icon: Database,
      tech: "PostgreSQL, SQLAlchemy",
      position: "col-start-3 row-start-1"
    },
    {
      id: "redis",
      title: "Redis Cache",
      description: "Session & Rate Limiting",
      icon: Database,
      tech: "Redis, Celery Broker",
      position: "col-start-4 row-start-1"
    },
    {
      id: "storage",
      title: "Firebase Storage",
      description: "Media & Document Storage",
      icon: Cloud,
      tech: "Firebase Storage, CDN",
      position: "col-start-1 row-start-2"
    },
    {
      id: "ai-worker",
      title: "AI Worker",
      description: "Celery Background Tasks",
      icon: Cpu,
      tech: "PyTorch, OpenCV, YOLO",
      position: "col-start-2 row-start-2"
    },
    {
      id: "dashboard",
      title: "Officer Dashboard",
      description: "Admin Interface",
      icon: Users,
      tech: "React.js, Real-time Updates",
      position: "col-start-3 row-start-2"
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            High-Level Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A distributed system designed for scalability, security, and AI-powered verification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <TooltipProvider>
            {components.map((component) => {
              const IconComponent = component.icon;
              return (
                <Tooltip key={component.id}>
                  <TooltipTrigger asChild>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {component.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {component.description}
                        </p>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">{component.tech}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>

        {/* Data Flow Visualization */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-center mb-8">Data Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Client</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Server className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">FastAPI</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">AI Worker</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Database className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Database</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}