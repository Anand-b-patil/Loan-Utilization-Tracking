import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Separator } from '../ui/separator';
import { HelpCircle, FileText, Mail, MessageSquare } from 'lucide-react';

interface BeneficiaryHelpProps {
  onNavigate?: (path: string) => void;
}

export function BeneficiaryHelp({ onNavigate }: BeneficiaryHelpProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <HelpCircle className="h-7 w-7 text-amber-600" />
        <div>
          <h1>Help & Support</h1>
          <p className="text-muted-foreground">Guidelines, FAQs, and how to get assistance</p>
        </div>
      </div>

      <Alert>
        <AlertTitle>Having trouble with a submission?</AlertTitle>
        <AlertDescription>
          Make sure your invoice clearly shows vendor name, date, item description, and amount. The item must match your sanctioned list.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Submission Guidelines
            </CardTitle>
            <CardDescription>Key rules to get your proofs approved</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>Only purchase items sanctioned in your loan details.</li>
              <li>Upload clear scans/photos of invoices and payment receipts.</li>
              <li>Ensure totals and dates are readable and match payment method.</li>
              <li>One submission per purchase; avoid duplicates.</li>
              <li>Keep file size reasonable; use PDF or image formats.</li>
            </ul>
            <Separator />
            <div className="text-muted-foreground">
              Tip: Use the New Submission flow to get format guidance step-by-step.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              FAQs
            </CardTitle>
            <CardDescription>Common questions from beneficiaries</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <div className="font-medium">How long does review take?</div>
              <div className="text-muted-foreground">Typically 2-5 working days. You will be notified once reviewed.</div>
            </div>
            <div>
              <div className="font-medium">What if my item isn't listed?</div>
              <div className="text-muted-foreground">Contact your officer to request a sanctioned list update before purchase.</div>
            </div>
            <div>
              <div className="font-medium">My submission was rejected. What next?</div>
              <div className="text-muted-foreground">Check the reason, fix the document, and resubmit. You can ask for assistance.</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Need more help?
          </CardTitle>
          <CardDescription>Reach out to support or your loan officer</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            onClick={() => onNavigate?.('/b/submissions')}
          >
            View My Submissions
          </Button>
          <Button
            onClick={() => onNavigate?.('/b/submit')}
          >
            Start a New Submission
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
