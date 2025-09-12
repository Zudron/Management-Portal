import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { GripVertical } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";

interface ResizableSidebarProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function ResizableSidebar({ sidebar, children }: ResizableSidebarProps) {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <PanelGroup direction="horizontal" className="h-full w-full">
        {/* Sidebar Panel */}
        <Panel 
          defaultSize={20} 
          minSize={15} 
          maxSize={40} 
          collapsible={true}
        >
          <div className="h-full w-full min-w-[240px]">
            {sidebar}
          </div>
        </Panel>
        
        {/* Resize Handle */}
        <PanelResizeHandle className="w-2 bg-border hover:bg-accent transition-colors relative group flex items-center justify-center data-[panel-group-direction=horizontal]:cursor-col-resize">
          <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-border group-hover:bg-accent-foreground/30 transition-colors" />
          <div className="relative rounded-sm bg-muted p-1 opacity-60 group-hover:opacity-100 transition-opacity">
            <GripVertical className="h-3 w-3 text-muted-foreground" />
          </div>
        </PanelResizeHandle>
        
        {/* Main Content Panel */}
        <Panel defaultSize={80} minSize={60} className="min-w-0">
          <div className="h-full w-full min-w-0">
            {children}
          </div>
        </Panel>
      </PanelGroup>
    </SidebarProvider>
  );
}