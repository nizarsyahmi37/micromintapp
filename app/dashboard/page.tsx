'use client';

import { HistoryDialog } from "@/components/dashboard/history-dialog";
import { NewInvestmentDialog } from "@/components/dashboard/new-investment-dialog";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Sparkles, 
  Target, 
  Trophy, 
  Clock, 
  DollarSign,
  Plus,
  BarChart3,
  PieChart,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PortfolioChart } from "@/components/dashboard/portfolio-chart";
import { AssetAllocation } from "@/components/dashboard/asset-allocation";
import { ActivityItem } from "@/components/dashboard/activity-item";
import { RecommendationCard } from "@/components/dashboard/recommendation-card";
import { GoalCard } from "@/components/dashboard/goal-card";
import { CommunityChallenge } from "@/components/dashboard/community-challenge";
import { QuickActionButton } from "@/components/dashboard/quick-action-button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState("1M");
  const router = useRouter();

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your investments, goals, and community activity.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HistoryDialog />
          <NewInvestmentDialog />
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Portfolio Value
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,856.45</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                from $2,540.13
              </span>
              <div className="flex items-center text-emerald-500 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+12.4%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Returns
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$87.32</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                last month
              </span>
              <div className="flex items-center text-emerald-500 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span>+5.2%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Deposits
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,450.00</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                lifetime
              </span>
              <Badge variant="outline" className="text-xs">
                27 deposits
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Allocation Diversity
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 assets</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                balanced risk
              </span>
              <Badge variant="secondary" className="text-xs">
                Good
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid gap-4 md:grid-cols-7">
        {/* Left Column (5/7) */}
        <div className="col-span-7 md:col-span-5 space-y-4">
          {/* Portfolio Chart */}
          <Card className="col-span-5">
            <Tabs value={timeframe} onValueChange={setTimeframe}>
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle>Portfolio Performance</CardTitle>
                  <CardDescription>
                    Track how your investments are growing over time
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <TabsList className="grid grid-cols-4 h-8">
                    <TabsTrigger value="1W" className="text-xs">1W</TabsTrigger>
                    <TabsTrigger value="1M" className="text-xs">1M</TabsTrigger>
                    <TabsTrigger value="3M" className="text-xs">3M</TabsTrigger>
                    <TabsTrigger value="1Y" className="text-xs">1Y</TabsTrigger>
                  </TabsList>
                </div>
              </CardHeader>
              <TabsContent value="1W">
                <CardContent className="p-0 h-[300px]">
                  <PortfolioChart timeframe="1W" />
                </CardContent>
              </TabsContent>
              <TabsContent value="1M">
                <CardContent className="p-0 h-[300px]">
                  <PortfolioChart timeframe="1M" />
                </CardContent>
              </TabsContent>
              <TabsContent value="3M">
                <CardContent className="p-0 h-[300px]">
                  <PortfolioChart timeframe="3M" />
                </CardContent>
              </TabsContent>
              <TabsContent value="1Y">
                <CardContent className="p-0 h-[300px]">
                  <PortfolioChart timeframe="1Y" />
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Investment Goals */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Investment Goals</h2>
              <Button variant="ghost" size="sm" onClick={() => router.push("/goals")}>View All</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <GoalCard 
                title="Emergency Fund"
                targetAmount={5000}
                currentAmount={3750}
                icon="Shield"
                deadline="Dec 2025"
                color="bg-chart-1"
              />
              <GoalCard 
                title="Home Down Payment"
                targetAmount={25000}
                currentAmount={8400}
                icon="Home"
                deadline="Jun 2027"
                color="bg-chart-2"
              />
            </div>
          </div>

          {/* Community Challenges */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Active Challenges</h2>
              <Button variant="ghost" size="sm" onClick={() => router.push("/challenges")}>Browse More</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <CommunityChallenge 
                title="Monthly Micro-Investor"
                description="Invest a minimum of $10 each week for the entire month"
                progress={75}
                participants={248}
                reward="$5 bonus investment"
                daysLeft={7}
              />
              <CommunityChallenge 
                title="Diversification Master"
                description="Add 3 different types of assets to your portfolio"
                progress={33}
                participants={156}
                reward="Premium insights for 1 week"
                daysLeft={14}
              />
            </div>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest investment activity and community interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ActivityItem 
                  type="investment"
                  title="Invested in Tech ETF"
                  description="Added $50 to your technology fund"
                  timestamp="2 hours ago"
                  amount="$50.00"
                  status="completed"
                />
                <ActivityItem 
                  type="social"
                  title="Sophia Chen shared a strategy"
                  description="Check out my 5-year investment plan for early retirement"
                  timestamp="Yesterday"
                  amount={null}
                  status="interaction"
                />
                <ActivityItem 
                  type="achievement"
                  title="Earned First Investment Badge"
                  description="Completed your first month of consistent investing"
                  timestamp="2 days ago"
                  amount={null}
                  status="badge"
                />
                <ActivityItem 
                  type="investment"
                  title="Dividend Received"
                  description="Quarterly dividend from Growth Fund"
                  timestamp="1 week ago"
                  amount="$12.45"
                  status="income"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => router.push("/activity")}>View All Activity</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right Column (2/7) */}
        <div className="col-span-7 md:col-span-2 space-y-4">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
              <QuickActionButton 
                icon={<Plus />}
                label="Deposit"
                action="/deposit"
              />
              <QuickActionButton 
                icon={<TrendingUp />}
                label="Invest"
                action="/investments"
              />
              <QuickActionButton 
                icon={<Target />}
                label="Set Goal"
                action="/goals/new"
              />
              <QuickActionButton 
                icon={<Sparkles />}
                label="AI Advice"
                action="/advisor"
              />
            </CardContent>
          </Card>

          {/* Asset Allocation */}
          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <CardDescription>Your current investment mix</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <AssetAllocation />
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              Smart Recommendations
            </h3>
            <RecommendationCard 
              title="Increase Tech Exposure"
              description="Based on your goals and risk profile, adding 5% more to technology could improve returns"
              impact="+2.4% potential annual return"
              confidence={85}
            />
            <RecommendationCard 
              title="Rebalance Portfolio"
              description="Your portfolio's allocation has drifted from your target. Consider rebalancing"
              impact="Reduce risk exposure"
              confidence={92}
            />
            <RecommendationCard 
              title="Emergency Fund"
              description="Your emergency fund is below the recommended 3 months of expenses"
              impact="Improved financial security"
              confidence={97}
            />
          </div>

          {/* Community Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-4 w-4 text-primary mr-2" />
                Top Performers
              </CardTitle>
              <CardDescription>This month's community leaders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium">1</div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Sophia C.</p>
                      <p className="text-xs text-muted-foreground">$9,450 portfolio</p>
                    </div>
                  </div>
                  <div className="flex items-center text-emerald-500 text-sm">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>+24.6%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium">2</div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                      <AvatarFallback>JT</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">James T.</p>
                      <p className="text-xs text-muted-foreground">$5,230 portfolio</p>
                    </div>
                  </div>
                  <div className="flex items-center text-emerald-500 text-sm">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>+18.2%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="bg-muted text-muted-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium">3</div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Marcus L.</p>
                      <p className="text-xs text-muted-foreground">$3,870 portfolio</p>
                    </div>
                  </div>
                  <div className="flex items-center text-emerald-500 text-sm">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>+15.7%</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full" onClick={() => router.push("/leaderboard")}>View Full Leaderboard</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}