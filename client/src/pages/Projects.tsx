import ProjectKanban from "@/components/ProjectKanban";
import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Briefcase, Plus, Calendar, Users, Clock, Target, List } from "lucide-react";
import { useState } from "react";

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

  const [viewMode, setViewMode] = useState<"overview" | "timeline">("overview");

  const handleViewTimeline = () => {
    console.log("View timeline clicked");
    setViewMode(viewMode === "timeline" ? "overview" : "timeline");
  };

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Gantt chart timeline calculation
  const getTimelineData = () => {
    const parseDate = (dateStr: string) => new Date(dateStr + ", 2024");
    const allDates = projects.flatMap(p => [parseDate(p.startDate), parseDate(p.endDate)]);
    const minDate = new Date(Math.min(...allDates.map(d => d.getTime())));
    const maxDate = new Date(Math.max(...allDates.map(d => d.getTime())));
    const totalDays = (maxDate.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24);

    return projects.map(project => {
      const start = parseDate(project.startDate);
      const end = parseDate(project.endDate);
      const startOffset = ((start.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24)) / totalDays * 100;
      const duration = ((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) / totalDays * 100;
      
      return {
        ...project,
        startOffset,
        width: duration
      };
    });
  };

  const timelineProjects = getTimelineData();

  return (
    <div className="space-y-6" data-testid="page-projects">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Project Management</h1>
          <p className="text-muted-foreground">Track projects, tasks, and team progress</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={viewMode === "timeline" ? "default" : "outline"} 
            onClick={handleViewTimeline} 
            data-testid="button-timeline"
          >
            {viewMode === "timeline" ? <List className="h-4 w-4 mr-2" /> : <Calendar className="h-4 w-4 mr-2" />}
            {viewMode === "timeline" ? "Project Overview" : "Timeline View"}
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
      {viewMode === "timeline" ? (
        <Card className="neo-chart" data-testid="timeline-view">
          <CardHeader>
            <CardTitle>Project Timeline</CardTitle>
            <p className="text-sm text-muted-foreground">Gantt-style view of all projects</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Timeline Header */}
              <div className="grid grid-cols-12 gap-1 text-xs text-muted-foreground border-b pb-2">
                <div className="col-span-2">Aug 2024</div>
                <div className="col-span-2">Sep 2024</div>
                <div className="col-span-2">Oct 2024</div>
                <div className="col-span-2">Nov 2024</div>
                <div className="col-span-2">Dec 2024</div>
                <div className="col-span-2">Jan 2025</div>
              </div>
              
              {/* Project Gantt Bars */}
              <div className="space-y-3">
                {timelineProjects.map((project) => (
                  <div key={project.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{project.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant={getStatusColor(project.status)} className="text-xs">
                            {project.status}
                          </Badge>
                          <span>{project.startDate} → {project.endDate}</span>
                          <span>{project.progress}%</span>
                        </div>
                      </div>
                      <div className="text-right text-xs">
                        <div className="font-medium">{formatINR(project.spent)} / {formatINR(project.budget)}</div>
                        <div className="text-muted-foreground">{project.teamSize} members</div>
                      </div>
                    </div>
                    
                    {/* Gantt Bar */}
                    <div className="relative h-6 bg-muted/30 rounded">
                      <div 
                        className="absolute h-full bg-primary/20 rounded flex items-center px-1"
                        style={{ 
                          left: `${project.startOffset}%`, 
                          width: `${project.width}%` 
                        }}
                      >
                        <div 
                          className="h-full bg-primary rounded flex items-center justify-center text-xs text-primary-foreground font-medium"
                          style={{ width: `${project.progress}%` }}
                        >
                          {project.width > 15 && <span className="truncate px-1">{project.name}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview" data-testid="tab-overview">Project Overview</TabsTrigger>
            <TabsTrigger value="kanban" data-testid="tab-kanban">Kanban Board</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <Card key={project.id} className="hover-elevate cursor-pointer neo-widget" data-testid={`project-${project.id}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-base">{project.name}</CardTitle>
                        <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>
                      </div>
                      <Badge variant={getStatusColor(project.status)} className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-1.5" />
                    </div>

                    {/* Project Info */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Target className="h-3 w-3" />
                          Budget
                        </div>
                        <div className="font-medium text-xs">
                          {formatINR(project.spent)} / {formatINR(project.budget)}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-3 w-3" />
                          Team
                        </div>
                        <div className="font-medium">{project.teamSize} members</div>
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
      )}
    </div>
  );
}