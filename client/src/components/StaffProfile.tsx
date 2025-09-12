import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Briefcase } from "lucide-react";

interface StaffProfileProps {
  name: string;
  role: string;
  email: string;
  phone?: string;
  avatar?: string;
  department: string;
  startDate: string;
  projects: string[];
  isManager?: boolean;
}

export default function StaffProfile({ 
  name, 
  role, 
  email, 
  phone, 
  avatar, 
  department, 
  startDate, 
  projects,
  isManager = false 
}: StaffProfileProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="w-full max-w-sm neo-widget" data-testid={`card-staff-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="text-center pb-3">
        <div className="mx-auto mb-2">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-sm">{initials}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="flex items-center justify-center gap-2 text-base">
          {name}
          {isManager && <Badge variant="secondary" className="text-xs">Manager</Badge>}
        </CardTitle>
        <p className="text-muted-foreground text-sm">{role}</p>
        <Badge variant="outline" className="text-xs">{department}</Badge>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs">
            <Mail className="h-3 w-3 text-muted-foreground" />
            <span data-testid="text-email" className="truncate">{email}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <span data-testid="text-start-date">Started {startDate}</span>
          </div>
        </div>
        
        {projects.length > 0 && (
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Briefcase className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs font-medium">Projects</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {projects.slice(0, 2).map((project, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {project}
                </Badge>
              ))}
              {projects.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{projects.length - 2} more
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="flex gap-1 pt-1">
          <Button size="sm" variant="outline" className="flex-1 text-xs h-7" data-testid="button-edit-staff">
            Edit
          </Button>
          <Button size="sm" variant="default" className="flex-1 text-xs h-7" data-testid="button-view-details">
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}