import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 pt-8 pb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
        <div className="flex justify-center">
          <Link to="/blog/nplb" className="block w-full max-w-2xl">
            <div className="flex overflow-hidden rounded-lg border border-border bg-card transition-transform duration-300 hover:scale-[1.02] h-48">
              <div className="w-2/5 flex-shrink-0 overflow-hidden">
                <img
                  src="/brain_scans.jpeg"
                  alt="Brain scans"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">May 3rd, 2026</p>
                  <h2 className="text-sm font-semibold text-foreground leading-snug">
                    What is the cost of saying no to first-generation Alzheimer's therapies?
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Blog;
