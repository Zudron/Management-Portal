import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { useState } from "react";

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
  account: string;
  project?: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
  title?: string;
}

export default function TransactionTable({ transactions, title = "Recent Transactions" }: TransactionTableProps) {
  const [sortField, setSortField] = useState<keyof Transaction>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = (field: keyof Transaction) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
    console.log(`Sorting by ${field} ${sortDirection === 'asc' ? 'desc' : 'asc'}`);
  };

  const handleTransactionClick = (transactionId: string) => {
    console.log(`Transaction ${transactionId} clicked`);
  };

  const formatAmount = (amount: number, type: string) => {
    const formatted = Math.abs(amount).toLocaleString();
    return type === 'income' ? `+$${formatted}` : `-$${formatted}`;
  };

  const getAmountColor = (type: string) => {
    return type === 'income' ? 'text-chart-3' : 'text-chart-5';
  };

  const getCategoryBadgeVariant = (category: string) => {
    const variants: Record<string, any> = {
      'Salary': 'default',
      'Travel': 'secondary', 
      'Equipment': 'outline',
      'Marketing': 'secondary',
      'Operations': 'outline'
    };
    return variants[category] || 'outline';
  };

  return (
    <Card data-testid="transaction-table">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 py-2 text-xs font-medium text-muted-foreground border-b">
            <button 
              className="flex items-center gap-1 hover:text-foreground text-left"
              onClick={() => handleSort('date')}
              data-testid="sort-date"
            >
              Date
              <ArrowUpDown className="h-3 w-3" />
            </button>
            <button 
              className="flex items-center gap-1 hover:text-foreground text-left"
              onClick={() => handleSort('description')}
              data-testid="sort-description"
            >
              Description
              <ArrowUpDown className="h-3 w-3" />
            </button>
            <span>Category</span>
            <button 
              className="flex items-center gap-1 hover:text-foreground text-left"
              onClick={() => handleSort('amount')}
              data-testid="sort-amount"
            >
              Amount
              <ArrowUpDown className="h-3 w-3" />
            </button>
            <span>Account</span>
            <span>Actions</span>
          </div>
          
          {/* Table Rows */}
          {transactions.slice(0, 10).map((transaction) => (
            <div 
              key={transaction.id} 
              className="grid grid-cols-6 gap-4 py-3 items-center hover:bg-muted/50 rounded-lg px-2 cursor-pointer"
              onClick={() => handleTransactionClick(transaction.id)}
              data-testid={`transaction-${transaction.id}`}
            >
              <div className="text-sm">{transaction.date}</div>
              <div className="space-y-1">
                <div className="text-sm font-medium">{transaction.description}</div>
                {transaction.project && (
                  <div className="text-xs text-muted-foreground">
                    Project: {transaction.project}
                  </div>
                )}
              </div>
              <Badge variant={getCategoryBadgeVariant(transaction.category)} className="w-fit">
                {transaction.category}
              </Badge>
              <div className={`text-sm font-medium ${getAmountColor(transaction.type)}`}>
                {formatAmount(transaction.amount, transaction.type)}
              </div>
              <div className="text-sm text-muted-foreground">{transaction.account}</div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`More actions for transaction ${transaction.id}`);
                }}
                data-testid={`actions-${transaction.id}`}
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        {transactions.length > 10 && (
          <div className="mt-4 text-center">
            <Button variant="outline" data-testid="button-view-all">
              View All Transactions
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}