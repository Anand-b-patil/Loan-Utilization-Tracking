import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ChevronLeft, Filter, CheckCircle, Clock, AlertCircle, Eye } from "lucide-react";

interface SubmissionsScreenProps {
  onBack: () => void;
  onViewDetail: (submissionId: number) => void;
}

// Mock submissions data
const submissions = [
  {
    id: 1,
    title: "Industrial Machinery Purchase",
    date: "2024-01-15",
    amount: 125000,
    status: "approved",
    thumbnail: "🏭",
    location: "Industrial Area, Gurgaon",
    files: 3,
    aiScore: 0.95
  },
  {
    id: 2,
    title: "Raw Materials - Steel Sheets",
    date: "2024-01-10",
    amount: 75000,
    status: "under-review",
    thumbnail: "📦",
    location: "Steel Market, Delhi",
    files: 2,
    aiScore: 0.87
  },
  {
    id: 3,
    title: "Delivery Vehicle Purchase",
    date: "2024-01-08",
    amount: 200000,
    status: "flagged",
    thumbnail: "🚚",
    location: "Auto Market, Noida",
    files: 4,
    aiScore: 0.65
  },
  {
    id: 4,
    title: "Office Equipment",
    date: "2024-01-05",
    amount: 45000,
    status: "approved",
    thumbnail: "💻",
    location: "Electronics Market, CP",
    files: 2,
    aiScore: 0.92
  },
  {
    id: 5,
    title: "Warehouse Renovation",
    date: "2024-01-03",
    amount: 180000,
    status: "under-review",
    thumbnail: "🏗️",
    location: "Industrial Park, Faridabad",
    files: 6,
    aiScore: 0.78
  }
];

const statusConfig = {
  approved: { 
    color: "bg-green-100 text-green-800 border-green-200", 
    icon: CheckCircle, 
    label: "Approved",
    bgColor: "bg-green-50"
  },
  "under-review": { 
    color: "bg-yellow-100 text-yellow-800 border-yellow-200", 
    icon: Clock, 
    label: "Under Review",
    bgColor: "bg-yellow-50"
  },
  flagged: { 
    color: "bg-red-100 text-red-800 border-red-200", 
    icon: AlertCircle, 
    label: "Flagged",
    bgColor: "bg-red-50"
  },
  pending: { 
    color: "bg-gray-100 text-gray-800 border-gray-200", 
    icon: Clock, 
    label: "Pending",
    bgColor: "bg-gray-50"
  }
};

export function SubmissionsScreen({ onBack, onViewDetail }: SubmissionsScreenProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const filteredSubmissions = submissions.filter(submission => {
    if (activeFilter === "all") return true;
    return submission.status === activeFilter;
  });

  const getStatusCounts = () => {
    return {
      all: submissions.length,
      pending: submissions.filter(s => s.status === "pending").length,
      "under-review": submissions.filter(s => s.status === "under-review").length,
      approved: submissions.filter(s => s.status === "approved").length,
      flagged: submissions.filter(s => s.status === "flagged").length
    };
  };

  const statusCounts = getStatusCounts();

  const SubmissionCard = ({ submission }: { submission: typeof submissions[0] }) => {
    const StatusIcon = statusConfig[submission.status as keyof typeof statusConfig].icon;
    const config = statusConfig[submission.status as keyof typeof statusConfig];

    return (
      <Card className={`${config.bgColor} border-l-4`} style={{ borderLeftColor: config.color.includes('green') ? '#10b981' : config.color.includes('yellow') ? '#f59e0b' : config.color.includes('red') ? '#ef4444' : '#6b7280' }}>
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="text-3xl">{submission.thumbnail}</div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-foreground truncate pr-2">
                  {submission.title}
                </h3>
                <Badge className={config.color}>
                  <StatusIcon className="h-3 w-3 mr-1" />
                  {config.label}
                </Badge>
              </div>
              
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>{formatCurrency(submission.amount)}</p>
                <p>📍 {submission.location}</p>
                <div className="flex items-center justify-between">
                  <span>{submission.files} files • {submission.date}</span>
                  <span className="text-xs">
                    AI Score: {(submission.aiScore * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
            
            <Button 
              size="sm" 
              variant="ghost"
              onClick={() => onViewDetail(submission.id)}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="font-bold">My Submissions</h1>
            <p className="text-sm text-muted-foreground">
              {submissions.length} total submissions
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b">
        <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
          <TabsList className="grid grid-cols-5 w-full h-auto p-1 bg-transparent">
            <TabsTrigger 
              value="all" 
              className="flex flex-col space-y-1 h-auto py-2 data-[state=active]:bg-primary/10"
            >
              <span className="text-xs">All</span>
              <Badge variant="secondary" className="text-xs">
                {statusCounts.all}
              </Badge>
            </TabsTrigger>
            <TabsTrigger 
              value="under-review" 
              className="flex flex-col space-y-1 h-auto py-2 data-[state=active]:bg-yellow-100"
            >
              <span className="text-xs">Review</span>
              <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                {statusCounts["under-review"]}
              </Badge>
            </TabsTrigger>
            <TabsTrigger 
              value="approved" 
              className="flex flex-col space-y-1 h-auto py-2 data-[state=active]:bg-green-100"
            >
              <span className="text-xs">Approved</span>
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                {statusCounts.approved}
              </Badge>
            </TabsTrigger>
            <TabsTrigger 
              value="flagged" 
              className="flex flex-col space-y-1 h-auto py-2 data-[state=active]:bg-red-100"
            >
              <span className="text-xs">Flagged</span>
              <Badge variant="secondary" className="text-xs bg-red-100 text-red-800">
                {statusCounts.flagged}
              </Badge>
            </TabsTrigger>
            <TabsTrigger 
              value="pending" 
              className="flex flex-col space-y-1 h-auto py-2 data-[state=active]:bg-gray-100"
            >
              <span className="text-xs">Pending</span>
              <Badge variant="secondary" className="text-xs">
                {statusCounts.pending}
              </Badge>
            </TabsTrigger>
          </TabsList>
          
          {/* Content */}
          <TabsContent value={activeFilter} className="p-4 space-y-4 mt-0">
            {filteredSubmissions.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-medium mb-2">No submissions found</h3>
                <p className="text-sm text-muted-foreground">
                  {activeFilter === "all" 
                    ? "You haven't made any submissions yet"
                    : `No ${activeFilter.replace('-', ' ')} submissions found`
                  }
                </p>
              </div>
            ) : (
              <>
                {filteredSubmissions.map((submission) => (
                  <SubmissionCard key={submission.id} submission={submission} />
                ))}
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}