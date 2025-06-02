"use client";

import { useEffect, useState } from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";

interface PortfolioChartProps {
  timeframe: string;
}

// This would typically come from your API
const generateChartData = (timeframe: string) => {
  const data = [];
  let days = 30;
  let startValue = 2500;
  let volatility = 0.01;
  
  switch (timeframe) {
    case "1W":
      days = 7;
      volatility = 0.005;
      break;
    case "1M":
      days = 30;
      volatility = 0.01;
      break;
    case "3M":
      days = 90;
      volatility = 0.02;
      break;
    case "1Y":
      days = 365;
      volatility = 0.03;
      break;
  }
  
  let currentValue = startValue;
  const growthTrend = 1.0002; // Slight growth trend
  
  for (let i = 0; i < days; i++) {
    const randomChange = 1 + (Math.random() - 0.5) * volatility;
    currentValue = currentValue * randomChange * growthTrend;
    
    // Format the date based on the timeframe
    let date;
    const currentDate = new Date();
    
    if (timeframe === "1W" || timeframe === "1M") {
      const pastDate = new Date();
      pastDate.setDate(currentDate.getDate() - (days - i));
      date = pastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } else if (timeframe === "3M") {
      const pastDate = new Date();
      pastDate.setDate(currentDate.getDate() - (days - i));
      date = pastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      
      // Only include every ~7th day to avoid crowding
      if (i % 7 !== 0 && i !== days - 1) continue;
    } else if (timeframe === "1Y") {
      const pastDate = new Date();
      pastDate.setDate(currentDate.getDate() - (days - i));
      date = pastDate.toLocaleDateString('en-US', { month: 'short' });
      
      // Only include monthly data points
      if (i % 30 !== 0 && i !== days - 1) continue;
    }
    
    data.push({
      date,
      value: Math.round(currentValue * 100) / 100,
    });
  }
  
  return data;
};

export function PortfolioChart({ timeframe }: PortfolioChartProps) {
  const [data, setData] = useState<any[]>([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setData(generateChartData(timeframe));
  }, [timeframe]);

  // Format the tooltip value
  const formatTooltipValue = (value: number) => {
    return `$${value.toFixed(2)}`;
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Card className="p-2 shadow-lg bg-background border border-border">
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-sm text-primary">
            ${payload[0].value.toFixed(2)}
          </p>
        </Card>
      );
    }
    return null;
  };

  // Calculate the min and max for the Y axis with some padding
  const minValue = data.length > 0 ? Math.min(...data.map(d => d.value)) * 0.95 : 0;
  const maxValue = data.length > 0 ? Math.max(...data.map(d => d.value)) * 1.05 : 0;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.2} />
            <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "hsl(var(--muted))" : "hsl(var(--accent))"} />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12 }} 
          axisLine={false}
          tickLine={false}
          dy={10}
          stroke="hsl(var(--muted-foreground))"
        />
        <YAxis 
          domain={[minValue, maxValue]}
          tickFormatter={(value) => `$${value}`}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
          width={60}
          stroke="hsl(var(--muted-foreground))"
        />
        <Tooltip content={<CustomTooltip />} />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="hsl(var(--chart-1))" 
          strokeWidth={2}
          fill="url(#colorValue)"
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}