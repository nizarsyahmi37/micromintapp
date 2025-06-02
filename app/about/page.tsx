import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PiggyBank, Users, Award, Target, Sparkles, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About MicroMint</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're on a mission to democratize investing and make financial growth accessible to everyone,
          regardless of their starting point.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground">
              To break down the barriers to investing by providing accessible, educational, and 
              community-driven investment opportunities that help people build long-term wealth,
              starting with just a few dollars.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground">
              A world where everyone has the knowledge, tools, and opportunity to build their
              financial future, regardless of their background or starting point.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  We believe in the power of community learning and support. Together, we grow stronger.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from our platform to our educational content.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We're committed to making investing accessible to everyone, regardless of their background.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sarah Chen"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">Sarah Chen</h3>
                <p className="text-primary mb-2">CEO & Co-founder</p>
                <p className="text-sm text-muted-foreground">
                  Former fintech executive with 15 years of experience in democratizing finance.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Michael Rodriguez"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
                <p className="text-primary mb-2">CTO</p>
                <p className="text-sm text-muted-foreground">
                  Tech innovator with expertise in building scalable financial platforms.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Emily Thompson"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">Emily Thompson</h3>
                <p className="text-primary mb-2">Head of Education</p>
                <p className="text-sm text-muted-foreground">
                  Certified financial educator passionate about making finance accessible.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="text-center bg-primary text-primary-foreground rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Be part of the movement to make investing accessible to everyone. Start your investment
          journey today with as little as $5.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent" asChild>
            <Link href="/careers">Join Our Team</Link>
          </Button>
        </div>
      </div>

      <div className="text-center mt-16 text-sm text-muted-foreground">
        <p>
          Note: MicroMint is a fictional micro-investment platform created for demonstration purposes.
          This about page is for demonstration only.
        </p>
      </div>
    </div>
  );
}