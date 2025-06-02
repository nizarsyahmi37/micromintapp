"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Investment {
  id: string;
  name: string;
  ticker: string;
  type: string;
  risk: string;
  minAmount: number;
}

const investments: Investment[] = [
  {
    id: "vti",
    name: "Vanguard Total Stock Market ETF",
    ticker: "VTI",
    type: "ETF",
    risk: "Low",
    minAmount: 50
  },
  {
    id: "qqq",
    name: "Invesco QQQ Trust",
    ticker: "QQQ",
    type: "ETF",
    risk: "Medium",
    minAmount: 50
  },
  {
    id: "spy",
    name: "SPDR S&P 500 ETF",
    ticker: "SPY",
    type: "ETF",
    risk: "Low",
    minAmount: 50
  }
];

export function NewInvestmentDialog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const filteredInvestments = investments.filter(inv =>
    inv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inv.ticker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInvest = () => {
    if (!selectedInvestment || !amount) return;

    // Simulate investment process
    toast({
      title: "Investment Successful",
      description: `Successfully invested $${amount} in ${selectedInvestment.name}`,
    });

    setSelectedInvestment(null);
    setAmount("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Investment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Make a New Investment</DialogTitle>
          <DialogDescription>
            Search for assets and invest in your future
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {!selectedInvestment ? (
            <>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or ticker..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              <div className="space-y-2">
                {filteredInvestments.map((inv) => (
                  <Card
                    key={inv.id}
                    className="cursor-pointer hover:border-primary transition-colors"
                    onClick={() => setSelectedInvestment(inv)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{inv.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {inv.ticker} • {inv.type} • {inv.risk} Risk
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Select
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">{selectedInvestment.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedInvestment.ticker} • Minimum: ${selectedInvestment.minAmount}
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <Label htmlFor="amount">Investment Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                  <Input
                    id="amount"
                    type="number"
                    min={selectedInvestment.minAmount}
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-7"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setSelectedInvestment(null)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleInvest}
                  disabled={!amount || parseFloat(amount) < selectedInvestment.minAmount}
                  className="flex-1"
                >
                  Invest Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}