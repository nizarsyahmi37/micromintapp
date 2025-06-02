"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface JobApplicationFormProps {
  jobTitle: string;
  jobId: string;
}

export function JobApplicationForm({ jobTitle, jobId }: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Application Submitted",
      description: "We'll review your application and get back to you soon.",
    });

    setIsSubmitting(false);
  };

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>Apply for {jobTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume/CV</Label>
            <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
            <p className="text-xs text-muted-foreground">
              PDF, DOC, or DOCX files only
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
            <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover">Cover Letter</Label>
            <Textarea 
              id="cover" 
              placeholder="Tell us why you're interested in this role..."
              className="min-h-[150px]"
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}