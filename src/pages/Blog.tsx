import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/blog/nplb" className="block">
            <div className="overflow-hidden rounded-lg border border-border bg-card transition-transform duration-300 hover:scale-[1.02]">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/brain_scans.jpeg"
                  alt="Brain scans"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1.5">May 3rd, 2026</p>
                <h2 className="text-sm font-semibold text-foreground leading-snug">
                  What is the cost of saying no to first-generation Alzheimer's therapies?
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Blog;
