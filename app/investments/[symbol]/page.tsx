"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, TrendingUp, DollarSign, Building2, Users, BarChart3 } from "lucide-react";
import { PortfolioChart } from "@/components/dashboard/portfolio-chart";
import Link from "next/link";

// This would come from your API in a real app
const investmentData = {
  VNQ: {
    name: "Vanguard Real Estate ETF",
    symbol: "VNQ",
    price: 84.23,
    change: 1.25,
    changePercent: 1.51,
    marketCap: "72.4B",
    volume: "4.2M",
    holdings: 167,
    expense: 0.12,
    yield: 3.85,
    description: "The Vanguard Real Estate ETF provides broad exposure to U.S. real estate investment trusts (REITs) and other real estate-related investments.",
    details: [
      { label: "Asset Class", value: "Real Estate" },
      { label: "Category", value: "U.S. Real Estate" },
      { label: "Inception Date", value: "Sep 23, 2004" },
      { label: "Legal Structure", value: "ETF" },
      { label: "Expense Ratio", value: "0.12%" }
    ],
    performance: {
      "1M": 2.45,
      "3M": -1.32,
      "YTD": 5.67,
      "1Y": 8.92,
      "3Y": 12.34,
      "5Y": 7.89
    }
  },
  VTI: {
    name: "Vanguard Total Stock Market ETF",
    symbol: "VTI",
    price: 242.15,
    change: 0.85,
    changePercent: 0.35,
    marketCap: "355.8B",
    volume: "3.8M",
    holdings: 3786,
    expense: 0.03,
    yield: 1.45,
    description: "The Vanguard Total Stock Market ETF provides broad exposure to the entire U.S. equity market, including small-, mid-, and large-cap growth and value stocks.",
    details: [
      { label: "Asset Class", value: "Equity" },
      { label: "Category", value: "U.S. Total Market" },
      { label: "Inception Date", value: "May 24, 2001" },
      { label: "Legal Structure", value: "ETF" },
      { label: "Expense Ratio", value: "0.03%" }
    ],
    performance: {
      "1M": 3.12,
      "3M": 2.85,
      "YTD": 8.92,
      "1Y": 15.67,
      "3Y": 14.23,
      "5Y": 11.45
    }
  }
};

// Add the generateStaticParams function
export function generateStaticParams() {
  return Object.keys(investmentData).map((symbol) => ({
    symbol: symbol.toLowerCase()
  }));
}

export default function InvestmentDetailPage({ params }: { params: { symbol: string } }) {
  // Convert the symbol to uppercase to match our data structure
  const symbol = params.symbol.toUpperCase();
  const investment = investmentData[symbol as keyof typeof investmentData];

  if (!investment) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Investment Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The investment symbol {symbol} could not be found.
          </p>
          <Button asChild>
            <Link href="/investments">View All Investments</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/investments"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Investments
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{investment.name}</h1>
            <p className="text-lg text-muted-foreground">{investment.symbol}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Add to Watchlist</Button>
            <Button>Invest Now</Button>
          </div>
        </div>
      </div>

      {/* Price Overview */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Price</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${investment.price}</div>
            <div className={`flex items-center text-sm ${investment.change > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
              <TrendingUp className="h-4 w-4 mr-1" />
              {investment.change > 0 ? '+' : ''}{investment.change} ({investment.changePercent}%)
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{investment.marketCap}</div>
            <p className="text-xs text-muted-foreground">USD</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Holdings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{investment.holdings}</div>
            <p className="text-xs text-muted-foreground">Companies</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Volume</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{investment.volume}</div>
            <p className="text-xs text-muted-foreground">24h Volume</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {/* Price Chart */}
          <Card>
            <Tabs defaultValue="1M">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Price History</CardTitle>
                <TabsList>
                  <TabsTrigger value="1W">1W</TabsTrigger>
                  <TabsTrigger value="1M">1M</TabsTrigger>
                  <TabsTrigger value="3M">3M</TabsTrigger>
                  <TabsTrigger value="1Y">1Y</TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent className="h-[400px]">
                <TabsContent value="1W">
                  <PortfolioChart timeframe="1W" />
                </TabsContent>
                <TabsContent value="1M">
                  <PortfolioChart timeframe="1M" />
                </TabsContent>
                <TabsContent value="3M">
                  <PortfolioChart timeframe="3M" />
                </TabsContent>
                <TabsContent value="1Y">
                  <PortfolioChart timeframe="1Y" />
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>

          {/* Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(investment.performance).map(([period, value]) => (
                  <div key={period} className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">{period}</p>
                    <p className={`text-lg font-semibold ${value > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                      {value > 0 ? '+' : ''}{value}%
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-6">
                {investment.description}
              </p>
              <div className="space-y-3">
                {investment.details.map((detail, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{detail.label}</span>
                    <span className="font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Expense Ratio</span>
                  <span className="font-medium">{investment.expense}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Dividend Yield</span>
                  <span className="font-medium">{investment.yield}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Daily Volume</span>
                  <span className="font-medium">{investment.volume}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}