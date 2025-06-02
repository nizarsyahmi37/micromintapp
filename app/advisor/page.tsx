"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, ShieldCheck, Target, AlertCircle, ArrowRight } from "lucide-react";

type RiskLevel = "conservative" | "moderate" | "aggressive";
type GoalType = "growth";

type PortfolioRecommendation = {
  title: string;
  description: string;
  allocation: {
    name: string;
    percentage: number;
    color: string;
  }[];
  expectedReturn: string;
  riskLevel: string;
  timeHorizon: string;
};

type Recommendations = {
  [K in RiskLevel]: PortfolioRecommendation;
};

export default function AdvisorPage() {
  const [selectedRisk, setSelectedRisk] = useState<RiskLevel>("moderate");
  const [selectedGoal, setSelectedGoal] = useState<GoalType>("growth");

  const recommendations: Recommendations = {
    conservative: {
      title: "Conservative Portfolio",
      description: "Focus on capital preservation with steady, modest returns",
      allocation: [
        { name: "Government Bonds", percentage: 40, color: "bg-chart-1" },
        { name: "Corporate Bonds", percentage: 30, color: "bg-chart-2" },
        { name: "Blue-chip Stocks", percentage: 20, color: "bg-chart-3" },
        { name: "Cash", percentage: 10, color: "bg-chart-4" }
      ],
      expectedReturn: "4-6%",
      riskLevel: "Low",
      timeHorizon: "2-5 years"
    },
    moderate: {
      title: "Balanced Growth Portfolio",
      description: "Balance between growth and stability",
      allocation: [
        { name: "US Stocks", percentage: 40, color: "bg-chart-1" },
        { name: "International Stocks", percentage: 20, color: "bg-chart-2" },
        { name: "Bonds", percentage: 30, color: "bg-chart-3" },
        { name: "Real Estate", percentage: 10, color: "bg-chart-4" }
      ],
      expectedReturn: "6-8%",
      riskLevel: "Moderate",
      timeHorizon: "5-10 years"
    },
    aggressive: {
      title: "High Growth Portfolio",
      description: "Maximize long-term growth potential",
      allocation: [
        { name: "Growth Stocks", percentage: 50, color: "bg-chart-1" },
        { name: "Small-cap Stocks", percentage: 20, color: "bg-chart-2" },
        { name: "International Stocks", percentage: 20, color: "bg-chart-3" },
        { name: "Bonds", percentage: 10, color: "bg-chart-4" }
      ],
      expectedReturn: "8-12%",
      riskLevel: "High",
      timeHorizon: "10+ years"
    }
  };

  const insights = [
    {
      title: "Market Conditions Favorable",
      description: "Current market indicators suggest positive momentum for equities",
      confidence: 85,
      impact: "Positive",
      type: "market"
    },
    {
      title: "Diversification Opportunity",
      description: "Adding international exposure could reduce portfolio risk",
      confidence: 92,
      impact: "Optimization",
      type: "portfolio"
    },
    {
      title: "Risk Alert",
      description: "Technology sector showing increased volatility",
      confidence: 78,
      impact: "Warning",
      type: "risk"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-full bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">AI Investment Advisor</h1>
            <p className="text-muted-foreground">
              Get personalized investment recommendations based on your goals and risk tolerance
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Risk Profile Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Your Risk Profile</CardTitle>
              <CardDescription>Choose the level of risk you're comfortable with</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedRisk} onValueChange={(value) => setSelectedRisk(value as RiskLevel)}>
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="conservative">Conservative</TabsTrigger>
                  <TabsTrigger value="moderate">Moderate</TabsTrigger>
                  <TabsTrigger value="aggressive">Aggressive</TabsTrigger>
                </TabsList>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      <span className="font-medium">Risk Level</span>
                    </div>
                    <Badge variant={selectedRisk === "conservative" ? "secondary" : selectedRisk === "moderate" ? "outline" : "destructive"}>
                      {recommendations[selectedRisk].riskLevel}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="font-medium">Expected Return</span>
                    </div>
                    <span>{recommendations[selectedRisk].expectedReturn} annually</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="font-medium">Time Horizon</span>
                    </div>
                    <span>{recommendations[selectedRisk].timeHorizon}</span>
                  </div>
                </div>
              </Tabs>
            </CardContent>
          </Card>

          {/* Portfolio Recommendation */}
          <Card>
            <CardHeader>
              <CardTitle>{recommendations[selectedRisk].title}</CardTitle>
              <CardDescription>{recommendations[selectedRisk].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations[selectedRisk].allocation.map((asset, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{asset.name}</span>
                      <span>{asset.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div 
                        className={`h-full ${asset.color}`} 
                        style={{ width: `${asset.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-4">
                  Apply This Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Market Insights */}
          <div className="grid gap-4 md:grid-cols-3">
            {insights.map((insight, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    {insight.type === "market" && (
                      <TrendingUp className="h-5 w-5 text-primary" />
                    )}
                    {insight.type === "portfolio" && (
                      <Target className="h-5 w-5 text-primary" />
                    )}
                    {insight.type === "risk" && (
                      <AlertCircle className="h-5 w-5 text-destructive" />
                    )}
                    <h3 className="font-semibold">{insight.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {insight.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>AI Confidence</span>
                      <span>{insight.confidence}%</span>
                    </div>
                    <Progress value={insight.confidence} className="h-1" />
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{insight.impact}</Badge>
                      <Button variant="ghost" size="sm">Learn More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}