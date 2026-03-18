import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import MassMediaHome from "./pages/mass-media/MassMediaHome.tsx";
import MassMediaWorld from "./pages/mass-media/MassMediaWorld.tsx";
import MassMediaArticle from "./pages/mass-media/MassMediaArticle.tsx";
import MassMediaOpinion from "./pages/mass-media/MassMediaOpinion.tsx";
import MassMediaSubscribe from "./pages/mass-media/MassMediaSubscribe.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mass-media" element={<MassMediaHome />} />
          <Route path="/mass-media/world" element={<MassMediaWorld />} />
          <Route path="/mass-media/article" element={<MassMediaArticle />} />
          <Route path="/mass-media/opinion" element={<MassMediaOpinion />} />
          <Route path="/mass-media/subscribe" element={<MassMediaSubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
