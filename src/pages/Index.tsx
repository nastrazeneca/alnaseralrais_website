import Navigation from "@/components/Navigation";
import profileImage from "@/assets/profile.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[280px,1fr] gap-12 items-start">
          {/* Profile Image */}
          <div className="w-full max-w-[280px] mx-auto md:mx-0 overflow-hidden rounded-sm">
            <img src={profileImage} alt="Naser Al-Rais" className="w-full h-auto scale-[1.02] transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-100 cursor-pointer" />
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-foreground mb-6">Naser Al-Rais</h1>

            <p className="text-base text-muted-foreground leading-relaxed">I am interested in the molecular biology of neurodegenerative diseases and aging via protein quality control pathways!</p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Currently, I'm an undergrad at the{" "}
              <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                University of Cambridge
              </a>
              , taking biochemistry, pharmacology and computational biology. I'm also a research assistant in the{" "}
              <a href="https://www-knowles.ch.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Knowles Lab
              </a>
              , where I'm supporting platform-validation for a drug delivery startup in stealth.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              I have research experience at the{" "}
              <a href="https://www.yinglu.hms.harvard.edu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Lu Lab
              </a>
              , Harvard Medical School, where we developed a genetically encoded model system to study the toxicity and clearance of protein aggregates.
            </p>
          </div>
        </div>
      </main>
    </div>;
};
export default Index;
