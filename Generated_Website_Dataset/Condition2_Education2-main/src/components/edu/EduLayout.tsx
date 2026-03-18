import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useEffect } from "react";

interface EduLayoutProps {
  children: React.ReactNode;
  title: string;
  hideFooter?: boolean;
}

export function EduLayout({ children, title, hideFooter }: EduLayoutProps) {
  useEffect(() => {
    document.title = `${title} | LearnPath`;
  }, [title]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>
      {!hideFooter && <SiteFooter />}
    </div>
  );
}
