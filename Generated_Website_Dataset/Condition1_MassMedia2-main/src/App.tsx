import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/mass-media/HomePage";
import WorldPage from "./pages/mass-media/WorldPage";
import ArticlePage from "./pages/mass-media/ArticlePage";
import OpinionPage from "./pages/mass-media/OpinionPage";
import SubscribePage from "./pages/mass-media/SubscribePage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/world" element={<WorldPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/opinion" element={<OpinionPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
