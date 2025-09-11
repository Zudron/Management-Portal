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
    <Card className="w-full max-w-md" data-testid={`card-staff-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-lg">{initials}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="flex items-center justify-center gap-2">
          {name}
          {isManager && <Badge variant="secondary">Manager</Badge>}
        </CardTitle>
        <p className="text-muted-foreground">{role}</p>
        <Badge variant="outline">{department}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span data-testid="text-email">{email}</span>
          </div>
          {phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span data-testid="text-phone">{phone}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span data-testid="text-start-date">Started {startDate}</span>
          </div>
        </div>
        
        {projects.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Current Projects</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {projects.map((project, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {project}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1" data-testid="button-edit-staff">
            Edit Profile
          </Button>
          <Button size="sm" variant="default" className="flex-1" data-testid="button-view-details">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}