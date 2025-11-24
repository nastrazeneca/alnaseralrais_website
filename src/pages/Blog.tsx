import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import santaHat from "@/assets/santa-hat.png";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Post Coming Soon...",
      date: new Date("2025-12-25").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      excerpt: "Check back in soon!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg hover:border-accent transition-all relative overflow-visible">
              <img 
                src={santaHat} 
                alt="Santa hat decoration" 
                className="absolute -top-6 -right-6 w-20 h-20 z-10 rotate-[25deg]"
              />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
