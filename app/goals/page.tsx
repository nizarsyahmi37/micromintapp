"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Home, GraduationCap, Plane, Car, Gift, Heart, Plus } from "lucide-react";
import Link from "next/link";

interface Goal {
  id: number;
  title: string;
  targetAmount: number;
  currentAmount: number;
  icon: string;
  deadline: string;
  category: string;
  progress: number;
}

export default function GoalsPage() {
  const [activeTab, setActiveTab] = useState("active");

  const goals: Goal[] = [
    {
      id: 1,
      title: "Emergency Fund",
      targetAmount: 5000,
      currentAmount: 3750,
      icon: "Shield",
      deadline: "Dec 2024",
      category: "Savings",
      progress: 75
    },
    {
      id: 2,
      title: "Home Down Payment",
      targetAmount: 25000,
      currentAmount: 8400,
      icon: "Home",
      deadline: "Jun 2026",
      category: "Real Estate",
      progress: 33.6
    },
    {
      id: 3,
      title: "Education Fund",
      targetAmount: 10000,
      currentAmount: 2500,
      icon: "GraduationCap",
      deadline: "Sep 2025",
      category: "Education",
      progress: 25
    }
  ];

  const completedGoals: Goal[] = [
    {
      id: 4,
      title: "Vacation Fund",
      targetAmount: 3000,
      currentAmount: 3000,
      icon: "Plane",
      deadline: "Completed",
      category: "Travel",
      progress: 100
    },
    {
      id: 5,
      title: "New Laptop",
      targetAmount: 1500,
      currentAmount: 1500,
      icon: "Gift",
      deadline: "Completed",
      category: "Electronics",
      progress: 100
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-5 w-5" />;
      case "Home":
        return <Home className="h-5 w-5" />;
      case "GraduationCap":
        return <GraduationCap className="h-5 w-5" />;
      case "Plane":
        return <Plane className="h-5 w-5" />;
      case "Car":
        return <Car className="h-5 w-5" />;
      case "Gift":
        return <Gift className="h-5 w-5" />;
      case "Heart":
        return <Heart className="h-5 w-5" />;
      default:
        return <Shield className="h-5 w-5" />;
    }
  };

  const GoalCard = ({ goal }: { goal: Goal }) => (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              {getIcon(goal.icon)}
            </div>
            <div>
              <h3 className="text-base font-semibold">{goal.title}</h3>
              <p className="text-xs text-muted-foreground">Target: ${goal.targetAmount.toLocaleString()}</p>
            </div>
          </div>
          <div className="text-xs bg-muted px-2 py-1 rounded">
            {goal.deadline}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>${goal.currentAmount.toLocaleString()}</span>
            <span className="text-muted-foreground">${goal.targetAmount.toLocaleString()}</span>
          </div>
          <Progress value={goal.progress} className="h-2" />
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">
              ${(goal.targetAmount - goal.currentAmount).toLocaleString()} remaining
            </span>
            <span className="text-xs font-medium">
              {goal.progress.toFixed(1)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Investment Goals</h1>
          <p className="text-muted-foreground">Track and manage your financial objectives</p>
        </div>
        <Button asChild>
          <Link href="/goals/new">
            <Plus className="mr-2 h-4 w-4" />
            New Goal
          </Link>
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="active">
            Active Goals
            <span className="ml-2 bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
              {goals.length}
            </span>
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed
            <span className="ml-2 bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
              {completedGoals.length}
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}