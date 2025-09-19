import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Plus, IndianRupee, Clock, CheckCircle, AlertCircle, X, Home, FileText, HelpCircle, User } from "lucide-react";

interface DashboardProps {
  onNewSubmission: () => void;
  onViewSubmissions: () => void;
}

// Mock data
const loanData = {
  amount: 500000,
  sanctionedItems: ["Machinery", "Raw Materials", "Equipment", "Vehicles"],
  status: "Active"
};

const recentSubmissions = [
  {
    id: 1,
    title: "Machinery Purchase",
    date: "2024-01-15",
    amount: 125000,
    status: "approved",
    thumbnail: "🏭"
  },
  {
    id: 2,
    title: "Raw Materials",
    date: "2024-01-10",
    amount: 75000,
    status: "under-review",
    thumbnail: "📦"
  },
  {
    id: 3,
    title: "Vehicle Purchase",
    date: "2024-01-08",
    amount: 200000,
    status: "flagged",
    thumbnail: "🚚"
  }
];

const statusConfig = {
  approved: { color: "bg-green-100 text-green-800", icon: CheckCircle, label: "Approved" },
  "under-review": { color: "bg-yellow-100 text-yellow-800", icon: Clock, label: "Under Review" },
  flagged: { color: "bg-red-100 text-red-800", icon: AlertCircle, label: "Flagged" },
  pending: { color: "bg-gray-100 text-gray-800", icon: Clock, label: "Pending Upload" }
};

export function Dashboard({ onNewSubmission, onViewSubmissions }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("home");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const HomeTab = () => (
    <div className="space-y-6 p-4">
      {/* Loan Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <IndianRupee className="h-5 w-5" />
            <span>Your Loan</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Sanctioned Amount</p>
            <p className="text-2xl font-bold">{formatCurrency(loanData.amount)}</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-2">Approved Items</p>
            <div className="flex flex-wrap gap-2">
              {loanData.sanctionedItems.map((item, index) => (
                <Badge key={index} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <Badge className="bg-green-100 text-green-800">
                {loanData.status}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* New Submission CTA */}
      <Button 
        onClick={onNewSubmission}
        className="w-full h-14 bg-primary hover:bg-primary/90 text-lg"
      >
        <Plus className="mr-2 h-5 w-5" />
        New Submission
      </Button>

      {/* Recent Submissions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Submissions</CardTitle>
          <Button variant="ghost" size="sm" onClick={onViewSubmissions}>
            View All
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentSubmissions.map((submission) => {
            const StatusIcon = statusConfig[submission.status as keyof typeof statusConfig].icon;
            return (
              <div key={submission.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className="text-2xl">{submission.thumbnail}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{submission.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatCurrency(submission.amount)} • {submission.date}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <StatusIcon className="h-4 w-4 text-muted-foreground" />
                  <Badge className={statusConfig[submission.status as keyof typeof statusConfig].color}>
                    {statusConfig[submission.status as keyof typeof statusConfig].label}
                  </Badge>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Status Legend */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-sm">Status Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>🟢 Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>🟡 Under Review</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>🔴 Flagged</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span>⚪ Pending Upload</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const SubmissionsTab = () => (
    <div className="p-4">
      <div className="text-center py-8">
        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="font-medium mb-2">View All Submissions</h3>
        <p className="text-sm text-muted-foreground mb-4">
          See detailed history of all your submissions
        </p>
        <Button onClick={onViewSubmissions}>
          Go to Submissions
        </Button>
      </div>
    </div>
  );

  const HelpTab = () => (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium">How do I submit proof?</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Tap "New Submission", capture location, upload photos/videos, and submit for review.
            </p>
          </div>
          <div>
            <h4 className="font-medium">What makes a good photo?</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Clear, well-lit photos showing the full item with any receipts or documentation visible.
            </p>
          </div>
          <div>
            <h4 className="font-medium">How long does review take?</h4>
            <p className="text-sm text-muted-foreground mt-1">
              AI review is instant. Manual review (if needed) takes 1-3 business days.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full" variant="outline">
            📞 Call Support
          </Button>
          <Button className="w-full" variant="outline">
            💬 WhatsApp Support
          </Button>
          <Button className="w-full" variant="outline">
            ✉️ Email Support
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const ProfileTab = () => (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="font-medium">Rajesh Kumar</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">rajesh.kumar@email.com</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium">+91 98765 43210</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Loan Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Total Sanctioned</span>
              <span className="font-medium">{formatCurrency(loanData.amount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Submissions Made</span>
              <span className="font-medium">{recentSubmissions.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Status</span>
              <Badge className="bg-green-100 text-green-800">{loanData.status}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-3">
        <Button className="w-full" variant="outline">
          Language Settings
        </Button>
        <Button className="w-full" variant="outline">
          App Version: 1.0.0
        </Button>
        <Button className="w-full" variant="destructive">
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3">
        <h1 className="text-xl font-bold">LoanTrack</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
          <TabsContent value="home" className="flex-1 overflow-y-auto m-0">
            <HomeTab />
          </TabsContent>
          <TabsContent value="submissions" className="flex-1 overflow-y-auto m-0">
            <SubmissionsTab />
          </TabsContent>
          <TabsContent value="help" className="flex-1 overflow-y-auto m-0">
            <HelpTab />
          </TabsContent>
          <TabsContent value="profile" className="flex-1 overflow-y-auto m-0">
            <ProfileTab />
          </TabsContent>

          {/* Bottom Navigation */}
          <TabsList className="grid grid-cols-4 h-16 bg-white border-t rounded-none">
            <TabsTrigger 
              value="home" 
              className="flex flex-col space-y-1 h-full data-[state=active]:bg-primary/10"
            >
              <Home className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </TabsTrigger>
            <TabsTrigger 
              value="submissions" 
              className="flex flex-col space-y-1 h-full data-[state=active]:bg-primary/10"
            >
              <FileText className="h-5 w-5" />
              <span className="text-xs">Submissions</span>
            </TabsTrigger>
            <TabsTrigger 
              value="help" 
              className="flex flex-col space-y-1 h-full data-[state=active]:bg-primary/10"
            >
              <HelpCircle className="h-5 w-5" />
              <span className="text-xs">Help</span>
            </TabsTrigger>
            <TabsTrigger 
              value="profile" 
              className="flex flex-col space-y-1 h-full data-[state=active]:bg-primary/10"
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Profile</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}