import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
    budget: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simulation d'envoi
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      subject: "",
      message: "",
      budget: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+237 12 34 56 789",
      action: "tel:+237123456789",
      color: "text-brand-violet"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Message instantané",
      action: "https://wa.me/237123456789",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@bigperfect.ci",
      action: "mailto:contact@bigperfect.ci",
      color: "text-brand-gold"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Yaoundé, Bastos, Cameroun",
      action: "#",
      color: "text-brand-violet"
    }
  ];

  const services = [
    "Électricité",
    "Plomberie", 
    "Métallurgies",
    "Staff et peinture",
    "Réfection et rénovation",
    "Fosse biophile",
    "Ascenseur",
    "Projet complet"
  ];

  const budgetRanges = [
    "Moins de 1M FCFA",
    "1M - 5M FCFA",
    "5M - 10M FCFA",
    "10M - 20M FCFA",
    "Plus de 20M FCFA",
    "À discuter"
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
              Contactez-nous
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Prêt à démarrer votre projet ? Nos experts sont à votre écoute pour vous accompagner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover-lift hover-glow h-full">
                  <div className={`w-16 h-16 ${info.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-anthracite">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {info.content}
                  </p>
                  <a 
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="inline-block"
                  >
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-current text-current hover:bg-current hover:text-white"
                    >
                      Contacter
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Formulaire et informations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulaire */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gradient-hero">
                  Demander un devis gratuit
                </h2>
                <p className="text-muted-foreground mb-8">
                  Remplissez ce formulaire et nos experts vous recontacteront sous 24h 
                  avec un devis personnalisé.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-brand-anthracite">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom et prénom"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-brand-anthracite">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre.email@exemple.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-brand-anthracite">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+237 XX XX XX XX"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-brand-anthracite">
                        Service souhaité
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Choisir un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="subject" className="text-brand-anthracite">
                        Sujet du projet
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Ex: Construction villa, Rénovation bureau..."
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-brand-anthracite">
                        Budget estimé
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Sélectionner une fourchette" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((budget) => (
                            <SelectItem key={budget} value={budget}>
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-brand-anthracite">
                      Description du projet *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet en détail : localisation, surfaces, délais souhaités, spécifications particulières..."
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full text-lg py-6">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma demande
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Sidebar informations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Horaires */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-brand-gold" />
                  <h3 className="text-lg font-semibold text-brand-anthracite">Horaires d'ouverture</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">07h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">08h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-medium text-brand-gold">Urgences uniquement</span>
                  </div>
                </div>
              </Card>

              {/* Engagement */}
              <Card className="p-6 bg-gradient-violet text-brand-white">
                <h3 className="text-lg font-semibold mb-4">Notre engagement</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    <span>Réponse sous 24h garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    <span>Devis gratuit et détaillé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    <span>Visite sur site incluse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    <span>Conseil personnalisé</span>
                  </div>
                </div>
              </Card>

              {/* Contact direct */}
              <Card className="p-6 bg-brand-gold text-brand-anthracite">
                <h3 className="text-lg font-semibold mb-4">Besoin d'aide immédiate ?</h3>
                <p className="text-sm mb-4">
                  Notre équipe est disponible pour répondre à vos questions
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+237123456789"
                    className="flex items-center gap-3 p-3 bg-brand-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Phone className="w-5 h-5 text-brand-violet" />
                    <div>
                      <div className="font-semibold text-brand-violet">Appeler maintenant</div>
                      <div className="text-sm text-muted-foreground">+237 12 34 56 789</div>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/237123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-brand-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-semibold text-green-600">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">Message instantané</div>
                    </div>
                  </a>
                </div>
              </Card>

              {/* Google Map placeholder */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-brand-anthracite">Notre localisation</h3>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Yaoundé, Bastos</p>
                    <p className="text-sm">Cameroun</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;