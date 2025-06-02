"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

const TestimonialCard = ({ quote, name, role, imageUrl }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="relative h-12 w-12 mx-auto">
              <img
                src={imageUrl}
                alt={`${name} avatar`}
                className="rounded-full object-cover h-full w-full"
              />
            </div>
            <p className="text-center text-sm">{quote}</p>
            <div className="text-center">
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;