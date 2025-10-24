import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="KIMI Umbauten Logo" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Qualität und Präzision seit 2011
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/uber-uns" className="hover:text-primary transition-smooth">
                  Über Uns
                </Link>
              </li>
              <li>
                <Link to="/dienstleistungen" className="hover:text-primary transition-smooth">
                  Dienstleistungen
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Dienstleistungen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dienstleistungen/umbauten" className="hover:text-primary transition-smooth">
                  Umbauten
                </Link>
              </li>
              <li>
                <Link to="/dienstleistungen/malerarbeiten" className="hover:text-primary transition-smooth">
                  Malerarbeiten
                </Link>
              </li>
              <li>
                <Link to="/dienstleistungen/sanitararbeiten" className="hover:text-primary transition-smooth">
                  Sanitärarbeiten
                </Link>
              </li>
              <li>
                <Link to="/dienstleistungen/natursteinverlegung" className="hover:text-primary transition-smooth">
                  Natursteinverlegung
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span>Römerstrasse 13A<br />8552 Felben-Wellhausen</span>
              </li>
              <li className="space-y-2">
                <div className="flex items-center gap-2">
                  <a href="tel:+41788940949" className="flex items-center gap-2 hover:text-primary transition-smooth">
                    <Phone className="h-4 w-4 text-primary" />
                    +41 78 894 09 49
                  </a>
                </div>
              
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@kimiumbauten.ch" className="hover:text-primary transition-smooth">
                  info@kimiumbauten.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KIMI Umbauten GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
