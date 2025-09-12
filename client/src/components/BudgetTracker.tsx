import { Badge } from "@/components/ui/badge";

export default function BudgetTracker() {
  // Mock budget data - in real app, this would come from API
  const budget = {
    allocated: 2500000, // ₹25,00,000
    spent: 1750000,     // ₹17,50,000  
  };

  const spentPercentage = (budget.spent / budget.allocated) * 100;

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = () => {
    if (spentPercentage > 85) return "destructive";
    if (spentPercentage > 70) return "secondary";
    return "default";
  };

  return (
    <div className="flex items-center justify-center gap-2 p-2 bg-muted/50 rounded-lg" data-testid="budget-tracker">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Budget:</span>
        <span className="font-medium" data-testid="text-budget-spent">
          {formatINR(budget.spent)}
        </span>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium" data-testid="text-budget-allocated">
          {formatINR(budget.allocated)}
        </span>
        <Badge variant={getStatusColor()} className="text-xs px-2 py-0.5 ml-1">
          {spentPercentage.toFixed(1)}%
        </Badge>
      </div>
    </div>
  );
}