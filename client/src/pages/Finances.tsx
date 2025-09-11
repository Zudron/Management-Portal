import DashboardCard from "@/components/DashboardCard";
import FinancialChart from "@/components/FinancialChart";
import TransactionTable from "@/components/TransactionTable";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, TrendingDown, Plus } from "lucide-react";

export default function Finances() {
  // Mock financial data
  const allTransactions = [
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
    },
    {
      id: "txn-004",
      date: "Dec 7, 2024",
      description: "New MacBook Pro for Development",
      category: "Equipment", 
      amount: 249900,
      type: "expense" as const,
      account: "Operations",
      project: "OrgVision Dashboard"
    },
    {
      id: "txn-005",
      date: "Dec 6, 2024",
      description: "Google Ads Campaign - Q4",
      category: "Marketing",
      amount: 85000,
      type: "expense" as const,
      account: "Marketing Fund"
    },
    {
      id: "txn-006",
      date: "Dec 5, 2024",
      description: "Freelancer Payment - UI Design",
      category: "Operations",
      amount: 350000,
      type: "expense" as const,
      account: "General Fund",
      project: "Mobile App"
    },
    {
      id: "txn-007",
      date: "Dec 4, 2024",
      description: "Office Rent - December",
      category: "Operations",
      amount: 420000,
      type: "expense" as const,
      account: "Operations"
    },
    {
      id: "txn-008",
      date: "Dec 3, 2024",
      description: "Software Licenses - Annual",
      category: "Operations",
      amount: 189900,
      type: "expense" as const,
      account: "Operations"
    }
  ];

  const monthlyRevenue = [
    { name: "Jan", value: 1300000, income: 4500000, expense: 3200000 },
    { name: "Feb", value: 1400000, income: 5200000, expense: 3800000 },
    { name: "Mar", value: 1400000, income: 4800000, expense: 3400000 },
    { name: "Apr", value: 1900000, income: 6100000, expense: 4200000 },
    { name: "May", value: 1600000, income: 5500000, expense: 3900000 },
    { name: "Jun", value: 2200000, income: 6700000, expense: 4500000 },
    { name: "Jul", value: 1700000, income: 5800000, expense: 4100000 },
    { name: "Aug", value: 2200000, income: 7200000, expense: 5000000 },
    { name: "Sep", value: 2100000, income: 6900000, expense: 4800000 },
    { name: "Oct", value: 2400000, income: 7800000, expense: 5400000 },
    { name: "Nov", value: 2300000, income: 7500000, expense: 5200000 },
    { name: "Dec", value: 2500000, income: 8200000, expense: 5700000 }
  ];

  const expenseCategories = [
    { name: "Salaries", value: 12500000 },
    { name: "Operations", value: 4500000 },
    { name: "Marketing", value: 3200000 },
    { name: "Travel", value: 1800000 },
    { name: "Equipment", value: 1500000 }
  ];

  const handleAddTransaction = () => {
    console.log("Add transaction clicked");
  };

  const handleExportData = () => {
    console.log("Export financial data clicked");
  };

  return (
    <div className="space-y-6" data-testid="page-finances">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Financial Management</h1>
          <p className="text-muted-foreground">Track income, expenses, and budget allocations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportData} data-testid="button-export">
            Export Data
          </Button>
          <Button onClick={handleAddTransaction} data-testid="button-add-transaction">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Revenue"
          value="₹7,82,00,000"
          change="+15.3% from last month"
          trend="up"
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <DashboardCard
          title="Total Expenses"
          value="₹2,35,00,000"
          change="+8.1% from last month"
          trend="down"
          icon={<TrendingDown className="h-4 w-4" />}
        />
        <DashboardCard
          title="Net Profit"
          value="₹5,47,00,000"
          change="+18.7% from last month"
          trend="up"
          icon={<DollarSign className="h-4 w-4" />}
        />
        <DashboardCard
          title="Burn Rate"
          value="₹58,75,000/week"
          change="-5.2% optimization"
          trend="up"
          icon={<TrendingDown className="h-4 w-4" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FinancialChart
            title="Monthly Income vs Expenses"
            type="scatter"
            showTimeFilter={true}
            data={monthlyRevenue}
            height={350}
          />
        </div>
        <FinancialChart
          title="Expense Categories"
          type="pie"
          data={expenseCategories}
          height={350}
        />
      </div>

      {/* Transactions Table */}
      <TransactionTable 
        transactions={allTransactions}
        title="All Financial Transactions"
      />
    </div>
  );
}