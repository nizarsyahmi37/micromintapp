"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, DollarSign, BarChart3, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface Investment {
  id: string;
  name: string;
  ticker: string;
  type: string;
  risk: "Low" | "Medium" | "High";
  minAmount: number;
  description: string;
  performance: {
    day: number;
    month: number;
    year: number;
  };
  details: {
    expenseRatio: number;
    aum: string;
    category: string;
  };
}

const investments: Investment[] = [
  {
    id: "vti",
    name: "Vanguard Total Stock Market ETF",
    ticker: "VTI",
    type: "ETF",
    risk: "Low",
    minAmount: 50,
    description: "Broad exposure to the entire U.S. stock market",
    performance: {
      day: 0.5,
      month: 2.3,
      year: 15.7
    },
    details: {
      expenseRatio: 0.03,
      aum: "$1.2T",
      category: "Total Market"
    }
  },
  {
    id: "qqq",
    name: "Invesco QQQ Trust",
    ticker: "QQQ",
    type: "ETF",
    risk: "Medium",
    minAmount: 50,
    description: "Tracks the Nasdaq-100 Index of large tech companies",
    performance: {
      day: 0.8,
      month: 3.5,
      year: 22.4
    },
    details: {
      expenseRatio: 0.20,
      aum: "$200B",
      category: "Technology"
    }
  },
  {
    id: "spy",
    name: "SPDR S&P 500 ETF",
    ticker: "SPY",
    type: "ETF",
    risk: "Low",
    minAmount: 50,
    description: "Tracks the S&P 500 index of large U.S. companies",
    performance: {
      day: 0.4,
      month: 2.1,
      year: 16.8
    },
    details: {
      expenseRatio: 0.09,
      aum: "$400B",
      category: "Large Cap"
    }
  },
  {
    id: "agg",
    name: "iShares Core U.S. Aggregate Bond ETF",
    ticker: "AGG",
    type: "ETF",
    risk: "Low",
    minAmount: 50,
    description: "Broad exposure to U.S. investment-grade bonds",
    performance: {
      day: 0.1,
      month: 0.5,
      year: 4.2
    },
    details: {
      expenseRatio: 0.04,
      aum: "$90B",
      category: "Bonds"
    }
  },
  {
    id: "vxus",
    name: "Vanguard Total International Stock ETF",
    ticker: "VXUS",
    type: "ETF",
    risk: "Medium",
    minAmount: 50,
    description: "Exposure to international stocks outside the U.S.",
    performance: {
      day: 0.3,
      month: 1.8,
      year: 12.5
    },
    details: {
      expenseRatio: 0.07,
      aum: "$50B",
      category: "International"
    }
  },
  {
    id: "vnq",
    name: "Vanguard Real Estate ETF",
    ticker: "VNQ",
    type: "ETF",
    risk: "Medium",
    minAmount: 50,
    description: "Exposure to U.S. real estate investment trusts",
    performance: {
      day: 0.2,
      month: 1.5,
      year: 8.9
    },
    details: {
      expenseRatio: 0.12,
      aum: "$30B",
      category: "Real Estate"
    }
  }
];

export default function InvestmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredInvestments = investments.filter(inv => {
    const matchesSearch = 
      inv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.ticker.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && inv.risk.toLowerCase() === activeTab.toLowerCase();
  });

  const InvestmentCard = ({ investment }: { investment: Investment }) => (
    <Card className="hover:border-primary transition-colors">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">{investment.name}</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{investment.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">{investment.ticker}</Badge>
              <Badge variant="secondary">{investment.type}</Badge>
              <Badge 
                variant="outline" 
                className={
                  investment.risk === "Low" ? "border-green-500 text-green-500" :
                  investment.risk === "Medium" ? "border-yellow-500 text-yellow-500" :
                  "border-red-500 text-red-500"
                }
              >
                {investment.risk} Risk
              </Badge>
            </div>
          </div>
          <Button asChild>
            <Link href={`/investments/${investment.id}`}>
              View Details
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground">1 Day</p>
            <p className={`font-semibold ${investment.performance.day >= 0 ? "text-green-500" : "text-red-500"}`}>
              {investment.performance.day >= 0 ? "+" : ""}{investment.performance.day}%
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">1 Month</p>
            <p className={`font-semibold ${investment.performance.month >= 0 ? "text-green-500" : "text-red-500"}`}>
              {investment.performance.month >= 0 ? "+" : ""}{investment.performance.month}%
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">1 Year</p>
            <p className={`font-semibold ${investment.performance.year >= 0 ? "text-green-500" : "text-red-500"}`}>
              {investment.performance.year >= 0 ? "+" : ""}{investment.performance.year}%
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span>Min: ${investment.minAmount}</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
            <span>{investment.details.expenseRatio}% Fee</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span>AUM: {investment.details.aum}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Available Investments</h1>
          <p className="text-muted-foreground">
            Explore our curated selection of investment options
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or ticker..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="low">Low Risk</TabsTrigger>
          <TabsTrigger value="medium">Medium Risk</TabsTrigger>
          <TabsTrigger value="high">High Risk</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredInvestments.map((investment) => (
              <InvestmentCard key={investment.id} investment={investment} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}