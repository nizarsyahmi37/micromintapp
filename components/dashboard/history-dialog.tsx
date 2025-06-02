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
import { Clock, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Transaction {
  id: number;
  type: "deposit" | "withdrawal" | "investment" | "return";
  amount: number;
  date: string;
  status: "completed" | "pending" | "failed";
  description: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    type: "deposit",
    amount: 100,
    date: "2024-03-20",
    status: "completed",
    description: "Monthly deposit"
  },
  {
    id: 2,
    type: "investment",
    amount: 50,
    date: "2024-03-19",
    status: "completed",
    description: "Tech ETF purchase"
  },
  {
    id: 3,
    type: "return",
    amount: 12.50,
    date: "2024-03-18",
    status: "completed",
    description: "Dividend payment"
  }
];

export function HistoryDialog() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Clock className="mr-2 h-4 w-4" />
          History
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Transaction History</DialogTitle>
          <DialogDescription>
            View all your investment activities and transactions
          </DialogDescription>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="deposits">Deposits</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="returns">Returns</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {transactions.map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </TabsContent>

          {["deposits", "investments", "returns"].map((type) => (
            <TabsContent key={type} value={type} className="space-y-4">
              {transactions
                .filter(t => t.type === type.slice(0, -1))
                .map((transaction) => (
                  <TransactionCard key={transaction.id} transaction={transaction} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

function TransactionCard({ transaction }: { transaction: Transaction }) {
  const isPositive = ["deposit", "return"].includes(transaction.type);
  
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-full ${
              isPositive ? "bg-emerald-500/10 text-emerald-500" : "bg-blue-500/10 text-blue-500"
            }`}>
              {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
            </div>
            <div>
              <p className="font-medium">{transaction.description}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(transaction.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className={`font-medium ${isPositive ? "text-emerald-500" : ""}`}>
              {isPositive ? "+" : "-"}${transaction.amount.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground capitalize">
              {transaction.status}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}