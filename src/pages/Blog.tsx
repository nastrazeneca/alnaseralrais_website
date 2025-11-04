import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar, Sparkles } from "lucide-react";

const Blog = () => {
  const comingSoonDate = new Date("2025-11-30").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
        <div className="space-y-6">
          <Card className="border-accent/20 bg-gradient-to-br from-background to-accent/5 hover:shadow-xl hover:border-accent/40 transition-all duration-300">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                  Post Coming Soon...
                </CardTitle>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-accent" />
                <CardDescription className="text-base">{comingSoonDate}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground font-medium">
                Check back in soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Blog;
