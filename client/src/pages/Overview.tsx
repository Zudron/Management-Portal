import DashboardCard from "@/components/DashboardCard";
import FinancialChart from "@/components/FinancialChart";
import TransactionTable from "@/components/TransactionTable";
import { DollarSign, Users, Briefcase, Clock, TrendingUp } from "lucide-react";

export default function Overview() {
  // Mock data for overview dashboard
  const recentTransactions = [
    {
      id: "txn-001",
      date: "Dec 10, 2024",
      description: "Software Engineer Salary - Sarah Chen",
      category: "Salary",
      amount: 7500,
      type: "expense" as const,
      account: "Payroll",
      project: "OrgVision Dashboard"
    },
    {
      id: "txn-002", 
      date: "Dec 9, 2024",
      description: "Client Payment - Q4 Consulting",
      category: "Revenue",
      amount: 25000,
      type: "income" as const,
      account: "General Fund"
    },
    {
      id: "txn-003",
      date: "Dec 8, 2024", 
      description: "Conference Travel Reimbursement",
      category: "Travel",
      amount: 1200,
      type: "expense" as const,
      account: "Operations",
      project: "Team Development"
    }
  ];

  const monthlyData = [
    { name: "Jul", value: 45000 },
    { name: "Aug", value: 52000 },
    { name: "Sep", value: 48000 },
    { name: "Oct", value: 61000 },
    { name: "Nov", value: 55000 },
    { name: "Dec", value: 67000 }
  ];

  const budgetData = [
    { name: "Salaries", value: 125000 },
    { name: "Operations", value: 45000 },
    { name: "Marketing", value: 32000 },
    { name: "Travel", value: 18000 },
    { name: "Equipment", value: 15000 }
  ];

  return (
    <div className="space-y-6" data-testid="page-overview">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Organization Overview</h1>
        <p className="text-muted-foreground">Welcome to your OrgVision dashboard</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Budget"
          value="$847,420"
          change="+12.5% from last month"
          trend="up"
          icon={<DollarSign className="h-4 w-4" />}
        />
        <DashboardCard
          title="Active Staff"
          value="28"
          change="+2 new hires"
          trend="up"
          icon={<Users className="h-4 w-4" />}
        />
        <DashboardCard
          title="Active Projects"
          value="12"
          change="3 completed this month"
          trend="neutral"
          icon={<Briefcase className="h-4 w-4" />}
        />
        <DashboardCard
          title="Avg Project Time"
          value="4.2 weeks"
          change="-0.8 weeks improvement"
          trend="up"
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FinancialChart
          title="Monthly Expenses Trend"
          type="line"
          data={monthlyData}
          height={300}
        />
        <FinancialChart
          title="Budget Allocation"
          type="pie"
          data={budgetData}
          height={300}
        />
      </div>

      {/* Recent Activity */}
      <TransactionTable 
        transactions={recentTransactions}
        title="Recent Financial Activity"
      />
    </div>
  );
}