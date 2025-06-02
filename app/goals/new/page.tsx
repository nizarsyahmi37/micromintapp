"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Home, GraduationCap, Plane, Car, Gift, Heart } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function NewGoalPage() {
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const [loading, setLoading] = useState(false);

  const goalTypes = [
    { value: "emergency", label: "Emergency Fund", icon: Shield },
    { value: "house", label: "Home Down Payment", icon: Home },
    { value: "education", label: "Education", icon: GraduationCap },
    { value: "travel", label: "Travel", icon: Plane },
    { value: "car", label: "Vehicle", icon: Car },
    { value: "gift", label: "Gift", icon: Gift },
    { value: "health", label: "Health", icon: Heart },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <Card>
        <CardHeader>
          <CardTitle>Create New Goal</CardTitle>
          <CardDescription>
            Set up a new investment goal and track your progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Goal Name</Label>
              <Input
                id="name"
                placeholder="Enter your goal name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Goal Type</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a goal type" />
                </SelectTrigger>
                <SelectContent>
                  {goalTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center">
                          <Icon className="h-4 w-4 mr-2" />
                          {type.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Target Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Target Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Input
                id="description"
                placeholder="Add some details about your goal"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  <span>Creating goal...</span>
                </div>
              ) : (
                "Create Goal"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}