import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { ProjectGrid } from "@/components/ProjectGrid";
import { About } from "@/components/About";

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <CaseStudies />
      <ProjectGrid />
      <About />

      {/* Footer */}
      <footer className="py-8 md:py-10 px-5 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border border-primary flex items-center justify-center">
                <span className="font-mono text-primary font-bold text-xs">
                  E
                </span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                Ethan Okamura
              </span>
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">©</span> {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
