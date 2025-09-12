import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import BudgetTracker from "@/components/BudgetTracker";
import ResizableSidebar from "@/components/ResizableSidebar";
import Overview from "@/pages/Overview";
import Finances from "@/pages/Finances";
import Staff from "@/pages/Staff";
import Projects from "@/pages/Projects";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Overview} />
      <Route path="/finances" component={Finances} />
      <Route path="/staff" component={Staff} />
      <Route path="/projects" component={Projects} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="h-screen w-full bg-background">
            {/* Desktop Layout with ResizableSidebar */}
            <div className="hidden md:block h-full w-full">
              <ResizableSidebar
                sidebar={<AppSidebar />}
              >
                <div className="flex flex-col h-full w-full min-w-0">
                  <header className="flex items-center justify-between p-3 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="flex items-center gap-4">
                      <h1 className="text-lg font-semibold">OrgVision Dashboard</h1>
                    </div>
                    <ThemeToggle />
                  </header>
                  
                  <div className="p-3 border-b">
                    <BudgetTracker />
                  </div>
                  
                  <main className="flex-1 overflow-auto p-4 min-w-0">
                    <Router />
                  </main>
                </div>
              </ResizableSidebar>
            </div>

            {/* Mobile Layout with Collapsible Sidebar */}
            <div className="md:hidden flex h-full w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1 min-w-0">
                <header className="flex items-center justify-between p-3 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <div className="flex items-center gap-2">
                    <SidebarTrigger data-testid="button-sidebar-toggle" />
                    <h1 className="text-sm font-semibold truncate">OrgVision Dashboard</h1>
                  </div>
                  <ThemeToggle />
                </header>
                
                <div className="p-2 border-b">
                  <BudgetTracker />
                </div>
                
                <main className="flex-1 overflow-auto p-3 min-w-0">
                  <Router />
                </main>
              </div>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}