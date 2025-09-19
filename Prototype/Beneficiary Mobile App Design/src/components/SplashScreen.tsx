import { Button } from "./ui/button";

interface SplashScreenProps {
  onGetStarted: () => void;
}

export function SplashScreen({ onGetStarted }: SplashScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-6">
      <div className="flex flex-col items-center space-y-8 text-center">
        {/* Logo */}
        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
          <span className="text-white text-2xl font-bold">LT</span>
        </div>
        
        {/* Title and Tagline */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">LoanTrack</h1>
          <p className="text-muted-foreground text-lg">Track your loan usage with ease</p>
        </div>
        
        {/* Illustration placeholder */}
        <div className="w-64 h-48 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
          <div className="text-primary text-6xl">📱</div>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground max-w-sm">
          Simple and secure way to submit proof of your loan utilization with AI-powered verification
        </p>
        
        {/* Get Started Button */}
        <Button 
          onClick={onGetStarted}
          className="w-full max-w-sm h-12 bg-primary hover:bg-primary/90"
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}