import DashboardCard from '../DashboardCard';
import { DollarSign, Users, Briefcase, Clock } from 'lucide-react';

export default function DashboardCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
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
        title="Projects"
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
  );
}