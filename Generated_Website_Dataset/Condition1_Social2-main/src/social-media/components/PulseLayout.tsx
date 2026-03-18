import { Outlet } from "react-router-dom";
import { PulseSidebar } from "./PulseSidebar";
import { MobileNav } from "./MobileNav";

export function PulseLayout() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <PulseSidebar />
      <main className="flex-1 min-w-0 pb-20 md:pb-0" id="main-content" role="main">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  );
}
