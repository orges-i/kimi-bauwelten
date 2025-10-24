import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";
import heroImage4 from "@/assets/hero-4.jpg";
import heroImage5 from "@/assets/hero-5.jpg";

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden scroll-indicator-cursor">
      {/* Carousel Background */}
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        className="absolute inset-0 z-0"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className="h-screen w-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          KIMI Umbauten – Ihr Partner für<br className="hidden sm:block" /> exzellente Bauarbeiten
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/90 max-w-3xl mx-auto px-2">
          Von Umbauten über Maurer- bis hin zu Natursteinarbeiten – mit Spezialisierung auf Wasserpumpen & Entwässerungssysteme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary backdrop-blur-sm text-lg px-8 py-6"
          >
            <a href="#services">Mehr erfahren</a>
          </Button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex gap-2 justify-center mt-8">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index 
                  ? "bg-white w-8" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-white/80" />
      </div>
    </section>
  );
};

export default Hero;
