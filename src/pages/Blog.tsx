import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Blog = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
        <div className="space-y-6">
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-muted-foreground">Coming soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'll be sharing thoughts on aging research, computational biology, and what I'm learning along the way. Check back soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Blog;
