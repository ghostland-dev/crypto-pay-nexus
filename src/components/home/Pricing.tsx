
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "0€",
    description: "Parfait pour démarrer et tester notre solution",
    features: [
      "Jusqu'à 1 000€ de transactions mensuelles",
      "Support pour 5 cryptomonnaies",
      "Tableau de bord basique",
      "Email support",
      "Intégration API basique",
    ],
    limitations: [
      "Frais de 1% par transaction",
      "Pas de conversion automatique",
      "Pas de support KYC/AML",
    ],
    cta: "Commencer gratuitement",
    highlighted: false,
  },
  {
    name: "Business",
    price: "49€",
    period: "/mois",
    description: "Idéal pour les entreprises en croissance",
    features: [
      "Jusqu'à 10 000€ de transactions mensuelles",
      "Support pour 20+ cryptomonnaies",
      "Tableau de bord avancé",
      "Support prioritaire",
      "Intégration API complète",
      "Conversion automatique vers EUR/USD",
      "Conformité KYC/AML de base",
    ],
    cta: "Essai gratuit de 14 jours",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    description: "Pour les grandes entreprises avec des besoins spécifiques",
    features: [
      "Volume de transactions illimité",
      "Support pour 50+ cryptomonnaies",
      "Tableau de bord personnalisé",
      "Support dédié 24/7",
      "API avancée avec webhooks",
      "Conversion multi-devises",
      "Conformité KYC/AML complète",
      "Contrats intelligents personnalisés",
      "Facturation flexible",
    ],
    cta: "Contacter l'équipe commerciale",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-crypto-gray/80">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crypto-blue dark:text-white">
            Tarification simple et transparente
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choisissez le plan qui correspond le mieux à vos besoins, sans frais cachés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden ${
                plan.highlighted 
                  ? "bg-white dark:bg-crypto-gray shadow-xl border-2 border-crypto-purple transform md:-translate-y-4" 
                  : "bg-white dark:bg-crypto-gray shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-crypto-purple text-white text-center py-1 text-sm font-medium">
                  RECOMMANDÉ
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-crypto-blue dark:text-crypto-purple">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-crypto-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.limitations && plan.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-start text-gray-500 dark:text-gray-400">
                      <span className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0">×</span>
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? "bg-crypto-purple hover:bg-crypto-purple/90" 
                      : "bg-crypto-blue hover:bg-crypto-blue/90"
                  }`}
                  asChild
                >
                  <Link to="/register">{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Vous avez des besoins spécifiques ? Nous proposons des solutions sur mesure.
          </p>
          <Button variant="outline" asChild>
            <Link to="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
