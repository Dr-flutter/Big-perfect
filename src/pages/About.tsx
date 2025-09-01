import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Star, 
  Clock, 
  Shield, 
  Users, 
  Target, 
  Award,
  Heart,
  Globe,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const About = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [storyRef, storyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const values = [
    {
      icon: Star,
      title: "Qualité",
      description: "Nous utilisons uniquement des matériaux premium et des finitions impeccables pour garantir la durabilité de nos réalisations."
    },
    {
      icon: Clock,
      title: "Respect des délais",
      description: "Nos équipes sont organisées pour respecter scrupuleusement les délais convenus, sans compromis sur la qualité."
    },
    {
      icon: Shield,
      title: "Expertise",
      description: "Plus de 10 ans d'expérience dans le BTP nous permettent de maîtriser tous les aspects techniques de vos projets."
    },
    {
      icon: Heart,
      title: "Satisfaction client",
      description: "Votre satisfaction est notre priorité. Nous vous accompagnons jusqu'à la réception définitive de vos travaux."
    },
    {
      icon: Globe,
      title: "Vision africaine",
      description: "Nous contribuons au développement de l'Afrique en formant des équipes locales et en utilisant des ressources du continent."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Nous intégrons les dernières technologies et techniques de construction pour des réalisations modernes et durables."
    }
  ];

  const team = [
    {
      name: "Kouamé Jean-Baptiste",
      role: "Directeur Général",
      description: "Ingénieur en génie civil avec 15 ans d'expérience dans la gestion de projets BTP en Afrique de l'Ouest."
    },
    {
      name: "Aminata Traoré",
      role: "Directrice Technique",
      description: "Architecte spécialisée dans la construction durable, elle supervise la qualité technique de tous nos projets."
    },
    {
      name: "Ibrahim Coulibaly",
      role: "Chef de Chantier",
      description: "Expert en coordination des équipes, il garantit le respect des délais et la sécurité sur nos chantiers."
    }
  ];

  const achievements = [
    "50+ projets réalisés avec succès",
    "100% de clients satisfaits",
    "Certification qualité ISO 9001",
    "Équipes formées aux dernières normes",
    "Partenaire de développement durable",
    "10 ans d'expérience au Cameroun"
  ];

  return (
    <div>
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
              À propos de Big Perfect
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              "Ensemble accélérons le développement de l'Afrique" - Notre mission depuis plus de 10 ans
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section ref={storyRef} className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-hero">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-brand-anthracite">Big Perfect</strong> a été fondée en 2014 avec une vision claire : 
                  contribuer activement au développement infrastructurel du Cameroun et de l'Afrique Centrale.
                </p>
                <p>
                  Nous sommes une entreprise spécialisée dans le bâtiment, offrant des solutions complètes en 
                  électricité, plomberie, Métallurgies, staff et peinture, rénovation et installation d'ascenseurs. 
                  Notre approche intégrée nous permet d'accompagner nos clients de la conception à la livraison.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers d'avoir participé à la transformation du paysage urbain ivoirien 
                  avec plus de 50 projets réalisés, allant des résidences privées aux complexes commerciaux et industriels.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-hero mb-2">2014</div>
                  <div className="text-sm text-muted-foreground">Année de création</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-hero mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-hero mb-2">25</div>
                  <div className="text-sm text-muted-foreground">Collaborateurs</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src={heroImage} 
                alt="Histoire de Big Perfect"
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -top-6 -right-6 bg-brand-violet text-brand-white p-6 rounded-xl shadow-violet">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">25</div>
                <div className="text-sm">Experts dédiés</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 hover-glow bg-gradient-violet text-brand-white">
              <Target className="w-16 h-16 text-brand-gold mb-6" />
              <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
              <p className="leading-relaxed">
                Accompagner le développement de l'Afrique en construisant des infrastructures 
                de qualité qui améliorent la vie des communautés. Nous mettons notre expertise 
                au service de projets qui contribuent à la croissance économique et sociale du continent.
              </p>
            </Card>
            
            <Card className="p-8 hover-glow bg-gradient-gold text-brand-anthracite">
              <Globe className="w-16 h-16 text-brand-white mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-brand-white">Notre Vision</h3>
              <p className="leading-relaxed text-brand-white">
                Devenir le leader régional du BTP en Afrique de l'Ouest, reconnu pour l'excellence 
                de nos réalisations, notre innovation et notre contribution au développement durable. 
                Nous voulons être le partenaire de choix pour tous les projets d'envergure.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section ref={valuesRef} className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-hero">
              Nos Valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et nous permettent de maintenir 
              l'excellence dans tous nos projets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full p-6 hover-lift hover-glow text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-brand-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-brand-anthracite">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Atouts */}
      <section className="py-20 bg-brand-anthracite text-brand-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gradient-gold">
                Pourquoi choisir Big Perfect ?
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-brand-violet/20 border-brand-violet/30 p-6 text-center">
                <div className="text-4xl font-bold text-brand-gold mb-2">10+</div>
                <div className="text-sm text-gray-300">Années d'expérience</div>
              </Card>
              <Card className="bg-brand-violet/20 border-brand-violet/30 p-6 text-center">
                <div className="text-4xl font-bold text-brand-gold mb-2">7</div>
                <div className="text-sm text-gray-300">Services spécialisés</div>
              </Card>
              <Card className="bg-brand-violet/20 border-brand-violet/30 p-6 text-center">
                <div className="text-4xl font-bold text-brand-gold mb-2">24h</div>
                <div className="text-sm text-gray-300">Délai d'intervention</div>
              </Card>
              <Card className="bg-brand-violet/20 border-brand-violet/30 p-6 text-center">
                <div className="text-4xl font-bold text-brand-gold mb-2">100%</div>
                <div className="text-sm text-gray-300">Clients satisfaits</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe dirigeante */}
      <section ref={teamRef} className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-hero">
              Notre Équipe Dirigeante
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Des professionnels expérimentés qui garantissent l'excellence de nos prestations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover-lift hover-glow">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-brand-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-anthracite">
                    {member.name}
                  </h3>
                  <div className="text-brand-gold font-medium mb-4">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-brand-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Rejoignez l'aventure Big Perfect
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Vous avez un projet en tête ? Faites confiance à notre expertise 
            pour le concrétiser avec excellence et dans les délais.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="btn-gold text-lg px-10 py-4">
                Démarrer un projet
              </Button>
            </Link>
            <Link to="/realisations">
              <Button className="bg-brand-white text-brand-violet hover:bg-gray-100 text-lg px-10 py-4">
                Voir nos réalisations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;