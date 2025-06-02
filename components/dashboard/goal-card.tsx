"use client";

import { Shield, Home, GraduationCap, Plane, Car, Gift, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GoalCardProps {
  title: string;
  targetAmount: number;
  currentAmount: number;
  icon: string;
  deadline: string;
  color: string;
}

export function GoalCard({
  title,
  targetAmount,
  currentAmount,
  icon,
  deadline,
  color
}: GoalCardProps) {
  const progress = (currentAmount / targetAmount) * 100;
  const remaining = targetAmount - currentAmount;

  // Map icon string to component
  const IconComponent = () => {
    switch (icon) {
      case "Shield":
        return <Shield className="h-5 w-5" />;
      case "Home":
        return <Home className="h-5 w-5" />;
      case "Education":
        return <GraduationCap className="h-5 w-5" />;
      case "Travel":
        return <Plane className="h-5 w-5" />;
      case "Car":
        return <Car className="h-5 w-5" />;
      case "Gift":
        return <Gift className="h-5 w-5" />;
      case "Health":
        return <Heart className="h-5 w-5" />;
      default:
        return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <Card>
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={cn("p-2 rounded-full", color, "text-primary-foreground")}>
                <IconComponent />
              </div>
              <div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="text-xs text-muted-foreground">Target: ${targetAmount.toLocaleString()}</p>
              </div>
            </div>
            <div className="bg-muted px-2 py-1 rounded text-xs">
              {deadline}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>${currentAmount.toLocaleString()}</span>
              <span className="text-muted-foreground">${targetAmount.toLocaleString()}</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">
                ${remaining.toLocaleString()} remaining
              </span>
              <span className="text-xs font-medium">
                {progress.toFixed(0)}%
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}