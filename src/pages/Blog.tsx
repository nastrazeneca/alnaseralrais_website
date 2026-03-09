import Navigation from "@/components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-2xl mx-auto px-6 py-12 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
        <p className="text-muted-foreground">Coming soon.</p>
      </main>
    </div>
  );
};

export default Blog;
