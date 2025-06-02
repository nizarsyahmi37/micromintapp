import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Trophy } from "lucide-react";
import Link from "next/link";

// Course data - in a real app, this would come from a database
const courses = [
  {
    id: "1",
    title: "Investment Basics",
    description: "Learn the fundamentals of investing and building wealth",
    modules: [
      {
        title: "Understanding Markets",
        duration: "45 mins",
        completed: true
      },
      {
        title: "Types of Investments",
        duration: "60 mins",
        completed: true
      },
      {
        title: "Risk Management",
        duration: "30 mins",
        completed: false
      },
      {
        title: "Building a Portfolio",
        duration: "45 mins",
        completed: false
      }
    ],
    progress: 50,
    totalDuration: "3 hours",
    achievements: [
      {
        title: "Market Master",
        description: "Complete the market analysis module",
        achieved: true
      },
      {
        title: "Portfolio Pro",
        description: "Create your first diversified portfolio",
        achieved: false
      }
    ]
  },
  {
    id: "2",
    title: "Advanced Trading Strategies",
    description: "Master advanced trading techniques and analysis",
    modules: [
      {
        title: "Technical Analysis",
        duration: "60 mins",
        completed: false
      },
      {
        title: "Chart Patterns",
        duration: "45 mins",
        completed: false
      },
      {
        title: "Trading Psychology",
        duration: "30 mins",
        completed: false
      },
      {
        title: "Risk Management",
        duration: "45 mins",
        completed: false
      }
    ],
    progress: 0,
    totalDuration: "3 hours",
    achievements: [
      {
        title: "Chart Champion",
        description: "Master all major chart patterns",
        achieved: false
      },
      {
        title: "Trading Tactician",
        description: "Complete your first successful trade simulation",
        achieved: false
      }
    ]
  }
];

export function generateStaticParams() {
  return courses.map((course) => ({
    courseId: course.id,
  }));
}

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = courses.find((c) => c.id === params.courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/learn"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>
      </div>

      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-muted-foreground">{course.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{course.progress}%</div>
              <Progress value={course.progress} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{course.totalDuration}</div>
              <p className="text-xs text-muted-foreground">Total course length</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {course.achievements.filter((a) => a.achieved).length}/{course.achievements.length}
              </div>
              <p className="text-xs text-muted-foreground">Completed achievements</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="modules" className="space-y-4">
          <TabsList>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-4">
            {course.modules.map((module, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{module.title}</CardTitle>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">
                        {module.duration}
                      </span>
                      <Button size="sm">
                        {module.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            {course.achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </div>
                    <div className={`text-sm ${achievement.achieved ? "text-emerald-500" : "text-muted-foreground"}`}>
                      {achievement.achieved ? "Completed" : "In Progress"}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}