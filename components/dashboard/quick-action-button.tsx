"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  action: string;
}

export function QuickActionButton({ icon, label, action }: QuickActionButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        variant="outline" 
        className={cn(
          "w-full h-16 flex flex-col items-center justify-center gap-1",
          "hover:bg-primary hover:text-primary-foreground"
        )}
        asChild
      >
        <Link href={action}>
          <div className="text-xl">{icon}</div>
          <span className="text-xs font-medium">{label}</span>
        </Link>
      </Button>
    </motion.div>
  );
}