import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft } from "lucide-react";
import project1 from "@/assets/hero-3.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import painting from "@/assets/painting.jpg";
import gips from "@/assets/gips.jpg";
import plumbing from "@/assets/plumbing.jpg";
import stoneinstallation from "@/assets/stoneinstallation.png";
import hero4 from "@/assets/hero-4.jpg";
import masonry from "@/assets/masonry.jpg";


const serviceData: Record<string, { title: string; description: string; details: string[]; image: string }> = {
  umbauten: {
    title: "Umbauten",
    description: "Von kleinen Raumveränderungen bis hin zu kompletten Gebäuderenovationen – wir führen Umbauten effizient und nach Ihren Wünschen durch.",
    details: [
      "Komplette Gebäuderenovationen",
      "Raumveränderungen und Neugestaltung",
      "Modernisierung bestehender Räume",
      "Barrierefreie Umbauten",
      "Energetische Sanierungen",
    ],
    image: project1,
  },
  malerarbeiten: {
    title: "Malerarbeiten",
    description: "Wir verleihen Ihren Räumen neuen Glanz mit professionellen Malerarbeiten und hochwertigen Farben.",
    details: [
      "Innen- und Außenanstriche",
      "Fassadenanstriche",
      "Tapezierarbeiten",
      "Dekorative Wandgestaltung",
      "Farbberatung",
    ],
    image: painting,
  },
  gipsarbeiten: {
    title: "Gipsarbeiten",
    description: "Gips- und Stuckarbeiten für ästhetische Innenräume mit perfekter Oberfläche.",
    details: [
      "Gipsdecken und Trennwände",
      "Stuckarbeiten",
      "Spachtelarbeiten",
      "Trockenbau",
      "Dekorelemente",
    ],
    image: gips,
  },
  sanitararbeiten: {
    title: "Sanitärarbeiten",
    description: "Professionelle Sanitärinstallationen, Reparaturen und Wartung für private und gewerbliche Gebäude.",
    details: [
      "Badezimmerrenovationen",
      "Sanitärinstallationen",
      "Leitungssanierung",
      "Wasserschadenbehebung",
      "Wartung und Reparaturen",
    ],
    image: plumbing,
  },
  natursteinverlegung: {
    title: "Natursteinverlegung",
    description: "Elegante Natursteinlösungen für Böden, Wände und Außenbereiche – präzise verlegt für ein edles Finish.",
    details: [
      "Natursteinböden",
      "Wandverkleidungen",
      "Außenanlagen",
      "Treppen und Stufen",
      "Arbeitsplatten",
    ],
    image: stoneinstallation,
  },
  plattenlegearbeiten: {
    title: "Plattenlegearbeiten",
    description: "Hochwertige Fliesen- und Plattenverlegung für moderne Räume – langlebig und pflegeleicht.",
    details: [
      "Fliesenverlegung Innen und Außen",
      "Großformatfliesen",
      "Mosaik",
      "Fugenarbeiten",
      "Abdichtungsarbeiten",
    ],
    image: hero4,
  },
  maurerarbeiten: {
    title: "Maurerarbeiten",
    description: "Solide Maurerarbeiten für Neu- und Umbauten. Stabilität, Präzision und Qualität – das Fundament jedes Projekts.",
    details: [
      "Mauerwerk und Fundamentarbeiten",
      "Verputzarbeiten",
      "Betonarbeiten",
      "Reparaturen und Sanierungen",
      "Außenwände und Trennwände",
    ],
    image: masonry,
  },
};

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceData[serviceSlug || ""];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service nicht gefunden</h1>
          <Button asChild>
            <Link to="/dienstleistungen">Zurück zu Dienstleistungen</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/dienstleistungen" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Zurück zu Dienstleistungen
            </Link>
          </Button>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">{service.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-6">Unsere Leistungen</h2>
              <ul className="space-y-4">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="tel:+41788940949" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Jetzt Beratung anfragen
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für Ihr Projekt?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+41788940949" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +41 78 894 09 49
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/kontakt">Kontaktformular</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
