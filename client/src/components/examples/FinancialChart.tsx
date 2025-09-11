import FinancialChart from '../FinancialChart';

export default function FinancialChartExample() {
  const barData = [
    { name: "Jan", value: 45000 },
    { name: "Feb", value: 52000 },
    { name: "Mar", value: 48000 },
    { name: "Apr", value: 61000 },
    { name: "May", value: 55000 },
    { name: "Jun", value: 67000 }
  ];

  const lineData = [
    { name: "Q1", value: 145000 },
    { name: "Q2", value: 183000 },
    { name: "Q3", value: 167000 },
    { name: "Q4", value: 201000 }
  ];

  const pieData = [
    { name: "Salaries", value: 125000 },
    { name: "Operations", value: 45000 },
    { name: "Marketing", value: 32000 },
    { name: "Travel", value: 18000 },
    { name: "Equipment", value: 15000 }
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FinancialChart
          title="Monthly Expenses"
          type="bar"
          data={barData}
          height={300}
        />
        <FinancialChart
          title="Quarterly Revenue"
          type="line"
          data={lineData}
          height={300}
        />
      </div>
      <div className="max-w-md mx-auto">
        <FinancialChart
          title="Budget Breakdown"
          type="pie"
          data={pieData}
          height={300}
        />
      </div>
    </div>
  );
}