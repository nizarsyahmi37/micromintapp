import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobListings: JobListing[] = [
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
    ]
  },
  {
    id: "financial-content-writer",
    title: "Financial Content Writer",
    department: "Content",
    location: "Remote (Global)",
    type: "Contract",
    description: "Create engaging, educational content about investing, personal finance, and market trends for our learning platform and blog.",
    requirements: [
      "Proven experience writing about finance and investments",
      "Strong understanding of financial markets",
      "SEO and content strategy experience",
      "Portfolio of published financial content"
    ]
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote (US)",
    type: "Full-time",
    description: "Design beautiful, intuitive interfaces that make investing accessible to everyone. Work on our mobile and web platforms.",
    requirements: [
      "3+ years of product design experience",
      "Strong portfolio showing financial or complex data UIs",
      "Experience with design systems and component libraries",
      "User research and testing experience"
    ]
  }
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Join Our Mission</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Help us democratize investing and make financial growth accessible to everyone.
          We're looking for passionate individuals to join our team.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
            <p className="text-muted-foreground">
              We're building the future of investing. Bring your creative ideas and help us push boundaries.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">User Focused</h3>
            <p className="text-muted-foreground">
              Every decision we make starts with our users. Their success is our success.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Growth Mindset</h3>
            <p className="text-muted-foreground">
              We invest in our team's growth through mentorship, learning opportunities, and career development.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Open Positions */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
        <div className="space-y-6">
          {jobListings.map((job) => (
            <Card key={job.id} className="hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
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
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium">Requirements:</h4>
                      <ul className="list-disc pl-4 space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-muted-foreground">{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:ml-6">
                    <Button asChild>
                      <Link href={`/careers/${job.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-accent rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Join GrowVest?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Competitive Compensation</h3>
            <p className="text-sm text-muted-foreground">
              Salary, equity, and comprehensive benefits package
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Remote-First Culture</h3>
            <p className="text-sm text-muted-foreground">
              Work from anywhere with flexible hours
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Learning Budget</h3>
            <p className="text-sm text-muted-foreground">
              Annual allowance for courses and conferences
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Health & Wellness</h3>
            <p className="text-sm text-muted-foreground">
              Premium healthcare coverage and wellness programs
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Team Events</h3>
            <p className="text-sm text-muted-foreground">
              Regular virtual and in-person team gatherings
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Professional Growth</h3>
            <p className="text-sm text-muted-foreground">
              Mentorship and career development opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Don't see the right role?</h2>
        <p className="text-muted-foreground mb-6">
          We're always looking for talented individuals. Send your resume to{" "}
          <a href="mailto:careers@growvest.com" className="text-primary hover:underline">
            careers@growvest.com
          </a>
        </p>
        <div className="text-sm text-muted-foreground">
          <p>GrowVest is an equal opportunity employer.</p>
          <p>We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
        </div>
      </div>
    </div>
  );
}