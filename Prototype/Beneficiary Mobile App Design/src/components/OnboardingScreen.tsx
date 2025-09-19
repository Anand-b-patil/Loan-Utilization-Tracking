import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface OnboardingScreenProps {
  onComplete: () => void;
  onBack: () => void;
}

const slides = [
  {
    icon: "🎯",
    title: "Track Your Loan Usage",
    description: "Keep track of how you're using your sanctioned loan amount with simple submissions"
  },
  {
    icon: "📸",
    title: "Simple & Secure Uploads",
    description: "Take photos or videos of your purchases with automatic location and time stamps"
  },
  {
    icon: "⚡",
    title: "Faster Approvals",
    description: "AI-powered verification helps speed up the approval process for your submissions"
  }
];

export function OnboardingScreen({ onComplete, onBack }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <Button variant="ghost" size="icon" onClick={handlePrev}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
        <div className="w-10" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-sm">
          {/* Icon */}
          <div className="text-8xl">
            {slides[currentSlide].icon}
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground">
            {slides[currentSlide].title}
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6">
        <Button 
          onClick={handleNext}
          className="w-full h-12 bg-primary hover:bg-primary/90"
          size="lg"
        >
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          {currentSlide < slides.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}