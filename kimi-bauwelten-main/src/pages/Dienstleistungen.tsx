import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    slug: "umbauten",
    title: "Umbauten",
    description: "Von kleinen Raumveränderungen bis hin zu kompletten Gebäuderenovationen – wir führen Umbauten effizient und nach Ihren Wünschen durch.",
  },
  {
    slug: "malerarbeiten",
    title: "Malerarbeiten",
    description: "Wir verleihen Ihren Räumen neuen Glanz mit professionellen Malerarbeiten und hochwertigen Farben.",
  },
  {
    slug: "gipsarbeiten",
    title: "Gipsarbeiten",
    description: "Gips- und Stuckarbeiten für ästhetische Innenräume mit perfekter Oberfläche.",
  },
  {
    slug: "sanitararbeiten",
    title: "Sanitärarbeiten",
    description: "Professionelle Sanitärinstallationen, Reparaturen und Wartung für private und gewerbliche Gebäude.",
  },
  {
    slug: "natursteinverlegung",
    title: "Natursteinverlegung",
    description: "Elegante Natursteinlösungen für Böden, Wände und Außenbereiche – präzise verlegt für ein edles Finish.",
  },
  {
    slug: "plattenlegearbeiten",
    title: "Plattenlegearbeiten",
    description: "Hochwertige Fliesen- und Plattenverlegung für moderne Räume – langlebig und pflegeleicht.",
  },
  {
    slug: "maurerarbeiten",
    title: "Maurerarbeiten",
    description: "Solide Maurerarbeiten für Neu- und Umbauten. Stabilität, Präzision und Qualität – das Fundament jedes Projekts.",
  },
];

const Dienstleistungen = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in break-words">Unsere Dienstleistungen</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl animate-fade-in break-words">
            Wir bieten Ihnen ein breites Spektrum an professionellen Bau- und Umbauleistungen. Alle Arbeiten erfolgen aus einer Hand – präzise, zuverlässig und mit Liebe zum Detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="bg-card rounded-lg p-8 shadow-lg hover:shadow-2xl transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Button asChild variant="outline" className="group-hover:border-primary group-hover:text-primary">
                  <Link to={`/dienstleistungen/${service.slug}`} className="flex items-center gap-2">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drainage Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 animate-fade-in break-words">Badabläufe und Duschrinnen</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in break-words">
              Wir bieten moderne Entwässerungslösungen für Bäder, Schwimmbäder und Wellnessanlagen. Ob barrierefrei oder designorientiert – wir sorgen für bedarfsgerechte, wartungsfreundliche und ästhetische Systeme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <img src="/src/assets/pumps-1.jpg" alt="Entwässerungssysteme" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img src="/src/assets/pumps-2.jpg" alt="Pumpsysteme" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dienstleistungen;
