"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecommendationCardProps {
  title: string;
  description: string;
  impact: string;
  confidence: number;
}

export function RecommendationCard({ 
  title, 
  description, 
  impact, 
  confidence 
}: RecommendationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-l-4 border-l-primary">
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h4 className="font-medium text-sm flex items-center">
                <Sparkles className="h-3 w-3 text-primary mr-1.5" />
                {title}
              </h4>
              <div className="flex items-center text-xs text-muted-foreground">
                <span>AI confidence:</span>
                <span className="font-medium ml-1">{confidence}%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs font-medium text-primary">{impact}</span>
              <Button variant="ghost" size="sm" className="h-7 px-2">
                <span className="text-xs">Apply</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            <Progress value={confidence} className="h-1 mt-2" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}