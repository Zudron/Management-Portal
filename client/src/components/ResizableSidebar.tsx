import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { GripVertical } from "lucide-react";

interface ResizableSidebarProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function ResizableSidebar({ sidebar, children }: ResizableSidebarProps) {
  return (
    <PanelGroup direction="horizontal" className="h-screen w-full">
      <Panel defaultSize={20} minSize={15} maxSize={35} className="min-w-[240px]">
        {sidebar}
      </Panel>
      
      <PanelResizeHandle className="w-2 bg-border hover:bg-accent transition-colors relative group">
        <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-border/50 group-hover:bg-accent-foreground/20 transition-colors" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-border p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <GripVertical className="h-3 w-3" />
        </div>
      </PanelResizeHandle>
      
      <Panel defaultSize={80} className="flex flex-col">
        {children}
      </Panel>
    </PanelGroup>
  );
}