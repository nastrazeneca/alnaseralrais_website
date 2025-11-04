import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import CV from "./pages/CV";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const NavigationHandler = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // When not on home page, push home state to ensure back button goes there
    if (location.pathname !== "/") {
      window.history.pushState(null, "", window.location.href);
      
      const handlePopState = (e: PopStateEvent) => {
        e.preventDefault();
        window.location.href = "/";
      };
      
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [location.pathname]);

  return <>{children}</>;
};

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <NavigationHandler>
            <div className="relative min-h-screen overflow-hidden">
              {/* Flowing Orange Streak - appears on all pages */}
              <div className="absolute bottom-0 right-0 w-[200%] h-[85vh] origin-bottom-right -rotate-[12deg] translate-x-[38%] translate-y-[28%] pointer-events-none">
                {/* Main flowing streak with organic shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/90 to-accent/70 opacity-[0.12] blur-[120px] rounded-[60%_40%_70%_30%/40%_60%_40%_60%]" />
                {/* Secondary layer for depth and flow */}
                <div className="absolute inset-0 bg-accent/80 opacity-[0.08] blur-[80px] rounded-[40%_60%_30%_70%/60%_40%_60%_40%] translate-x-[-5%] translate-y-[8%]" />
              </div>

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/blog" element={<Blog />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </NavigationHandler>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
