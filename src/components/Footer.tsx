import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">BP</span>
              </div>
              <div>
                <div className="text-xl font-bold text-primary-foreground">Big Perfect</div>
                <div className="text-sm text-gray-300">BTP & Construction</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction et de rénovation. 
              Qualité, expertise et respect des délais garantis.
            </p>
            <div className="text-brand-gold font-medium">
              "Ensemble accélérons le développement de l'Afrique"
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: "Accueil", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Réalisations", href: "/realisations" },
                { name: "À propos", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Paiement", href: "/paiement" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover:text-brand-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold">Nos Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Électricité</li>
              <li>Plomberie</li>
              <li>Métallurgies</li>
              <li>Staff et peinture</li>
              <li>Réfection et rénovation</li>
              <li>Fosse biophile</li>
              <li>Ascenseur</li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:+237123456789" 
                className="flex items-center gap-3 text-gray-300 hover:text-brand-gold transition-colors"
              >
                <Phone size={18} />
                +237 12 34 56 789
              </a>
              <a 
                href="https://wa.me/237123456789"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-gold transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a 
                href="mailto:contact@bigperfect.ci" 
                className="flex items-center gap-3 text-gray-300 hover:text-brand-gold transition-colors"
              >
                <Mail size={18} />
                contact@bigperfect.ci
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1" />
                <span>Yaoundé, Bastos<br />Cameroun</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-brand-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-brand-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-brand-gold transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Big Perfect. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="hover:text-brand-gold transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-brand-gold transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;