import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Users, Award } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  user: {
    name: string;
    avatar: string;
    points: number;
    completedChallenges: number;
    badges: string[];
  };
  progress: {
    monthly: number;
    total: number;
  };
}

const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    user: {
      name: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      points: 2500,
      completedChallenges: 15,
      badges: ["🏆 Top Investor", "⭐ Challenge Master", "🎯 Goal Setter"]
    },
    progress: {
      monthly: 850,
      total: 2500
    }
  },
  {
    rank: 2,
    user: {
      name: "Marcus Williams",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      points: 2350,
      completedChallenges: 14,
      badges: ["🌟 Rising Star", "💎 Diamond Investor"]
    },
    progress: {
      monthly: 780,
      total: 2350
    }
  },
  {
    rank: 3,
    user: {
      name: "Alex Johnson",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      points: 2200,
      completedChallenges: 13,
      badges: ["🎯 Strategic Planner", "📈 Market Master"]
    },
    progress: {
      monthly: 720,
      total: 2200
    }
  }
];

export function LeaderboardView() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Challenge Leaderboard</h1>
          <p className="text-muted-foreground mt-2">
            Top performers in our investment challenges
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">1,234</span> active participants
          </div>
        </div>
      </div>

      <Tabs defaultValue="monthly">
        <TabsList className="mb-8">
          <TabsTrigger value="monthly">Monthly Rankings</TabsTrigger>
          <TabsTrigger value="allTime">All-Time Rankings</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly">
          <div className="grid gap-6">
            {leaderboardData.map((entry) => (
              <Card key={entry.rank} className={entry.rank === 1 ? "border-primary" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold
                      ${entry.rank === 1 ? 'bg-primary text-primary-foreground' : 
                        entry.rank === 2 ? 'bg-secondary text-secondary-foreground' : 
                        'bg-muted text-muted-foreground'}`}>
                      {entry.rank}
                    </div>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={entry.user.avatar} alt={entry.user.name} />
                      <AvatarFallback>{entry.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{entry.user.name}</h3>
                        {entry.rank === 1 && (
                          <Trophy className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex gap-2 mt-1">
                        {entry.user.badges.map((badge, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{entry.progress.monthly} pts</div>
                      <div className="text-sm text-muted-foreground">
                        This month
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span>{entry.user.points} total points</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>{entry.user.completedChallenges} challenges</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span>Top {entry.rank}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="allTime">
          <div className="grid gap-6">
            {leaderboardData.map((entry) => (
              <Card key={entry.rank} className={entry.rank === 1 ? "border-primary" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold
                      ${entry.rank === 1 ? 'bg-primary text-primary-foreground' : 
                        entry.rank === 2 ? 'bg-secondary text-secondary-foreground' : 
                        'bg-muted text-muted-foreground'}`}>
                      {entry.rank}
                    </div>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={entry.user.avatar} alt={entry.user.name} />
                      <AvatarFallback>{entry.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{entry.user.name}</h3>
                        {entry.rank === 1 && (
                          <Trophy className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex gap-2 mt-1">
                        {entry.user.badges.map((badge, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{entry.progress.total} pts</div>
                      <div className="text-sm text-muted-foreground">
                        All time
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span>{entry.user.points} total points</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>{entry.user.completedChallenges} challenges</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Top {entry.rank}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>Rankings are updated daily at midnight UTC</p>
        <p>Complete challenges and earn points to climb the leaderboard</p>
      </div>
    </div>
  );
}