"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, CheckCircle, Lock, Trophy, Star, Clock, ArrowRight, Target, Users, Award, Sparkles, Circle } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function LearnPage() {
  const [activeTab, setActiveTab] = useState("courses");

  const courses = [
    {
      id: 1,
      title: "Investment Basics",
      description: "Learn the fundamentals of investing and building wealth",
      progress: 75,
      lessons: 12,
      duration: "2.5 hours",
      level: "Beginner",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Stock Market Essentials",
      description: "Understanding stocks, indices, and market analysis",
      progress: 30,
      lessons: 15,
      duration: "3 hours",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Risk Management",
      description: "Learn how to protect and grow your investments",
      progress: 0,
      lessons: 8,
      duration: "1.5 hours",
      level: "Advanced",
      image: "https://images.pexels.com/photos/7567553/pexels-photo-7567553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first course",
      progress: 75,
      reward: "50 XP",
      icon: <Star className="h-5 w-5" />,
      requirements: [
        "Start any beginner course",
        "Complete all course modules",
        "Pass the final assessment"
      ],
      milestones: [
        { title: "Start Course", xp: 10, completed: true },
        { title: "Complete 50%", xp: 15, completed: true },
        { title: "Complete Course", xp: 25, completed: false }
      ],
      totalXP: 50,
      earnedXP: 25
    },
    {
      id: 2,
      title: "Knowledge Seeker",
      description: "Complete 5 courses",
      progress: 20,
      reward: "200 XP",
      icon: <Trophy className="h-5 w-5" />,
      requirements: [
        "Complete any 5 courses",
        "Achieve minimum 80% in assessments",
        "Complete courses from different categories"
      ],
      milestones: [
        { title: "Complete 1 Course", xp: 40, completed: true },
        { title: "Complete 3 Courses", xp: 60, completed: false },
        { title: "Complete 5 Courses", xp: 100, completed: false }
      ],
      totalXP: 200,
      earnedXP: 40
    },
    {
      id: 3,
      title: "Investment Master",
      description: "Complete all beginner courses",
      progress: 45,
      reward: "500 XP",
      icon: <Award className="h-5 w-5" />,
      requirements: [
        "Complete all beginner-level courses",
        "Achieve 90% or higher in assessments",
        "Complete all practice exercises"
      ],
      milestones: [
        { title: "Complete 2 Beginner Courses", xp: 100, completed: true },
        { title: "Complete 4 Beginner Courses", xp: 150, completed: false },
        { title: "Complete All Beginner Courses", xp: 250, completed: false }
      ],
      totalXP: 500,
      earnedXP: 100
    }
  ];

  const AchievementDialog = ({ achievement }: { achievement: any }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-full">
                {achievement.icon}
              </div>
              <Badge variant="outline">{achievement.reward}</Badge>
            </div>
            <h3 className="font-semibold mb-1">{achievement.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{achievement.progress}%</span>
              </div>
              <Progress value={achievement.progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              {achievement.icon}
            </div>
            <div>
              <DialogTitle>{achievement.title}</DialogTitle>
              <DialogDescription>{achievement.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Requirements</h4>
            <ul className="space-y-2">
              {achievement.requirements.map((req: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Progress & Rewards</h4>
            <div className="space-y-3">
              {achievement.milestones.map((milestone: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                  <div className="flex items-center gap-3">
                    {milestone.completed ? (
                      <CheckCircle className="h-5 w-5 text-primary" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                    <span className={milestone.completed ? "text-muted-foreground" : ""}>
                      {milestone.title}
                    </span>
                  </div>
                  <Badge variant={milestone.completed ? "secondary" : "outline"}>
                    {milestone.xp} XP
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="text-sm font-medium">Total Progress</p>
              <p className="text-2xl font-bold">
                {achievement.earnedXP} / {achievement.totalXP} XP
              </p>
            </div>
            <Progress value={(achievement.earnedXP / achievement.totalXP) * 100} className="w-1/2 h-2" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Learning Platform</h1>
          <p className="text-muted-foreground">Master investing with our structured courses</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-medium">750 XP</span>
          </div>
          <Button>
            <BookOpen className="mr-2 h-4 w-4" />
            Continue Learning
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {course.progress > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-1" />
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{course.title}</CardTitle>
                    <Badge variant={course.progress === 0 ? "outline" : "secondary"}>
                      {course.level}
                    </Badge>
                  </div>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {course.lessons} lessons
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant={course.progress === 0 ? "default" : "secondary"}
                    asChild
                  >
                    <Link href={`/learn/${course.id}`}>
                      {course.progress === 0 ? (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Start Course
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Continue
                        </>
                      )}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Your Progress</h2>
                <p className="text-sm text-muted-foreground">Track your learning journey</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-2xl font-bold">750 XP</p>
                  <p className="text-sm text-muted-foreground">Total Experience</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold">5</p>
                      <p className="text-sm text-muted-foreground">Active Goals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold">12</p>
                      <p className="text-sm text-muted-foreground">Achievements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Top 10%</p>
                      <p className="text-sm text-muted-foreground">Ranking</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <AchievementDialog key={achievement.id} achievement={achievement} />
            ))}
          </div>

          <Card className="mt-8">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold">Next Milestone</h3>
                  <p className="text-sm text-muted-foreground">Complete 3 more courses to unlock</p>
                </div>
                <div className="p-2 rounded-full bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Progress to Advanced Badge</span>
                  <span>2/5 courses</span>
                </div>
                <Progress value={40} className="h-2" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Reward: 500 XP + Advanced Investor Badge</span>
                  <Button variant="outline" size="sm">View Courses</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}