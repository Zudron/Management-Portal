import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
}

export default function DashboardCard({ title, value, change, trend = "neutral", icon }: DashboardCardProps) {
  const getTrendIcon = () => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-chart-3" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-chart-5" />;
    return null;
  };

  const getTrendColor = () => {
    if (trend === "up") return "text-chart-3";
    if (trend === "down") return "text-chart-5";
    return "text-muted-foreground";
  };

  return (
    <Card className="hover-elevate" data-testid={`card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold" data-testid={`text-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {value}
        </div>
        {change && (
          <div className={`flex items-center gap-1 text-xs ${getTrendColor()}`} data-testid={`text-change-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {getTrendIcon()}
            {change}
          </div>
        )}
      </CardContent>
    </Card>
  );
}