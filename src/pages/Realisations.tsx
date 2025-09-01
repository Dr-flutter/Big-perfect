import React, { useState } from 'react';
import { 
  Filter, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight,
  Building,
  Home,
  Factory,
  Zap,
  Wrench,
  Shield,
  Eye,
  ExternalLink
} from "lucide-react";

const Realisations = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "Tous", label: "Tous", icon: Building },
    { id: "Résidentiel", label: "Résidentiel", icon: Home },
    { id: "Commercial", label: "Commercial", icon: Building },
    { id: "Industriel", label: "Industriel", icon: Factory },
    { id: "Infrastructure", label: "Public", icon: Shield }
  ];

  const realisations = [
    {
      id: 1,
      title: "Centre Commercial Centre-ville",
      category: "Commercial",
      location: "Centre-ville, Yaoundé",
      year: "2024",
      surface: "5000 m²",
      budget: "2.5M €",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=400&fit=crop",
      description: "Construction complète d'un centre commercial moderne avec installation électrique, plomberie et métallerie.",
      services: ["Électricité", "Plomberie", "Métallerie"],
      status: "Terminé",
      featured: true
    },
    {
      id: 2,
      title: "Résidence Les Palmiers",
      category: "Résidentiel",
      location: "Bastos, Yaoundé",
      year: "2023",
      surface: "20 villas",
      budget: "1.8M €",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      description: "Projet résidentiel haut de gamme avec 20 villas modernes, piscines et jardins paysagers.",
      services: ["Électricité", "Plomberie", "Staff et peinture"],
      status: "Terminé",
      featured: false
    },
    {
      id: 3,
      title: "Immeuble Bureaux Bastos",
      category: "Commercial", 
      location: "Bastos, Yaoundé",
      year: "2023",
      surface: "8 étages",
      budget: "3.2M €",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      description: "Immeuble de bureaux de 8 étages avec ascenseurs, climatisation et systèmes de sécurité.",
      services: ["Ascenseur", "Électricité", "Plomberie"],
      status: "Terminé",
      featured: true
    },
    {
      id: 4,
      title: "Villa Moderne Mendong",
      category: "Résidentiel",
      location: "Mendong, Yaoundé", 
      year: "2024",
      surface: "800 m²",
      budget: "450K €",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      description: "Villa contemporaine avec design épuré, domotique et espaces extérieurs aménagés.",
      services: ["Électricité", "Métallerie", "Staff et peinture"],
      status: "En cours",
      featured: false
    },
    {
      id: 5,
      title: "Complexe Sportif Emombo",
      category: "Infrastructure",
      location: "Emombo, Yaoundé",
      year: "2023", 
      surface: "15000 m²",
      budget: "4.1M €",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Complexe sportif multifonctionnel avec terrains de football, basketball et piscine olympique.",
      services: ["Électricité", "Plomberie", "Métallerie"],
      status: "Terminé",
      featured: true
    },
    {
      id: 6,
      title: "Usine Textile Douala",
      category: "Industriel",
      location: "Zone industrielle, Douala",
      year: "2023",
      surface: "10000 m²", 
      budget: "5.5M €",
      image: "https://images.unsplash.com/photo-1565301762-b9b93ab18ad0?w=600&h=400&fit=crop",
      description: "Complexe industriel moderne avec halls de production, bureaux administratifs et entrepôts.",
      services: ["Électricité", "Métallerie", "Rénovation"],
      status: "Terminé",
      featured: false
    }
  ];

  const filteredRealisations = selectedFilter === "Tous" 
    ? realisations 
    : realisations.filter(real => real.category === selectedFilter);

  const stats = [
    { number: "50+", label: "Projets réalisés", icon: Building },
    { number: "10+", label: "Années d'expérience", icon: Calendar },
    { number: "100%", label: "Clients satisfaits", icon: Shield },
    { number: "24h", label: "Délai d'intervention", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header compact */}
      <section className="py-12 bg-gradient-to-r from-gray-800 via-purple-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full mb-4">
              <Building className="w-4 h-4" />
              <span className="text-sm font-medium">Portfolio</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Nos Réalisations
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Découvrez la qualité de notre savoir-faire à travers nos projets emblématiques
            </p>
          </div>

          {/* Filtres modernes */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedFilter === category.id
                      ? "bg-white text-gray-800 shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Projets phares */}
        {selectedFilter === "Tous" && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-gray-600"></div>
              <h2 className="text-2xl font-bold text-gray-800">Projets Phares</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {realisations.filter(r => r.featured).map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Terminé' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-orange-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                      <div className="flex items-center gap-1 text-sm opacity-90">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                      <div className="flex items-center gap-1 text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Users className="w-3 h-3" />
                        {project.surface}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.services.slice(0, 3).map((service, idx) => (
                        <span 
                          key={idx} 
                          className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-gradient-to-r from-purple-600 to-gray-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      Voir le projet
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tous les projets */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-gray-600"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedFilter === "Tous" ? "Tous nos projets" : `Projets ${selectedFilter}s`}
            </h2>
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">
              {filteredRealisations.length}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredRealisations.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-40">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-bold text-sm mb-1">{project.title}</h3>
                    <div className="flex items-center gap-1 text-xs opacity-90">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Users className="w-3 h-3" />
                      {project.surface}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.services.slice(0, 2).map((service, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {service}
                      </span>
                    ))}
                    {project.services.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{project.services.length - 2}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-gray-800 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Détails
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats compactes */}
        <section className="mt-16 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white p-6 rounded-xl text-center shadow-md">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA compact */}
        <section className="bg-gradient-to-r from-purple-600 to-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Votre projet, notre expertise</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Inspiré par nos réalisations ? Contactez-nous pour discuter de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Démarrer mon projet
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Voir nos services
            </button>
          </div>
        </section>
      </div>

      {/* Modal de projet (simplifié) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative h-64">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-500">Localisation</span>
                  <p className="font-medium">{selectedProject.location}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Année</span>
                  <p className="font-medium">{selectedProject.year}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Surface</span>
                  <p className="font-medium">{selectedProject.surface}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Budget</span>
                  <p className="font-medium">{selectedProject.budget}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-sm text-gray-500 block mb-2">Services réalisés</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services.map((service, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Projet similaire ? Contactez-nous
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Realisations;