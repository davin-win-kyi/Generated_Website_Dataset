import { ReactNode } from "react";
import { SidebarNav } from "./SidebarNav";
import { MobileNav } from "./MobileNav";

interface SocialLayoutProps {
  children: ReactNode;
}

export function SocialLayout({ children }: SocialLayoutProps) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border sticky top-0 h-screen" aria-label="Main navigation">
        <SidebarNav />
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 pb-20 lg:pb-0">
        {children}
      </main>

      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  );
}
