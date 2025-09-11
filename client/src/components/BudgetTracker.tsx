import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Target, AlertTriangle } from "lucide-react";

interface BudgetData {
  allocated: number;
  spent: number;
  remaining: number;
  monthlyBurn: number;
  trend: "up" | "down" | "neutral";
  daysLeft: number;
}

export default function BudgetTracker() {
  // Mock budget data - in real app, this would come from API
  const budget: BudgetData = {
    allocated: 2500000, // ₹25,00,000
    spent: 1750000,     // ₹17,50,000  
    remaining: 750000,  // ₹7,50,000
    monthlyBurn: 425000, // ₹4,25,000
    trend: "up",
    daysLeft: 42
  };

  const spentPercentage = (budget.spent / budget.allocated) * 100;
  const burnRate = budget.monthlyBurn;
  const projectedDaysLeft = budget.remaining / (burnRate / 30);

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getTrendIcon = () => {
    if (budget.trend === "up") return <TrendingUp className="h-3 w-3 text-chart-5" />;
    if (budget.trend === "down") return <TrendingDown className="h-3 w-3 text-chart-3" />;
    return <Target className="h-3 w-3 text-muted-foreground" />;
  };

  const getStatusColor = () => {
    if (spentPercentage > 85) return "destructive";
    if (spentPercentage > 70) return "secondary";
    return "default";
  };

  const getAlertLevel = () => {
    if (projectedDaysLeft < budget.daysLeft * 0.8) return "warning";
    if (projectedDaysLeft < budget.daysLeft * 0.6) return "critical";
    return "normal";
  };

  return (
    <Card className="border-0 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-md shadow-lg" data-testid="budget-tracker">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-6">
          {/* Budget Overview */}
          <div className="flex items-center gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Current Budget</span>
                <Badge variant={getStatusColor()} className="text-xs px-2 py-0">
                  {spentPercentage.toFixed(1)}% spent
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold" data-testid="text-budget-remaining">
                  {formatINR(budget.remaining)}
                </span>
                <span className="text-sm text-muted-foreground">
                  of {formatINR(budget.allocated)} remaining
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 max-w-xs space-y-2">
            <Progress value={spentPercentage} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Spent: {formatINR(budget.spent)}</span>
              <span>Allocated: {formatINR(budget.allocated)}</span>
            </div>
          </div>

          {/* Burn Rate */}
          <div className="flex items-center gap-4">
            <div className="text-right space-y-1">
              <div className="flex items-center gap-1 justify-end">
                <span className="text-sm font-medium text-muted-foreground">Monthly Burn</span>
                {getTrendIcon()}
              </div>
              <div className="text-sm font-bold" data-testid="text-burn-rate">
                {formatINR(burnRate)}/month
              </div>
            </div>
            
            {/* Days Remaining Alert */}
            {getAlertLevel() !== "normal" && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-destructive/10 border border-destructive/20">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <div className="text-xs">
                  <div className="font-medium text-destructive">Budget Alert</div>
                  <div className="text-muted-foreground">
                    ~{Math.round(projectedDaysLeft)} days at current rate
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}