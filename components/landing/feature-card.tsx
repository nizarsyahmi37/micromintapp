"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <div className="h-6 w-6 text-primary">
                {icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;