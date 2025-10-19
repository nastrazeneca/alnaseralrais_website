import Navigation from "@/components/Navigation";
import { useEffect } from "react";

const Github = () => {
  useEffect(() => {
    // Redirect to GitHub profile
    window.location.href = "https://github.com";
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to GitHub...</p>
    </div>
  );
};

export default Github;
