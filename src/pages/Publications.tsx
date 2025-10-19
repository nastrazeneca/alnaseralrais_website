import Navigation from "@/components/Navigation";

const Publications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Publications</h1>
        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-muted-foreground">Publications list coming soon.</p>
        </div>
      </main>
    </div>
  );
};

export default Publications;
