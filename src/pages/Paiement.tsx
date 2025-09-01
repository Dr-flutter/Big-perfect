import React, { useState } from 'react';
import { 
  Smartphone, 
  MessageCircle, 
  Shield, 
  Clock, 
  CheckCircle,
  Copy,
  Phone,
  AlertTriangle,
  ArrowRight,
  CreditCard
} from "lucide-react";

const Paiement = () => {
  const [copiedNumber, setCopiedNumber] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(''), 2000);
  };

  const paymentMethods = [
    {
      name: "MTN MoMo",
      number: "+237 05 12 34 56 78",
      icon: "📱",
      bgGradient: "from-purple-600 to-purple-700",
      accentColor: "purple",
      code: "*133#"
    },
    {
      name: "Orange Money",
      number: "+237 07 87 65 43 21", 
      icon: "💳",
      bgGradient: "from-gray-600 to-gray-700",
      accentColor: "gray",
      code: "#144#"
    }
  ];

  const advantages = [
    { icon: Shield, title: "Sécurisé", desc: "Transactions protégées" },
    { icon: Clock, title: "Instantané", desc: "Confirmation immédiate" },
    { icon: CheckCircle, title: "Simple", desc: "Depuis votre mobile" }
  ];

  const handleWhatsAppProof = () => {
    const message = encodeURIComponent("Bonjour, voici la preuve de paiement mobile money.");
    window.open(`https://wa.me/237123456789?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header compact */}
      <section className="py-12 bg-gradient-to-r from-gray-800 via-purple-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full mb-4">
            <CreditCard className="w-4 h-4" />
            <span className="text-sm font-medium">Paiement Mobile Money</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Réglez vos factures rapidement
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Payez en toute sécurité avec MTN ou Orange Money
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Alert compact */}
        <div className="mb-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-amber-800 text-sm">
                  <strong>Important :</strong> Vérifiez votre facture officielle avant paiement. 
                  Contactez-nous au <strong>+237 12 34 56 789</strong> en cas de doute.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Méthodes de paiement - Layout amélioré */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {paymentMethods.map((method, index) => (
            <div key={method.name} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Header coloré */}
              <div className={`bg-gradient-to-r ${method.bgGradient} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{method.name}</h3>
                    <p className="text-sm opacity-90">Composez {method.code}</p>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Numéro de paiement */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-gray-600 block mb-2">
                    Numéro de paiement
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-50 px-4 py-3 rounded-lg font-mono text-gray-800 border">
                      {method.number}
                    </div>
                    <button
                      onClick={() => copyToClipboard(method.number, method.name)}
                      className={`p-3 rounded-lg transition-all ${
                        copiedNumber === method.number 
                          ? 'bg-green-100 text-green-600' 
                          : `bg-${method.accentColor}-100 text-${method.accentColor}-600 hover:bg-${method.accentColor}-200`
                      }`}
                    >
                      {copiedNumber === method.number ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {copiedNumber === method.number && (
                    <p className="text-green-600 text-xs mt-1">✓ Numéro copié !</p>
                  )}
                </div>

                {/* Instructions simplifiées */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">Instructions :</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      Composez {method.code}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      Transfert → Saisir le numéro
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      Entrer le montant → Confirmer
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      Capturer le reçu SMS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Avantages compacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {advantages.map((advantage, index) => (
            <div key={advantage.title} className="bg-white p-4 rounded-xl border border-gray-100 text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <advantage.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{advantage.title}</h3>
              <p className="text-gray-600 text-xs">{advantage.desc}</p>
            </div>
          ))}
        </div>

        {/* Section après paiement */}
        <div className="bg-gradient-to-r from-purple-600 to-gray-700 rounded-2xl p-6 text-white text-center mb-8">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-xl font-bold mb-3">Après votre paiement</h3>
          <p className="text-purple-100 mb-6 text-sm max-w-lg mx-auto">
            Envoyez-nous la capture d'écran du SMS de confirmation via WhatsApp
          </p>
          <button
            onClick={handleWhatsAppProof}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Envoyer sur WhatsApp
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Support compact */}
        <div className="bg-gray-800 rounded-2xl p-6 text-white text-center">
          <h3 className="text-lg font-bold mb-2">Besoin d'aide ?</h3>
          <p className="text-gray-300 text-sm mb-4">Notre équipe est à votre disposition</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+237123456789">
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors inline-flex items-center gap-2 text-sm font-medium">
                <Phone className="w-4 h-4" />
                Appeler
              </button>
            </a>
            <a href="https://wa.me/237123456789" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-lg transition-colors inline-flex items-center gap-2 text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paiement;