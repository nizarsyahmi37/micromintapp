import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function PressPage() {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "GrowVest Launches Revolutionary Micro-Investment Platform",
      description: "GrowVest introduces a new social-first investment platform that makes investing accessible to everyone, starting from just $5.",
      link: "#"
    },
    {
      date: "March 1, 2024",
      title: "GrowVest Secures $10M in Seed Funding",
      description: "Leading venture capital firms back GrowVest's mission to democratize investing through innovative micro-investment technology.",
      link: "#"
    },
    {
      date: "February 15, 2024",
      title: "GrowVest Partners with Financial Education Providers",
      description: "Strategic partnerships aim to enhance financial literacy among young investors through interactive learning experiences.",
      link: "#"
    }
  ];

  const mediaKit = {
    brandAssets: [
      { name: "Logo Package", size: "12MB", format: "ZIP" },
      { name: "Brand Guidelines", size: "5MB", format: "PDF" },
      { name: "Product Screenshots", size: "25MB", format: "ZIP" }
    ],
    factSheet: {
      founded: "2024",
      headquarters: "San Francisco, CA",
      employees: "50+",
      activeUsers: "50,000+",
      totalInvested: "$5M+"
    }
  };

  const mediaContacts = {
    press: {
      name: "Sarah Johnson",
      role: "Head of Communications",
      email: "press@growvest.com",
      phone: "+1 (555) 123-4567"
    },
    partnerships: {
      name: "Michael Chen",
      role: "Business Development",
      email: "partnerships@growvest.com",
      phone: "+1 (555) 234-5678"
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
          <p className="text-lg text-muted-foreground">
            Get the latest news and updates about GrowVest's mission to make investing accessible to everyone.
          </p>
        </div>

        {/* Press Releases */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Recent Press Releases</h2>
          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">{release.date}</p>
                      <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                      <p className="text-muted-foreground">{release.description}</p>
                    </div>
                    <Button variant="outline" className="shrink-0" asChild>
                      <a href={release.link} target="_blank" rel="noopener noreferrer">
                        Read More
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Media Kit */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Media Kit</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Brand Assets</h3>
                  <ul className="space-y-3">
                    {mediaKit.brandAssets.map((asset, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{asset.name}</span>
                        <Button variant="outline" size="sm">
                          Download {asset.format}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Fact Sheet</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Founded</dt>
                      <dd className="font-medium">{mediaKit.factSheet.founded}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Headquarters</dt>
                      <dd className="font-medium">{mediaKit.factSheet.headquarters}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Employees</dt>
                      <dd className="font-medium">{mediaKit.factSheet.employees}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Active Users</dt>
                      <dd className="font-medium">{mediaKit.factSheet.activeUsers}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Total Invested</dt>
                      <dd className="font-medium">{mediaKit.factSheet.totalInvested}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Media Contacts */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Media Contacts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Press Inquiries</h3>
                <div className="space-y-2">
                  <p className="font-medium">{mediaContacts.press.name}</p>
                  <p className="text-muted-foreground">{mediaContacts.press.role}</p>
                  <p>
                    <a href={`mailto:${mediaContacts.press.email}`} className="text-primary hover:underline">
                      {mediaContacts.press.email}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{mediaContacts.press.phone}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Partnership Inquiries</h3>
                <div className="space-y-2">
                  <p className="font-medium">{mediaContacts.partnerships.name}</p>
                  <p className="text-muted-foreground">{mediaContacts.partnerships.role}</p>
                  <p>
                    <a href={`mailto:${mediaContacts.partnerships.email}`} className="text-primary hover:underline">
                      {mediaContacts.partnerships.email}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{mediaContacts.partnerships.phone}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="mt-12 text-sm text-muted-foreground text-center">
          <p>Note: GrowVest is a fictional micro-investment platform created for demonstration purposes.</p>
        </div>
      </div>
    </div>
  );
}