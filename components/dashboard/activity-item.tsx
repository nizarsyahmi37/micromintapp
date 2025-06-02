"use client";

import { motion } from "framer-motion";
import { 
  DollarSign, 
  ArrowUp, 
  MessageCircle, 
  Award,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityItemProps {
  type: "investment" | "social" | "achievement";
  title: string;
  description: string;
  timestamp: string;
  amount: string | null;
  status: "completed" | "pending" | "failed" | "income" | "interaction" | "badge";
}

export function ActivityItem({ 
  type, 
  title, 
  description, 
  timestamp, 
  amount, 
  status 
}: ActivityItemProps) {
  // Define the icon based on activity type
  const getIcon = () => {
    switch (type) {
      case "investment":
        return <DollarSign className="h-5 w-5" />;
      case "social":
        return <MessageCircle className="h-5 w-5" />;
      case "achievement":
        return <Award className="h-5 w-5" />;
      default:
        return <DollarSign className="h-5 w-5" />;
    }
  };

  // Define status indicator color
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "bg-emerald-500";
      case "pending":
        return "bg-amber-500";
      case "failed":
        return "bg-destructive";
      case "income":
        return "bg-emerald-500";
      case "interaction":
        return "bg-blue-500";
      case "badge":
        return "bg-purple-500";
      default:
        return "bg-muted";
    }
  };
  
  // Get status icon
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
      case "income":
        return <CheckCircle className="h-4 w-4 text-emerald-500" />;
      case "pending":
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      case "failed":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="flex items-start space-x-4 relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={cn(
        "p-2 rounded-full",
        type === "investment" ? "bg-primary/10 text-primary" : "",
        type === "social" ? "bg-blue-500/10 text-blue-500" : "",
        type === "achievement" ? "bg-purple-500/10 text-purple-500" : ""
      )}>
        {getIcon()}
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{title}</p>
          {amount && (
            <p className={cn(
              "text-sm font-medium",
              status === "income" ? "text-emerald-500" : ""
            )}>
              {status === "income" ? "+" : ""}{amount}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center gap-1">
            {getStatusIcon()}
            <p className="text-xs text-muted-foreground">{timestamp}</p>
          </div>
        </div>
      </div>
      <div className="absolute left-2.5 top-10 h-full w-px bg-border">
        <div className={cn("h-2 w-2 rounded-full absolute -left-[3px] top-3", getStatusColor())} />
      </div>
    </motion.div>
  );
}