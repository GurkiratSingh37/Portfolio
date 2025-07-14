import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AyurvedicWellness from "./pages/projects/AyurvedicWellness";
import SimonGame from "./pages/projects/SimonGame";
import Gotit from "./pages/projects/Gotit";
import Workverse from "./pages/projects/Workverse";
import NetworkOn from "./pages/projects/NetworkOn";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/projects/:title" element={<Project />} /> */}
          <Route path="/projects/ayurvedic-wellness" element={<AyurvedicWellness />} />
          <Route path="/projects/simon-game" element={<SimonGame />} />
          <Route path="/projects/gotit" element={<Gotit />} />
          <Route path="/projects/workverse" element={<Workverse />} />
          <Route path="/projects/networkon" element={<NetworkOn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
