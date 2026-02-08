import Navigation from "@/components/Navigation";
import profileImage from "@/assets/profile.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
        <div className="grid md:grid-cols-[280px,1fr] gap-12 items-start">
          {/* Profile Image */}
          <div className="w-full max-w-[280px] mx-auto md:mx-0">
            <img src={profileImage} alt="Naser Al-Rais" className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-[1.02]" />
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-foreground mb-6">Naser Al-Rais</h1>

            <p className="text-base text-muted-foreground leading-relaxed">Hi, I'm Nas! I'm learning about the molecular biology of aging and how epigenetic changes drive neurodegeneration. I'm interested in researching how we can reverse aging to reduce the risk of age-related diseases.</p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Currently, I'm an undergrad at the{" "}
              <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                University of Cambridge
              </a>
              , taking biochemistry, pharmacology and computational biology. I'm also a research assistant in the{" "}
              <a href="https://www-knowles.ch.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Knowles Lab
              </a>
              , where I'm investigating phase transitions in ALS/FTD using droplet microfluidics.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              I have research experience at the{" "}
              <a href="https://www.yinglu.hms.harvard.edu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Lu Lab
              </a>
              , Harvard Medical School, where I engineered a model system to study the toxicity and clearance of protein aggregates.
            </p>
          </div>
        </div>
      </main>
    </div>;
};
export default Index;
