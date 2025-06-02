"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, ThumbsUp, Share2, TrendingUp, Users, Award, BarChart3 } from "lucide-react";

interface ProfileContentProps {
  username: string;
}

export function ProfileContent({ username }: ProfileContentProps) {
  const [activeTab, setActiveTab] = useState("posts");
  
  // This would come from your API/database in a real app
  const user = {
    name: username.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Passionate about helping others build wealth through smart micro-investments. Always learning, always growing. 📈",
    joinDate: "March 2024",
    stats: {
      followers: 1243,
      following: 891,
      posts: 156,
      successfulTrades: 89
    }
  };

  const posts = [
    {
      id: 1,
      content: "Just hit my first $1000 in investments! Started with $5 weekly deposits six months ago. Small steps lead to big wins! 🚀",
      likes: 234,
      comments: 45,
      shares: 12,
      time: "2h ago"
    },
    {
      id: 2,
      content: "Pro tip: Diversification isn't just about stocks vs bonds. Consider adding some REITs to your portfolio for real estate exposure without the huge upfront costs.",
      likes: 156,
      comments: 28,
      shares: 8,
      time: "4h ago"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Early Investor",
      description: "Started your investment journey",
      icon: <TrendingUp className="h-5 w-5" />,
      date: "Mar 15, 2024"
    },
    {
      id: 2,
      title: "Community Leader",
      description: "Helped 50+ investors with advice",
      icon: <Users className="h-5 w-5" />,
      date: "Mar 18, 2024"
    },
    {
      id: 3,
      title: "Smart Portfolio",
      description: "Achieved optimal diversification",
      icon: <BarChart3 className="h-5 w-5" />,
      date: "Mar 20, 2024"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
              <p className="text-muted-foreground mb-4">{user.bio}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4">
                <div>
                  <p className="font-semibold">{user.stats.followers}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="font-semibold">{user.stats.following}</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
                <div>
                  <p className="font-semibold">{user.stats.posts}</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div>
                  <p className="font-semibold">{user.stats.successfulTrades}</p>
                  <p className="text-sm text-muted-foreground">Successful Trades</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-3">
                <Button>Follow</Button>
                <Button variant="outline">Message</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        </TabsList>

        <TabsContent value="posts">
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="pt-6">
                  <p className="mb-4">{post.content}</p>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      {post.shares}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <Card key={achievement.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="portfolio">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Portfolio Privacy Enabled</h3>
                <p className="text-muted-foreground">
                  This user has chosen to keep their portfolio private.
                  Follow them to see their investment updates in your feed.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}