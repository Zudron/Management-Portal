import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, User } from "lucide-react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  assignee: string;
  dueDate: string;
  tags: string[];
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface ProjectKanbanProps {
  projectName: string;
  columns: Column[];
}

export default function ProjectKanban({ projectName, columns: initialColumns }: ProjectKanbanProps) {
  const [columns, setColumns] = useState(initialColumns);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  const handleTaskClick = (taskId: string) => {
    console.log(`Task ${taskId} clicked`);
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns.find(col => col.id === source.droppableId);
    const finish = columns.find(col => col.id === destination.droppableId);

    if (!start || !finish) return;

    if (start === finish) {
      // Reordering within the same column
      const newTasks = Array.from(start.tasks);
      const [reorderedTask] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, reorderedTask);

      const newColumn = {
        ...start,
        tasks: newTasks,
      };

      const newColumns = columns.map(col => 
        col.id === newColumn.id ? newColumn : col
      );

      setColumns(newColumns);
      console.log(`Task ${draggableId} reordered in ${start.id}`);
    } else {
      // Moving to a different column
      const startTasks = Array.from(start.tasks);
      const [movedTask] = startTasks.splice(source.index, 1);
      const newStart = {
        ...start,
        tasks: startTasks,
      };

      const finishTasks = Array.from(finish.tasks);
      finishTasks.splice(destination.index, 0, movedTask);
      const newFinish = {
        ...finish,
        tasks: finishTasks,
      };

      const newColumns = columns.map(col => {
        if (col.id === newStart.id) return newStart;
        if (col.id === newFinish.id) return newFinish;
        return col;
      });

      setColumns(newColumns);
      console.log(`Task ${draggableId} moved from ${start.id} to ${finish.id}`);
    }
  };

  return (
    <div className="space-y-4" data-testid="kanban-board">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold" data-testid="text-project-name">{projectName}</h2>
        <Badge variant="outline">
          {columns.reduce((total, col) => total + col.tasks.length, 0)} tasks
        </Badge>
      </div>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {columns.map((column) => (
            <div key={column.id} className="space-y-3" data-testid={`column-${column.id}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  {column.title}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {column.tasks.length}
                </Badge>
              </div>
              
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`space-y-2 min-h-[200px] rounded-lg p-2 transition-colors ${
                      snapshot.isDraggingOver ? 'bg-accent/20' : ''
                    }`}
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <Card 
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`cursor-pointer neo-kanban-card ${
                              snapshot.isDragging ? 'rotate-2 shadow-lg' : ''
                            }`}
                            onClick={() => handleTaskClick(task.id)}
                            data-testid={`task-${task.id}`}
                            style={{
                              ...provided.draggableProps.style,
                            }}
                          >
                            <CardContent className="p-3">
                              <div className="space-y-2">
                                <div className="flex items-start justify-between">
                                  <h4 className="font-medium text-sm leading-tight">{task.title}</h4>
                                  <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                                    {task.priority}
                                  </Badge>
                                </div>
                                
                                {task.description && (
                                  <p className="text-xs text-muted-foreground line-clamp-2">
                                    {task.description}
                                  </p>
                                )}
                                
                                {task.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1">
                                    {task.tags.map((tag, index) => (
                                      <Badge key={index} variant="outline" className="text-xs px-1 py-0">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                                
                                <div className="flex items-center justify-between pt-1">
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    {task.dueDate}
                                  </div>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <User className="h-3 w-3" />
                                    {task.assignee}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}