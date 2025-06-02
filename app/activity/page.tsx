"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActivityItem } from "@/components/dashboard/activity-item";

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("all");

  const activities = [
    {
      type: "investment",
      title: "Invested in Tech ETF",
      description: "Added $50 to your technology fund",
      timestamp: "2 hours ago",
      amount: "$50.00",
      status: "completed" as const
    },
    {
      type: "social",
      title: "Sophia Chen shared a strategy",
      description: "Check out my 5-year investment plan for early retirement",
      timestamp: "Yesterday",
      amount: null,
      status: "interaction" as const
    },
    {
      type: "achievement",
      title: "Earned First Investment Badge",
      description: "Completed your first month of consistent investing",
      timestamp: "2 days ago",
      amount: null,
      status: "badge" as const
    },
    {
      type: "investment",
      title: "Dividend Received",
      description: "Quarterly dividend from Growth Fund",
      timestamp: "1 week ago",
      amount: "$12.45",
      status: "income" as const
    },
    {
      type: "investment",
      title: "Portfolio Rebalanced",
      description: "Automatic rebalancing of your portfolio",
      timestamp: "1 week ago",
      amount: null,
      status: "completed" as const
    },
    {
      type: "social",
      title: "Community Challenge Completed",
      description: "Successfully completed the Monthly Micro-Investor challenge",
      timestamp: "2 weeks ago",
      amount: "$5.00",
      status: "income" as const
    }
  ];

  const filteredActivities = activeTab === "all" 
    ? activities 
    : activities.filter(activity => activity.type === activeTab);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Activity History</h1>
          <p className="text-muted-foreground">
            Track your investments and interactions
          </p>
        </div>
        <Button variant="outline">
          Export History
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Activity</TabsTrigger>
              <TabsTrigger value="investment">Investments</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
              <TabsTrigger value="achievement">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="space-y-6">
                {filteredActivities.map((activity, index) => (
                  <ActivityItem
                    key={index}
                    type={activity.type as "investment" | "social" | "achievement"}
                    title={activity.title}
                    description={activity.description}
                    timestamp={activity.timestamp}
                    amount={activity.amount}
                    status={activity.status}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}