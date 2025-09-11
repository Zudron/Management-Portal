import TransactionTable from '../TransactionTable';

export default function TransactionTableExample() {
  const mockTransactions = [
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
    },
    {
      id: "txn-004",
      date: "Dec 7, 2024",
      description: "New MacBook Pro for Development",
      category: "Equipment", 
      amount: 2499,
      type: "expense" as const,
      account: "Operations",
      project: "OrgVision Dashboard"
    },
    {
      id: "txn-005",
      date: "Dec 6, 2024",
      description: "Google Ads Campaign - Q4",
      category: "Marketing",
      amount: 850,
      type: "expense" as const,
      account: "Marketing Fund"
    },
    {
      id: "txn-006",
      date: "Dec 5, 2024",
      description: "Freelancer Payment - UI Design",
      category: "Operations",
      amount: 3500,
      type: "expense" as const,
      account: "General Fund",
      project: "Mobile App"
    }
  ];

  return (
    <div className="p-4">
      <TransactionTable transactions={mockTransactions} />
    </div>
  );
}