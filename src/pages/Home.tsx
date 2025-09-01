import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { 
  Zap, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  RefreshCw, 
  Droplets, 
  ArrowUp,
  Star,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  X
} from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import electricityImg from "@/assets/service-electricity.jpg";
import plumbingImg from "@/assets/service-plumbing.jpg";
import metallurgyImg from "@/assets/service-metallurgy.jpg";
import paintingImg from "@/assets/service-painting.jpg";
import renovationImg from "@/assets/service-renovation.jpg";
import elevatorImg from "@/assets/service-elevator.jpg";
import videoFile from "@/assets/prebig.mp4";

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [typedText, setTypedText] = useState("");
  const fullText = "Ensemble accélérons le développement de l'Afrique";
  const [isDeleting, setIsDeleting] = useState(false);
  
  // États pour le lecteur vidéo
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoRef, setVideoRef] = useState(null);

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let interval;

    const type = () => {
      if (!deleting) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          deleting = true;
          setIsDeleting(true);
          setTimeout(type, 1200); // pause avant d'effacer
          return;
        }
      } else {
        setTypedText(fullText.slice(0, i - 1));
        i--;
        if (i === 0) {
          deleting = false;
          setIsDeleting(false);
        }
      }
      interval = setTimeout(type, deleting ? 60 : 120);
    };

    type();
    return () => clearTimeout(interval);
  }, []);

  // Fonctions pour le lecteur vidéo
  const openVideo = () => {
    setIsVideoOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setIsPlaying(false);
    if (videoRef) {
      videoRef.pause();
    }
    document.body.style.overflow = 'unset';
  };

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef) {
      videoRef.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.requestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef) {
      const progress = (videoRef.currentTime / videoRef.duration) * 100;
      setProgress(progress);
      setCurrentTime(videoRef.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef) {
      setDuration(videoRef.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickRatio = clickX / rect.width;
      const newTime = clickRatio * duration;
      videoRef.currentTime = newTime;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const services = [
    {
      icon: Zap,
      title: "Électricité",
      description: "Installation électrique complète, dépannage et mise aux normes",
      image: electricityImg
    },
    {
      icon: Wrench,
      title: "Plomberie",
      description: "Plomberie sanitaire, chauffage et évacuation des eaux",
      image: plumbingImg
    },
    {
      icon: Hammer,
      title: "Métallurgies",
      description: "Structures métalliques, serrurerie et ferronnerie d'art",
      image: metallurgyImg
    },
    {
      icon: Paintbrush,
      title: "Staff et peinture",
      description: "Décoration intérieure, staff, plâtrerie et peinture",
      image: paintingImg
    },
    {
      icon: RefreshCw,
      title: "Réfection et rénovation",
      description: "Rénovation complète de bâtiments et remise à neuf",
      image: renovationImg
    },
    {
      icon: Droplets,
      title: "Fosse biophile",
      description: "Installation et maintenance de systèmes d'assainissement",
      image: heroImage
    },
    {
      icon: ArrowUp,
      title: "Ascenseur",
      description: "Installation, maintenance et réparation d'ascenseurs",
      image: elevatorImg
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Qualité",
      description: "Matériaux premium et finitions impeccables"
    },
    {
      icon: Clock,
      title: "Respect des délais",
      description: "Livraison dans les temps convenus"
    },
    {
      icon: Shield,
      title: "Expertise",
      description: "Plus de 10 ans d'expérience dans le BTP"
    }
  ];

  const realisations = [
    { title: "Centre commercial Centre-ville", category: "Commercial", image: heroImage },
    { title: "Résidence Les Palmiers", category: "Résidentiel", image: heroImage },
    { title: "Immeuble bureaux Bastos", category: "Bureaux", image: heroImage },
    { title: "Villa moderne Mendong", category: "Résidentiel", image: heroImage },
    { title: "Complexe sportif Emombo", category: "Sport", image: heroImage },
    { title: "Hôtel 4 étoiles Kribi", category: "Hôtellerie", image: heroImage }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(75, 75, 184, 0.8), rgb(0 0 0 / 60%)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-custom text-center text-brand-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Big Perfect
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium text-brand-gold">
              {typedText}
              <span className="animate-blink">|</span>
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Votre partenaire pour des constructions fiables et élégantes
            </p>

            {/* Bouton Vidéo avec Effet Glassmorphism */}
            <div className="mb-12">
              <motion.button
                onClick={openVideo}
                className="group relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-500 transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Effet de pulsation */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 animate-pulse"></div>
                
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 drop-shadow-lg" />
              </motion.button>
              <p className="mt-4 text-sm md:text-base text-white/90 font-medium">
                Découvrir notre entreprise en vidéo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/services">
                <Button className="btn-hero text-lg px-10 py-4">
                  Nos Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-gold text-lg px-10 py-4">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Vidéo avec Design Glassmorphism */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ 
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)'
          }}
          onClick={closeVideo}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="relative w-full max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Container avec Glassmorphism */}
            <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
              {/* Bouton de fermeture */}
              <button
                onClick={closeVideo}
                title="Fermer la vidéo"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full backdrop-blur-md bg-black/30 border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lecteur Vidéo */}
              <div className="relative group">
                <video
                  ref={setVideoRef}
                  src={videoFile}
                  className="w-full aspect-video object-cover"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Contrôles Vidéo */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  {/* Barre de progression */}
                  <div 
                    className="w-full h-2 bg-white/20 rounded-full cursor-pointer mb-4 group/progress"
                    onClick={handleProgressClick}
                  >
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-150 group-hover/progress:h-3"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Contrôles */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>

                      <span className="text-white/90 text-sm font-medium">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <button
                      onClick={toggleFullscreen}
                      title="Plein écran"
                      className="w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Services Section - Background gris (50%) */}
      <section ref={servicesRef} className="py-20 bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nos Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Une expertise complète dans tous les domaines du BTP pour réaliser vos projets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full hover-lift hover-glow overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-80"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="btn-hero">
                Voir tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Réalisations Section - Background gris (50%) */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nos Réalisations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations les plus emblématiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((realisation, index) => (
              <Card key={realisation.title} className="group hover-lift hover-glow overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={realisation.image} 
                    alt={realisation.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-brand-white">
                    <div className="text-sm text-brand-gold mb-1">{realisation.category}</div>
                    <h3 className="text-lg font-semibold">{realisation.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/realisations">
              <Button className="btn-hero">
                Voir toutes nos réalisations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Background gris (50%) */}
      <section ref={aboutRef} className="py-20 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                À propos de Big Perfect
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nous sommes une entreprise spécialisée dans le bâtiment, offrant des solutions 
                complètes en électricité, plomberie, Métallurgies, staff et peinture, rénovation 
                et installation d'ascenseurs. Notre mission : qualité, innovation et respect des délais.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
              <Link to="/about">
                <Button className="btn-hero">
                  En savoir plus
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src={heroImage} 
                alt="À propos de Big Perfect"
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-gold text-brand-anthracite p-6 rounded-xl shadow-gold">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm font-medium">Années d'expérience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact rapide Section - Gris anthracite (50%) */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui pour un devis gratuit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-muted/20 border-muted/30 text-center p-8">
              <Phone className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Téléphone</h3>
              <p className="text-gray-300 mb-4">Appelez-nous directement</p>
              <a 
                href="tel:+237123456789" 
                className="text-brand-gold hover:text-primary-foreground transition-colors font-medium"
              >
                +237 12 34 56 789
              </a>
            </Card>

            <Card className="bg-muted/20 border-muted/30 text-center p-8">
              <Mail className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Email</h3>
              <p className="text-gray-300 mb-4">Envoyez-nous un message</p>
              <a 
                href="mailto:contact@bigperfect.ci" 
                className="text-brand-gold hover:text-primary-foreground transition-colors font-medium"
              >
                contact@bigperfect.ci
              </a>
            </Card>

            <Card className="bg-muted/20 border-muted/30 text-center p-8">
              <MapPin className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Adresse</h3>
              <p className="text-gray-300 mb-4">Visitez-nous</p>
              <p className="text-brand-gold">
                Yaoundé, Bastos<br />
                Cameroun
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button className="btn-gold text-lg px-10 py-4">
                Demander un devis gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;