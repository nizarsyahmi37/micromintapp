import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowLeft } from "lucide-react";
import Link from "next/link";

// This would typically come from your API/database
const jobListings = [
  {
    id: "senior-full-stack-developer",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Join our core engineering team to build and scale our micro-investment platform. You'll work on critical features that help thousands of users build wealth.",
    requirements: [
      "5+ years of experience with React, Node.js, and TypeScript",
      "Experience with financial technology or trading systems",
      "Strong understanding of security and data privacy",
      "Track record of mentoring junior developers"
    ],
    responsibilities: [
      "Design and implement new features for our investment platform",
      "Optimize application performance and scalability",
      "Collaborate with product and design teams",
      "Mentor junior developers and contribute to technical decisions"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote-first work environment",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Learning and development budget"
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    description: "Lead product strategy and execution for our investment features. Work closely with users, engineers, and stakeholders to deliver impactful solutions.",
    requirements: [
      "3+ years of product management experience",
      "Background in fintech or investment products",
      "Strong analytical and data-driven decision making",
      "Excellent communication and stakeholder management"
    ],
    responsibilities: [
      "Define product strategy and roadmap",
      "Conduct user research and gather requirements",
      "Work with engineering to deliver features",
      "Analyze metrics and make data-driven decisions"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Flexible work location",
      "Comprehensive benefits package",
      "Professional development opportunities"
    ]
  }
];

export default function JobPage({ params }: { params: { jobId: string } }) {
  const job = jobListings.find(j => j.id === params.jobId);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The job posting you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/careers">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/careers"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Careers
        </Link>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">{job.title}</CardTitle>
              <CardDescription className="mt-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Briefcase className="h-3 w-3" />
                    {job.department}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {job.type}
                  </Badge>
                </div>
              </CardDescription>
            </div>
            <Button size="lg">Apply Now</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground">{job.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="text-muted-foreground">{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="text-muted-foreground">{resp}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Benefits</h3>
              <ul className="list-disc pl-6 space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="text-muted-foreground">{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Ready to Join Our Team?</h2>
            <p className="text-muted-foreground mb-4">
              We're looking for passionate individuals who want to help democratize investing.
            </p>
            <Button size="lg">Apply for this Position</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}