import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Users,
  Award,
  BarChart4,
  Lock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestimonialCard from "@/components/landing/testimonial-card";
import FeatureCard from "@/components/landing/feature-card";
import HeroStats from "@/components/landing/hero-stats";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Investing for everyone.{" "}
                  <span className="text-primary">Start small, grow big.</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join the community of micro-investors building wealth together. Learn, share, and grow
                  your investments with as little as $5.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/learn">Learn More</Link>
                </Button>
              </div>
              <HeroStats />
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full md:h-[450px] lg:h-[500px]">
                <img 
                  src="https://images.pexels.com/photos/7821590/pexels-photo-7821590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Happy young adults managing investments on their phones"
                  className="mx-auto h-full w-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Core Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Everything you need to start investing
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform combines social investing, education, and AI-powered advice to help you build wealth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <FeatureCard
              icon={<TrendingUp />}
              title="Smart Portfolio"
              description="Track your investments and set financial goals with our intuitive portfolio dashboard."
            />
            <FeatureCard
              icon={<Lightbulb />}
              title="AI Advisor"
              description="Get personalized investment advice based on your goals, risk tolerance, and market conditions."
            />
            <FeatureCard
              icon={<Users />}
              title="Social Community"
              description="Connect with other investors, share insights, and learn from successful strategies."
            />
            <FeatureCard
              icon={<BarChart4 />}
              title="Financial Education"
              description="Access bite-sized lessons on investing, saving, and building wealth over time."
            />
            <FeatureCard
              icon={<Award />}
              title="Challenges & Rewards"
              description="Complete investment challenges and earn rewards to boost your portfolio."
            />
            <FeatureCard
              icon={<Lock />}
              title="Bank-Level Security"
              description="Your investments and personal data are protected with enterprise-grade security."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                How GrowVest Works
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your investment journey in three simple steps.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <h3 className="mt-4 text-xl font-bold">Create an account</h3>
              <p className="mt-2 text-muted-foreground">
                Sign up in minutes and connect your bank account securely.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <h3 className="mt-4 text-xl font-bold">Set your goals</h3>
              <p className="mt-2 text-muted-foreground">
                Define your investment goals and risk tolerance.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <h3 className="mt-4 text-xl font-bold">Start investing</h3>
              <p className="mt-2 text-muted-foreground">
                Make your first investment with as little as $5 and grow your portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                What Our Community Says
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from members who are building wealth one small investment at a time.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
            <TestimonialCard 
              quote="I never thought I could invest with my limited budget. GrowVest made it possible to start small and learn as I go."
              name="Alex Johnson"
              role="College Student"
              imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard 
              quote="The community challenges motivated me to save more consistently. I've learned so much from other members."
              name="Sophia Chen"
              role="Freelance Designer"
              imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard 
              quote="The AI advisor helped me diversify my portfolio. I've seen steady growth despite starting with just $10 a week."
              name="Marcus Williams"
              role="Healthcare Worker"
              imageUrl="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that works for your investment goals.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-8">
            <Tabs defaultValue="monthly" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="monthly">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <Card className="flex flex-col">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center">
                        <h3 className="text-lg font-bold">Starter</h3>
                        <div className="mt-4 flex items-baseline justify-center">
                          <span className="text-3xl font-bold">$0</span>
                          <span className="ml-1 text-sm text-muted-foreground">/month</span>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm">
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Basic portfolio tracking
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Community access
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Basic educational content
                          </li>
                        </ul>
                        <Button className="mt-8 w-full" variant="outline">
                          <Link href="/signup">Get Started</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flex flex-col relative border-primary">
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Popular</div>
                    </div>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center">
                        <h3 className="text-lg font-bold">Growth</h3>
                        <div className="mt-4 flex items-baseline justify-center">
                          <span className="text-3xl font-bold">$4.99</span>
                          <span className="ml-1 text-sm text-muted-foreground">/month</span>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm">
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Full portfolio management
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            AI-powered recommendations
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Complete educational library
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Monthly challenges access
                          </li>
                        </ul>
                        <Button className="mt-8 w-full">
                          <Link href="/signup?plan=growth">Select Plan</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flex flex-col">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center">
                        <h3 className="text-lg font-bold">Pro Investor</h3>
                        <div className="mt-4 flex items-baseline justify-center">
                          <span className="text-3xl font-bold">$9.99</span>
                          <span className="ml-1 text-sm text-muted-foreground">/month</span>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm">
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Everything in Growth
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Advanced portfolio analysis
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            1-on-1 advisor sessions
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Exclusive investment opportunities
                          </li>
                        </ul>
                        <Button className="mt-8 w-full" variant="outline">
                          <Link href="/signup?plan=pro">Select Plan</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <Card className="flex flex-col">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center">
                        <h3 className="text-lg font-bold">Starter</h3>
                        <div className="mt-4 flex items-baseline justify-center">
                          <span className="text-3xl font-bold">$0</span>
                          <span className="ml-1 text-sm text-muted-foreground">/year</span>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm">
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Basic portfolio tracking
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Community access
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Basic educational content
                          </li>
                        </ul>
                        <Button className="mt-8 w-full" variant="outline">
                          <Link href="/signup">Get Started</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flex flex-col relative border-primary">
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                      <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Best Value</div>
                    </div>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center">
                        <h3 className="text-lg font-bold">Growth</h3>
                        <div className="mt-4 flex items-baseline justify-center">
                          <span className="text-3xl font-bold">$47.90</span>
                          <span className="ml-1 text-sm text-muted-foreground">/year</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Save $11.98 compared to monthly</p>
                        <ul className="mt-6 space-y-3 text-sm">
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Full portfolio management
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            AI-powered recommendations
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Complete educational library
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Monthly challenges access
                          </li>
                        </ul>
                        <Button className="mt-8 w-full">
                          <Link href="/signup?plan=growth-yearly">Select Plan</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flex flex-col">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center">
                        <h3 className="text-lg font-bold">Pro Investor</h3>
                        <div className="mt-4 flex items-baseline justify-center">
                          <span className="text-3xl font-bold">$95.90</span>
                          <span className="ml-1 text-sm text-muted-foreground">/year</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Save $23.98 compared to monthly</p>
                        <ul className="mt-6 space-y-3 text-sm">
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Everything in Growth
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Advanced portfolio analysis
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            1-on-1 advisor sessions
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="none"
                              height="24"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Exclusive investment opportunities
                          </li>
                        </ul>
                        <Button className="mt-8 w-full" variant="outline">
                          <Link href="/signup?plan=pro-yearly">Select Plan</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to start your investment journey?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                Join thousands of others building wealth through micro-investments and community learning.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}