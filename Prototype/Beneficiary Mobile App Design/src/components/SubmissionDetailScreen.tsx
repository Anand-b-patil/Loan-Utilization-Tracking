import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ChevronLeft, MapPin, Calendar, IndianRupee, FileText, Brain, CheckCircle, AlertCircle, Clock, ZoomIn } from "lucide-react";

interface SubmissionDetailScreenProps {
  submissionId: number;
  onBack: () => void;
}

// Mock submission detail data
const submissionDetail = {
  id: 1,
  title: "Industrial Machinery Purchase",
  amount: 125000,
  status: "approved",
  date: "2024-01-15",
  location: {
    address: "Sector 18, Industrial Area, Gurgaon, Haryana 122015",
    coordinates: { lat: 28.4595, lng: 77.0266 }
  },
  description: "Heavy-duty industrial machinery for manufacturing unit expansion including conveyor belts and processing equipment.",
  invoiceNumber: "INV-2024-001",
  files: [
    { type: "image", name: "machinery_front_view.jpg", url: "📷" },
    { type: "image", name: "invoice_receipt.jpg", url: "🧾" },
    { type: "video", name: "machinery_operation.mp4", url: "🎥" }
  ],
  aiAnalysis: {
    overallScore: 0.95,
    objectMatch: 0.98,
    locationVerified: 0.94,
    tamperDetection: 0.97,
    timestamp: "2024-01-15T10:30:00Z",
    confidence: "High"
  },
  timeline: [
    { step: "Submitted", date: "2024-01-15 10:30 AM", status: "completed" },
    { step: "AI Analysis", date: "2024-01-15 10:31 AM", status: "completed" },
    { step: "Human Review", date: "2024-01-15 02:15 PM", status: "completed" },
    { step: "Approved", date: "2024-01-15 02:30 PM", status: "completed" }
  ],
  reviewNotes: "Submission approved. All documentation verified and location confirmed. Machinery matches loan purpose."
};

const statusConfig = {
  approved: { color: "bg-green-100 text-green-800", icon: CheckCircle, label: "Approved" },
  "under-review": { color: "bg-yellow-100 text-yellow-800", icon: Clock, label: "Under Review" },
  flagged: { color: "bg-red-100 text-red-800", icon: AlertCircle, label: "Flagged" },
  pending: { color: "bg-gray-100 text-gray-800", icon: Clock, label: "Pending" }
};

export function SubmissionDetailScreen({ submissionId, onBack }: SubmissionDetailScreenProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const StatusIcon = statusConfig[submissionDetail.status as keyof typeof statusConfig].icon;
  const config = statusConfig[submissionDetail.status as keyof typeof statusConfig];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="font-bold">Submission Details</h1>
            <p className="text-sm text-muted-foreground">ID: #{submissionId}</p>
          </div>
        </div>
        <Badge className={config.color}>
          <StatusIcon className="h-3 w-3 mr-1" />
          {config.label}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{submissionDetail.title}</span>
              <span className="text-lg">{formatCurrency(submissionDetail.amount)}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{submissionDetail.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span>{submissionDetail.files.length} files</span>
              </div>
            </div>
            
            {submissionDetail.description && (
              <div>
                <p className="font-medium text-sm mb-1">Description:</p>
                <p className="text-sm text-muted-foreground">{submissionDetail.description}</p>
              </div>
            )}
            
            {submissionDetail.invoiceNumber && (
              <div>
                <p className="font-medium text-sm mb-1">Invoice Number:</p>
                <p className="text-sm text-muted-foreground">{submissionDetail.invoiceNumber}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Location */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Map View</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{submissionDetail.location.address}</p>
            </div>
          </CardContent>
        </Card>

        {/* Media Files */}
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              {submissionDetail.files.map((file, index) => (
                <div key={index} className="relative">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                    {file.url}
                  </div>
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="absolute top-2 right-2 w-6 h-6 p-0"
                  >
                    <ZoomIn className="h-3 w-3" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1 truncate">{file.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5" />
              <span>AI Analysis</span>
              <Badge variant="secondary">{submissionDetail.aiAnalysis.confidence} Confidence</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Overall Score</span>
                  <span>{(submissionDetail.aiAnalysis.overallScore * 100).toFixed(0)}%</span>
                </div>
                <Progress value={submissionDetail.aiAnalysis.overallScore * 100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Object Recognition</span>
                  <span>{(submissionDetail.aiAnalysis.objectMatch * 100).toFixed(0)}%</span>
                </div>
                <Progress value={submissionDetail.aiAnalysis.objectMatch * 100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Location Verification</span>
                  <span>{(submissionDetail.aiAnalysis.locationVerified * 100).toFixed(0)}%</span>
                </div>
                <Progress value={submissionDetail.aiAnalysis.locationVerified * 100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Authenticity Check</span>
                  <span>{(submissionDetail.aiAnalysis.tamperDetection * 100).toFixed(0)}%</span>
                </div>
                <Progress value={submissionDetail.aiAnalysis.tamperDetection * 100} className="h-2" />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>AI Summary:</strong> High-quality submission with clear documentation. 
                Object matches approved loan category. Location and timing verified. 
                No signs of tampering detected.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Review Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {submissionDetail.timeline.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{step.step}</p>
                    <p className="text-xs text-muted-foreground">{step.date}</p>
                  </div>
                  {step.status === 'completed' && (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Review Notes */}
        {submissionDetail.reviewNotes && (
          <Card>
            <CardHeader>
              <CardTitle>Review Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{submissionDetail.reviewNotes}</p>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        {submissionDetail.status === 'flagged' && (
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Action Required</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-red-700">
                This submission has been flagged for manual review. Please provide additional documentation:
              </p>
              <ul className="text-sm text-red-700 space-y-1 ml-4">
                <li>• Clearer photos of the purchased item</li>
                <li>• Original invoice or receipt</li>
                <li>• Proof of delivery or installation</li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Upload Additional Documents
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}