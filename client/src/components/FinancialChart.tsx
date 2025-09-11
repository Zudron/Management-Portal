import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from "recharts";
import { useState } from "react";

interface ChartData {
  name: string;
  value: number;
  income?: number;
  expense?: number;
  [key: string]: any;
}

interface FinancialChartProps {
  title: string;
  type: "bar" | "line" | "pie" | "scatter";
  data: ChartData[];
  height?: number;
  dataKey?: string;
  colors?: string[];
  showTimeFilter?: boolean;
}

export default function FinancialChart({ 
  title, 
  type, 
  data, 
  height = 300, 
  dataKey = "value",
  colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"],
  showTimeFilter = false
}: FinancialChartProps) {
  const [timeFilter, setTimeFilter] = useState<"week" | "month" | "year" | "all">("month");

  const formatINR = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleTimeFilterChange = (filter: "week" | "month" | "year" | "all") => {
    setTimeFilter(filter);
    console.log(`Time filter changed to: ${filter}`);
    // TODO: In real app, this would trigger data refetch
  };
  
  const renderChart = () => {
    switch (type) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => formatINR(value)}
              />
              <Bar dataKey={dataKey} fill={colors[0]} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case "line":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => formatINR(value)}
              />
              <Line 
                type="monotone" 
                dataKey={dataKey} 
                stroke={colors[0]} 
                strokeWidth={2}
                dot={{ fill: colors[0], strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: colors[0], strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case "scatter":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <ScatterChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => formatINR(value)}
              />
              <Scatter name="Income" dataKey="income" fill={colors[2]} />
              <Scatter name="Expense" dataKey="expense" fill={colors[4]} />
            </ScatterChart>
          </ResponsiveContainer>
        );
      
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey={dataKey}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="neo-chart" data-testid={`chart-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          {showTimeFilter && (
            <div className="flex gap-1">
              {["week", "month", "year", "all"].map((filter) => (
                <Button
                  key={filter}
                  variant={timeFilter === filter ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleTimeFilterChange(filter as any)}
                  className="text-xs px-2 py-1 h-6"
                  data-testid={`filter-${filter}`}
                >
                  {filter === "week" ? "1W" : filter === "month" ? "1M" : filter === "year" ? "1Y" : "All"}
                </Button>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {renderChart()}
        {type === "pie" && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {data.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: colors[index % colors.length] }}
                />
                <span className="text-sm text-muted-foreground">
                  {entry.name}: {formatINR(entry.value)}
                </span>
              </div>
            ))}
          </div>
        )}
        {type === "scatter" && (
          <div className="mt-4 flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[2] }} />
              <span className="text-sm text-muted-foreground">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[4] }} />
              <span className="text-sm text-muted-foreground">Expense</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}