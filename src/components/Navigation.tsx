import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: 'Home' },
    { to: "/uber-uns", label: 'Über uns' },
    { to: "/dienstleistungen", label: 'Dienstleistungen' },
    { to: "/kontakt", label: 'Kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled || !isHomePage ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="KIMI Umbauten Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <a href="tel:+41788940949" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Jetzt anrufen
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-primary transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in bg-secondary/95 backdrop-blur-md rounded-lg p-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2 text-sm font-medium transition-smooth hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/90">
              <a href="tel:+41788940949" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Jetzt anrufen
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
