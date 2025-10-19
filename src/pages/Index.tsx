import Navigation from "@/components/Navigation";
import profileImage from "@/assets/profile.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[280px,1fr] gap-12 items-start">
          {/* Profile Image */}
          <div className="w-full max-w-[280px] mx-auto md:mx-0">
            
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-foreground mb-6">Naser Al-Rais</h1>

            <p className="text-base text-muted-foreground leading-relaxed">
              I am interested in computational tools for Biological Analysis, Understanding, and Design.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Currently, I'm a PhD student in{" "}
              <a href="http://csbi.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Computational Systems Biology
              </a>{" "}
              at MIT advised by{" "}
              <a href="https://heiman.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Myriam Heiman
              </a>
              ,{" "}
              <a href="https://biology.mit.edu/profile/jonathan-weissman/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Jonathan Weissman
              </a>
              ,{" "}
              <a href="http://web.mit.edu/manoli/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Manolis Kellis
              </a>
              , and{" "}
              <a href="https://chrisrackauckas.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Chris Rackauckas
              </a>
              .
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              I have been a researcher at{" "}
              <a href="https://research.google/teams/health/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Google Brain Genomics
              </a>
              , and prior to that in the{" "}
              <a href="http://fraenkel.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Fraenkel lab
              </a>{" "}
              at MIT developing visualization and machine learning tools to study
              neurodegenerative diseases such as{" "}
              <a href="https://en.wikipedia.org/wiki/Amyotrophic_lateral_sclerosis" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                ALS
              </a>{" "}
              and{" "}
              <a href="https://en.wikipedia.org/wiki/Adrenoleukodystrophy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                ALD
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>;
};
export default Index;