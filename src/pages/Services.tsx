import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  RefreshCw, 
  Droplets, 
  ArrowUp,
  CheckCircle,
  Star
} from "lucide-react";
import electricityImg from "@/assets/service-electricity.jpg";
import plumbingImg from "@/assets/service-plumbing.jpg";
import metallurgyImg from "@/assets/service-metallurgy.jpg";
import heroImage from "@/assets/hero-construction.jpg";

const Services = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      id: "electricite",
      icon: Zap,
      title: "Électricité",
      description: "Installation électrique complète, dépannage et mise aux normes pour tous types de bâtiments",
      details: [
        "Installation électrique complète",
        "Mise aux normes électriques",
        "Dépannage d'urgence 24h/7j",
        "Éclairage intérieur et extérieur",
        "Tableaux électriques",
        "Prises et interrupteurs",
        "Système de sécurité électrique"
      ],
      images: [electricityImg, heroImage, electricityImg],
      price: "À partir de 50 000 FCFA"
    },
    {
      id: "plomberie",
      icon: Wrench,
      title: "Plomberie",
      description: "Plomberie sanitaire, chauffage et évacuation des eaux avec garantie qualité",
      details: [
        "Installation sanitaire complète",
        "Réseau d'eau potable",
        "Évacuation des eaux usées",
        "Réparation fuites et canalisations",
        "Installation chauffe-eau",
        "Robinetterie de qualité",
        "Maintenance préventive"
      ],
      images: [plumbingImg, heroImage, plumbingImg],
      price: "À partir de 75 000 FCFA"
    },
    {
      id: "metallerie",
      icon: Hammer,
      title: "Métallurgies",
      description: "Structures métalliques, serrurerie et ferronnerie d'art sur mesure",
      details: [
        "Structures métalliques",
        "Portails et clôtures",
        "Escaliers métalliques",
        "Garde-corps et balustrades",
        "Serrurerie générale",
        "Ferronnerie d'art",
        "Soudure et assemblage"
      ],
      images: [metallurgyImg, heroImage, metallurgyImg],
      price: "À partir de 100 000 FCFA"
    },
    {
      id: "staff-peinture",
      icon: Paintbrush,
      title: "Staff et peinture",
      description: "Décoration intérieure, staff, plâtrerie et peinture de haute qualité",
      details: [
        "Peinture intérieure et extérieure",
        "Staff et plâtrerie décorative",
        "Enduits et finitions",
        "Papier peint et revêtements",
        "Isolation thermique",
        "Ravalement de façades",
        "Décoration sur mesure"
      ],
      images: [heroImage, electricityImg, heroImage],
      price: "À partir de 40 000 FCFA"
    },
    {
      id: "renovation",
      icon: RefreshCw,
      title: "Réfection et rénovation",
      description: "Rénovation complète de bâtiments et remise à neuf professionnelle",
      details: [
        "Rénovation complète",
        "Réfection de toitures",
        "Remise aux normes",
        "Extension de bâtiments",
        "Aménagement intérieur",
        "Modernisation énergétique",
        "Coordination tous corps d'état"
      ],
      images: [heroImage, plumbingImg, heroImage],
      price: "Devis personnalisé"
    },
    {
      id: "fosse-biophile",
      icon: Droplets,
      title: "Fosse biophile",
      description: "Installation et maintenance de systèmes d'assainissement écologiques",
      details: [
        "Étude de faisabilité",
        "Installation fosse biophile",
        "Système d'assainissement",
        "Maintenance préventive",
        "Vidange et nettoyage",
        "Mise aux normes",
        "Conseil environnemental"
      ],
      images: [heroImage, electricityImg, heroImage],
      price: "À partir de 500 000 FCFA"
    },
    {
      id: "ascenseur",
      icon: ArrowUp,
      title: "Ascenseur",
      description: "Installation, maintenance et réparation d'ascenseurs certifiés",
      details: [
        "Installation d'ascenseurs neufs",
        "Maintenance préventive",
        "Dépannage d'urgence",
        "Modernisation d'ascenseurs",
        "Contrôle technique",
        "Pièces de rechange d'origine",
        "Contrat de maintenance"
      ],
      images: [heroImage, metallurgyImg, heroImage],
      price: "Devis sur étude"
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div >
      {/* Header */}
      <section 
        ref={headerRef}
        className="py-20 bg-gradient-hero text-brand-white"
      >
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Une expertise complète dans tous les domaines du BTP pour concrétiser vos projets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`group cursor-pointer transition-all duration-300 hover-lift ${
                    selectedService.id === service.id 
                      ? 'ring-2 ring-brand-gold shadow-gold' 
                      : 'hover-glow'
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-brand-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-brand-anthracite">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="text-brand-gold font-semibold">
                      {service.price}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Service Detail */}
          {selectedService && (
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-muted/30 rounded-2xl overflow-hidden shadow-elegant"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Images */}
                <div className="grid grid-cols-3 gap-2 p-6">
                  {selectedService.images.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${selectedService.title} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center">
                      <selectedService.icon className="w-8 h-8 text-brand-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-brand-anthracite">
                        {selectedService.title}
                      </h2>
                      <p className="text-brand-gold font-semibold">
                        {selectedService.price}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {selectedService.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-brand-anthracite">
                      Prestations incluses :
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="flex-1">
                      <Button className="btn-hero w-full">
                        Demander un devis
                      </Button>
                    </Link>
                    <Link to="/realisations" className="flex-1">
                      <Button className="btn-gold w-full">
                        Voir nos réalisations
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-anthracite text-brand-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient-gold">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour un devis personnalisé et gratuit. 
            Nous vous accompagnons de A à Z dans la réalisation de vos travaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="btn-gold text-lg px-10 py-4">
                Demander un devis gratuit
              </Button>
            </Link>
            <a 
              href="tel:+237123456789"
              className="flex items-center justify-center gap-3 px-10 py-4 border-2 border-brand-white text-brand-white rounded-lg hover:bg-brand-white hover:text-brand-anthracite transition-colors font-medium"
            >
              <span>Appeler maintenant</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;