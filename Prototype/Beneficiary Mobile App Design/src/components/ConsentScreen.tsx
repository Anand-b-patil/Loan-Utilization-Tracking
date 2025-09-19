import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Camera, Check } from "lucide-react";

interface ConsentScreenProps {
  onComplete: () => void;
}

export function ConsentScreen({ onComplete }: ConsentScreenProps) {
  const [locationGranted, setLocationGranted] = useState(false);
  const [cameraGranted, setCameraGranted] = useState(false);

  const handleLocationPermission = () => {
    // Simulate permission request
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setLocationGranted(true),
        () => setLocationGranted(true) // Allow even if denied for demo
      );
    } else {
      setLocationGranted(true);
    }
  };

  const handleCameraPermission = () => {
    // Simulate camera permission
    navigator.mediaDevices?.getUserMedia({ video: true })
      .then(() => setCameraGranted(true))
      .catch(() => setCameraGranted(true)); // Allow even if denied for demo
  };

  const canContinue = locationGranted && cameraGranted;

  return (
    <div className="flex flex-col min-h-screen bg-background px-6">
      {/* Header */}
      <div className="pt-8 pb-4">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Setup Permissions</h1>
          <p className="text-muted-foreground">
            We need these permissions to help you submit proofs
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4">
        {/* Location Permission */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <span>Location Access</span>
              {locationGranted && (
                <Check className="h-5 w-5 text-green-600 ml-auto" />
              )}
            </CardTitle>
            <CardDescription>
              We use your location to geo-tag your submissions and verify authenticity
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!locationGranted ? (
              <Button 
                onClick={handleLocationPermission}
                className="w-full"
                variant="outline"
              >
                Allow Location Access
              </Button>
            ) : (
              <div className="text-green-600 text-sm font-medium">
                ✓ Location permission granted
              </div>
            )}
          </CardContent>
        </Card>

        {/* Camera Permission */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Camera className="h-5 w-5 text-primary" />
              </div>
              <span>Camera & Media Access</span>
              {cameraGranted && (
                <Check className="h-5 w-5 text-green-600 ml-auto" />
              )}
            </CardTitle>
            <CardDescription>
              Access to camera and gallery to capture and upload proof photos/videos
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!cameraGranted ? (
              <Button 
                onClick={handleCameraPermission}
                className="w-full"
                variant="outline"
              >
                Allow Camera Access
              </Button>
            ) : (
              <div className="text-green-600 text-sm font-medium">
                ✓ Camera permission granted
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="text-sm text-blue-800">
              <div className="font-medium mb-2">Why we need these permissions:</div>
              <ul className="space-y-1 text-blue-700">
                <li>• Location helps verify where purchases were made</li>
                <li>• Camera allows you to capture proof photos/videos</li>
                <li>• All data is encrypted and secure</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="py-6">
        <Button 
          onClick={onComplete}
          disabled={!canContinue}
          className="w-full h-12 bg-primary hover:bg-primary/90"
          size="lg"
        >
          Continue to Dashboard
        </Button>
        {!canContinue && (
          <p className="text-center text-sm text-muted-foreground mt-2">
            Please grant both permissions to continue
          </p>
        )}
      </div>
    </div>
  );
}