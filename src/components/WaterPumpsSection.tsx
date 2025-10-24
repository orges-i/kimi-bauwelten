import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import pumpsImage1 from "@/assets/pumps-showcase-1.jpg";
import pumpsImage2 from "@/assets/pumps-showcase-2.jpg";
import pumpsImage3 from "@/assets/pumps-showcase-3.jpg";
import pumpsImage4 from "@/assets/pumps-showcase-4.jpg";

const pumpImages = [
  { src: pumpsImage1, alt: "Wasserpumpen-Installation Außenbereich" },
  { src: pumpsImage2, alt: "Moderne Pumpensysteme" },
  { src: pumpsImage3, alt: "Professionelle Pumpeninstallation" },
  { src: pumpsImage4, alt: "Hochwertige Wasserpumpen" },
];

const WaterPumpsSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
            Spezialisierung: Wasserpumpen & Entwässerungssysteme
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto break-words">
            Wir bieten professionelle Installation und Wartung von Wasserpumpen,
            Badabläufen und Duschrinnen für private und gewerbliche Projekte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pumpImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card p-8 rounded-lg shadow-xl max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Unsere Leistungen im Bereich Wasserpumpen:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Installation moderner Pumpensysteme</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Wartung und Reparatur bestehender Anlagen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Badabläufe und Duschrinnen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Entwässerungslösungen für Bäder und Wellness</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Barrierefreie Duschlösungen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Beratung und Planung nach Ihren Bedürfnissen</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={pumpImages[selectedImage].src}
                alt={pumpImages[selectedImage].alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  {pumpImages[selectedImage].alt}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WaterPumpsSection;
