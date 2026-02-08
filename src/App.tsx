import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CV from "./pages/CV";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
            <div className="relative min-h-screen overflow-hidden">
              {/* Flowing Orange Streak - appears on all pages */}
              <div className="absolute bottom-0 right-0 w-[200%] h-[85vh] origin-bottom-right -rotate-[12deg] translate-x-[38%] translate-y-[28%] pointer-events-none motion-reduce:hidden">
                {/* Primary organic blob - deepest layer with maximum blur for ethereal effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/85 to-accent/60 opacity-[0.20] blur-[120px] rounded-[65%_35%_72%_28%/38%_62%_42%_58%]" />
                {/* Secondary flowing layer - mid-depth with organic asymmetry */}
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/75 via-accent/60 to-accent/40 opacity-[0.14] blur-[90px] rounded-[42%_58%_33%_67%/61%_39%_64%_36%] translate-x-[-6%] translate-y-[10%]" />
                {/* Tertiary accent layer - softest highlights for dimensional depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-accent/20 opacity-[0.09] blur-[140px] rounded-[55%_45%_68%_32%/44%_56%_38%_62%] translate-x-[8%] translate-y-[-5%]" />
              </div>

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/blog" element={<Blog />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
