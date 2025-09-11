import StaffProfile from "@/components/StaffProfile";
import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, UserPlus, UserCheck, Search, Grid, List } from "lucide-react";
import { useState } from "react";

export default function Staff() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock staff data
  const staffMembers = [
    {
      name: "Sarah Chen",
      role: "Senior Full Stack Developer",
      email: "sarah.chen@orgvision.com",
      phone: "+1 (555) 123-4567",
      department: "Engineering",
      startDate: "Jan 2022",
      projects: ["OrgVision Dashboard", "API Redesign", "Mobile App"],
      isManager: true
    },
    {
      name: "Michael Rodriguez",
      role: "Product Designer",
      email: "michael.rodriguez@orgvision.com",
      phone: "+1 (555) 234-5678",
      department: "Design",
      startDate: "Mar 2023",
      projects: ["OrgVision Dashboard", "Brand Refresh"],
      isManager: false
    },
    {
      name: "Emma Thompson",
      role: "Data Analyst",
      email: "emma.thompson@orgvision.com",
      phone: "+1 (555) 345-6789",
      department: "Analytics",
      startDate: "Sep 2023",
      projects: ["Financial Reports", "HR Analytics"],
      isManager: false
    },
    {
      name: "Alex Kim",
      role: "DevOps Engineer",
      email: "alex.kim@orgvision.com",
      phone: "+1 (555) 456-7890",
      department: "Engineering", 
      startDate: "Jun 2022",
      projects: ["Infrastructure", "CI/CD Pipeline"],
      isManager: false
    },
    {
      name: "Jessica Williams",
      role: "Marketing Manager",
      email: "jessica.williams@orgvision.com",
      phone: "+1 (555) 567-8901",
      department: "Marketing",
      startDate: "Feb 2023",
      projects: ["Brand Strategy", "Content Marketing"],
      isManager: true
    },
    {
      name: "David Brown",
      role: "Backend Developer",
      email: "david.brown@orgvision.com",
      phone: "+1 (555) 678-9012",
      department: "Engineering",
      startDate: "Aug 2023",
      projects: ["API Development", "Database Optimization"],
      isManager: false
    }
  ];

  const filteredStaff = staffMembers.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStaff = () => {
    console.log("Add new staff member clicked");
  };

  const handleViewOrgChart = () => {
    console.log("View org chart clicked");
  };

  const handleViewNetworkGraph = () => {
    console.log("View network graph clicked");
  };

  return (
    <div className="space-y-6" data-testid="page-staff">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Staff Management</h1>
          <p className="text-muted-foreground">Manage team members, roles, and assignments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleViewOrgChart} data-testid="button-org-chart">
            Org Chart
          </Button>
          <Button variant="outline" onClick={handleViewNetworkGraph} data-testid="button-network-graph">
            Network View
          </Button>
          <Button onClick={handleAddStaff} data-testid="button-add-staff">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Staff
          </Button>
        </div>
      </div>

      {/* Staff KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Staff"
          value="28"
          change="+2 new hires this month"
          trend="up"
          icon={<Users className="h-4 w-4" />}
        />
        <DashboardCard
          title="Managers"
          value="6"
          change="21% of total staff"
          trend="neutral"
          icon={<UserCheck className="h-4 w-4" />}
        />
        <DashboardCard
          title="Departments"
          value="5"
          change="Engineering (42%), Design (25%)"
          trend="neutral"
          icon={<Users className="h-4 w-4" />}
        />
        <DashboardCard
          title="Avg Tenure"
          value="1.8 years"
          change="+0.3 years from last quarter"
          trend="up"
          icon={<UserCheck className="h-4 w-4" />}
        />
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search staff by name, role, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            data-testid="input-search-staff"
          />
        </div>
        <div className="flex border rounded-lg">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
            data-testid="button-grid-view"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
            data-testid="button-list-view"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Staff Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((staff, index) => (
            <StaffProfile key={index} {...staff} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredStaff.map((staff, index) => (
            <div key={index} className="w-full max-w-none">
              <StaffProfile {...staff} />
            </div>
          ))}
        </div>
      )}

      {filteredStaff.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No staff members found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search terms or add new staff members.
          </p>
          <Button onClick={handleAddStaff}>
            <UserPlus className="h-4 w-4 mr-2" />
            Add Staff Member
          </Button>
        </div>
      )}
    </div>
  );
}