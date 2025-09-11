import ProjectKanban from '../ProjectKanban';

export default function ProjectKanbanExample() {
  const mockColumns = [
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
  ];

  return (
    <div className="p-4">
      <ProjectKanban 
        projectName="OrgVision Dashboard Development"
        columns={mockColumns}
      />
    </div>
  );
}