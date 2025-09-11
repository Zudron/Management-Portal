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
      amount: 750000,
      type: "expense" as const,
      account: "Payroll",
      project: "OrgVision Dashboard"
    },
    {
      id: "txn-002", 
      date: "Dec 9, 2024",
      description: "Client Payment - Q4 Consulting",
      category: "Revenue",
      amount: 2500000,
      type: "income" as const,
      account: "General Fund"
    },
    {
      id: "txn-003",
      date: "Dec 8, 2024", 
      description: "Conference Travel Reimbursement",
      category: "Travel",
      amount: 120000,
      type: "expense" as const,
      account: "Operations",
      project: "Team Development"
    }
  ];

  const monthlyData = [
    { name: "Jul", value: 1300000, income: 4500000, expense: 3200000 },
    { name: "Aug", value: 1400000, income: 5200000, expense: 3800000 },
    { name: "Sep", value: 1400000, income: 4800000, expense: 3400000 },
    { name: "Oct", value: 1900000, income: 6100000, expense: 4200000 },
    { name: "Nov", value: 1600000, income: 5500000, expense: 3900000 },
    { name: "Dec", value: 2200000, income: 6700000, expense: 4500000 }
  ];

  const budgetData = [
    { name: "Salaries", value: 12500000 },
    { name: "Operations", value: 4500000 },
    { name: "Marketing", value: 3200000 },
    { name: "Travel", value: 1800000 },
    { name: "Equipment", value: 1500000 }
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
          value="₹84,74,200"
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
          title="Monthly Income vs Expenses"
          type="scatter"
          data={monthlyData}
          height={300}
          showTimeFilter={true}
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