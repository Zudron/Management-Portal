import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { GripVertical } from "lucide-react";
import { useState, useEffect } from "react";

interface ResizableSidebarProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function ResizableSidebar({ sidebar, children }: ResizableSidebarProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // On mobile, render without resizable panels
  if (isMobile) {
    return (
      <div className="h-screen w-full flex flex-col">
        {children}
      </div>
    );
  }

  // Desktop with resizable panels
  return (
    <PanelGroup direction="horizontal" className="h-screen w-full">
      <Panel defaultSize={20} minSize={15} maxSize={35}>
        <div className="h-full min-w-[280px]">
          {sidebar}
        </div>
      </Panel>
      
      <PanelResizeHandle className="w-2 bg-border hover:bg-accent transition-colors relative group flex items-center justify-center">
        <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-border group-hover:bg-accent-foreground/30 transition-colors" />
        <div className="relative rounded-sm bg-muted p-1 opacity-60 group-hover:opacity-100 transition-opacity">
          <GripVertical className="h-3 w-3 text-muted-foreground" />
        </div>
      </PanelResizeHandle>
      
      <Panel defaultSize={80} className="flex flex-col min-w-0">
        {children}
      </Panel>
    </PanelGroup>
  );
}