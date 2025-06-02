"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Award } from 'lucide-react';

const HeroStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      }
    })
  };

  const stats = [
    { 
      id: 1, 
      icon: <Users className="h-5 w-5 text-primary" />, 
      value: "50,000+", 
      label: "Active Users" 
    },
    { 
      id: 2, 
      icon: <DollarSign className="h-5 w-5 text-primary" />, 
      value: "$5M+", 
      label: "Total Invested" 
    },
    { 
      id: 3, 
      icon: <Award className="h-5 w-5 text-primary" />, 
      value: "12%", 
      label: "Avg. Annual Return" 
    }
  ];

  return (
    <div className="flex flex-wrap justify-start gap-6 mt-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.id}
          className="flex items-center space-x-2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={statVariants}
          custom={i}
        >
          <div className="flex items-center justify-center rounded-full bg-muted p-2">
            {stat.icon}
          </div>
          <div>
            <p className="text-lg font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;