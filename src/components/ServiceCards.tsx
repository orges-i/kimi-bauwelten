import { Users, Ruler, Wrench } from "lucide-react";
import consultationImg from "@/assets/hero-3.jpg";
import planningImg from "@/assets/hero-1.jpg";
import executionImg from "@/assets/hero-4.jpg";

const services = [
  {
    icon: Users,
    title: "Beratung",
    description: "Kompetente Beratung und präzise Projektbewertung für jedes Bauvorhaben.",
    image: consultationImg,
  },
  {
    icon: Ruler,
    title: "Planung",
    description: "Ästhetische, funktionale und strukturierte Planung bis ins Detail.",
    image: planningImg,
  },
  {
    icon: Wrench,
    title: "Ausführung",
    description: "Perfekte Umsetzung Ihrer Wünsche mit Schweizer Präzision.",
    image: executionImg,
  },
];

const ServiceCards = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">Unsere Spezialisierungen</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto break-words">
            Wir begleiten Sie von der ersten Idee bis zur erfolgreichen Umsetzung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
