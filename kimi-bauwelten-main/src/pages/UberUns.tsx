import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import consultationImg from "@/assets/consultation.jpg";
import executionImg from "@/assets/execution.jpg";

const UberUns = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Über Uns</h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in">
            Ihr professioneller Partner für hochwertige Umbauten, Renovationen und Bauarbeiten in der ganzen Schweiz
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-bold mb-6">Qualität seit 2011</h2>
              <p className="text-lg text-muted-foreground mb-6">
                KIMI Umbauten ist Ihr professioneller Partner für hochwertige Umbauten, Renovationen und Bauarbeiten in der ganzen Schweiz. Seit 2011 stehen wir für Qualität, Zuverlässigkeit und innovative Lösungen im Bauwesen.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Unser erfahrenes Team aus Fachkräften garantiert höchste Qualität, termingerechte Umsetzung und volle Kundenzufriedenheit. Wir kombinieren traditionelle Handwerkswerte mit moderner Technologie.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>Über 10 Jahre Erfahrung</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>Schweizweit tätig</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>Qualifizierte Fachkräfte</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>Termingerechte Umsetzung</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src={consultationImg} 
                alt="KIMI Umbauten Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Strategy */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-primary">Mission</h3>
              <p className="text-muted-foreground">
                Unser Ziel ist es, Bauideen mit höchster Qualität und Zuverlässigkeit umzusetzen. Wir schaffen Werte, Räume und Vertrauen.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold mb-4 text-primary">Vision</h3>
              <p className="text-muted-foreground">
                Mit Erfahrung und Leidenschaft realisieren wir Wohnträume und setzen auf nachhaltige und moderne Baukonzepte.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-4 text-primary">Strategie</h3>
              <p className="text-muted-foreground">
                Kombination aus traditionellen Handwerkswerten und moderner Technologie für exzellente Resultate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src={executionImg} 
                alt="KIMI Umbauten Geschichte" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 animate-slide-in">
              <h2 className="text-4xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Seit der Gründung im Jahr 2011 hat KIMI Umbauten zahlreiche Projekte in der Schweiz erfolgreich realisiert. Unser Team aus Fachkräften garantiert höchste Qualität, termingerechte Umsetzung und volle Kundenzufriedenheit.
              </p>
              <p className="text-lg text-muted-foreground">
                Von kleinen Renovierungen bis hin zu großen Umbauprojekten – wir haben uns einen Namen gemacht durch unser Engagement, unsere Präzision und unsere Leidenschaft für exzellente Bauarbeiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UberUns;
