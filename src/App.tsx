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
              {/* Diagonal Orange Streak - appears on all pages */}
              <div className="absolute bottom-0 right-0 w-[200%] h-[80vh] bg-accent origin-bottom-right -rotate-12 translate-x-[30%] translate-y-[30%] opacity-10 blur-[120px] pointer-events-none" />
              
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
