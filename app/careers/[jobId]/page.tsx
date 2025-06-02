import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { JobApplicationForm } from "@/components/careers/job-application-form";

// This would come from your API/database in a real app
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
      "Mentor junior developers and contribute to technical decisions",
      "Participate in code reviews and maintain high code quality"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote-first culture with flexible hours",
      "Comprehensive health insurance",
      "401(k) matching",
      "Learning and development budget",
      "Regular team retreats"
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote (US)",
    type: "Full-time",
    description: "Lead the product strategy and execution for our investment platform. You'll work closely with engineering, design, and business teams to deliver features that drive user engagement and business growth.",
    requirements: [
      "5+ years of product management experience in fintech or consumer products",
      "Strong analytical and data-driven decision making skills",
      "Experience with agile methodologies and product lifecycle management",
      "Excellent communication and stakeholder management abilities",
      "Understanding of financial markets and investment products"
    ],
    responsibilities: [
      "Define and execute product strategy aligned with company goals",
      "Lead product discovery and prioritize feature development",
      "Work with engineering and design teams to deliver high-quality features",
      "Analyze user feedback and metrics to inform product decisions",
      "Create and maintain product roadmap"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote-first culture with flexible hours",
      "Comprehensive health insurance",
      "401(k) matching",
      "Professional development budget",
      "Regular team retreats"
    ]
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Help shape the future of personal finance by creating beautiful, intuitive interfaces that make investing accessible to everyone. You'll be responsible for the end-to-end design process of new features.",
    requirements: [
      "3+ years of experience in product design",
      "Strong portfolio demonstrating user-centered design process",
      "Experience with Figma and modern design tools",
      "Understanding of accessibility standards and best practices"
    ],
    responsibilities: [
      "Lead the design process from concept to implementation",
      "Create user flows, wireframes, and high-fidelity prototypes",
      "Conduct user research and usability testing",
      "Collaborate with engineers to ensure pixel-perfect implementation",
      "Maintain and evolve our design system"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote-first culture with flexible hours",
      "Comprehensive health insurance",
      "401(k) matching",
      "Design tool subscriptions and equipment budget",
      "Regular team retreats"
    ]
  },
  {
    id: "financial-content-writer",
    title: "Financial Content Writer",
    department: "Content",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Join our content team to create engaging, educational content that helps our users understand personal finance and investing. You'll be responsible for producing high-quality articles, guides, and educational materials.",
    requirements: [
      "3+ years of experience in financial writing or journalism",
      "Strong understanding of personal finance and investment concepts",
      "Excellent research and fact-checking skills",
      "Experience with SEO best practices",
      "Portfolio of published financial content"
    ],
    responsibilities: [
      "Create engaging educational content about personal finance and investing",
      "Write clear, accessible explanations of complex financial concepts",
      "Develop content strategies to support user education goals",
      "Collaborate with subject matter experts to ensure accuracy",
      "Maintain consistent brand voice across all content"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote-first culture with flexible hours",
      "Comprehensive health insurance",
      "401(k) matching",
      "Professional development budget",
      "Regular team retreats"
    ]
  }
];

export function generateStaticParams() {
  return jobListings.map((job) => ({
    jobId: job.id,
  }));
}

export default function JobDetailsPage({ params }: { params: { jobId: string } }) {
  const job = jobListings.find((j) => j.id === params.jobId);

  if (!job) {
    return <div>Job not found</div>;
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

      <div className="grid gap-6 md:grid-cols-3">
        {/* Job Details */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4">
                <CardTitle className="text-2xl">{job.title}</CardTitle>
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
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About the Role</h3>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    {job.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Form */}
        <div className="space-y-6">
          <JobApplicationForm jobTitle={job.title} jobId={job.id} />
        </div>
      </div>
    </div>
  );
}