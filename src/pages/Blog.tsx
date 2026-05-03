import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 pt-8 pb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
        <Link to="/blog/nplb" className="block w-full">
          <div className="overflow-hidden rounded-lg border border-border bg-card transition-transform duration-300 hover:scale-[1.02]">
            <div className="overflow-hidden h-40">
              <img
                src="/brain_scans.jpeg"
                alt="Brain scans"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-4 py-2.5">
              <p className="text-xs text-muted-foreground mb-1">May 3rd, 2026</p>
              <h2 className="text-sm font-semibold text-foreground leading-snug">
                What is the cost of saying no to first-generation Alzheimer's therapies?
              </h2>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Blog;
