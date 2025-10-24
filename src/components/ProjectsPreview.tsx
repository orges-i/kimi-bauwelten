import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/hero-2.jpg";
import project2 from "@/assets/hero-5.jpg";
import project3 from "@/assets/hero-4.jpg";

const projects = [
  { id: 1, image: project1, title: "Plattenarbeiten" },
  { id: 2, image: project2, title: "Bodenverlegung" },
  { id: 3, image: project3, title: "Fliesenverlegung" },
];

const ProjectsPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere letzten Projekte</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sehen Sie sich einige unserer erfolgreich abgeschlossenen Projekte an
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/referenzen" className="flex items-center gap-2">
              Alle Projekte ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
