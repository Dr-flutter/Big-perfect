import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Paiement", href: "/paiement" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Function to scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Top contact bar - Gris anthracite (50%) */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+237123456789" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Phone size={14} />
              +237 12 34 56 789
            </a>
            <a href="mailto:contact@bigperfect.ci" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Mail size={14} />
              contact@bigperfect.ci
            </a>
          </div>
          <div className="text-brand-gold font-medium">
            Ensemble accélérons le développement de l'Afrique
          </div>
        </div>
      </div>

      {/* Main header - Background blanc/gris (50%) */}
      <header className="bg-background shadow-lg sticky top-0 z-50">
        <nav className="container-custom py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12  rounded-lg flex items-center justify-center">
              
                <img 
                  src="/src/assets/logo.jpg" 
                  alt="Big Perfect Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">Big Perfect</div>
                <div className="text-xs text-muted-foreground">BTP & Construction</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-brand-gold ${
                    isActive(item.href) 
                      ? "text-accent border-b-2 border-brand-gold" 
                      : "text-foreground"
                  }`}
                  onClick={scrollToTop} // Call scrollToTop on click
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/contact">
                <Button className="btn-hero">
                  Demander un devis
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-brand-gold"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t"
            >
              <div className="container-custom py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block py-2 font-medium transition-colors ${
                      isActive(item.href) 
                        ? "text-accent" 
                        : "text-foreground hover:text-brand-gold"
                    }`}
                    onClick={() => {
                      scrollToTop(); // Call scrollToTop on click
                      setIsMobileMenuOpen(false); // Close mobile menu
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="btn-hero w-full">
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;