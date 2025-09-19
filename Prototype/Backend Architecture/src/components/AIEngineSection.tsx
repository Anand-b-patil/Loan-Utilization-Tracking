import { Card, CardContent } from "./ui/card";
import { ArrowDown, FileImage, Eye, Shield, Hash, TrendingUp } from "lucide-react";

export function AIEngineSection() {
  const aiSteps = [
    {
      title: "Metadata & EXIF Validation",
      description: "Extracts and validates image metadata, EXIF data, and technical properties",
      icon: FileImage,
      details: ["GPS coordinates", "Camera settings", "Timestamp verification", "File integrity"],
      color: "bg-blue-500"
    },
    {
      title: "Object Detection (YOLO)",
      description: "Identifies and localizes objects within images using advanced neural networks",
      icon: Eye,
      details: ["Real-time detection", "Multi-object recognition", "Bounding box coordinates", "Confidence scoring"],
      color: "bg-purple-500"
    },
    {
      title: "Tamper Detection",
      description: "Advanced algorithms to detect digital manipulation and forgery",
      icon: Shield,
      details: ["CNN analysis", "ELA processing", "Copy-move detection", "Splicing identification"],
      color: "bg-orange-500"
    },
    {
      title: "Duplicate Detection",
      description: "Identifies similar or identical images using perceptual hashing",
      icon: Hash,
      details: ["ImageHash algorithms", "Similarity scoring", "Near-duplicate detection", "Database comparison"],
      color: "bg-green-500"
    },
    {
      title: "Risk Scoring",
      description: "Combines all analysis results into a comprehensive risk assessment",
      icon: TrendingUp,
      details: ["Weighted scoring", "Machine learning", "Confidence intervals", "Decision thresholds"],
      color: "bg-accent"
    }
  ];

  return (
    <section id="ai-engine" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Verification Pipeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multi-layered AI analysis ensuring document authenticity and fraud detection
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {aiSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.title} className="relative">
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {step.description}
                          </p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {step.details.map((detail) => (
                              <div key={detail} className="bg-secondary/50 px-3 py-1 rounded-full">
                                <span className="text-xs text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-primary font-semibold">
                          {index + 1}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Arrow */}
                  {index < aiSteps.length - 1 && (
                    <div className="flex justify-center my-6">
                      <div className="w-12 h-12 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center shadow-sm">
                        <ArrowDown className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Final Result */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Comprehensive Risk Assessment
                </h3>
                <p className="text-muted-foreground">
                  All verification results combined into a single confidence score for decision making
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}