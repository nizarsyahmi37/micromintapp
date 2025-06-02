"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Clock, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CommunityChallengeProps {
  title: string;
  description: string;
  progress: number;
  participants: number;
  reward: string;
  daysLeft: number;
}

export function CommunityChallenge({
  title,
  description,
  progress,
  participants,
  reward,
  daysLeft
}: CommunityChallengeProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <Card>
        <CardContent className="p-5">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{description}</p>
              </div>
              <Badge variant="outline" className="ml-2">
                <Clock className="h-3 w-3 mr-1" />
                <span className="text-xs">{daysLeft} days left</span>
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-xs">Progress</span>
                <span className="text-xs font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs text-muted-foreground">
                <Users className="h-3.5 w-3.5 mr-1" />
                <span>{participants} participants</span>
              </div>
              <div className="flex items-center text-xs">
                <Trophy className="h-3.5 w-3.5 text-primary mr-1" />
                <span>{reward}</span>
              </div>
            </div>
            
            <Button size="sm" variant="outline" className="w-full">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}