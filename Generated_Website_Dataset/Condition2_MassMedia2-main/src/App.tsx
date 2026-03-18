import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound.tsx";
import { MassMediaLayout } from "@/mass-media/components/MassMediaLayout";
import MassMediaHome from "@/mass-media/pages/MassMediaHome";
import WorldPage from "@/mass-media/pages/WorldPage";
import ArticlePage from "@/mass-media/pages/ArticlePage";
import OpinionPage from "@/mass-media/pages/OpinionPage";
import SubscriptionPage from "@/mass-media/pages/SubscriptionPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/mass-media" replace />} />
          <Route path="/mass-media" element={<MassMediaLayout />}>
            <Route index element={<MassMediaHome />} />
            <Route path="world" element={<WorldPage />} />
            <Route path="article/:id" element={<ArticlePage />} />
            <Route path="opinion" element={<OpinionPage />} />
            <Route path="subscribe" element={<SubscriptionPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
