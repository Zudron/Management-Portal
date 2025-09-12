import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { GripVertical } from "lucide-react";

interface ResizableSidebarProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function ResizableSidebar({ sidebar, children }: ResizableSidebarProps) {
  return (
    <PanelGroup direction="horizontal" className="h-full w-full">
      <Panel defaultSize={20} minSize={15} maxSize={35} className="min-w-[280px]">
        <div className="h-full w-full">
          {sidebar}
        </div>
      </Panel>
      
      <PanelResizeHandle className="w-2 bg-border hover:bg-accent transition-colors relative group flex items-center justify-center data-[panel-group-direction=horizontal]:cursor-col-resize">
        <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-border group-hover:bg-accent-foreground/30 transition-colors" />
        <div className="relative rounded-sm bg-muted p-1 opacity-60 group-hover:opacity-100 transition-opacity">
          <GripVertical className="h-3 w-3 text-muted-foreground" />
        </div>
      </PanelResizeHandle>
      
      <Panel defaultSize={80} className="min-w-0">
        <div className="h-full w-full">
          {children}
        </div>
      </Panel>
    </PanelGroup>
  );
}