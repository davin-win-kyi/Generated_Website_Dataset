import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PulseSidebar } from "./PulseSidebar";

interface PulseLayoutProps {
  children: React.ReactNode;
}

export function PulseLayout({ children }: PulseLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <PulseSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b border-border px-4 bg-card/80 backdrop-blur-sm sticky top-0 z-30 lg:hidden">
            <SidebarTrigger />
            <span className="ml-3 text-lg font-display font-bold text-foreground">Pulse</span>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
