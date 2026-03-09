import Navigation from "@/components/Navigation";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
        <div className="grid md:grid-cols-[280px,1fr] gap-12 items-center">
          {/* Profile Image */}
          <div className="w-full max-w-[280px] mx-auto md:mx-0">
            <img src={profileImage} alt="Naser Al-Rais" className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-[1.02]" />
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-foreground mb-6">Naser Al-Rais</h1>

            <p className="text-base text-muted-foreground leading-relaxed">Hi, I'm Nas.</p>

            <p className="text-base text-muted-foreground leading-relaxed">
              I'm a second-year undergraduate at the{" "}
              <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                University of Cambridge
              </a>
              {" "}studying biochemistry, computational biology, and pharmacology. I'm interested in the molecular biology of ageing: how the epigenetic landscape &ldquo;ages&rdquo; and how proteostatic failure drives neurodegeneration, and whether we can reverse these changes to meaningfully reduce disease risk.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              I'm currently a research assistant in the{" "}
              <a href="https://www-knowles.ch.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Knowles Lab
              </a>
              {" "}(Department of Chemistry), where I'm investigating disordered proteins and how small molecules tune liquid–liquid phase separation, using microfluidic devices we build in-house.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Previously, I interned at the{" "}
              <a href="https://www.yinglu.hms.harvard.edu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Lu Lab
              </a>
              , Harvard Medical School, where I engineered a novel inducible protein aggregation model to study the toxicity and clearance of protein aggregates, complementing existing model systems in the field.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
