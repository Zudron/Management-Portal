import ProjectKanban from "@/components/ProjectKanban";
import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Plus, Calendar, Users, Clock, Target } from "lucide-react";

export default function Projects() {
  // Mock project data
  const projects = [
    {
      id: "proj-1",
      name: "OrgVision Dashboard",
      description: "Complete organizational management dashboard with finances, HR, and project tracking",
      status: "In Progress",
      progress: 75,
      budget: 150000,
      spent: 112000,
      startDate: "Oct 1, 2024",
      endDate: "Dec 31, 2024",
      teamSize: 6
    },
    {
      id: "proj-2", 
      name: "Mobile App Development",
      description: "Native iOS and Android app for remote team collaboration",
      status: "Planning",
      progress: 25,
      budget: 200000,
      spent: 45000,
      startDate: "Nov 15, 2024",
      endDate: "Mar 30, 2025",
      teamSize: 4
    },
    {
      id: "proj-3",
      name: "API Redesign",
      description: "Modernize legacy API architecture for better performance and scalability",
      status: "In Progress", 
      progress: 60,
      budget: 80000,
      spent: 52000,
      startDate: "Sep 1, 2024",
      endDate: "Jan 15, 2025",
      teamSize: 3
    },
    {
      id: "proj-4",
      name: "Brand Refresh",
      description: "Complete brand identity overhaul including logo, colors, and marketing materials",
      status: "Completed",
      progress: 100,
      budget: 50000,
      spent: 48000,
      startDate: "Aug 1, 2024", 
      endDate: "Nov 1, 2024",
      teamSize: 3
    }
  ];

  const kanbanData = {
    projectName: "OrgVision Dashboard Development",
    columns: [
      {
        id: "backlog",
        title: "Backlog",
        tasks: [
          {
            id: "task-1",
            title: "User Authentication System",
            description: "Implement secure login and registration with JWT tokens",
            priority: "high" as const,
            assignee: "Alex",
            dueDate: "Dec 15",
            tags: ["backend", "security"]
          },
          {
            id: "task-2", 
            title: "Database Schema Design",
            description: "Design and implement the core database schema for staff, projects, and finances",
            priority: "high" as const,
            assignee: "Sarah",
            dueDate: "Dec 12",
            tags: ["database", "architecture"]
          }
        ]
      },
      {
        id: "in-progress",
        title: "In Progress", 
        tasks: [
          {
            id: "task-3",
            title: "Dashboard UI Components",
            description: "Create reusable components for the main dashboard interface",
            priority: "medium" as const,
            assignee: "Mike",
            dueDate: "Dec 18",
            tags: ["frontend", "ui"]
          }
        ]
      },
      {
        id: "review",
        title: "In Review",
        tasks: [
          {
            id: "task-4",
            title: "Financial Reporting Module",
            description: "Build charts and reports for financial data visualization",
            priority: "medium" as const,
            assignee: "Emma",
            dueDate: "Dec 10",
            tags: ["frontend", "charts"]
          }
        ]
      },
      {
        id: "done",
        title: "Done",
        tasks: [
          {
            id: "task-5",
            title: "Project Setup",
            description: "Initialize project structure and development environment",
            priority: "low" as const,
            assignee: "Alex",
            dueDate: "Dec 1",
            tags: ["setup", "devops"]
          }
        ]
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "default";
      case "In Progress": return "secondary";
      case "Planning": return "outline";
      default: return "outline";
    }
  };

  const handleAddProject = () => {
    console.log("Add new project clicked");
  };

  const handleViewTimeline = () => {
    console.log("View timeline clicked");
  };

  return (
    <div className="space-y-6" data-testid="page-projects">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Project Management</h1>
          <p className="text-muted-foreground">Track projects, tasks, and team progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleViewTimeline} data-testid="button-timeline">
            <Calendar className="h-4 w-4 mr-2" />
            Timeline View
          </Button>
          <Button onClick={handleAddProject} data-testid="button-add-project">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Project KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Active Projects"
          value="12"
          change="+3 completed this month"
          trend="up"
          icon={<Briefcase className="h-4 w-4" />}
        />
        <DashboardCard
          title="Total Budget"
          value="$480,000"
          change="87% allocated"
          trend="neutral"
          icon={<Target className="h-4 w-4" />}
        />
        <DashboardCard
          title="Team Members"
          value="16"
          change="Across all projects"
          trend="neutral"
          icon={<Users className="h-4 w-4" />}
        />
        <DashboardCard
          title="Avg Completion"
          value="4.2 weeks"
          change="-0.8 weeks improvement"
          trend="up"
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      {/* Project Views */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview" data-testid="tab-overview">Project Overview</TabsTrigger>
          <TabsTrigger value="kanban" data-testid="tab-kanban">Kanban Board</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover-elevate cursor-pointer" data-testid={`project-${project.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    <Badge variant={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Target className="h-3 w-3" />
                        Budget
                      </div>
                      <div className="font-medium">
                        ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-3 w-3" />
                        Team
                      </div>
                      <div className="font-medium">{project.teamSize} members</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        Start
                      </div>
                      <div className="font-medium">{project.startDate}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        End
                      </div>
                      <div className="font-medium">{project.endDate}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="kanban">
          <ProjectKanban {...kanbanData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}