import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";

const Kontakt = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Kontaktieren Sie uns</h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in">
            Wir beraten Sie gerne zu Ihren Bauprojekten. Rufen Sie uns an oder schreiben Sie uns per E-Mail – wir freuen uns auf Ihre Anfrage.
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h2 className="text-3xl font-bold mb-8">Kontaktinformationen</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Römerstrasse 13A<br />
                        8552 Felben-Wellhausen<br />
                        Schweiz
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a 
                        href="tel:+41788940949" 
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        +41 78 894 09 49
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail</h3>
                      <a 
                        href="mailto:info@kimiumbauten.ch" 
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        info@kimiumbauten.ch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Facebook className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Facebook</h3>
                      <a 
                        href="https://www.facebook.com/kimi.umbauten/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth inline-flex items-center gap-1"
                      >
                        @kimi.umbauten
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Öffnungszeiten</h3>
                      <p className="text-muted-foreground">
                        Mo-Fr: 07:00–17:00<br />
                        Sa-So: Geschlossen
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Rufen Sie uns jetzt an!</h3>
                <p className="mb-6 opacity-90">
                  Wir sind bereit, Ihr Projekt zu besprechen und Ihnen ein unverbindliches Angebot zu erstellen.
                </p>
                <Button asChild size="lg" variant="secondary">
                  <a href="tel:+41788940949" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    +41 78 894 09 49
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="animate-fade-in">
              <div className="bg-muted rounded-lg overflow-hidden shadow-2xl h-full min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.5!2d8.9234!3d47.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a93f5a8b8f5a1%3A0x0!2sR%C3%B6merstrasse%2013A%2C%208552%20Felben-Wellhausen!5e0!3m2!1sen!2sch!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KIMI Umbauten Standort"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
