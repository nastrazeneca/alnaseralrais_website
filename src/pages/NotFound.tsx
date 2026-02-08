import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex flex-col items-center justify-center px-6 py-24 animate-fade-in">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="text-accent hover:underline transition-colors"
        >
          Back to home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
