import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";
import { ChevronLeft, MapPin, Camera, Upload, Check, AlertTriangle } from "lucide-react";

interface NewSubmissionFlowProps {
  onComplete: () => void;
  onBack: () => void;
}

export function NewSubmissionFlow({ onComplete, onBack }: NewSubmissionFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [location, setLocation] = useState<{lat: number, lng: number, address: string} | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [caption, setCaption] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;

  const handleLocationCapture = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            address: "123 Business District, City, State 110001" // Mock address
          });
          setCurrentStep(2);
        },
        () => {
          // Mock location for demo
          setLocation({
            lat: 28.6139,
            lng: 77.2090,
            address: "New Delhi, Delhi, India"
          });
          setCurrentStep(2);
        }
      );
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsSubmitting(false);
    onComplete();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Capture Location</span>
                </CardTitle>
                <CardDescription>
                  We need your current location to verify where the purchase was made
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!location ? (
                  <>
                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-gray-400" />
                    </div>
                    <Button onClick={handleLocationCapture} className="w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      Use My Current Location
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Make sure you're at the purchase location for accurate verification
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-full h-32 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Check className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="text-sm text-green-800">Location Captured</p>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Current Location:</p>
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>
                    <Button onClick={() => setCurrentStep(2)} className="w-full">
                      Continue to Upload
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Upload Photos/Videos</span>
                </CardTitle>
                <CardDescription>
                  Take clear photos or record a short video of your purchase
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Camera className="h-6 w-6" />
                    <span className="text-sm">Take Photo</span>
                  </Button>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="h-20 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center space-y-2 hover:border-primary">
                      <Upload className="h-6 w-6" />
                      <span className="text-sm">Choose Files</span>
                    </div>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {files.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Selected Files:</p>
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm truncate">{file.name}</span>
                        <Button size="sm" variant="ghost" onClick={() => removeFile(index)}>
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800 font-medium mb-1">Tips for better photos:</p>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Ensure good lighting</li>
                    <li>• Show the full item clearly</li>
                    <li>• Include any receipts or documentation</li>
                    <li>• Avoid blurry or dark images</li>
                  </ul>
                </div>

                <Button 
                  onClick={handleNext} 
                  disabled={files.length === 0}
                  className="w-full"
                >
                  Continue
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add Details</CardTitle>
                <CardDescription>
                  Provide additional information about your purchase
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Description (Optional)</label>
                  <Textarea
                    placeholder="Describe your purchase..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Invoice Number (Optional)</label>
                  <Input
                    placeholder="INV-2024-001"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button onClick={handleNext} className="w-full">
                  Continue
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Review & Consent</CardTitle>
                <CardDescription>
                  Please review your submission before submitting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Location:</p>
                    <p className="text-sm text-muted-foreground">{location?.address}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Files:</p>
                    <p className="text-sm text-muted-foreground">{files.length} file(s) selected</p>
                  </div>
                  
                  {caption && (
                    <div>
                      <p className="text-sm font-medium">Description:</p>
                      <p className="text-sm text-muted-foreground">{caption}</p>
                    </div>
                  )}
                  
                  {invoiceNumber && (
                    <div>
                      <p className="text-sm font-medium">Invoice Number:</p>
                      <p className="text-sm text-muted-foreground">{invoiceNumber}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-start space-x-2 pt-4">
                  <Checkbox 
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                  />
                  <label htmlFor="consent" className="text-sm leading-5">
                    I certify that the information and documents provided are accurate and authentic. 
                    I understand that false information may result in loan penalties.
                  </label>
                </div>

                <Button 
                  onClick={handleNext} 
                  disabled={!consent}
                  className="w-full"
                >
                  Submit for Review
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Submitting...</CardTitle>
                <CardDescription>
                  Please wait while we upload your submission
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isSubmitting ? (
                  <>
                    <div className="flex items-center justify-center py-8">
                      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Uploading files...</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="w-full" />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      This may take a few moments depending on file size
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-center py-8">
                      <Check className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Submission Complete!</h3>
                      <p className="text-muted-foreground">
                        Your submission has been uploaded and is now under AI review.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-800">
                        You'll receive an update within 24 hours. Most submissions are reviewed instantly by our AI system.
                      </p>
                    </div>
                    <Button onClick={onComplete} className="w-full">
                      View My Submissions
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  // Auto-submit when reaching step 5
  if (currentStep === 5 && !isSubmitting && files.length > 0) {
    handleSubmit();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="text-center">
          <h1 className="font-medium">New Submission</h1>
          <p className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</p>
        </div>
        <div className="w-10" />
      </div>

      {/* Progress */}
      <div className="px-4 py-2">
        <Progress value={(currentStep / totalSteps) * 100} className="w-full" />
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        {renderStep()}
      </div>
    </div>
  );
}