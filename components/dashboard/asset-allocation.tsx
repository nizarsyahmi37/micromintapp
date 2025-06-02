"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { useTheme } from "next-themes";

// Sample data - would come from API in a real app
const ASSET_DATA = [
  { name: "US Stocks", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Int'l Stocks", value: 20, color: "hsl(var(--chart-2))" },
  { name: "Bonds", value: 15, color: "hsl(var(--chart-3))" },
  { name: "Real Estate", value: 10, color: "hsl(var(--chart-4))" },
  { name: "Cash", value: 10, color: "hsl(var(--chart-5))" },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-2 rounded-md shadow-md">
        <p className="text-sm font-medium">{`${payload[0].name}`}</p>
        <p className="text-sm text-primary">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

// Custom legend component for better control over styling
const CustomLegend = ({ payload }: any) => {
  return (
    <ul className="flex flex-col space-y-1 text-sm mt-4">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center">
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground">{entry.value}</span>
          <span className="ml-1 font-medium">{entry.payload.value}%</span>
        </li>
      ))}
    </ul>
  );
};

export function AssetAllocation() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={ASSET_DATA}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {ASSET_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}