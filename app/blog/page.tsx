import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Micro-Investing: A Beginner's Guide",
      description: "Learn the basics of micro-investing and how to start building your portfolio with small, regular investments.",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Investing Basics",
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "5 Common Investment Mistakes to Avoid",
      description: "Discover the most common pitfalls new investors face and how to navigate around them successfully.",
      author: "Marcus Williams",
      date: "March 12, 2024",
      readTime: "4 min read",
      category: "Investment Strategy",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Understanding Market Volatility",
      description: "A comprehensive guide to understanding market fluctuations and maintaining a long-term perspective.",
      author: "Alex Johnson",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Market Analysis",
      image: "https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Building a Diversified Portfolio on a Budget",
      description: "Learn how to create a well-balanced investment portfolio even with limited funds.",
      author: "Emily Rodriguez",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Portfolio Management",
      image: "https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">GrowVest Blog</h1>
        <p className="text-lg text-muted-foreground">
          Expert insights, tips, and strategies to help you make informed investment decisions.
        </p>
      </div>

      {/* Featured Post */}
      <Card className="mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-[300px] md:h-auto">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold mb-2">
                {blogPosts[0].category}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-muted-foreground mb-6">{blogPosts[0].description}</p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span className="text-sm">{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{blogPosts[0].readTime}</span>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
            </div>
            <Button className="w-fit">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Recent Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="mb-2">
                <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold">
                  {post.category}
                </span>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="line-clamp-2">{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Read Article
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <Card className="mt-12">
        <CardContent className="p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest investment insights and tips.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}