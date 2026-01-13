import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Contracts } from "@/components/Contracts";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function App() {
  return (
    <>
      {/* Grain texture overlay */}
      <div className="grain" />

      <main className="min-h-screen bg-background relative">
        <Hero />
        
        <div className="section-divider mx-5 sm:mx-6 md:mx-12 lg:mx-24" />
        
        <Experience />
        
        <div className="section-divider mx-5 sm:mx-6 md:mx-12 lg:mx-24" />
        
        <Contracts />
        
        <div className="section-divider mx-5 sm:mx-6 md:mx-12 lg:mx-24" />
        
        <Projects />
        
        <div className="section-divider mx-5 sm:mx-6 md:mx-12 lg:mx-24" />
        
        <Contact />

        {/* Footer */}
        <footer className="py-8 sm:py-10 md:py-12 px-5 sm:px-6 md:px-12 lg:px-24 border-t border-border/30 safe-area-bottom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="font-mono text-primary font-bold text-xs sm:text-sm">
                    E
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Ethan Okamura
                </span>
              </div>
              <div className="font-mono text-[10px] sm:text-xs text-muted-foreground">
                © {new Date().getFullYear()} · Built with React
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
