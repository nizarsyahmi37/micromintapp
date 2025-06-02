import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Trophy, ArrowLeft } from "lucide-react";
import Link from "next/link";

// This is required for static site generation with dynamic routes
export function generateStaticParams() {
  // Generate params for challenges 1-7 (all active challenges)
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" }
  ];
}

export default function ChallengePage({ params }: { params: { id: string } }) {
  // This would come from your API/database in a real app
  const challenge = {
    id: parseInt(params.id),
    title: "Monthly Micro-Investor",
    description: "Invest a minimum of $10 each week for the entire month",
    progress: 75,
    participants: 248,
    reward: "$5 bonus investment",
    daysLeft: 7,
    rules: [
      "Make at least one $10 investment every week",
      "Maintain your investment streak for the entire month",
      "Complete educational modules about consistent investing",
      "Share your progress with the community"
    ],
    milestones: [
      { title: "Week 1 Investment", completed: true },
      { title: "Week 2 Investment", completed: true },
      { title: "Week 3 Investment", completed: true },
      { title: "Week 4 Investment", completed: false }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/challenges"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Challenges
        </Link>
      </div>

      <div className="grid gap-6">
        {/* Challenge Overview */}
        <Card>
          <CardHeader>
            <CardTitle>{challenge.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">{challenge.description}</p>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{challenge.progress}%</span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm">{challenge.participants} participants</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm">{challenge.daysLeft} days left</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium">{challenge.reward}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenge Rules */}
        <Card>
          <CardHeader>
            <CardTitle>Challenge Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {challenge.rules.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-muted-foreground">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card>
          <CardHeader>
            <CardTitle>Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {challenge.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${milestone.completed ? 'bg-primary' : 'bg-muted'}`} />
                    <span>{milestone.title}</span>
                  </div>
                  <Badge variant={milestone.completed ? "default" : "outline"}>
                    {milestone.completed ? "Completed" : "Pending"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button className="flex-1">Continue Challenge</Button>
          <Button variant="outline" className="flex-1">View Leaderboard</Button>
        </div>
      </div>
    </div>
  );
}