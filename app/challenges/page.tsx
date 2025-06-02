"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock, Target, Sparkles, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { LeaderboardView } from "./leaderboard";

export default function ChallengesPage() {
  const [activeTab, setActiveTab] = useState("active");

  const challenges = {
    active: [
      {
        id: 1,
        title: "Monthly Micro-Investor",
        description: "Invest a minimum of $10 each week for the entire month",
        progress: 75,
        participants: 248,
        reward: "$5 bonus investment",
        daysLeft: 7,
        category: "Consistency",
        icon: <Target className="h-5 w-5" />
      },
      {
        id: 2,
        title: "Diversification Master",
        description: "Add 3 different types of assets to your portfolio",
        progress: 33,
        participants: 156,
        reward: "Premium insights for 1 week",
        daysLeft: 14,
        category: "Portfolio",
        icon: <Target className="h-5 w-5" />
      },
      {
        id: 3,
        title: "Community Mentor",
        description: "Help 5 new investors by sharing your knowledge",
        progress: 60,
        participants: 92,
        reward: "Mentor badge + $10 bonus",
        daysLeft: 21,
        category: "Social",
        icon: <Users className="h-5 w-5" />
      }
    ],
    completed: [
      {
        id: 4,
        title: "First Investment",
        description: "Make your first investment of any amount",
        progress: 100,
        participants: 1543,
        reward: "Beginner badge",
        completedDate: "Mar 15, 2024",
        category: "Milestone",
        icon: <Award className="h-5 w-5" />
      },
      {
        id: 5,
        title: "Goal Setter",
        description: "Create and track 3 investment goals",
        progress: 100,
        participants: 876,
        reward: "Strategic badge",
        completedDate: "Mar 10, 2024",
        category: "Planning",
        icon: <Target className="h-5 w-5" />
      }
    ],
    upcoming: [
      {
        id: 6,
        title: "AI Strategy Master",
        description: "Follow AI recommendations for 30 days",
        startDate: "Apr 1, 2024",
        estimatedParticipants: 450,
        reward: "$20 bonus + AI badge",
        duration: "30 days",
        category: "Technology",
        icon: <Sparkles className="h-5 w-5" />
      },
      {
        id: 7,
        title: "Portfolio Builder",
        description: "Reach $1000 in total investments",
        startDate: "Apr 15, 2024",
        estimatedParticipants: 320,
        reward: "Builder badge + Premium features",
        duration: "No time limit",
        category: "Milestone",
        icon: <Target className="h-5 w-5" />
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Investment Challenges</h1>
          <p className="text-muted-foreground">
            Complete challenges to earn rewards and improve your investment strategy
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">248</span> active participants
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Trophy className="mr-2 h-4 w-4" />
                View Leaderboard
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px]">
              <DialogHeader>
                <DialogTitle>Challenge Leaderboard</DialogTitle>
                <DialogDescription>
                  Top performers in our investment challenges
                </DialogDescription>
              </DialogHeader>
              <LeaderboardView />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="active">
            Active
            <Badge variant="secondary" className="ml-2">{challenges.active.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed
            <Badge variant="secondary" className="ml-2">{challenges.completed.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="upcoming">
            Upcoming
            <Badge variant="secondary" className="ml-2">{challenges.upcoming.length}</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.active.map((challenge) => (
              <Card key={challenge.id} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Badge>{challenge.category}</Badge>
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {challenge.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{challenge.description}</p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.daysLeft} days left</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{challenge.reward}</span>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={`/challenges/${challenge.id}`}>Continue Challenge</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.completed.map((challenge) => (
              <Card key={challenge.id} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Badge variant="secondary">{challenge.category}</Badge>
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {challenge.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{challenge.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Completed {challenge.completedDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{challenge.reward}</span>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/challenges/${challenge.id}`}>View Certificate</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.upcoming.map((challenge) => (
              <Card key={challenge.id} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Badge variant="outline">{challenge.category}</Badge>
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {challenge.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{challenge.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.estimatedParticipants}+ interested</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Starts {challenge.startDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{challenge.reward}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Duration: {challenge.duration}</span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">Set Reminder</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Set Challenge Reminder</DialogTitle>
                          <DialogDescription>
                            We'll notify you when this challenge starts
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <p className="text-sm">
                            Challenge starts: <span className="font-medium">{challenge.startDate}</span>
                          </p>
                          <p className="text-sm">
                            Duration: <span className="font-medium">{challenge.duration}</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            You'll receive an email and in-app notification when the challenge begins.
                          </p>
                        </div>
                        <div className="flex justify-end">
                          <Button>Confirm Reminder</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}